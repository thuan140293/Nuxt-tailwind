<template>
    <div>
        <select :class="classes"
        :placeholder="placeholder"
        @change="handleChange($event)">
            <option 
            v-for="(option, index) in options" 
            :key="index"
            :label="option.label"
            :value="option.value"
            >
            {{option ? option : ''}}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    methods:{
        handleChange(event){
            this.$emit("filterChanged", event.target.value);
        }
    },
    props: ['placeholder', 'options', 'classes']
}
</script>