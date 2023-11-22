<template>
     <smartAlert :type="alert.type" :mensage="alert.mensage" v-show="alert.show" @click=" alert.show = false"/>    
    <div class="flex justify-center items-center">
        <form @submit.prevent="gravar()" class="bg-blue-600px-5 flex flex-col items-center p-5 rounded-md border-2 shadow mt-[2rem] bg-white">         
            
            <h1 class="font-medium text-[1.5rem] text-gray-600">Horários de Funcionamento</h1>

            <div class="gap-2">
                
                <section class="flex flex-col mt-5 text-left w-[20rem]">
                    <label for="login" class="mb-1 font-bold text-[1.2rem] text-gray-600 text-center"> Segunda-Feira </label>
                    <div class="flex justify-center gap-x-5">
                        <input ref="login" id="mondayStart" class="border-2 border-gray-200 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="time" placeholder="00:01" v-model.trim="form.mondayStart">
                        <input ref="login" id="mondayEnd" class="border-2 border-gray-200 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="time" v-model.trim="form.mondayEnd">
                    </div>
                </section>                
                
                <section class="flex flex-col mt-5 text-left w-[20rem]">
                    <label for="login" class="mb-1 font-bold text-[1.2rem] text-gray-600 text-center"> Terça-Feira </label>
                    <div class="flex  justify-center gap-x-5">
                        <input ref="login" id="tuesdayStart" class="border-2 border-gray-200 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="time" v-model.trim="form.tuesdayStart">
                        <input ref="login" id="tuesdayEnd" class="border-2 border-gray-200 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="time" v-model.trim="form.tuesdayEnd">
                    </div>
                </section>                
                
                <section class="flex flex-col mt-5 text-left w-[20rem]">
                    <label for="login" class="mb-1 font-bold text-[1.2rem] text-gray-600 text-center"> Quarta-Feira </label>
                    <div class="flex  justify-center gap-x-5">
                        <input ref="login" id="wednesdayStart" class="border-2 border-gray-200 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="time" v-model.trim="form.wednesdayStart">
                        <input ref="login" id="wednesdayEnd" class="border-2 border-gray-200 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="time" v-model.trim="form.wednesdayEnd">
                    </div>
                </section>                
                
                <section class="flex flex-col mt-5 text-left w-[20rem]">
                    <label for="login" class="mb-1 font-bold text-[1.2rem] text-gray-600 text-center"> Quinta-Feira </label>
                    <div class="flex justify-center gap-x-5">
                        <input ref="login" id="thursdayStart" class="border-2 border-gray-200 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="time" v-model.trim="form.thursdayStart">
                        <input ref="login" id="thursdayEnd" class="border-2 border-gray-200 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="time" v-model.trim="form.thursdayEnd">
                    </div>
                </section>                
                
                <section class="flex flex-col mt-5 text-left w-[20rem]">
                    <label for="login" class="mb-1 font-bold text-[1.2rem] text-gray-600 text-center"> Sexta-Feira </label>
                    <div class="flex justify-center gap-x-5">
                        <input ref="login" id="fridayStart" class="border-2 border-gray-200 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="time" v-model.trim="form.fridayStart">
                        <input ref="login" id="fridayEnd" class="border-2 border-gray-200 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="time" v-model.trim="form.fridayEnd">
                    </div>
                </section>                
                
                <section class="flex flex-col mt-5 text-left w-[20rem]">
                    <label for="login" class="mb-1 font-bold text-[1.2rem] text-gray-600 text-center"> Sabádo </label>
                    <div class="flex justify-center gap-x-5">
                        <input ref="login" id="saturdayStart" class="border-2 border-gray-200 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="time" v-model.trim="form.saturdayStart">
                        <input ref="login" id="saturdayEnd" class="border-2 border-gray-200 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="time" v-model.trim="form.saturdayEnd">
                    </div>
                </section>                
                
                <section class="flex flex-col mt-5 text-left w-[20rem]">
                    <label for="login" class="mb-1 font-bold text-[1.2rem] text-gray-600 text-center"> Domingo </label>
                    <div class="flex justify-center gap-x-5">
                        <input ref="login" id="sundayStart" class="border-2 border-gray-200 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="time" v-model.trim="form.sundayStart">
                        <input ref="login" id="sundayEnd" class="border-2 border-gray-200 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="time" v-model.trim="form.sundayEnd">
                    </div>
                </section>      

            </div>

            <button type="submit" class="bg-blue-600 text-white w-[150px] h-[35px] font-bold my-5 rounded-md hover:shadow-md">
                <i v-if="loading" class="fa-solid fa-spinner fa-spin"></i>
                <span v-if="!loading"> Concluir </span>
            </button>

        </form>
                
    </div>
</template>
<script>
import smartAlert from "@/components/Base/smartAlert.vue"
import axios from "axios"

export default {
    name:'registerHours',   
    watch:{
        'alert.show'(){ setTimeout( () => this.alert.show = false , 1800) }        
    },
    data() {
        return {
            form:{
                mondayEnd: null,
                mondayStart: null,        
                tuesdayEnd: null,
                tuesdayStart: null,        
                wednesdayEnd: null,
                wednesdayStart: null,        
                thursdayEnd: null,
                thursdayStart: null,        
                fridayEnd: null,
                fridayStart: null,        
                saturdayEnd: null,
                saturdayStart: null,       
                sundayEnd: null,
                sundayStart: null,                       
            },
            alert:{
                type:'',
                mensage: '',
                show: false
            }
        }
    },   
    components:{
        smartAlert
    },
    methods:{
        async gravar(){
            if( await this.validarFormulario() ) return;
            
            let formData = new FormData();

            formData.append('category',this.form.category )

            try{
                this.loading = true
                let result = await axios({
                    method: 'post',
                    url: 'http://localhost:3030/login/register',
                    headers: { "Content-Type":'application/json; charset=utf-8'},
                    data: formData
                })
                
                let { status, mensage } = result.data;
         
                if( status == 200 ){
                    this.loginWasCreated = true   
                    this.loading = false
                    return
                }

                if( status >= 400 ){
                    this.alert.type = 'error'
                    this.alert.mensage = mensage
                    this.alert.show = true                   
                    return
                }
                
            }catch( err ){
                console.log(err)
            }finally{
                this.loading = false
            }
        },
        async validarFormulario(){
            let mondayStart = this.form.mondayStart 
         
            if( !mondayStart ){
                this.alert.show = true
                this.alert.type = 'warning'
                this.alert.mensage = 'As senhas precisam ser iguais.'
                this.$refs.password.focus()
                return true
            }

            return false

        }
    }    
}
</script>
