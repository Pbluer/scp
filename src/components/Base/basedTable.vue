<template>
    <table class="table text-gray-800 bg-gray-50 dark:text-gray-50 dark:bg-gray-800 text-center">
      <thead >
        <tr class="border border-gray-50">
          <th v-for="value in header" :key="value.index" class="w-[10rem] border border-gray-50">{{ value }}</th>   
          <th> &nbsp; </th>
        </tr>
      </thead>
        <tbody>
            <tr v-for="propsData in bodyData" :key="propsData.index" class="w-auto border border-gray-50">
                <td v-for="value in propsData" :key="value.index" class="w-auto border border-gray-50"> {{ value }} </td>
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
            header:[
                'Nome',
                'CPF',
                'Data'
            ],
            bodyData:[
                [
                    'Bruno Marcelo Mendes',
                    '594.800.564-02',
                    '15/01/1954',
                    '1'
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