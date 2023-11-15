<template>
    <div class="absolute w-[450px] mt-[1rem] border-2 bg-white shadow-sm rounded-md p-5 pb-10 animate__animated animate__fadeInDown">
        
        <div class="flex justify-between">
            <slot name="title"></slot>

            <button @click.prevent="$emit('close')" class="relative left-0 ml-auto mr-2">
                <i class="fa-solid fa-x"></i>
            </button>
            <hr>
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