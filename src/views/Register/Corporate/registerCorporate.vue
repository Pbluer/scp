<template>
     <smartAlert :type="alert.type" :mensage="alert.mensage" v-show="alert.show" @click=" alert.show = false"/>    
    <div class="flex justify-center items-center">
        <form @submit.prevent="gravar()" class="bg-blue-600px-5 flex flex-col items-center w-96 rounded-md border-2 shadow mt-36 bg-white">         
                
            <div class="gap-2">

                <section class="flex flex-col mt-5 text-left w-[20rem]">
                    <label for="categoria" class="mb-1 font-bold text-[1.3rem] text-gray-600" > Categoria </label>
                    <select id="categoria" v-model="form.categoria" class="border-2 border-gray-50 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none">
                        <option value="1"> Pessoa Júridica ( CNPJ )</option>                        
                        <option value="2"> Pessoa Física ( CPF ) </option>                        
                    </select>
                </section> 

                <section class="flex flex-col mt-5 text-left w-[20rem]">
                    <label for="identificacao" class="mb-1 font-bold text-[1.3rem] text-gray-600" > {{ form.categoria == 1 ? "CNPJ" : "CPF" }} </label>
                    <input v-if="form.categoria == 2" class="border-2 border-gray-50 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="text" v-model.trim="form.identificacao" v-mask="'000.000.000-00'" >
                    <input v-if="form.categoria == 1 " class="border-2 border-gray-50 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="text" v-model.trim="form.identificacao" v-mask="'00.000.00/0000-00'" >
                </section>
                
                <section class="flex flex-col mt-5 text-left w-[20rem]">
                    <label for="login" class="mb-1 font-bold text-[1.3rem] text-gray-600" > {{ form.categoria == 1 ? "Razão Social" : "Nome" }} </label>
                    <input ref="login" id="login" class="border-2 border-gray-50 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="text" v-model.trim="form.login" >
                </section>
                    
                <section class="flex flex-col mt-5 text-left w-[20rem]">
                    <label for="senha" class="mb-1 font-bold text-[1.3rem] text-gray-600" > Senha </label>
                    <input ref="senha" id="senha" class="border-2 border-gray-50 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="text" v-model.trim="form.senha" >
                </section>

                <section class="flex flex-col mt-5 text-left w-[20rem]">
                    <label for="confirarSenha" class="mb-1 font-bold text-[1.3rem] text-gray-600" >Confirmar Senha </label>
                    <input ref="confirarSenha" id="confirarSenha" class="border-2 border-gray-50 bg-gray-50 rounded focus:border-[#0C4A6E] px-2 h-[35px] outline-none" type="text" v-model.trim="form.confirmacaoSenha" >
                </section>

                <section class="flex flex-col mt-5 text-left w-[20rem]">
                    <label for="funcionario" class="mb-1 font-bold text-[1.3rem] text-gray-600" > Funcionário </label>
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
                categoria: 1,
                identificacao: null,
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
