<template>
    <table class="table text-gray-800 bg-gray-50 dark:text-gray-50 dark:bg-gray-800 text-center">
      <thead >
        <tr class="border border-gray-50">
          <th class="w-[10rem] border border-gray-50"> Nome </th>   
          <th class="w-[10rem] border border-gray-50"> CPF </th>   
          <th class="w-[10rem] border border-gray-50"> Data de Nascimento </th>             
        </tr>
      </thead>
        <tbody>
            <tr v-for="propsData in bodyData" :key="propsData.index" class="w-auto border border-gray-50">
                <div>
                   <td v-for="row in process" :key="row.id">{{ row }} </td>                                                                                                          
                </div>
             
            </tr>
        </tbody>
      <tbody>          
        
      </tbody>
    </table>
</template>
<script>
export default {    
    data(){
        return{           
            bodyData:[
                [
                    {
                        'id':'1',
                        'nome':'Bruno Marcelo Mendes',
                        'cpf':'594.800.564-02',
                        'dataNascimento':'15/01/1954'
                    }
                ]               
            ]
        }
    },
    methods: {
        teste(value){
            console.log(value)
        }
    }
    
}
</script>