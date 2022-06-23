<template>
    <div class="homeblocklist">
        <!-- <transition enter-active-class="fadelong-enter-active"> -->
            <f-data-table
                v-show="show"
                :columns="dColumns"
                :items="dItems"
                :disable-infinite-scroll="!dHasNext"
                :loading="cLoading"
                fixed-header
                f-card-off
                mobile-view
                height="300px"
                v-bind="{...$attrs, ...$props}"
                class="f-data-table-body-bg-color"
            >
                <!-- {
                    "hash": "0x000000ae0000006bb51dc2171b4c4336fa461aa1174eb68a0c4627f37557e134",
                    "number": "0xd26",
                    "timestamp": "0x628f0760",
                    "transactionCount": 0,
                    "gasUsed": "0x0",
                    "__typename": "Block"
                } -->
                <template v-slot:column-block="{ value, column, item }">
                    <div v-if="column" class="row home-block-item">
                        <div class="col">
                            <div class="h-block wrap-sm">
                                <div class="icon">Bk</div>
                                <div>
                                    <div>
                                        <span class="sm">Block: </span>
                                        <router-link :to="{name: 'block-detail', params: {id: Number(item.block.number)}}" :title="item.block.number">{{Number(item.block.number)}}</router-link>
                                    </div>
                                    <div>
                                        <timeago :datetime="timestampToDate(item.block.timestamp)" :converter-options="{includeSeconds: true}"></timeago>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-4 wrap-sm">
                            <div>
                                <div><span class="sm">Miner: </span>AxisChain</div>
                                <router-link :to="{name: 'block-detail', params: {id: Number(item.block.number)}}" :title="item.block.number">{{Number(item.block.transactionCount)}} txs</router-link>
                            </div>
                        </div>
                        <div class="col-3 reward">
                            <div>
                                <span class="sm">Rewards: </span> {{ Number((Number(item.block.gasUsed) * gasPrice / 1e18).toFixed(4)) + ' ' + symbol }}
                            </div>
                        </div>
                    </div>
                    <template v-else>
                        <router-link :to="{name: 'block-detail', params: {id: value}}" :title="value">{{value}}</router-link>
                    </template>
                </template>
                <!-- <template v-slot:column-age="{ value, column }">
                    <div v-if="column" class="row no-collapse no-vert-col-padding">
                        <div class="col-4 f-row-label">{{ column.label }}</div>
                        <div class="col">
                            <timeago :datetime="timestampToDate(value)" :auto-update="1" :converter-options="{includeSeconds: true}"></timeago>
                        </div>
                    </div>
                    <template v-else>
                        <timeago :datetime="timestampToDate(value)" :auto-update="5" :converter-options="{includeSeconds: true}"></timeago>
                    </template>
                </template> -->
            </f-data-table>
        <!-- </transition> -->
    </div>
</template>

<script>
import config from '../../app.config.js';
import FBlockList from "@/data-tables/FBlockList.vue";
import FDataTable from "@/components/core/FDataTable/FDataTable.vue";
import {WEITo} from "@/utils/transactions.js";
import {timestampToDate, formatHexToInt} from "@/filters.js"; // formatDate, 
import gql from "graphql-tag";
import {cloneObject} from "@/utils";
import {pollingMixin} from "@/mixins/polling.js";

export default {
    name: "HomeBlockList",

    mixins: [pollingMixin],

    components: {FDataTable},

    props: {
        ...FBlockList.props,
    },

    data() {
        return {
            ...FBlockList.data.call(this),
            dColumns: [
                {
                    name: 'block',
                    label: this.$t('view_block_list.block'),
                    itemProp: 'block',
                    formatter: formatHexToInt
                },
                // {
                //     name: 'time',
                //     label: this.$t('view_block_list.time'),
                //     itemProp: 'block.timestamp',
                //     formatter: (_value) => formatDate(timestampToDate(_value)),
                //     width: '340px'
                // },
                // {
                //     name: 'age',
                //     label: this.$t('view_block_list.age'),
                //     itemProp: 'block.timestamp'
                // },
                // {
                //     name: 'fee',
                //     label: `${this.$t('view_block_list.fee')} (${config.symbol})`,
                //     itemProp: 'block.gasUsed',
                //     formatter: (_value) => WEITo(_value * (this.gasPrice || 1500000000)),
                //     // width: '80px'
                // },
                // {
                //     name: 'transaction_count',
                //     label: this.$t('view_block_list.transaction_count'),
                //     itemProp: 'block.transactionCount',
                //     width: '80px'
                // }
            ],
            show: true,
            symbol: config.symbol,
            gasPrice: this.gasPrice || 1500000000
        }
    },

    computed: {
        cLoading() {
            return this.dItems.length === 0;
        }
    },

    created() {
        this.updateItems();
    },

    mounted() {
        this._polling.start(
            'update-blocks',
            () => {
                this.updateItems(true);
            },
            3300
        );
    },

    methods: {
        async updateItems(_animate) {
            this.dItems = await this.fetchData();

            if (_animate) {
                this.show = false;

                this.$nextTick(() => {this.show = true;});
            }
        },

        /**
         * @returns {Promise<Array>}
         */
        async fetchData() {
            const data = await this.$apollo.query({
                query: gql`
                    query BlockList($cursor: Cursor, $count: Int!) {
                        blocks (cursor: $cursor, count: $count) {
                            totalCount
                            pageInfo {
                                first
                                last
                                hasNext
                                hasPrevious
                            }
                            edges {
                                block {
                                    hash
                                    number
                                    timestamp
                                    transactionCount
                                    gasUsed
                                }
                                cursor
                            }
                        }
                    }
                `,
                variables: {
                    cursor: null,
                    count: this.itemsPerPage
                },
                fetchPolicy: 'network-only',
            });

            return cloneObject(data.data && data.data.blocks && data.data.blocks.edges ? data.data.blocks.edges : []);
        },

        WEITo,
        timestampToDate
    }
}
</script>

<style lang="scss">
    .home-block-item {
        .h-block {
            display: flex; 
            align-items: center;    
            gap: 10px;

            .icon {
                line-height: 0;
                font-size: .875rem;
                width: 2.73438rem;
                height: 2.73438rem;
                padding: 0;
                border: 1px solid #aaa;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 0.5rem;
            }
            

            @include media-max($bp-small) {
                .icon {
                    display: none;
                }
            }
        }
        .sm {
            display: none;
            padding-right: 10px;
            @include media-max($bp-small) {
                display: inline-block;
            }
        }
        .reward > div {
            height:100%; 
            display: flex; 
            justify-content: flex-end; 
            align-items: center;
            margin-right: 10px;
        }
        @include media-max($bp-small) {
            .wrap-sm > div {
                display: flex;
                gap: 20px;
            }
            .reward > div {
                justify-content: flex-start; 
            }
        }
    }
</style>