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
            <div v-show="popUp" class="popUp">
                <div class="contentClose">
                    <img src="@/static/icon/close.svg" alt="" @click="popUp = false">
                </div>
                <div class="contentImg">
                    <img :src="`http://185.209.179.96:9800/${myReport.image_path}`" alt="">
                </div>
            </div>
            <button @click="popUp = true">
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
            showMe: true,
            popUp: false
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
                background: var(--complete) !important;
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
            height: fit-content;
            transition: 0.2s ease-in-out;
            
            .inform{
                display: grid;
                gap: 0.6rem;
                margin-bottom: 1rem;
            }
        }
        .showMe{
            height: 2.5rem;
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
        .popUp{
            position: fixed;
            top: 0;
            left: 0;

            width: 100%;
            height: 100vh;
            z-index: 12;

            display: grid;
            place-content: center;
            background: #2f2e31ab;
            backdrop-filter: blur(3px);

            .contentClose{
                display: flex;
                justify-content: flex-end;
                padding: 0 1rem;
                position: relative;
                top: 2rem;
            }

            .contentImg{
                height: max(30rem, 35vw);
                
                display: flex;
                img{
                    height: 100%;
                }
            }
        }
    }
</style>