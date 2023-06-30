<template>
    <div class="containerLoading">
        <div>
            <img src="@/static/bugasIconAnimate.gif" alt="">
            <p>carregando...</p>
        </div>
    </div>
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
    .containerLoading{
        position: fixed;
        top: 0;
        left: 0;

        z-index: 3;
        width: 100%;
        height: 100vh;

        display: grid;
        place-content: center;

        background: #9a8ac8ab;
        backdrop-filter: blur(3px);

        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: var(--fontLora);
        }
    }
</style>