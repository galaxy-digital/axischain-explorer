<template>
    <span class="tokenvalue">
        <f-token-value
            :value="cValue"
            :decimals="decimals"
            :number-currency="withPriceCurrency ? 'USD' : undefined"
            :use-placeholder="false"
            no-currency
            v-bind="$attrs"
        />
        <span v-if="!noCurrency"> {{ symbol }}</span>
    </span>
</template>

<script>
import config from '../../../../app.config.js';
import FTokenValue from '@/components/core/FTokenValue/FTokenValue.vue';
import { WEITo } from '@/utils/transactions.js';

export default {
    name: 'FCoinTokenValue',

    components: { FTokenValue },

    props: {
        value: {
            type: [String, Number],
            default: 0,
        },
        decimals: {
            type: Number,
            default: 2,
        },
        /** Convert value to Native coin */
        convert: {
            type: Boolean,
            default: false,
        },
        noCurrency: {
            type: Boolean,
            default: false,
        },
        withPriceCurrency: {
            type: Boolean,
            default: false,
        },
    },
    
    data() {
        return {
            /** Current page index. */
            symbol: config.symbol
        }
    },

    computed: {
        cValue() {
            return this.convert ? WEITo(this.value) : this.value;
        },
    },
};
</script>
