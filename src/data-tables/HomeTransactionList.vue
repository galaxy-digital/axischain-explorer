<template>
    <div class="hometransactionlist">
        <!-- <transition enter-active-class="fadelong-enter-active"> -->
            <f-data-table
                v-show="show"
                :columns="dColumns"
                :hidden-columns="hiddenColumns"
                :items="dItems"
                :loading="cLoading"
                f-card-off
                mobile-view
                height="300px"
                first-m-v-column-width="5"
                fixed-header
                v-bind="{...$attrs, ...$props}"
                class="f-data-table-body-bg-color"
            >
                <!-- {
                    "cursor": "0xa684a0bffbeb8b4b198a9675c2aabb993cb9fba1f9d755189171cf86df443d53",
                    "transaction": {
                        "hash": "0xa684a0bffbeb8b4b198a9675c2aabb993cb9fba1f9d755189171cf86df443d53",
                        "from": "0x0000000000000000000000000000000000000000",
                        "to": "0xeab100000000000000000000000000000000001e",
                        "value": "0x0",
                        "gasUsed": "0x65375",
                        "block": {
                        "number": "0xd1b",
                        "timestamp": "0x628ee581",
                        "__typename": "Block"
                        },
                        "__typename": "Transaction"
                    },
                    "__typename": "TransactionListEdge",
                    "id": "iKsoV6aKHpW"
                } -->
                <template v-slot:column-hash="{ value, column, item }">
                    <div v-if="column" class="row home-tx-item">
                        <div class="col">
                            <div class="h-tx wrap-sm">
                                <div class="icon">Tx</div>
                                <div>
                                    <div>
                                        <span class="sm">TX#: </span>
                                        <router-link :to="{name: 'transaction-detail', params: {id: value}}" :title="value">{{ item.transaction.hash.slice(0,6) + '...' + item.transaction.hash.slice(-4) }}</router-link>
                                    </div>
                                    <div>
                                        <timeago :datetime="timestampToDate(item.transaction.block.timestamp)" :converter-options="{includeSeconds: true}"></timeago>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-4 wrap-sm">
                            <div>
                                <div>
                                    <span>From: </span>
                                    <router-link :to="{name: 'address-detail', params: {id: item.transaction.from}}" :title="value">{{ item.transaction.from.slice(0,6) + '...' + item.transaction.from.slice(-2) }}</router-link>
                                </div>
                                <div>
                                    <span>To: </span>
                                    <router-link :to="{name: 'address-detail', params: {id: item.transaction.to}}" :title="value">{{ item.transaction.to.slice(0,6) + '...' + item.transaction.to.slice(-2) }}</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-3 reward">
                            <div>
                                <span class="sm">Value: </span> {{ Number((Number(item.transaction.value) / 1e18).toFixed(4)) + ' ' + symbol }}
                            </div>
                        </div>
                    </div>
                    <template v-else>
                        <router-link :to="{name: 'transaction-detail', params: {id: value}}" :title="value">{{ value | formatHash }}</router-link>
                    </template>
                </template>

                <!-- <template v-slot:column-timestamp="{ value, column }">
                    <div v-if="column" class="row no-collapse no-vert-col-padding">
                        <div class="col-5 f-row-label">{{ column.label }}</div>
                        <div class="col">
                            <timeago :datetime="timestampToDate(value)" :auto-update="1" :converter-options="{includeSeconds: true}"></timeago>
                        </div>
                    </div>
                    <template v-else>
                        <timeago :datetime="timestampToDate(value)" :auto-update="1" :converter-options="{includeSeconds: true}"></timeago>
                    </template>
                </template>

                <template v-slot:column-address="{ value, column }">
                    <div v-if="column" class="row no-collapse no-vert-col-padding">
                        <div class="col-5 f-row-label">{{ column.label }}</div>
                        <div class="col"><router-link :to="{name: 'address-detail', params: {id: value}}" :title="value">{{ value | formatHash }}</router-link></div>
                    </div>
                    <template v-else>
                        <router-link :to="{name: 'address-detail', params: {id: value}}" :title="value">{{ value | formatHash }}</router-link>
                    </template>
                </template>

                <template v-slot:column-from="{ value, column }">
                    <div v-if="column" class="row no-collapse no-vert-col-padding">
                        <div class="col-5 f-row-label">{{ column.label }}</div>
                        <div class="col"><router-link :to="{name: 'address-detail', params: {id: value}}" :title="value">{{ value | formatHash }}</router-link></div>
                    </div>
                    <template v-else>
                        <router-link :to="{name: 'address-detail', params: {id: value}}" :title="value">{{ value | formatHash }}</router-link>
                    </template>
                </template>

                <template v-slot:column-to="{ value, column }">
                    <div v-if="column" class="row no-collapse no-vert-col-padding">
                        <div class="col-5 f-row-label">{{ column.label }}</div>
                        <div class="col"><router-link :to="{name: 'address-detail', params: {id: value}}" :title="value">{{ value | formatHash }}</router-link></div>
                    </div>
                    <template v-else>
                        <router-link :to="{name: 'address-detail', params: {id: value}}" :title="value">{{ value | formatHash }}</router-link>
                    </template>
                </template>

                <template v-slot:column-amount="{ value, item, column }">
                    <div v-if="column" class="row no-collapse no-vert-col-padding">
                        <div class="col-5 f-row-label">{{ column.label }}</div>
                        <div class="col">
                            <template v-if="addressCol">
                                <f-account-transaction-amount
                                    :address="addressCol"
                                    :from="getFrom(item)"
                                    :to="getTo(item)"
                                    :amount="value"
                                />
                            </template>
                            <template v-else>
                                {{ value }}
                            </template>
                        </div>
                    </div>
                    <template v-else>
                        <template v-if="addressCol">
                            <f-account-transaction-amount
                                :address="addressCol"
                                :from="getFrom(item)"
                                :to="getTo(item)"
                                :amount="value"
                            />
                        </template>
                        <template v-else>
                            {{ value }}
                        </template>
                    </template>
                </template> -->
            </f-data-table>
        <!-- </transition> -->
    </div>
