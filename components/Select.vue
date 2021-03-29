<template>
    <div>
        <select class="form-select block w-full border-2 border-cyan-600 focus:outline-none focus:ring-1 focus:ring-cyan-600 focus:border-cyan-600 p-1 rounded h-10"
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
    props: ['placeholder', 'options']
}
</script>