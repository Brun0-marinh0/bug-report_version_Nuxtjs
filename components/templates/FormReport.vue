<!-- eslint-disable vue/attributes-order -->
<template>
    <GridDefault>
            <label for="email" class="col-3">
                E-mail
                <input type="email" name="" id="email">
            </label>
            <div class="container col-3">
                <label for="title">
                    Título
                    <input type="text" name="" id="title">
                </label>
                <label for="description">
                    Descrição
                    <textarea name="" id="description" cols="30" rows="10"></textarea>
                </label>
            </div>
            <label for="services" class="col-3">
                Serviços
                <select name="" id="services">
                    <option v-for="service in services" :key="service.name">{{ service.name }}</option>
                </select>
            </label>
        
        <label for="file" :style="{background: bg} " @click="loadingImg" class="frameImage col-4" :class="{loadingImage}">
            <img
                v-if="urlImgPreview"
                class="imgFile"
                :src="urlImgPreview"
                alt=""
            />
            <input id="file" type="file" name=""  accept="image/*" @change="fileMethods">
        </label>
        <div class="contenteButton">
            <button>Enviar</button>
        </div>
    </GridDefault>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data(){
        return{
            services:[
                {name: 'Tuty Academy'},
                {name: 'Portaria'}
            ],
            urlImgFile:null,
            urlImgPreview: '',
            bg : '',
            loadingImage: false
        }
    },
    methods:{
        fileMethods(e: any) {
            
            const file = e.target.files[0]
            this.urlImgPreview = URL.createObjectURL(file)
            this.urlImgFile = e.target.files[0]

            this.loadingImage = false

            this.bg = '#262130'
        },
        loadingImg(){
            this.loadingImage = true

            setTimeout(()=>{
                this.loadingImage = false
            }, 5000)
        }
    }
})
</script>


<style lang="scss" scoped>
    label{
        display: grid;
        gap: 0.3rem;
        input, select{
            outline: var(--primary);
            border: none;
            height: 2.5rem;
            padding: 0.5rem;
            border-radius: 0.3rem;
            background: var(--inputColor);
            color: var(--labelText);
        }
        input:-webkit-autofill,
        input:-webkit-autofill:focus {
            transition: background-color 600000s 0s, color 600000s 0s;
        }
        
        
    }
    .container{
        background: var(--inputColor);
        padding: 0.3rem;
        border-radius: 0.3rem;

        label{
            color: var(--labelInt);
            input{
                font-size: 1.3rem;
                font-weight: lighter;
                width: 100%;
            }
            textarea{
                border: none;
                background: none;
                outline: none;
                resize: none;
                color: #f8f8f8;
                padding: 0.3rem;
            }
        }
    }
    .urlImgPreview{
        background: red;
    }
    .loadingImage{
        background-image: url('../../static/bugasIconAnimate.gif')!important;
    }
    .frameImage{
        width: 100%;
        height: 100%;
        border: 2px solid var(--inputColor);

        background-image: url('../../static/icon/iconImg.svg');
        background-repeat: no-repeat;
        background-position: center;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center top;
            display: block;
        }
        input{
            display: none;
        }
    }

    .contenteButton{
        
        border-top: 2px solid var(--colorSecond);
        display: flex;
        justify-content: flex-end;
        padding: 1rem 0;

        button{
            background: var(--primary);
            padding: 0.5rem 2rem;
            color: var(--bgMain);
            border: none;
            font-weight: bold;
        }
    }
</style>