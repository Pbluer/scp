<template>
    <div class="my-5 mx-4 rounded-2xl bg-[#0284C7] px-5 py-2">
        <ul class="flex justify-evenly">
            <li class="w-[6rem] text-center p-2 bg-white rounded-tr-[50rem] rounded-br-[50rem]"> <router-link :to="{ name: 'nivelBasico' }"> Básico </router-link> </li>
            <li class="w-[6rem] text-center p-2 bg-white rounded-tr-[50rem] rounded-br-[50rem]"> <router-link to=""> Inicio </router-link> </li>
            <li class="w-[6rem] text-center p-2 bg-white rounded-tr-[50rem] rounded-br-[50rem]"> <router-link to=""> Médio </router-link> </li> 
            <li class="w-[6rem] text-center p-2 bg-white rounded-tr-[50rem] rounded-br-[50rem]"> <router-link to=""> Avançado </router-link> </li> 
        </ul>
    </div>
</template>

<script>
export default {}
</script>
