<template>
    <div class="containerLogin">
        <div>
            <label for="">
                E-mail
                <input id="" v-model="email" type="email" name="">
            </label>
            <div class="btn">
                <button @click="MyEmail" >Entrar</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data(){
        return{
            email: ''
        }
    },
    methods:{
        MyEmail(){
            this.$emit('myEmail', this.email)
        }
    }
})
</script>

<style lang="scss" scoped>
    .containerLogin{
        display: flex;
        justify-content: center;
        margin-top: 20vh;
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;

        div{
            
            label{
                display: grid;
                gap: 0.3rem;
                input, select{
                    outline: var(--primary);
                    border: none;
                    height: 2.5rem;
                    width: 20rem;
                    padding: 0.5rem;
                    border-radius: 0.3rem;
                    background: var(--inputColor);
                    color: var(--labelText);
                }
            }
            .btn{
                text-align: end;
                button{
                    
                    background: var(--primary);
                    padding: 0.5rem 2rem;
                    color: var(--bgMain);
                    border: none;
                    font-weight: bold;
                    margin-top: 0.5rem;
                }
            }
        }
    }
</style>