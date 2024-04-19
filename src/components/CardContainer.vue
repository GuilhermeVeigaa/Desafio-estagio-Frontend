<script setup>
import CardView from './CardView.vue';

import axios from 'axios';
import { onMounted, ref } from 'vue';

const pokemons = ref([])

const getPokemon = () => {
    let endpoint = []
    for (let i = 1; i <= 6; i++) {
        endpoint.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }

    let response = axios.all(endpoint.map((endpoint) => axios.get(endpoint))).then((response) => pokemons.value = (response))      
}

onMounted(getPokemon)



</script>

<template>
    <main class="main-container">
        <section class="container">
            <article class="pokedex-logo">
                <img width="203px" src="../../public/pokedexlogo.png" alt="Pokédex-logo">
            </article>

            <section class="card-container">
                <article v-for="(pokemon, i) in pokemons" :key="i">
                    <CardView :name="pokemon.data.name" :id="pokemon.data.id"
                    :image="pokemon.data.sprites.front_default" />
                </article>
            </section>

                       
        </section>
    </main>
</template>

<style scoped>
    .main-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container {
        background-color: #ff7070;
        width: 80vw;
        min-height: 70vh;
        margin-top: 16px;
        display: flex;

        border-radius: 20px;
        box-shadow: 0px 0px 5px 5px #f5f5f5;
    }

    .pokedex-logo {
        position: absolute;
        padding-top: 5px;
        margin-left: 33.33vw;
    }

    .card-container {
        margin-top: 10%;
        margin-left: 12.5vw;
        display: flex;
        flex-wrap: wrap;
        
    }
</style>