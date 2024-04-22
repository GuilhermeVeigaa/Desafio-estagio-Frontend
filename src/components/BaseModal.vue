<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(["name", "image", "atk1", "atk2", "atk3", "atk4", "i1", "i2", "i3", "i4"])

const emits = defineEmits(["closeModal"])

const closeModal = () => {
    emits("closeModal")
}

const uper = props.name[0].toUpperCase() + props.name.substring(1)

const uperAtkOne = props.atk1[0].toUpperCase() + props.atk1.substring(1)
const uperAtkTwo = props.atk2[0].toUpperCase() + props.atk2.substring(1)
const uperAtkThree = props.atk3[0].toUpperCase() + props.atk3.substring(1)
const uperAtkFour = props.atk4[0].toUpperCase() + props.atk4.substring(1)

</script>

<template>
    <div class="modal">
        <div  :id="props.name" class="modal-content">
            <div>
                <span class="close" @click="closeModal">&times;</span>
            </div>

            <div class="image-container">
                <h1 :id="props.name" class="pokemon-name">{{ uper }}</h1>
                
                <img class="modal-image" :src="props.image" alt="Imagem do pokémon">  
            </div>
            
            <div class="moves-content">
                <h3 :id="props.name" class="moves-title">Movimentos de ataque -</h3>
                <p :id="props.name" class="moves">{{ uperAtkOne }}</p>
                <p :id="props.name" class="moves">{{ uperAtkTwo }}</p>
                <p :id="props.name" class="moves">{{ uperAtkThree }}</p>
                <p :id="props.name" class="moves">{{ uperAtkFour }}</p>
            </div>
            
            <div class="moves-content">
                <h3 :id="props.name" class="moves-title">Game indices - </h3>

                <p :id="props.name" class="moves">{{ props.i1 }}</p>
                <p :id="props.name" class="moves">{{ props.i2 }}</p>
                <p :id="props.name" class="moves">{{ props.i3 }}</p>
                <p :id="props.name" class="moves">{{ props.i4 }}</p>
            </div>
            
        </div>
    </div>
</template>

<style scoped>

    .modal {
        display: block;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5)
    }

    .modal-content {
        background-color: #fefefed0;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }

    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold; 
    }

    .close:hover, .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }

    .modal-image {
        width: 300px;
    }

    .image-container {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-evenly;
    }
    
    .pokemon-name {
        font-weight: 600;
        margin-top: 7%;
    }

    .moves-content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;

        margin-bottom: 2rem;
    }

    .moves-title {
        font-weight: 600;
        font-size: 20px;
        padding-right: 0.7em;
    }

    .moves {
        border: 2px solid black;
        border-radius: 5px;

        font-weight: bolder;

        
        margin: 0.4em;
        padding: 0.3em;
        margin-top: -5px;

    }

    .pokemon-name#charizard {
        color: yellow;
    }

    .modal-content#charizard {
        background-color: rgba(255, 68, 0, 0.623);
    }

    .moves-title#charizard {
        font-weight: 600;
        font-size: 20px;
        padding-right: 0.7em;

        color: yellow;
    }

    .moves#charizard {
        border: 2px solid white;
        border-radius: 5px;

        font-weight: bolder;
        color: yellow;

        
        margin: 0.4em;
        padding: 0.3em;
        margin-top: -5px;

    }
</style>