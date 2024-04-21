<script setup>
import { defineProps } from 'vue';

const props = defineProps(["name", "image", "atk1", "atk2", "atk3", "atk4"])

</script>

<template>
    <div>
        <img :src="props.image" alt="Imagem do pokémon">
        <p >{{ props.name }}</p>
        <p>{{ props.atk1 }}</p>
        <p>{{ props.atk2 }}</p>
        <p>{{ props.atk3 }}</p>
        <p>{{ props.atk4 }}</p>
    </div>
</template>

<style scoped>

</style>