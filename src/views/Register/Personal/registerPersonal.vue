<template>
     <smartAlert :type="alert.type" :mensage="alert.mensage" v-show="alert.show" @click=" alert.show = false"/>    
    <div class="flex justify-center items-center">
        <form @submit.prevent="gravar()" class="bg-blue-600px-5 flex flex-col items-center p-5 rounded-md border-2 shadow mt-[3rem] bg-white">         
                
            <div class="gap-2">

                <section class="flex flex-col mt-5 text-left w-[20rem]">
                    <label class="mb-1 font-bold text-[1.2rem] text-gray-600" > CPF </label>
                    <input ref="identification" class="border-2 border-gray-50 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="text" v-model.trim="form.identification" v-mask="'000.000.000-00'" >                    
                </section>                
                
                <section class="flex flex-col mt-5 text-left w-[20rem]">
                    <label for="name" class="mb-1 font-bold text-[1.2rem] text-gray-600" > Nome </label>
                    <input ref="name" id="name" class="border-2 border-gray-50 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="text" v-model.trim="form.name">
                </section>

                <section class="flex flex-col mt-5 text-left w-[20rem]">
                    <label for="lastName" class="mb-1 font-bold text-[1.2rem] text-gray-600" > Sobrenome </label>
                    <input ref="lastName" id="lastName" class="border-2 border-gray-50 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="text" v-model.trim="form.lastName">
                </section>
                
                <section class="flex flex-col mt-5 text-left w-[20rem]">
                    <label for="login" class="mb-1 font-bold text-[1.2rem] text-gray-600"> Login </label>
                    <input ref="login" id="login" class="border-2 border-gray-50 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="text" v-model.trim="form.login">
                </section>

                <section class="flex flex-col mt-5 text-left w-[20rem]">
                    <label for="password" class="mb-1 font-bold text-[1.2rem] text-gray-600" > Senha </label>
                    <input ref="password" id="password" class="border-2 border-gray-50 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="password" v-model.trim="form.password"  @focusin="paswordWarning = true" @focusout="paswordWarning = false">
                </section>

                <div class="flex flex-col mt-2 absolute bg-white shadow-lg p-2 border border-gray-300 w-[250px] rounded" v-if="paswordWarning">
                    <p class="text-[.8rem] text-red-400">Para uma senha mais segura:</p>
                    <ul class="ml-4 list-disc">
                        <li class="text-[.8rem] text-red-400">insira números;</li>
                        <li class="text-[.8rem] text-red-400">insira letras maiúscula;</li>
                        <li class="text-[.8rem] text-red-400">insira caracter especial;</li>                  
                    </ul>                   
                </div>

                <section class="flex flex-col mt-5 text-left w-[20rem]">
                    <label for="confirmPassword" class="mb-1 font-bold text-[1.2rem] text-gray-600" >Confirmar Senha </label>
                    <input ref="confirmPassword" id="confirmPassword" class="border-2 border-gray-50 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="password" v-model.trim="form.confirmPassword" >
                </section>
                
            </div>

            <button type="submit" class="bg-blue-600 text-white w-[150px] h-[35px] font-bold my-5 rounded-md hover:shadow-md">
                <i v-if="loading" class="fa-solid fa-spinner fa-spin"></i>
                <span v-if="!loading"> Concluir </span>
            </button>

        </form>

        <basedModal v-if="loginWasCreated" @close="loginWasCreated = false">
            <template v-slot:body>
                <div class="flex flex-col items-center">
                    
                    <div class="flex items-center">
                        <img src="@/assets/img/person/happy.png" class="w-[13rem]" alt="Uma pessoa pulando com um sorriso no rosto.">

                        <div class="text-center">
                            <h1 class="font-bold text-blue-600">PARABÉNS!!</h1>
                            <p>cadastro efetuado com sucesso.</p>
                            <br>          
                            <router-link to="/" class="flex justify-center items-center bg-blue-600 text-white w-[150px] h-[35px] font-bold my-5 rounded-md hover:shadow-md">                               
                                <span> Logar </span>
                            </router-link>                  
                        </div>
                    </div>                   

                </div>
            </template>
        </basedModal>
        
    </div>
</template>
<script>
import basedModal from "@/components/Base/basedModal.vue"
import smartAlert from "@/components/Base/smartAlert.vue"
import axios from "axios"

export default {
    name:'registerPersonal',   
    watch:{
        'alert.show'(){ setTimeout( () => this.alert.show = false , 1800) }        
    },
    data() {
        return {
            paswordWarning: false,
            loginWasCreated: false,
            selectFuncionario:[],
            form:{
                category: 1,
                identification: null,
                name: null,
                login: null,
                password: null,
                confirmPassword: null,
            },
            alert:{
                type:'',
                mensage: '',
                show: false
            }
        }
    },   
    components:{
        smartAlert,
        basedModal
    },
    methods:{
        async gravar(){
            if( await this.validarFormulario() ) return;
            
            let formData = new FormData();

            formData.append('category',this.form.category )
            formData.append('identification',this.form.identification )
            formData.append('name',this.form.name )
            formData.append('lastName',this.form.lastName )
            formData.append('login',this.form.login )
            formData.append('password',this.form.password )

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
            let identification = this.form.identification 
            let name = this.form.name 
            let lastName = this.form.lastName 
            let login = this.form.login 
            let password = this.form.password 
            let confirmPassword = this.form.confirmPassword

            if( !identification ){
                this.alert.show = true
                this.alert.type = 'warning'                 
                this.alert.mensage = this.form.category == 1 ? 'Informe o CNPJ.' : 'Informe o CPF.'
                this.form.category == 1 ? this.$refs.identification1.focus() : this.$refs.identification2.focus()
                return true
            }            

            if( !name ){
                this.alert.show = true
                this.alert.type = 'warning'
                this.alert.mensage = 'Informe o Nome.'
                this.$refs.name.focus()
                return true
            }

            if( !lastName ){
                this.alert.show = true
                this.alert.type = 'warning'
                this.alert.mensage = 'Informe o Sobrenome.'
                this.$refs.lastName.focus()
                return true
            }
            if( !login ){
                this.alert.show = true
                this.alert.type = 'warning'
                this.alert.mensage = 'Informe o Login.'
                this.$refs.login.focus()
                return true
            }

            if( !password ){
                this.alert.show = true
                this.alert.type = 'warning'
                this.alert.mensage = 'Informe a senha.'
                this.$refs.password.focus()
                return true
            }

            if( password != confirmPassword ){
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
