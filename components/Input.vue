<template>
    <div>
        <input :type="type" :placeholder="placeholder" class="w-full border-2 border-cyan-600 focus:outline-none focus:ring-1 focus:ring-cyan-600 focus:border-cyan-600 p-3 rounded h-10" @input="handleChange($event)">
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        handleChange(event){
            event.preventDefault();
            this.$emit("searchChanged", event.target.value);
        }
    },
    props:{
        placeholder: {
            type: String,
        },
        type:{
            type: String,
        }
    }
}
</script>