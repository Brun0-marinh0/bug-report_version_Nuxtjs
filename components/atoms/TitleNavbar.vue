<template>
    <div class="titleNavbar">
        <div class="containerImg">
            <img src="@/static/icon/bugasIcon.png" alt="">
        </div>
        <h1>bugas</h1>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    
})
</script>

<style lang="scss" scoped>
    .titleNavbar{
        display: flex;
        .containerImg{
            min-width: 2rem;
            display: flex;
            align-items: center;
            img{
                width: 100%;
            }
        }
        h1{
            font-family: var(--fontLora);
            &:after{
                content: '.';
                color: var(--primary);
            }
        }
    }
</style>