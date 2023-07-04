<template>
    <div class="containerCard gridCard">
        <header>
            <h3>SGI</h3>
            <div class="status" ></div>
        </header>
        <div class="viewInform" :class="{showMe}">
            <div class="inform">
                <h3>ffggg</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Purus hac eget sem non lectus eros ornare. Eu at lacus in aliquet mattis suspendisse mattis elementum. Nisi metus scelerisque semper dictum id. Egestas potenti nec facilisi arcu sagittis leo sed amet sit. Amet nunc consequat nunc neque tellus. Eu id ultricies tempus egestas. Eu lorem faucibus bibendum arcu dictum tincidunt non.
                    Cursus quisque ac sit sodales. Lacinia mattis quam interdum congue scelerisque aliquam tortor elit. Mauris feugiat morbi eu augue. Nisi vulputate non velit morbi ipsum pretium amet. Lorem fermentum amet odio purus nisl. Orci velit euismod faucibus ut sed pretium vitae. Nisl est arcu donec nunc lectus pellentesque morbi. Felis non faucibus euismod lacus eget faucibus. Rhoncus malesuada sagittis morbi duis. Ipsum in ac fermentum id amet sed volutpat malesuada. Lacus sociis tristique dui risus aliquam nisl. A in integer blandit morbi convallis vitae maecenas. Porttitor blandit vel vulputate eget. Aliquet vel.
                </p>
            </div>
            <button>
                <img src="@/static/icon/iconImgToView.svg" alt="">
                Visualizar
            </button>
        </div>
        <div class="plus" @click="showMeInform">
            <img src="@/static/icon/plusV.svg" alt="">
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
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
            .status{
                width: 4rem;
                height: 0.5rem;
                background: #cccccc6e;
                border-radius: 2rem;
            }
        }
        .viewInform{
            overflow: hidden;
            height: auto;
            transition: 0.5s;
            
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
    }
</style>