<template>
    <nav>
        <TitleNavbar />
        <RouterBtn />
    </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    
})
</script>
<style lang="scss" scoped>
    nav{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;

        background: var(--bgMain);

        position: fixed;
        top: 0;
        left: 0;
        padding: 0 6vw;

        z-index: 9;
    }
</style>