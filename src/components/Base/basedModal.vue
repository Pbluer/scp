<template>
    <div class="absolute mt-[1rem] border-2 w-[96vw] bg-white shadow-sm rounded-md p-5 pb-10 animate__animated animate__fadeInDown
    sm:w-[500px]">
        
        <div class="flex justify-between mb-2">
            <slot name="title"></slot>

            <button @click.prevent="$emit('close')" class="relative left-0 ml-auto mr-2">
                <i class="fa-solid fa-x"></i>
            </button>
        </div>

        <slot name="body"></slot>


        <slot name="footer"></slot>
    </div>
</template>

<script>
export default {
    props: ['classModify']
}
</script>