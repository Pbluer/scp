<template>
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

export default {
    name:'loginIndex',
    data() {
        return {
            login: null,
            password: null
        }
    },
    methods:{
        async logar(){
            
            let form = new FormData();
            
            form.append('login',this.login )
            form.append('pasword',this.pasword )

            try{

                let result = await axios({
                    data: form,
                    methods:'post',
                    url:'http://localhost:3030/login',
                    headers: { "Content-Type":'multipart/form-data'},
                })

                console.log(result.data)
                
            }catch( err ){
                console.log(err)
            }
        }
    }    
}
</script>
