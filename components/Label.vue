<template>
    <div>
        <label :class="classes" :for="fors">{{ text }}</label>
    </div>
</template>

<script>
export default {
    props: ['text', 'fors', 'classes']
}
</script>