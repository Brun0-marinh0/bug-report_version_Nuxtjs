<template>
    <div class="containerRouters">
        <div v-for="router in routers" :key="router.name">
            <NuxtLink class="pill" :to="getLink(router.link)">{{ router.name }}</NuxtLink>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data(){
        return{
            routers:[
                {name: 'Sobre', link: 'about'},
                {name: 'Historico', link: 'historic'}
            ]
        }
    },
    methods:{
        getLink(link: String){
            if(link === 'about'){
                return link
            }
            if(link === 'historic'){
                return link
            }
        }
    }
})
</script>

<style lang="scss" scoped>
    .containerRouters{
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }
    a{
        background-color: var(--colorButton);
    }
</style>