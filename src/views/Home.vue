<template>
    <div class="view-home ">
        <div class="row">
            <div class="col-8 offset-2 col-10-lg offset-1-lg col-12-sm no-offset-sm">
            <p class="serarch-heading">WELCOME TO AXIS</p>
                <f-search-box></f-search-box>
            </div>
        </div>
        <div class="div-container">
            <div class="row row-2-cols-lg no-collapse equal-height">
                <div class="col">
                    <router-link :to="{name: 'blocks'}" class="no-effect">
                        <f-card class="home-block block1" hover>
                        <span class="p1"><img src="/homeicon1.png" alt="" class="not-fluid"></span>
                            <h2 class="h3">{{ $t('view_home.blocks') }} </h2>
                            <icon data="@/assets/svg/angle-right.svg" color="#044964"></icon>
                            <!-- <div class="num">
                                <animated-number
                                    :value="chainState.blocks | formatHexToInt"
                                    :formatValue="formatNum"
                                    :duration="numAnimationDuration"
                                />
                            </div> -->
                        </f-card>
                    </router-link>
                </div>
                <div class="col">
                    <router-link :to="{name: 'staking'}" class="no-effect">
                        <f-card class="home-block block2" hover>
                        <span class="p1"><img src="/homeicon2.png" alt="" class="not-fluid"></span>
                            <h2 class="h3">{{ $t('view_home.validators') }} </h2>
                            <icon data="@/assets/svg/angle-right.svg" color="#5f5e7d"></icon>
                            <!-- <div class="num">
                                <animated-number
                                    :value="chainState.validators | formatHexToInt"
                                    :formatValue="formatNum"
                                    :duration="numAnimationDuration"
                                />
                            </div> -->
                        </f-card>
                    </router-link>
                </div>
                <div class="col">
                    <f-card class="home-block block3">
                    <span class="p1"><img src="/homeicon3.png" alt="" class="not-fluid"></span>
                        <h2 class="h3">{{ $t('view_home.accounts') }}</h2>
                            <icon data="@/assets/svg/angle-right.svg" color="#443646"></icon>

                        <!-- <div class="num">
                            <animated-number
                                :value="chainState.accounts | formatHexToInt"
                                :formatValue="formatNum"
                                :duration="numAnimationDuration"
                            />
                        </div> -->
                    </f-card>
                </div>
                <div class="col">
                    <router-link :to="{name: 'transactions'}" class="no-effect">
                        <f-card class="home-block  block4" hover>
                        <span class="p1"><img src="/homeicon4.png" alt="" class="not-fluid"></span>
                            <h2 class="h3">{{ $t('view_home.transactions') }}</h2>
                            <icon data="@/assets/svg/angle-right.svg" color="#79586f"></icon>
                            
                            <!-- <div class="num">
                                <animated-number
                                    :value="chainState.transactions | formatHexToInt"
                                    :formatValue="formatNum"
                                    :duration="numAnimationDuration"
                                />
                            </div> -->
                        </f-card>
                    </router-link>
                </div>
            </div>
            <div class="row equal-height mat-5">
                <div class="col-6" style="width:50%">
                    <f-card class="half-padding">
                        <!-- <center><h2 class="h3 n1">Latest <span>Blocks</span></h2> </center> -->
                        <div class="home-table-in">
                        <p class="block_header" >latest blocks</p>
                        <home-block-list :items="blocksData" :hidden-columns="['time', 'fee']" :items-per-page="10" class="home-table" />
                        <router-link :to="{name: 'blocks'}" class="btn small btn_block_bottom" >
                            View all blocks
                        </router-link>
                        </div>
                        
                    
                    </f-card>
                </div>
                <div class="col-6" style="width:50%">
                    <f-card class="half-padding">
                        <div class="home-table-in">
                        <p class="block_header" >latest Transactions</p>
                        <home-transaction-list :items="blocksData" :hidden-columns="['gasUsed']" :items-per-page="5" class="home-table" />
                        <router-link :to="{name: 'transactions'}" class="btn small btn_block_bottom" style="width: 100%;">
                            View all transactions
                        </router-link>
                        </div>
                    </f-card>
                </div>
                
            </div>
          
            <div class="row equal-height mat-5 l1 l3">
                <div class="col">
                    <f-card class="half-padding">
                        <div class="home-table-in">
                        <p class="block_header" >Daily Transactions</p>
                        <f-listbox v-model="txVolumesResolution" :focus-item-on-focus="true" :data="txVolumesResolutions" labeled-by="txv" horizontal />
                        <transaction-volumes :resolution="txVolumesResolution" />
                        </div>
                    </f-card>
                </div>
            </div>
        </div>

         <!-- <div class="row equal-height mat-5 l2">
            <div class="col-10">
                <f-card class="half-padding">
                <div class="home-table-bottom">
                <div class="row no-collapse align-items-center">
                  
                    <div class="col-8">
                    <center><h3>Unlock Wallet to Access Lottery</h3></center>
                    </div>
                    <div class="col-4">
                    <center><a href="#" class="btn large secondary bt1">Unlock Wallet</a></center>
                    </div>
                    
                                        </div>
                                        </div>
                </f-card>
            </div>
        </div> -->
    </div>
