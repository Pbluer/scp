<template>
    <smartAlert :type="alert.type" :mensage="alert.mensage" v-show="alert.show"/>    
    <div class="flex justify-center items-center">

        <form id="formLogin" @submit.prevent="logar()" class="flex flex-col justify-center my-[30vh] items-center w-[90vw] border border-gray-700 shadow rounded-lg dark:bg-gray-50
            md:w-[80vw] lg:w-[70vw] xl:w-[40vw]">
        
            <section class="flex flex-col mt-5 text-left">
                <label for="login" class="mb-1 font-bold text-[1.5rem]" >Login</label>
                <input ref="login" class="border-2 border-gray-800 rounded px-2 w-[80vw] h-[4vh] outline-none md:w-[70vw] lg:w-[60vw] xl:w-[35vw]" type="text" v-model.trim="login" >
            </section>

            <section class="flex flex-col m-5 text-left">
                <label for="senha" class="mb-1 font-bold text-[1.5rem]" >Senha</label>
                <input ref="password" class="border-2 border-gray-800 rounded px-2 w-[80vw] h-[4vh] outline-none md:w-[70vw] lg:w-[60vw] xl:w-[35vw]"  type="password" v-model.trim="password" >
            </section>
            
            <button class="rounded-md w-[8rem] dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600 dark:text-gray-300 mb-5 mt-3 hover:bg-[#404040] font-bold h-10" type="submit"> LOGAR </button>
        </form>

    </div>
</template>
<script>
import smartAlert from "@/components/Base/smartAlert.vue"
import axios from "axios"

export default {
    name:'loginIndex',
    data() {
        return {
            login: null,
            password: null,
            alert:{
                type:'',
                mensage: '',
                show: false
            }
        }
    },
    watch:{
        'alert.show'(){ setTimeout( () => this.alert.show = false , 1600) }        
    },
    components:{
        smartAlert
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

                if( status > 400 ){
                    this.alert.type = 'error'
                    this.alert.mensage = mensage
                    this.alert.show = true                   
                    return;
                }
                
            }catch( err ){
                this.alert.type = 'error'
                this.alert.mensage = 'Entre em contato com o suporte.'
                this.alert.show = true                   
                console.log(err)
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
        }
    }    
}
</script>
