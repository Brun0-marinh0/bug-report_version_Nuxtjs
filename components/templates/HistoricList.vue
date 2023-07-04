<template>
    <GridHistoric>
        <CardReport v-for="index in 10" :key="index"/>
    </GridHistoric>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data(){
        return{

        }
    }
})
</script>

<style lang="scss" scoped>

</style>