<template>
    <div class="f-navigation">
        <nav>
            <slot>
                <ul class="no-markers" v-if="cItems">
                    <li v-for="item in cItems" :key="item.id">
                        <a v-if="item.url.indexOf('http') === 0" :href="item.url" target="_blank">
                            {{ item.title }}
                        </a>
                        <router-link v-else :to="item.url">{{ item.title }}</router-link>
                    </li>
                </ul>
            </slot>
        </nav>
    </div>
</template>

<script>
    import { helpersMixin } from "../mixins/helpers.js";

    export default {
        mixins: [
            helpersMixin
        ],

        props: {
            /**
             * Array of navigation links.
             *
             * One item is an object with keys:
             * `url` - link url
             * `title` - link title
             */
            items: {
                type: Array,
                default() {
                    return [];
                }
            }
        },

        computed: {
            cItems() {
                this.setIds(this.items);

                return this.items;
            }
        }
    }
</script>

<style lang="scss">
 .f-navigation { 
     nav {
            ul {
                li:last-child {
                    border-radius: 20px;
                    color:white;
                    border: 2px solid white;
                    box-shadow: 0px 0px 10px white;
                    padding: 0 20px;
                }

            }
     }

 }
  .f-navigation { 
     nav {
            ul {
                li:last-child {
                    a {color:white!important;
                        border:none !important;
                        padding:5px !important;
                    }
                    margin-left: 10px;
                }

            }
     }

 }
   .f-navigation { 
     nav {
            ul {
                li:last-child:hover {background: white;
                }

            }
     }

 }
    .f-navigation { 
     nav {
            ul {
                li:last-child:hover {
                    a {color:black!important;}
                }

            }
     }

 }
     .f-navigation { 
     nav {
            ul {
                li{
                    font-size: 14px;
                }

            }
     }

 }

 .dark-theme .f-navigation {
        nav {
            ul {
                li {

                    @include links() {
                        color: #6b6b6b;
                        border-right:1px solid #6b6b6b;
                        border-radius: 0;
                    }
                }
                li:nth-child(6) a{
                    border-right:none !important
                }
            }
        }
    }

    .f-navigation {
        --f-navigation-link-color: #{$secondary-color-lighter};

        display: inline-block;

        nav {
            ul {
                text-align: end;
                li {
                    display: inline-block;
                    margin-inline-start: 4px;

                    @include links() {
                        color: #000;
                        font-weight: normal;
                        //letter-spacing: normal;
                        display: inline-block;
                        padding: 0px 20px;
                        text-decoration: none;
                        transition: all $transition-length ease;

                        &.router-link-exact-active, &:hover {
                            color: white;
                            text-decoration: none;
                        }
                    }
                }
            }
        }
    }

    @include media-max(1120px) {
        .f-navigation {
            nav {
                ul {
                    li {
                        @include links() {
                            font-size: 14px;
                            padding-inline-start: 10px;
                            padding-inline-end: 10px;
                        }
                    }
                }
            }
        }
    }

    @include media-max(970px) {
        .f-navigation {
            nav {
                ul {
                    li {
                        @include links() {
                            padding-inline-start: 5px;
                            padding-inline-end: 5px;
                        }
                    }
                }
            }
        }
    }

    @include media-max(870px) {
        .f-navigation {
            nav {
                ul {
                    li {
                        @include links() {
                            font-size: 14px;
                            padding-inline-start: 2px;
                            padding-inline-end: 2px;
                        }
                    }
                }
            }
        }
    }

    @include media-max($bp-menu) {
        .f-navigation {
            nav {
                ul {
                    li {
                        display: block;

                        @include links() {
                            font-size: 1.5em;
                            padding-inline-start: 20px;
                            padding-inline-end: 20px;
                        }
                    }
                }
            }
        }
    }
</style>
