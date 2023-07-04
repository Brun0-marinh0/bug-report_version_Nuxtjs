<template>
    <div class="containerCard gridCard">
        <header>
            <h3>{{ myReport.system }}</h3>
            <div class="status" :class="{done: myReport.done}"></div>
        </header>
        <div class="viewInform" :class="{showMe}">
            <div class="inform">
                <h3>{{ myReport.title }}</h3>
                <p>
                    {{ myReport.description }}
                </p>
            </div>
            
            <button>
                <img src="@/static/icon/iconImgToView.svg" alt="">
                Visualizar
            </button>
        </div>
        <div class="plus" :class="{top: !showMe}" @click="showMeInform">
            <img src="@/static/icon/plusV.svg" alt="">
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props:{
        myReport:{
            type: Object,
            required: true
        }
    },
    data(){
        return{
            showMe: true
        }
    },
    methods:{
        showMeInform(){
            this.showMe = !this.showMe
        }
    }
})
</script>

<style lang="scss" scoped>

    .containerCard{
        background: #4C4463;
        padding: 1rem;
        border-radius: 0.5rem;
        overflow: hidden;
        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;
            h3{
                color: var(--primary);
                font-weight: lighter;
            }
            .done{
                background: var(--complete);
            }
            .status{
                width: 4rem;
                height: 0.5rem;
                background: #cccccc6e;
                border-radius: 2rem;
            }
        }
        .viewInform{
            overflow: hidden;
            height: 19rem;
            transition: 0.2s ease-in-out;
            
            .inform{
                display: grid;
                gap: 0.6rem;
                margin-bottom: 1rem;
            }
        }
        .showMe{
            height: 10rem;
            p{
                -webkit-mask-image: linear-gradient(0deg, transparent 80px, red 280px);
            }
        }
        button{
            background: #62597E;
            border-radius: 3rem;
            padding: 0.3rem 1.3rem;

            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
            img{
                width: 1rem;
            }
        }
        .plus{
            border-top: 2px solid var(--bgMain);
            display: flex;
            justify-content: center;
            padding-top: 1rem;
        }
        .top{
            img{
                transform: rotateZ(180deg);
            }
        }
    }
</style>