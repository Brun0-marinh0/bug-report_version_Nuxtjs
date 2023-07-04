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
        padding-bottom: 20vh;
    }
    .gridCard{
        grid-column: 4 / span 6;
    }
    @include screen("tablet") {
        .gridHistoric{
            grid-template: 1fr / repeat(8, 1fr);
        }
        .gridCard{
            grid-column: 2 / span 6;
        }
    }

    @include screen("mobile") {
        .gridHistoric{
            grid-template: 1fr / repeat(4, 1fr);
            padding: 0 6vw;
        }
        .gridCard{
            grid-column: 1 / span 4;
        }
    }
</style>