</template>

<script>
    import FCard from "../components/core/FCard/FCard.vue";
    import FSearchBox from "../components/FSearchBox.vue";
    import gql from 'graphql-tag';
    import HomeBlockList from "@/data-tables/HomeBlockList.vue";
    import HomeTransactionList from "@/data-tables/HomeTransactionList.vue";
    // import AnimatedNumber from "animated-number-vue";
    import {pollingMixin} from "@/mixins/polling.js";
    import TransactionVolumes from "@/components/TransactionVolumes.vue";
    import FListbox from "@/components/core/FListbox/FListbox.vue";
    import {formatNumberByLocale} from "@/filters.js";

    export default {
        mixins: [pollingMixin],

        components: {
            FListbox,
            TransactionVolumes,
            HomeTransactionList,
            HomeBlockList,
            FCard,
            FSearchBox,
            // AnimatedNumber
        },

        data() {
            return {
                blocksData: [],
                txVolumesResolution: '1m',
                txVolumesResolutions: [
                    {
                        label: '2 Weeks',
                        value: '14d',
                    },
                    {
                        label: '1 Month',
                        value: '1m',
                    },
                    {
                        label: '3 Months',
                        value: '3m',
                    },
                ],
                numAnimationDuration: 750,
                chainState: {
                    blocks: 0,
                    validators: 0,
                    accounts: 0,
                    transactions: 0,
                },
            }
        },

        created() {
            this.updateChainState();
        },

        mounted() {
            this._polling.start(
                'update-net-state',
                () => {
                    this.updateChainState();
                },
                3300
            );
        },

        methods: {
            async updateChainState() {
                this.chainState = {...await this.fetchState()};

            },

            /**
             * @returns {Promise<Object>}
             */
            async fetchState() {
                const data = await this.$apollo.query({
                    query: gql`
                        query State {
                            state {
                                blocks
                                transactions
                                accounts
                                validators
                                sfcLockingEnabled
                                sealedEpoch {
                                    id
                                    totalSupply
                                    baseRewardPerSecond
                                }
                            }
                        }
                    `,
                    fetchPolicy: 'network-only',
                });

                return data.data.state || {};
            },

            formatNum(_num) {
                return formatNumberByLocale(parseInt(_num), 0);
            }
        }
    }
</script>

