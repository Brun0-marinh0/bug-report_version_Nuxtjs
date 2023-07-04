<template>
    <div class="gridHistoric" >
        <slot></slot>
    </div>
</template>
<style lang="scss">
    .gridHistoric{
        width: 100%;
        display: grid;
        grid-template: 1fr / repeat(12, 1fr);
        gap: 1rem;

        margin-top: 20vh;
    }
    .gridCard{
        grid-column: 4 / span 6;
    }
</style>