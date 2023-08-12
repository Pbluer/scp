<template>
    
<button @click="openMenuMobile()" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:sm:translate-x-0 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="sidebar-multi-level-sidebar" class="fixed top-0 left-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 shadow-xl" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">        
        <div class="mb-5 lg:hidden">
            <button @click="openMenuMobile()" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:sm:translate-x-0 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Close sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
            </button>
        </div>
        
        <ul class="space-y-2 font-medium">      
            <li>
               <router-link to="/"  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <i class="fa fa-house"></i>
                    <span class="flex-1 ml-3 whitespace-nowrap">Inicio</span>
               </router-link>            
            </li>  
            
            <li>
                <button type="button" @click="mostrarMenu('dropdown-example')" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" >
                    <i class="fa-solid fa-chalkboard-user"></i>
                    <span class="flex-1 ml-3 text-left whitespace-nowrap">Cursos</span>
                    <i class="fa fa-turn-down"></i>
                </button>
                <ul id="dropdown-example" class="hidden py-2 space-y-2">
                    <li>
                        <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Básico</a>
                    </li>                  
                    <li>
                        <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Médio</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Avançado</a>
                    </li>
                </ul>
            </li> 
            
            <li>
                <button type="button" @click="mostrarMenu('dropdownCursos')" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" >
                    <i class="fa-solid fa-star"></i>
                    <span class="flex-1 ml-3 text-left whitespace-nowrap">Cursos</span>
                    <i class="fa fa-turn-down"></i>
                </button>
                <ul id="dropdownCursos" class="hidden py-2 space-y-2">
                    <li>
                        <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"> HTML + CSS </a>
                    </li>                  
                    <li>
                        <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Javascript</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">PHP</a>
                    </li>
                </ul>
            </li> 

            <li>
               <router-link to="/"  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <i class="fa fa-right-from-bracket"></i>
                <span class="flex-1 ml-3 whitespace-nowrap">Deslogar</span>
               </router-link>            
            </li>
        </ul>
    </div>
</aside>

</template>
<script>
export default {
    methods:{
        mostrarMenu(campo){
           (document.querySelector(`#${campo}`).classList).contains('hidden') ?
             document.querySelector(`#${campo}`).classList.remove('hidden') : 
             document.querySelector(`#${campo}`).classList.add('hidden')
        },
        openMenuMobile(){           
            let desktop = (document.querySelector('#sidebar-multi-level-sidebar').classList).contains('sm:translate-x-0');
            
            if( desktop ){
                document.querySelector('#sidebar-multi-level-sidebar').classList.remove('sm:translate-x-0')
                document.querySelector('#sidebar-multi-level-sidebar').classList.add('translate-x-0') 
            }else{
                document.querySelector('#sidebar-multi-level-sidebar').classList.add('sm:translate-x-0')
                document.querySelector('#sidebar-multi-level-sidebar').classList.remove('translate-x-0') 
            }

        },
    }
}
</script>
<style>
    
</style>