<!-- eslint-disable vue/attributes-order -->
<template>
    <GridDefault>
        
            <label for="email" class="col-3">
                E-mail
                <input type="email" name="" id="email">
            </label>
            <div class="container col-3">
                <label for="title">
                    Titulo
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

        <div class="frameImage col-4">
            <input type="file" name="">
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
            ]
        }
    }
})
</script>
<style>
    .col-3{
        grid-column: 4 / span 3;
    }
    .col-4{
        grid-column: 7 / span 3;
        grid-row: 1 / span 3
    }
</style>

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
            }
            textarea{
                border: none;
                background: none;
                outline: none;
                resize: none;
            }
        }
    }
    .frameImage{
        width: 100%;
        height: 100%;
        border: 2px solid var(--inputColor);
    }
</style>