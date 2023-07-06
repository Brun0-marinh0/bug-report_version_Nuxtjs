<!-- eslint-disable vue/attributes-order -->
<template>
    <div>
        <LoadingPage v-show="loadingPage"/>
        <GridDefault>
                <label for="email" class="col-3">
                    E-mail
                    <input type="email" name="" id="email" v-model="form.email"  :class="{warning}">
                </label>
                <div class="container col-3" :class="{warning}">
                    <label for="title">
                        Título
                        <input type="text" name="" id="title" v-model="form.title">
                    </label>
                    <label for="description">
                        Descrição
                        <textarea name="" id="description" cols="30" rows="10" v-model="form.description" minlength="10" maxlength="300" />
                    </label>
                </div>
                <label for="services" class="col-3" >
                    Serviços
                    <select name="" id="services" v-model="form.system" :class="{warning}">
                        <option v-for="service in services" :key="service.name">{{ service.name }}</option>
                    </select>
                </label>
            
            <label for="file" :style="{background: bg} " @click="loadingImg" class="frameImage col-4" :class="[{loadingImage}, {warning}]">
                <img
                    v-if="img"
                    class="imgFile"
                    :src="img"
                    alt=""
                />
                <input id="file" type="file" name=""  accept="image/png, image/jpeg, image/jpg" @change="fileMethods">
            </label>
            <button class="btnImg col-btn" @click="clearImg" v-show="img">Limpar</button>
            <div class="contenteButton">
                <button @click="send">Enviar</button>
            </div>
        </GridDefault>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import http from '@/services/reports/index'

export default Vue.extend({
    data(){
        return{
            services:[],
            img:null,
            bg : '',
            loadingImage: false,
            loadingPage: false,
            form:{
                email: '',
                title: '',
                description: '',
                system: '',
                file: null
            },
            warning: false,
            descriptionLength: 0,
        }
    },
    async fetch(){
        await http.ListSystem().then((res) => {
            this.services = res.data
        })
    },
    watch:{
        form:{
            handler(newValue){
                this.descriptionLength = newValue.description.length
                if(newValue.description.length === 300){
                    this.$toast.info('Tamanho máximo para a descrição')
                }
            },
            deep: true
        }
    },
    methods:{
        async send(){
            const textarea = document.getElementById('description') as HTMLTextAreaElement;
            const minlength = textarea.minLength

            if(this.descriptionLength >= 1 && this.descriptionLength <= minlength ){
                return this.$toast.warning('precisamos de mais informações na descrição')
            }

            if(this.form.email === '' || this.form.title === '' || this.form.description === '' || this.form.system === '' || this.form.file === null){
                this.$toast.warning('Verifique se estar tudo preenchido antes de enviar')
                this.warning = true
                setTimeout(()=>{
                    this.warning = false
                }, 5000)
                return 
            }
            this.loadingPage = true

            const formData = new FormData()

            formData.append("email", this.form.email)
            formData.append("title", this.form.title)
            formData.append("description", this.form.description)
            formData.append("system", this.form.system)
            formData.append("file", this.form.file)

            await http.PostReport(formData).then((res) => {
                if(res.status === 201){
                    this.$toast.success('Enviado com sucesso!')
                }
            }).finally (() => {

                this.bg = ''
                this.img = ''
                
                this.form.email = ''
                this.form.title = ''
                this.form.description = ''
                this.form.system = ''
                this.form.file = null
                
                this.loadingPage = false
            })
            .catch((error) => {
                console.log(error)
            })
        },
        clearImg(){
            this.form.file = null
            this.img = ''
            this.bg = ''
        },
        fileMethods(e: any) {
            const file = e.target.files[0]
            this.img = URL.createObjectURL(file)

            this.form.file = e.target.files[0]

            // imgSize 2mb
            const imgSize = 2 * 1024 * 1024 
            
            this.loadingImage = false
            this.bg = '#262130'

            if(this.form.file.size > imgSize){
                this.$toast.warning('imagem muito grande :(')
                this.img = ''
                this.form.file = null
                this.bg = ''
            }
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
    .btnImg{
        background-color: #26213000;
        background-image: linear-gradient(180deg, #26213000 0%, var(--bgMain) 100%);
        color: var(--labelText);
        position: relative;
        width: 100%;
        bottom: 0;
    }
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
        label:nth-child(1){
            border-bottom: 2px solid var(--colorSecond);
            margin-bottom: 0.6rem;
        }

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
                height: 100%;
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
        border-radius: 0.3rem;

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
    .warning{
        border: 2px solid var(--warning);
        animation: alert .5s infinite  linear alternate;
    }
    @keyframes alert{
        from{
            border: 2px solid #FFA319;
        }
        to{
            border: 2px solid #ffa31938;
        }
    }
</style>