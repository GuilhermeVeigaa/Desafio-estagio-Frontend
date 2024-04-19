<script setup>
import { defineProps } from 'vue';

const props = defineProps(["name", "id", "image"])
</script>

<template>
    <main class="cardView-container">
       <h3>{{ props.name }}</h3>
       <p>{{ props.id }}</p>
       <img :src="props.image" alt="Foto do Pokémon">
    </main>
</template>

<style scoped>
    .cardView-container {
        background-color: #fffefe;
        width: 28vw;
        height: 28vh;
        margin-left: 10%;

        border-radius: 5px;
        margin: 5px;
    }
</style>