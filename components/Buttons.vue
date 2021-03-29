<template>
    <div>
        <button :class="classes" :type="type" @click="onSubmit($event)">
            {{ text }}
        </button>
    </div>
</template>

<script>
export default {
    methods:{
        onSubmit(event){
            event.preventDefault();
            this.$emit("submitChanged", event)
        }
    },
    props: ['classes', 'text', 'type']
}
</script>