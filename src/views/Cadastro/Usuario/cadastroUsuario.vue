<template>
    <smartAlert :type="alert.type" :mensage="alert.mensage" v-show="alert.show"/>    
    <menuLateral />

    <div class="flex justify-center items-center my-[30vh]">

        <basedTable />

    </div>
</template>
<script>
import menuLateral from "@/components/Base/menuLateral.vue"
import smartAlert from "@/components/Base/smartAlert.vue"
import basedTable from "@/components/Base/basedTable.vue"
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
    components:{
        menuLateral,
        smartAlert,
        basedTable,
    },
    methods:{
        async logar(){
            
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
                    return
                }

                if( status > 400 ){
                    this.alert.type = 'error'
                    this.alert.mensage = mensage
                    this.alert.show = true                   
                    return
                }
                
            }catch( err ){
                console.log(err)
            }
        },
        async formValidacao(){
            
        }
    }    
}
</script>
