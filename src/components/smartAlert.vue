<template >
   <div class="mx-auto w-[25rem] rounded-xl p-2 text-white my-5 text-center shadow-lg" :class="tipoAlerta">
        <h3 class="font-bold"> {{ titulo }} </h3>
        {{ mensage || '' }}
    </div>
</template>
<script>
export default {
    props:['type','mensage'],
    computed:{
        tipoAlerta(){

            if( this.type == 'error' ){
                return 'bg-red-600'
            }

            if( this.type == 'warning' ){
                return 'bg-orange-600'
            }

            if( this.type == 'success' ){
                return 'bg-green-600'
            }

            return 'bg-red-600'

        },
        titulo(){
            if( this.type == 'error' ){
                return 'Atenção'
            }

            if( this.type == 'warning' ){
                return 'Alerta'
            }

            if( this.type == 'success' ){
                return 'Sucesso'
            }
            return ''
        }
    }
}
</script>
