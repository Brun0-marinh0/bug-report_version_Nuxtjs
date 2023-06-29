<template>
    <div class="containerRouters">
        <div v-for="router in routers" :key="router.name">
            <NuxtLink class="pill" to="">{{ router.name }}</NuxtLink>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data(){
        return{
            routers:[
                {name: 'Sobre', link: '/'},
                {name: 'Historico', link: '/'}
            ]
        }
    }
})
</script>

<style lang="scss" scoped>
    .containerRouters{
        display: flex;
        gap: 0.5rem;
    }
    a{
        background-color: var(--colorButton);
    }
</style>