</template>

<script>
import config from '../../app.config.js';
import {pollingMixin} from "@/mixins/polling.js";
import FDataTable from "@/components/core/FDataTable/FDataTable.vue";
// import FAccountTransactionAmount from "@/components/FAccountTransactionAmount.vue";
import {cloneObject, getNestedProp} from "@/utils";
import {/* formatHexToInt, */ formatNumberByLocale, numToFixed, timestampToDate} from "@/filters.js";
import {WEITo} from "@/utils/transactions.js";
import gql from "graphql-tag";

export default {
    name: "HomeTransactionList",

    components: {/* FAccountTransactionAmount, */ FDataTable},

    mixins: [pollingMixin],

    props: {
        // ...FTransactionList.props,
        /** Number of items per page. */
        itemsPerPage: {
            type: Number,
            default: 40
        },
        /** Use address column instead of columns `from` and `to`. */
        addressCol: {
            type: String,
            default: ''
        },
        /** Array of column names to be hidden. */
        hiddenColumns: {
            type: Array,
            default() {
                return [];
            }
        },
    },

    data() {
        return {
            show: true,
            dItems: [],
            dHasNext: false,
            // dOutsideData: !!this.items.action,
            dTransactionListError: '',
            dColumns: [
                {
                    name: 'hash',
                    label: this.$t('view_transaction_list.tx_hash'),
                    width: '200px',
                    itemProp: `${!this.withoutCursor ? 'transaction.' : ''}hash`
                },
                // {
                //     name: 'timestamp',
                //     label: this.$t('view_transaction_list.time'),
                //     itemProp: `${!this.withoutCursor ? 'transaction.' : ''}block.timestamp`,
                //     // width: '220px',
                //     hidden: this.cMobileView
                // },
                // {
                //     name: 'address',
                //     label: this.$t('view_transaction_list.address'),
                //     // width: '460px',
                //     itemProp: `${!this.withoutCursor ? 'transaction.' : ''}from`,
                //     formatter: (_value, _item) => {
                //         // const from = getNestedProp(_item, `${!this.withoutCursor ? 'transaction.' : ''}from`);
                //         // const to = getNestedProp(_item, `${!this.withoutCursor ? 'transaction.' : ''}to`);
                //         const from = this.getFrom(_item);
                //         const to = this.getTo(_item);

                //         if (this.addressCol.toLowerCase() !== from.toLowerCase()) {
                //             return from;
                //         } else {
                //             return to;
                //         }
                //     },
                //     oneLineMode: true,
                //     hidden: !this.addressCol
                //     // width: '180px'
                // },
                // {
                //     name: 'from',
                //     label: this.$t('view_transaction_list.from'),
                //     itemProp: `${!this.withoutCursor ? 'transaction.' : ''}from`,
                //     hidden: !!this.addressCol
                //     // width: '180px'
                // },
                // {
                //     name: 'to',
                //     label: this.$t('view_transaction_list.to'),
                //     itemProp: `${!this.withoutCursor ? 'transaction.' : ''}to`,
                //     hidden: !!this.addressCol
                //     // width: '180px'
                // },
                // {
                //     name: 'gasUsed',
                //     label: this.$t('view_transaction_list.gas_used'),
                //     itemProp: `${!this.withoutCursor ? 'transaction.' : ''}gasUsed`,
                //     formatter: (_value) => formatHexToInt(_value),
                //     // width: '180px'
                // },
                // {
                //     name: 'amount',
                //     label: `${this.$t('view_transaction_list.amount')} (${config.symbol})`,
                //     itemProp: `${!this.withoutCursor ? 'transaction.' : ''}value`,
                //     formatter: _value => {
                //         return formatNumberByLocale(numToFixed(WEITo(_value), 2), 2)
                //     },
                //     width: '150px',
                //     css: {
                //         textAlign: 'right'
                //     }
                // }
            ],
            symbol: config.symbol
        }
    },

    computed: {
        cLoading() {
            return this.dItems.length === 0;
        }
    },

    created() {
        this.updateItems();
        this._updatingTxs = false;
    },

    mounted() {
        this._polling.start(
            'update-transactions',
            () => {
                if (!this._updatingTxs) {
                    this._updatingTxs = true;
                    this.updateItems(true);
                }
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

            this._updatingTxs = false;
        },


        /**
         * @returns {Promise<Array>}
         */
        async fetchData() {
            const data = await this.$apollo.query({
                query: gql`
                    query TransactionList($cursor: Cursor, $count: Int!) {
                        transactions (cursor: $cursor, count: $count) {
                            pageInfo {
                                first
                                last
                                hasNext
                                hasPrevious
                            }
                            totalCount
                            edges {
                                cursor
                                transaction {
                                    hash
                                    from
                                    to
                                    value
                                    gasUsed
                                    block {
                                        number
                                        timestamp
                                    }
                                }
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

            return cloneObject(data.data && data.data.transactions && data.data.transactions.edges ? data.data.transactions.edges : []);
        },

        /**
         * Get item's 'from' value.
         *
         * @param {Object} _item
         * @return {*}
         */
        getFrom(_item) {
            return getNestedProp(_item, `${!this.withoutCursor ? 'transaction.' : ''}from`)
        },

        /**
         * Get item's 'to' value.
         *
         * @param {Object} _item
         * @return {*}
         */
        getTo(_item) {
            return getNestedProp(_item, `${!this.withoutCursor ? 'transaction.' : ''}to`)
        },

        WEITo,
        timestampToDate,
        numToFixed,
        formatNumberByLocale
    }
}
</script>

<style scoped>

</style>
<style lang="scss">
    .home-tx-item {
        .h-tx {
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

    @include media-max($bp-small) {
        
    }
</style>