<template>
    <menuLateral />
    <div class="flex flex-col justify-center items-center my-[30vh]">
        <div class="my-5">
            <h1 class="text-[1.5rem] font-bold text-gray-800 dark:text-gray-50">Lista de Usuário</h1>
        </div>
        <basedTable :headers="tableHeaders" :body="tableBody" :path="tablePath"/>
    </div>
</template>
<script>
import menuLateral from "@/components/Base/menuLateral.vue"
import basedTable from "@/components/Base/basedTable.vue"
import axios from "axios"

export default {
    name:'loginIndex',
    beforeMount(){
        this.listagemUsuarios()
    },
    data() {
        return {
            tablePath:'cadastroUsuario',
            tableHeaders:['Nome','CPF','Data de Nascimento'],
            tableBody: []
        }
    },   
    components:{
        menuLateral,
        basedTable,
    },
    methods:{
        async listagemUsuarios(){
            let formData = new FormData();
            
            formData.append('login',this.login )
            formData.append('senha',this.password )

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
        }
    }
}
</script>