<style lang="scss"> 
.view-home .home-table-in{background:#eaeaea !important;}
.dark-theme .view-home .home-table-in{background:transparent !important; border:1px solid #272727; border-radius: 15px;;}
.f-card:not(.off) {box-shadow:none;}
.f-footer{background:#fff;}
.dark-theme .f-footer{background:rgba(0,0,0,0.9);}

.view-home .home-block h2 {display:flex}
.view-home .home-block .num {color:#fff}
.f-card {background: none!important;}
.dark-theme .home-table-bottom {background: linear-gradient(to bottom, #7c1313, #0d0d0d);border-radius: 5px; text-align: center;
padding: 25px 0;}
.home-table-bottom {background: linear-gradient(to bottom, #c45a5a, #fff);border-radius: 5px; text-align: center;
padding: 25px 0;}
.home-table-bottom .col-8, .home-table-bottom .col-2 {text-align: center;}
.l2 .col-10 {margin: 0 auto;}
.l2 .col-10 h3 {margin: 0;}
.home-table-bottom  h3 {margin: 0;
font-size: 26px;
text-shadow: 0px 1px 1px #000;}
.bt1 {color:#fff!important; background: #0d0d0d!important; border: none!important;}
.home-table-bottom h3 {text-align: center;color:#fff;}
.f-data-table .mobile-view .mobile-item {background: none!important; padding:20px}
.f-navigation nav ul li:last-child { box-shadow:none !important; }             
.flistbox-horizontal .flistbox_list {
    flex-direction: row;
    width: max-content;
    border-radius: 25px;
    margin:auto;

    margin-top:15px;
    margin-bottom:15px;
}
.view-home .table-container{
    background: transparent !important;
    border: none !important
}
.block_header{
    border-bottom:1px solid #272727;
    font-size: 20px;
    font-weight: 100;
    padding-left: 15px;
    padding-top:15px;
    text-transform: uppercase;
    letter-spacing: 7px;

}
.btn_block_bottom{
       background: transparent;
    border: 1px solid gray !important;
    text-transform: uppercase;
    letter-spacing: 3px;
    width: 80% !important;
    margin-left: 10%;
    margin-bottom: 10px;
    margin-top: 10px;
}
.btn_block_bottom:hover{
    background-color: white !important;
    color:black !important
}
.view-home .f-search-box input {
 background:#fafafa;
 box-shadow:none;   
}

.col-6{
    width:50%;
}
.mobile-item{
    border-color: #272727 !important;
}
.mobile-item .col-4{
    border-right: 1px solid #272727;
}
.mobile-item .col{
    padding-left:40px !important
}
.n1 {
text-align: center;
font-weight: normal;
text-transform: uppercase;
border-left: 8px solid #ff1515;
font-size: 26px;
margin-bottom: 35px;
width: max-content;
padding-left: 15px;
}
.n1  { span {color:#ff1515;} }
.view-home {
    .row .col-8{
        position:relative;
    }
    .f-search-box {
        width: 100%;
        padding: 8px 0 40px 0;
        position: absolute;
        bottom: -54px;
        //padding: 64px 0;
    }
    .home-table-in {background: #171717;
    border-radius: 5px;
    // padding: 15px 15px 5px!important;
    margin-bottom: 10px;}
           .f-search-box {background: white;
                padding: 1px;
                border-radius: 28px;}
        .serarch-heading {text-align: center; margin-bottom: 50px; margin-top:20px; font-size:35px; letter-spacing: 10px;} 
        .f-search-box {margin-bottom: 25px;}
        .f-search-box .svg-icon {
    color: white!important;
}
.block1 {background: transparent!important; border: 1px solid #044964; color:#044964;
span{
    color:#044964
}
.svg-icon{
    color:#044964;
}
}
.block3 {background: transparent!important; border: 1px solid #443646; color:#443646; 
span{
    color:#443646
}
.svg-icon{
    color:#443646;
}}
.block2 {background: #232335!important; color:#5f5e7d;
span{
    color:#5f5e7d
}
.svg-icon{
    color:#5f5e7d;
}
}

.block4 {background: transparent!important;border: 1px solid #443646; color:#79586f;
span{
    color:#79586f
}
.svg-icon{
    color:#79586f;
}}
.p1, .p2, .p3, .p4 {
    border-radius: 40px;
    text-align: center;
    display: inline-block;
    align-self: center;
    align-items: center;
    margin-top: 5px;
    margin-right: 30px;
}

.p1 img, .p2 img, .p3 img, .p4 img{
width: 25px;
align-items: center;
align-self: center;

}


        .home-block {
            // --f-card-padding: 30px;
            padding:10px;
            display: flex;
            align-items: left;
            align-content: left;
            justify-content: left;
            background: #000;
            height:60px;
            border-radius: 25px;
            h2 {
                text-align: left;
                //margin-top: 16px;
                margin-bottom: 4px;
                align-items: center;
            }
            .svg-icon{
                margin-left: auto;
                align-items: center;
                align-self: center;
            }

            .num {
                text-align: left;
                font-weight: bold;
                font-size: 38px;
            }
        }

        .home-table {
            margin-bottom: 6px;
            height: 300px;
            border-bottom:1px solid #272727
        }

        .txvolumes_label {
            display: flex;
            flex-wrap: wrap;
            //gap: 16px;
            align-items: center;
            margin-bottom: 4px;

            h2 {
                margin-bottom: 0;
                padding-inline-end: 16px;
            }
        }
    }

    @include media-max($bp-menu) {
        .col-6{
            width:100% !important;
            flex-basis:1 !important
        }
        .f-search-box {
            bottom: -24px !important;
            //padding: 64px 0;
        }
        .f-footer {
            .row{
                display: flex;
                flex-direction: column;
                justify-content: center;
                .col-2{
                    text-align: center;
                }
            }
            .f-navigation li{
                text-align: center;
                a{
                    border:none !important;
                    
                }
            }
        }
        .view-home {
            .f-search-box {
                // padding: 32px 0;
                width:90%;
                margin-left:3%
            }
        }
    }

    @include media-max($bp-small) {
        
        .serarch-heading{
            font-size:20px !important
        }
        .flistbox_list_item {
            margin-left: 5px !important;
        }
        .view-home {
            .home-block {
                min-height: 46px;

                h2 {
                    font-size: $fs16;
                }

                .num {
                    font-size: 28px;
                }
            }
            .p1{
                margin-right:10px;
                img{
                    width:20px;
                }
                
            }
            h2{
                    font-size:15px !important
                }

            .txvolumes_label {
                //font-size: 14px;
                h2 {
                    margin-bottom: 8px;
                }
            }
        }
    }
     .dark-theme .f-search-box input {background: black; text-align: left!important; font-size: 14px;}
</style>
