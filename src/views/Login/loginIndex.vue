<template>
    <smartAlert :type="alert.type" :mensage="alert.mensage" v-show="alert.show"/>    
    <div class="flex justify-center items-center my-[30vh]">

        <form id="formLogin" @submit.prevent="logar()" class="flex flex-col justify-center items-center w-[20rem] border border-gray-700 shadow rounded-lg ">
        
            <section class="flex flex-col mt-5 text-left">
                <label for="login" class="mb-1" >Login</label>
                <input class="border-2 border-gray-800 rounded px-2 outline-none h-8" type="text" v-model="login" >
            </section>

            <section class="flex flex-col m-5 text-left">
                <label for="senha" class="mb-1" >Senha</label>
                <input class="border-2 border-gray-800 rounded px-2 outline-none h-8"  type="password" v-model="password" >
            </section>
            
            <button class="rounded-sm0 w-[8rem] bg-slate-400 mb-5 mt-3 hover:bg-slate-600" type="submit"> LOGAR </button>

        </form>

    </div>
</template>
<script>
import axios from "axios"
import smartAlert from "../../components/smartAlert.vue"

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
        'alert.show'(oldType,newType){
            if( oldType == true){
                setTimeout(() => this.alert.show = false , 1500);
            }

            if( newType == true){
                setTimeout(() => this.alert.show = false , 1500);
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
