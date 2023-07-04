<template>
    <div class="gridColumn">
        <slot></slot>
    </div>
</template>
<style lang="scss">
    .gridColumn{
        width: 100%;
        display: grid;
        grid-template: min-content 1fr min-content min-content / repeat(12, 1fr);
        gap: 1rem;

        margin-top: 20vh;
    }

    .col-3{
        grid-column: 4 / span 3;
    }
    .col-4{
        grid-column: 7 / span 3;
        grid-row: 1 / span 3
    }
    .contenteButton{
        grid-column: 4 / span 6;
    }

    @include screen("tablet") {
        .gridColumn{
            grid-template: 1fr / repeat(8, 1fr);
        }
        .col-3{
            grid-column: 2 / span 3;
        }
        .col-4{
            grid-column: 5 / span 3;
            grid-row: 1 / span 3
        }
        .contenteButton{
            grid-column: 2 / span 6;
        }
    }

    @include screen("mobile"){
        .gridColumn{
            grid-template: min-content 1fr min-content 1fr min-content / repeat(4, 1fr);
            margin-top: 13vh;
            padding: 0 6vw;
        }

        .col-3{
            grid-column: 1 / span 4;
        }
        .col-4{
            grid-column: 1 / span 4;
            grid-row: 4 / span 1;
        }
        .contenteButton{
            grid-column: 1 / span 4;
        }
    }
</style>