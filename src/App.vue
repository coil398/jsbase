<template>
    <div class="container">
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello Vue!!'
        }
    }
}
</script>

<style>
p {
    font-size: 2em;
    text-align: center;
}
</style>
