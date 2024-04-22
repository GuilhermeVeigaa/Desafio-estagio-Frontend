<script setup>
import { defineProps } from 'vue';

const props = defineProps(["name", "id", "image", "type1", "type2", "idStyle"])

const uper = props.name[0].toUpperCase() + props.name.substring(1)
const up = props.type1[0].toUpperCase() + props.type1.substring(1)

const upe = () => {
    if (props.type2 != null) {
        return props.type2[0].toUpperCase() + props.type2.substring(1)
    } 

}


</script>

<template>
    <main class="cardView-container">
        <section class="pokemon-container">
            <img class="pokemon" :src="props.image" alt="Foto do Pokémon">
            <p class="id">{{ props.id }}</p>
        </section>
        <section class="types-container">            
            <p class="types">{{ up }}</p>
            <p class="type2" :id="props.idStyle" >{{ upe() }}</p>
        </section>  
        <div class="name-container">
            <h3 class="name">{{ uper }}</h3>
        </div>
    </main>
</template>

<style scoped>

    .cardView-container {
        background-color: #fffefe;
        width: 28vw;
        height: 28vh;
        margin-left: 10%;

        flex-wrap: wrap;


        border-radius: 10px;
        margin: 5px;
        cursor: pointer;
    }

    .pokemon-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
    }

    .pokemon {
        width: 150px;
        margin-left: 30%;
        margin-top: -3%;
    }

    .id {
        padding: 1em 1.5em;
        font-weight: 200;
        font-size: 17px;
        opacity: 0.5;
    }

    .name {
        display: flex;
        justify-content: center;
        margin-top: 7%;

        font-size: 22px;
        font-weight: 500;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    .types-container {
        display: flex;
        flex-wrap: wrap;
        padding-left: 1.5em;
    }

    .types {
        border: 2px solid black;
        border-radius: 10px;

        margin-right: 1.5em;
        max-width: 14vw;
        padding: 0.2em;

        font-weight: 600;
    }

    .type2 {
        border: 2px solid black;
        border-radius: 10px;

        margin-right: 1.5em;
        max-width: 14vw;
        padding: 0.2em;

        font-weight: 600;
    }

    .type2#none {
        border: none;
    }

    .name-conatiner {
        width: 100%;
        display:flex ;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 1130px) {
        .id {
            display: none
        }
    }

</style>