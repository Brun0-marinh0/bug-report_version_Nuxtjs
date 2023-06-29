<template>
    <div class="gridColumn">
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
    .gridColumn{
        width: 100%;
        display: grid;
        grid-template: 1fr / repeat(12, 1fr);
        gap: 1rem;

        margin-top: 20vh;
    }
</style>