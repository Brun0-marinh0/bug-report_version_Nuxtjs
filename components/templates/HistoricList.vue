<template>
    <div>
        <LoadingPage v-if="loading"/>
        <AlertLogin v-if="login" @myEmail="email"/>
        <GridHistoric v-else>
            <CardReport v-for="(report, index) in data" :key="index" :my-report="report"/>
        </GridHistoric>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import http from '@/services/reports/index'

export default Vue.extend({
    data(){
        return{
            login: true,
            data:[],
            loading: false
        }
    },
    methods: {
        async email(myEmail: string){
            this.loading = true
            await http.ListReport(myEmail).then((res) => {
                this.data = res.data
                if(this.data.length > 0){
                    this.login = false
                }
            })
            .catch((error) => {
                console.log(error)
                
            })
            this.loading = false
        }
    }
})
</script>

<style lang="scss" scoped>

</style>