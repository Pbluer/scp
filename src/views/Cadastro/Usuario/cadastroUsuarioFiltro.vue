<template>
    <menuLateral />
    <div class="flex justify-center items-center my-[30vh]">
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
