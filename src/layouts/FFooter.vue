<template>
    <footer class="f-footer">
        <div class="narrow-container">
            <div class="footer_container">
                <div class="row">
                    <div class="col-4" style="color:var(--f-doc-color)">
                        <div class="header" style="margin-bottom: 10px;">
                            <router-link to="/" class="logo" :aria-label="$t('view_home.back_to_home')" style="display:flex;align-items:center"><img src="/banner-dark.png" alt="" class="not-fluid"></router-link>
                        </div>
                        <p class="align-center">
                            AxisChain Explorer is an analytics tool that enables people to search the Avalanche blockchain for transactions, addresses, and other platform activities.
                        </p>
                        <p class="tos align-center">
                            By using this application you agree to the
                            <a
                                href="/terms_of_use.pdf"
                                target="_blank"
                                >Terms of Use</a
                            >.
                        </p>
                    </div>
                    <div class="col-7 offset-1 lists">
                        <div class="row">
                            <div class="col">
                                <ul class="no-markers">
                                    <li><a href="https://laneaxis.com/" target="_blank" rel="noreferrer" class="footer-link">Staking</a></li>
                                    <li><a href="https://laneaxis.com/about-us/" target="_blank" rel="noreferrer" class="footer-link">About</a></li>
                                    <li><a href="https://laneaxis.com/faq/" target="_blank" rel="noreferrer" class="footer-link">FAQ</a></li>
                                    <li><a href="https://laneaxis.com/technology/" target="_blank" rel="noreferrer" class="footer-link">Use cases</a></li>
                                    <li><a href="https://laneaxis.com/get-in-touch/" target="_blank" rel="noreferrer" class="footer-link">Contacts</a></li>

                                </ul>
                            </div>
                            <div class="col">
                                <ul class="no-markers">
                                    <li><a href="https://laneaxis.com/" target="_blank" rel="noreferrer" class="footer-link">Support &amp; Feedback</a></li>
                                    <li><a href="https://laneaxis.com/" target="_blank" rel="noreferrer" class="footer-link">Privacy policy</a></li>
                                    <li><a href="https://laneaxis.com/" target="_blank" rel="noreferrer" class="footer-link">Agreement for sale of tokens</a></li>
                                    <li><a href="https://laneaxis.com/" target="_blank" rel="noreferrer" class="footer-link">Staking one pager</a></li>
                                </ul>
                            </div>
                            <div class="col">
                                <ul class="no-markers">
                                    <li><a href="https://github.com/" target="_blank" rel="noreferrer" class="footer-link">Github</a></li>
                                    <li><a href="https://github.com/" target="_blank" rel="noreferrer" class="footer-link">Coinmarket</a></li>
                                    <li><a href="https://github.com/" target="_blank" rel="noreferrer" class="footer-link">Coingecko</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="row" style="margin-top: 2em; display: flex; justify-content: center; gap: 2em">
                            <a href="https://twitter.com/LaneAxisNetwork"><icon data="@/assets/svg/social-media/twitter.svg" width="20" height="20"></icon></a>
                            <!-- <a href="https://twitter.com/LaneAxisNetwork"><icon data="@/assets/svg/social-media/instagram.svg" width="20" height="20"></icon></a> -->
                            <a href="https://t.me/laneaxisnetwork"><icon data="@/assets/svg/social-media/telegram.svg" width="20" height="20"></icon></a>
                            <!-- <a href="https://twitter.com/LaneAxisNetwork"><icon data="@/assets/svg/social-media/.svg" width="20" height="20"></icon></a> -->
                            <a href="https://twitter.com/LaneAxisNetwork"><icon data="@/assets/svg/social-media/discord.svg" width="20" height="20"></icon></a>
                            <a href="https://twitter.com/LaneAxisNetwork"><icon data="@/assets/svg/social-media/github.svg" width="20" height="20"></icon></a>
                            <!-- <a href="https://twitter.com/LaneAxisNetwork"><icon data="@/assets/svg/social-media/coinmarket.svg" width="20" height="20"></icon></a>
                            <a href="https://twitter.com/LaneAxisNetwork"><icon data="@/assets/svg/social-media/coingecko.svg" width="20" height="20"></icon></a> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="col align-center-sm align-center">
                <a href="https://axischain.network/" target="_blank" rel="nofollow">Copyright ©2022 AXIS Token International. All rights Reserved.</a>
            </div>
        </div>

    </footer>
</template>



<script>
    export default {
        components: {
        },
    }
</script>

<style lang="scss">
    .f-footer {
        --f-footer-background-color: #{$theme-color};
        --f-footer-link-color: #{$secondary-color-lighter};

        color: #{$theme-color};
        border-top: 1px solid var(--f-footer-background-color);
        // background-color: var(--f-footer-background-color);
        min-height: 64px;

        ul{
            padding-left: 0;
            list-style: none !important;
        }

        .narrow-container {
            padding-top: 8px;
            padding-bottom: 8px;
            height: 100%;

            > .row {
                height: 100%;
            }
        }

        @include links() {
            color: var(--f-doc-color);
            transition: color $transition-length ease;
            &:hover{
                color: var(--f-lighter-color);

            }
        }

        a:not(.btn):hover {
            color: #fff;
            text-decoration: none;
        }
    }
</style>
