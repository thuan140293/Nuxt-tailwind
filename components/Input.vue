<template>
    <div>
        <input :type="type" :placeholder="placeholder" :class="classes" @input="handleChange($event)">
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
            this.$emit("onChanged", event.target.value);
        }
    },
    props:{
        placeholder: {
            type: String,
        },
        type:{
            type: String,
        },
        classes:{
            type: String
        }
    }
}
</script>