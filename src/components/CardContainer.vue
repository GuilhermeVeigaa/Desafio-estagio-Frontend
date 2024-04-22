<script setup>
import CardView from './CardView.vue';
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';
import BaseModal from './BaseModal.vue';


const pokemons = ref([])

const getPokemon = () => {
    let endpoint = []
    for (let i = 1; i <= 26; i++) {
        endpoint.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }

     axios.all(endpoint.map((endpoint) => axios.get(endpoint))).then((response) => pokemons.value = (response))      
}

onMounted(getPokemon)

let pokemonSelected = reactive(ref())

const selectPokemon = async (pokemon) => {
        pokemonSelected.value = pokemon
        isModalOpen.value = true
}

const isModalOpen = ref(false)

const closeModal = () => {
    isModalOpen.value = false
}

</script>

<template>
    <BaseModal  
    v-if="isModalOpen"
    @closeModal="closeModal"
    :name="pokemonSelected?.name"
    :image="pokemonSelected?.sprites.front_default"
    :atk1="pokemonSelected?.moves[0].move.name"
    :atk2="pokemonSelected?.moves.length > 1 ? pokemonSelected?.moves[1].move.name : null"
    :atk3="pokemonSelected?.moves.length > 1 ? pokemonSelected?.moves[2].move.name : null"
    :atk4="pokemonSelected?.moves.length > 1 ? pokemonSelected?.moves[3].move.name : null"
    :i1="pokemonSelected?.game_indices[0].version.name"
    :i2="pokemonSelected?.game_indices.length > 1 ? pokemonSelected?.game_indices[1].version.name : null"
    :i3="pokemonSelected?.game_indices.length > 1 ? pokemonSelected?.game_indices[2].version.name : null"
    :i4="pokemonSelected?.game_indices.length > 1 ? pokemonSelected?.game_indices[3].version.name : null"
    />
    <main class="main-container">
        <section class="container">
            <article class="pokedex-logo">
                <img width="203px" src="@public/pokedexlogo.png" alt="Pokédex-logo">
            </article>

            
                <section class="card-container">
                    <article v-for="(pokemon, i) in pokemons" :key="i">
                        <CardView @click="() => selectPokemon(pokemon.data)"    :name="pokemon.data.name" 
                            :image="pokemon.data.sprites.front_default"
                            :id="'#' + pokemon.data.id"
                            :type1="pokemon.data.types[0].type.name"
                            :type2="pokemon.data.types.length > 1 ? pokemon.data.types[1].type.name : undefined"
                            :idStyle="pokemon.data.types.length > 1 ? pokemon.data.types[1].type.name : 'none'"/>
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

    @media screen and (max-width: 430px) {
        .container {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .pokedex-logo {
            display: none;
        }

        .card-container {
            width: 100%;
        }
    }

    @media screen and (max-width: 1130px) {
        .container {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

        }

        .pokedex-logo {
            left: 10rem;
        }

        .card-container {
            width: 100%;
        }
    }

    @media screen and (max-width: 792px) {
 

        .pokedex-logo {
            display: none;
        }
    }

</style>