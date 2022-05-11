<template>
    <div class="">
        <div class="narrow-container">
            <f-view-heading>
                <h1>{{ $t('view_transaction_list.title') }} <span v-if="dRecordsCount" class="f-records-count">({{ dRecordsCount }})</span></h1>
            </f-view-heading>
        </div>
        
        <div class="div-container" style="padding-top:20px">
            <f-transaction-list @records-count="onRecordsCount"></f-transaction-list>
        </div>
    </div>
</template>

<script>
    import FViewHeading from "../components/FViewHeading.vue";
    import FTransactionList from "../data-tables/FTransactionList.vue";

    export default {
        components: {
            FTransactionList,
            FViewHeading
        },

        data() {
            return {
                dRecordsCount: 0
            }
        },

        methods: {
            onRecordsCount(_num) {
                this.dRecordsCount = _num;
            }
        }
    }
</script>

<style lang="scss">
</style>
