<template>
    <smartAlert :type="alert.type" :mensage="alert.mensage" v-show="alert.show" @click=" alert.show = false"/>    
    <menuLateral />

    <div class="flex justify-center items-center my-[5vh]">
        <form @submit.prevent="gravar()" class="bg-[#0284C7] px-5 flex flex-col items-center dark:bg-gray-800 w-96 rounded-md">         
                
            <div class="gap-2">

                <section class="flex flex-col mt-5 text-left w-[20rem]">
                    <label for="login" class="mb-1 font-bold text-[1.3rem] text-white" > Login </label>
                    <input ref="login" id="login" class="border-2 border-gray-50 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="text" v-model.trim="form.login" >
                </section>
                    
                <section class="flex flex-col mt-5 text-left w-[20rem]">
                    <label for="senha" class="mb-1 font-bold text-[1.3rem] text-white" > Senha </label>
                    <input ref="senha" id="senha" class="border-2 border-gray-50 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="text" v-model.trim="form.senha" >
                </section>

                <section class="flex flex-col mt-5 text-left w-[20rem]">
                    <label for="confirarSenha" class="mb-1 font-bold text-[1.3rem] text-white" >Confirmar Senha </label>
                    <input ref="confirarSenha" id="confirarSenha" class="border-2 border-gray-50 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="text" v-model.trim="form.confirmacaoSenha" >
                </section>

                <section class="flex flex-col mt-5 text-left w-[20rem]">
                    <label for="funcionario" class="mb-1 font-bold text-[1.3rem] text-white" > Funcionário </label>
                    <select v-model="form.funcionario" ref="funcionario" id="funcionario" class="border-2 border-gray-50 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none">
                        <option v-for="funcionario in selectFuncionario" :key="funcionario.codigo" :value="funcionario.codigo"> {{ funcionario.nomeCompleto }}</option>                        
                    </select>
                </section>          
                                   
            </div>

            <button type="submit" class="w-[150px] h-[30px] border-2 font-bold bg-gray-50 my-5 rounded hover:bg-transparent hover:text-white"> GRAVAR </button>

        </form>
    </div>
</template>
<script>
import menuLateral from "@/components/Base/menuLateral.vue"
import smartAlert from "@/components/Base/smartAlert.vue"
import axios from "axios"

export default {
    name:'cadastroUsuario',
    beforeMount(){
       this.autoLoadFuncionarioSelect()
    },
    watch:{
        'alert.show'(){ setTimeout( () => this.alert.show = false , 1800) }        
    },
    data() {
        return {
            form:{
                login: null,
                senha: null,
                confirmacaoSenha: null,
                funcionario: null
            },
            selectFuncionario:[],
            alert:{
                type:'',
                mensage: '',
                show: false
            }
        }
    },   
    components:{
        menuLateral,
        smartAlert,
    },
    methods:{
        async gravar(){
            if( await this.validarFormulario() ) return;

            let formData = new FormData();
            
            formData.append('login',this.login )
            formData.append('senha',this.senha )

            try{

                let result = await axios({
                    method: 'post',
                    url: 'http://localhost:3030/login/cadastro',
                    headers: { "Content-Type":'application/json; charset=utf-8'},
                    data: formData
                })

                let { status, mensage } = result.data;
         
                if( status == 200 ){
                    this.alert.type = 'success'
                    this.alert.mensage = mensage
                    this.alert.show = true                    
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
            }
        },
        async validarFormulario(){
            let login = this.form.login 
            let senha = this.form.senha 
            let confirmacaoSenha = this.form.confirmacaoSenha

            if( !login ){
                this.alert.show = true
                this.alert.type = 'warning'
                this.alert.mensage = 'Insira o login.'
                this.$refs.login.focus()
                return true
            }            

            if( !senha ){
                this.alert.show = true
                this.alert.type = 'warning'
                this.alert.mensage = 'Insira a senha.'
                this.$refs.senha.focus()
                return true
            }

            if( senha != confirmacaoSenha ){
                this.alert.show = true
                this.alert.type = 'warning'
                this.alert.mensage = 'As senhas precisam ser iguais.'
                this.$refs.senha.focus()
                return true
            }

            return false

        },
        async autoLoadFuncionarioSelect(){
            let formData = new FormData();
            try{

                let results = await axios({
                    method: 'get',
                    url: 'http://localhost:3030/funcionario',
                    headers: { "Content-Type":'application/json; charset=utf-8'},
                    data: formData
                })
                
                let { status,data } = results
                
                if( status == 200 ){
                    this.selectFuncionario = data
                }

            }catch( err ){
                console.log(err)
            }
        }
    }    
}
</script>
