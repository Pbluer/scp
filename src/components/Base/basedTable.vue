<template>
    <table class="table text-gray-50 bg-[#0284C7] dark:text-gray-50 dark:bg-gray-800 text-center rounded-lg mx-2">
      <thead>
        <tr class="border border-gray-50">
          <th  v-for="heade in headers" :key="heade" class="w-[10rem] border border-gray-50"> {{heade}} </th>            
        </tr>
      </thead>
        <tbody>
            <tr v-for="row,index in body" :key="index" @click.prevent="pathRow( path,row.codigo)" class="w-auto border border-gray-50 hover:bg-slate-600">      
                <td class="border border-gray-50"> {{ row.nome }}</td>           
                <td class="border border-gray-50"> {{ row.cpf }}</td>           
                <td class="border border-gray-50"> {{ row.dataNascimento }}</td>           

            </tr>
        </tbody>
      <tbody>          
        
      </tbody>
    </table>
</template>
<script>
export default {
    props:{
        headers: Array,
        body: Array,
        path: String
    },
    data(){
        return{           
                    
        }
    },
    methods: {
        pathRow(pathName,codigoRow){
            this.$router.push({ name: pathName, params:{ codigo: codigoRow } })
        }
    }
    
}
</script>