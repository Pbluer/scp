<template>
    <menuLateral />
    <div class="flex flex-col justify-center items-center m-auto">
        <div class="my-5">
            <h1 class="text-[1.5rem] font-bold text-gray-800 dark:text-gray-50">Lista de Usuário</h1>
        </div>

        <form id="formLogin" @submit.prevent="listagemUsuarios()" class="w-[90vw] flex flex-col justify-center items-center bg-[#0284C7] shadow rounded-lg dark:bg-gray-800 mb-5 py-5
            lg:w-[80vw]
            xl:w-[60vw]">

            <div class="flex flex-col gap-y-2 w-auto mb-5">

                <div class="flex flex-col 
                    sm:grid sm:grid-cols-2 sm:gap-x-4
                    lg:grid-cols-4">
                    <section class="flex flex-col text-left">
                        <label for="nome" class="mb-1 font-bold text-gray-50">Nome</label>
                        <input class="rounded px-2 outline-none h-8" type="text" v-model.trim="form.nome">
                    </section>
        
                    <section class="flex flex-col text-left">
                        <label for="cpf" class="mb-1 font-bold text-gray-50"> CPF</label>
                        <input class="rounded px-2 outline-none h-8" type="text" v-model="form.cpf" v-mask="'000.000.000-00'">
                    </section>   

                    <section class="flex flex-col text-left">   
                        <label for="cpf" class="mb-1 font-bold text-gray-50" >Data Inico</label>
                        <input class="rounded px-2 outline-none h-8" type="date" v-model="form.dataInicio">
                    </section>

                    <section class="flex flex-col text-left">
                        <label for="cpf" class="mb-1 font-bold text-gray-50" >Data Fim</label>
                        <input class="rounded px-2 outline-none h-8" type="date" v-model="form.dataFim">
                    </section>
                </div>

            </div>

            <div class="flex justify-evenly w-[80vw]">

                <button class="w-[130px] border-2 border-gray-50 font-bold bg-gray-50 rounded p-2 hover:bg-[#0284C7] hover:text-gray-50 dark:hover:bg-transparent" type="submit" title="Buscar"> 
                    <i class="fa-solid fa-filter"></i> 
                    Buscar
                </button>

                <button @click="novo()" class="w-[130px] border-2 border-gray-50 font-bold bg-gray-50 rounded p-2 hover:bg-[#0284C7] hover:text-gray-50 dark:hover:bg-transparent" type="submit" title="Buscar">                    
                    <i class="fa-solid fa-user"></i> 
                    Novo
                </button>
            </div>
        </form>
        <basedTable :headers="tableHeaders" :body="tableBody" :path="tablePath"/>
    </div>
</template>
<script>
import menuLateral from "@/components/Base/menuLateral.vue"
import basedTable from "@/components/Base/basedTable.vue"
import axios from "axios"

export default {
    name:'cadastroUsuarioFiltro',
    beforeMount(){
        this.listagemUsuarios()
    },
    data() {
        return {
            tablePath:'cadastroUsuario',
            tableHeaders:['Codigo','Login','Ultimo Acesso'],
            tableBody: [],
            form:{
                nome: null,
                cpf: null,
                dataInicio: null,
                dataFim: null
            }
        }
    },   
    components:{
        menuLateral,
        basedTable,
    },
    methods:{
        async listagemUsuarios(){
            let formData = new FormData();
            
            formData.append('nome',this.form.nome )
            formData.append('cpf',this.form.cpf )
            formData.append('dataInicio',this.form.dataInicio )
            formData.append('dataFim',this.form.dataFim )         

            try{

                let result = await axios({
                    method: 'get',
                    url: 'http://localhost:3030/user',
                    headers: { "Content-Type":'application/json; charset=utf-8'},
                    data: formData
                })
                let { status,data } = result;                
               
                if( status == 200 ){
                    this.tableBody = data
                }   
                
            }catch( err ){
                console.log(err)
            }
        },
        novo(){
            return this.$router.push({ name:'cadastroUsuario', params:{ codigo:'' } })
        }
    }
}
</script>
