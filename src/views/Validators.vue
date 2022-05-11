<template>
    <div class="">
        <div class="narrow-container">

        <f-view-heading :title="$t('view_validator_list.title')"></f-view-heading>
        </div>
        <div class="div-container" style="padding-top:20px">
            <f-validators-info></f-validators-info>
        </div>
    </div>
</template>

<script>
    import FViewHeading from "../components/FViewHeading.vue";
    import FValidatorsInfo from "../layouts/FValidatorsInfo.vue";

    export default {
        components: {
            FViewHeading,
            FValidatorsInfo
        }
    }
</script>

<style lang="scss">
</style>
