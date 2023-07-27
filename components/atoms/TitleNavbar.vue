<template>
    <div class="titleNavbar" @click="home">
        <div class="containerImg">
            <img src="@/static/icon/bugasIcon.png" alt="">
        </div>
        <h2>bugas</h2>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    methods:{
        home(){
            this.$router.push({ path: '/' })
        }
    }
})
</script>

<style lang="scss" scoped>
    .titleNavbar{
        display: flex;
        align-items: center;
        cursor: pointer;
        min-height: 2rem;
        .containerImg{
            min-width: 2rem;
            display: flex;
            align-items: center;
            img{
                width: 100%;
            }
        }
        h2{
            font-family: var(--fontLora);
            &:after{
                content: '.';
                color: var(--primary);
            }
        }
    }
</style>