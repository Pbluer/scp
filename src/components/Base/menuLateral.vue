<template>

<button @click.prevent="openMenu()" class="bg-blue-600 text-right px-3 w-[125px] text-[1.2rem] rounded text-white absolute top-3 z-10">
    <i class="fa-solid fa-arrow-right"></i>
</button>

<nav class="flex flex-col bg-blue-600 h-full px-5 text-white items-left" :class="menuStyle">
    
    <!-- HEADER MENU -->

    <div class="my-5">
        <i class="fa-solid fa-image"></i>
        <span v-show="showText" class="ml-3 font-bold">
            Nome Site
        </span>
        <hr class="">
    </div>

    <div class="flex flex-col gap-y-2 hoverlow">

        <router-link :class="buttonClass" to="/" titleInside="Usuário" id="usuario">            
            <i class="fa-solid fa-user"> </i>
            <span v-show="showText" class="ml-3 font-bold">
                Usuário
            </span>
        </router-link>

        <router-link :class="buttonClass" to="/" titleInside="Funcionário" id="funcionario">            
            <i class="fa-solid fa-id-badge"> </i>
            <span v-show="showText" class="ml-3 font-bold">
                Funcionário
            </span>
        </router-link>

    </div>

    <button @click="openMenu()" class="rounded text-white absolute bottom-2 left-40 text-[2rem] w-[100px]" v-show="showText">
        <i class="fa-solid fa-arrow-left"></i>
    </button>
</nav>

</template>

<style scoped>
    .minimizedMenu{
        @apply absolute z-10;
    }

    .maximizedMenu{
        @apply absolute z-10 w-[250px];
    }

    .menuOptions{
        @apply hover:border-2
    }

    .minimizedMenu a[titleInside]:hover::after {
        content: attr(titleInside);
        color: white;
        position: absolute;
        left: 100px;       
        background-color: #2563EB;
        padding: 5px 10px;        
        @apply rounded-sm
    }

</style>

<script>
export default {
    data(){
        return{
            menuStyle: "minimizedMenu",
            buttonClass: "py-2 px-4",
            showText: false
        }
    },  
    methods:{
       openMenu(){
            if( this.menuStyle == "minimizedMenu"){
                this.menuStyle = "maximizedMenu"
                this.buttonClass = "py-2 px-4 w-[180px] gap-x-2 hover:bg-white hover:text-[#2563EB] rounded"
                this.showText = true
            }else{
                this.menuStyle = "minimizedMenu"
                this.buttonClass = "border-2 py-2 px-4"
                this.showText = false
            }
        }
    }
}
</script>
