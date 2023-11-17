<template>
    <smartAlert :type="alert.type" :mensage="alert.mensage" v-show="alert.show"/>    
    <div class="flex justify-center items-center">

        <form class="flex flex-col gap-y-5 py-4 justify-center my-[33vh] items-center w-[90vw] border-2 border-gray-300 shadow-sm rounded-lg dark:bg-gray-50
            md:w-[350px] ">
        
            <div class="flex flex-col text-left">
                <label for="login" class="mb-1 text-gray-600 font-bold text-[1.2rem]"> Login </label>
                <input ref="login" id="login" class="border-2 border-gray-300 rounded px-2 h-[2rem] outline-none" type="text" v-model.trim="login" >
            </div>

            <div class="flex flex-col text-left">
                <label for="senha" class="mb-1 text-gray-600 font-bold text-[1.2rem]"> Senha </label>
                <input ref="password" id="senha" class="border-2 border-gray-300 rounded px-2 h-[2rem] outline-none"  type="password" v-model.trim="password" >
            </div>
            
            <button @click.prevent="logar()" class="rounded-md w-[8rem] text-white bg-blue-600 font-bold h-10"> LOGAR </button>
            
            <button @click.prevent="showModal = true" class="underline text-blue-600">registre-se</button>

            <basedModal @close="showModal = false" v-if="showModal">
                <template v-slot:body>
                    <div class="flex justify-center gap-x-2  mx-auto">

                        <button @click.prevent="corpotareRegister()" class="bg-blue-600 w-[150px] gap-y-2 py-5 rounded-md px-2 font-white text-white">
                            <i class="fa-solid fa-briefcase text-[2rem]"></i>
                            <p class="text-[1.3rem]"> Corporativo </p>
                        </button>

                        <button @click.prevent="personalRegister()" class="bg-blue-600 w-[150px] gap-y-2 py-5 rounded-md px-2 font-white text-white">
                            <i class="fa-solid fa-user text-[2rem]"></i>
                            <p class="text-[1.3rem]"> Pessoal </p>
                        </button>
                        
                    </div>
                </template>
            </basedModal>
        </form>

    </div>
</template>
<script>
import smartAlert from "@/components/Base/smartAlert.vue"
import basedModal from "@/components/Base/basedModal.vue"
import axios from "axios"

export default {
    name:'loginIndex',
    data() {
        return {
            login: null,
            password: null,
            showModal: false,
            alert:{
                type:'',
                mensage: '',
                show: false
            }
        }
    },
    watch:{
        'alert.show'(){ setTimeout( () => this.alert.show = false , 1800) }        
    },
    components:{
        smartAlert,
        basedModal
    },
    methods:{
        async logar(){
            
            if( !(await this.formValidacao()) ) return;

            let formData = new FormData();            
            formData.append('login',this.login )
            formData.append('senha',this.password )

            try{

                let result = await axios({
                    method: 'post',
                    url: 'http://localhost:3030/login',
                    headers: { "Content-Type":'application/json; charset=utf-8'},
                    data: formData
                })

                let { status, mensage } = result.data;
         
                if( status == 200 ){
                    this.alert.type = 'success'
                    this.alert.mensage = mensage
                    this.alert.show = true      
                    setTimeout( () => this.$router.push({name: 'inicio'})  , 1500)                                 
                    return;
                }

                if( status >= 400 ){
                    this.alert.type = 'error'
                    this.alert.mensage = mensage
                    this.alert.show = true                   
                    return;
                }
                
            }catch( err ){
                this.alert.type = 'error'
                this.alert.mensage = 'Entre em contato com o suporte.'
                this.alert.show = true                   
                return;
            }
        },
        async formValidacao(){
            let login = this.login;
            let password = this.password;

            if( !login ){
                this.alert.type = 'warning'
                this.alert.mensage = 'Login não informado.'
                this.alert.show = true    
                this.$refs.login.focus()  
                return false               
            }

            if( !password ){
                this.alert.type = 'warning'
                this.alert.mensage = 'Senha não informada.'
                this.alert.show = true     
                this.$refs.login.focus()  
                return false                   
            }
            
            return true
        },
        corpotareRegister(){
            this.$router.push({ name: "corporateRegister" })
        },
        personalRegister(){
            this.$router.push({ name: "personalRegister" })
        },
    }    
}
</script>
