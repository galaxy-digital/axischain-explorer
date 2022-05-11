<template>
    <span class="axistokenvalue">
        <f-token-value
            :value="cValue"
            :decimals="decimals"
            :number-currency="withPriceCurrency ? 'USD' : undefined"
            :use-placeholder="false"
            no-currency
            v-bind="$attrs"
        />
        <span v-if="!noCurrency"> AXIS</span>
    </span>
</template>

<script>
import FTokenValue from '@/components/core/FTokenValue/FTokenValue.vue';
import { WEIToAXIS } from '@/utils/transactions.js';

export default {
    name: 'axis-token-value',

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
        /** Convert value to AXIS */
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

    computed: {
        cValue() {
            return this.convert ? WEIToAXIS(this.value) : this.value;
        },
    },
};
</script>
