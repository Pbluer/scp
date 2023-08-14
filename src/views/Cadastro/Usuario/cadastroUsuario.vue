<template>
    <smartAlert :type="alert.type" :mensage="alert.mensage" v-show="alert.show"/>    
    <div class="flex justify-center items-center my-[30vh]">

        <form id="formLogin" @submit.prevent="logar()" class="flex flex-col justify-center items-center w-[20rem] border border-gray-700 shadow rounded-lg ">

            <h1>cadastro</h1>

        </form>

    </div>
</template>
<script>
import axios from "axios"
import smartAlert from "@/components/smartAlert.vue"

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
        smartAlert
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
