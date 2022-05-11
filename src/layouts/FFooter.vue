<template>
    <footer class="f-footer">
    <div class="narrow-container">
            <div class="row no-collapse align-items-center">
                <div class="">
                    <router-link to="/" class="logo" :aria-label="$t('view_home.back_to_home')"><img src="/logo.svg" alt="" class="not-fluid" style="max-height:200px"></router-link>
                </div>
                <div class="col" style="text-align:center">
                    <f-navigation :items="cNavigation" />
                </div>
            </div>
             </div>
    </footer>
</template>

<script>
    import FNavigation from "../components/FNavigation.vue";
    import { mapState } from 'vuex';

    export default {
        components: {
            FNavigation
        },

        data() {
            return { dDrawerOn: false }
        },

        computed: {
            cNavigation() {
                const messages = this.$i18n.messages[this.$i18n.locale];

                return messages.navigation || [];
            },
            cCssClass() {
                return {
                    'drawer-on': this.dDrawerOn
                }
            },
            cHomeView() {
                return (this.$route.name === 'home');
            },

            ...mapState(['breakpoints'])
        },

        watch: {
            $route() {
                this.hamburgerSwitchOff();
            },
            breakpoints(_breakpoints) {
                const menuMobileBreakpoint = _breakpoints['menu-mobile'];

                if (menuMobileBreakpoint && !menuMobileBreakpoint.matches) {
                    this.hamburgerSwitchOff();
                }
            }
        },

        methods: {
            moveNavigationToDrawer() {
                const { $refs } = this;

                if (!this.$el) return;

                const eFNavigation = this.$el.querySelector('.f-navigation');
                const eDrawer = this.$el.querySelector('.f-drawer .body');

                if (eFNavigation && eDrawer) {
                    eDrawer.appendChild(eFNavigation);

                    if ($refs.darkModeSwitch) {
                        eDrawer.prepend($refs.darkModeSwitch.$el);
                    }
                }
            },

            moveNavigationFromDrawer() {
                const { $refs } = this;

                if (!this.$el) return;

                const eFNavigation = this.$el.querySelector('.f-navigation');
                const eRightCol = this.$el.querySelector('.right-col');

                if (eFNavigation && eRightCol) {
                    eRightCol.insertBefore(eFNavigation, eRightCol.firstChild);
                    if ($refs.searchBox && $refs.darkModeSwitch) {
                        $refs.searchBox.$el.parentNode.insertBefore($refs.darkModeSwitch.$el, $refs.searchBox.$el);
                    }
                    // eRightCol.appendChild(eFNavigation);
                }
            },

            hamburgerSwitchOff() {
                this.$children.forEach(_child => {
                    if (_child.$options._componentTag === 'f-hamburger-switch') {
                        _child.dOn = false;
                    }
                });
            },

            onHamburgerSwitchOn() {
                this.moveNavigationToDrawer();
                this.dDrawerOn = true;
            },

            onHamburgerSwitchOff() {
                this.dDrawerOn = false;
                setTimeout(() => {
                    this.moveNavigationFromDrawer();
                }, 300);
            },

            onDrawerClick() {
                this.hamburgerSwitchOff();
            }
        }
    }
    </script>

<style lang="scss">
.f-footer .right-col {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.f-footer .right-col .f-navigation {
    margin-inline-end: 16px;
}
    .f-footer {
        --f-footer-background-color: #{$theme-color};
        --f-footer-link-color: #{$secondary-color-lighter};

        color: #fff;
        background-color: var(--f-footer-background-color);
        min-height: 64px;

        .narrow-container {
            padding-top: 8px;
            padding-bottom: 8px;
            height: 100%;

            > .row {
                height: 100%;
            }
        }

        @include links() {
            color: var(--f-footer-link-color);
            transition: color $transition-length ease;
        }

        a:not(.btn):hover {
            color: #fff;
            text-decoration: none;
        }
    }
</style>
