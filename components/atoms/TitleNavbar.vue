<template>
    <div class="titleNavbar">
        <div class="containerImg">
            <img src="@/static/icon/bugasIcon.png" alt="">
        </div>
        <h2>bugas</h2>
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
        align-items: center;
        .containerImg{
            min-width: 3rem;
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