<script setup>
    const placeholder = "Name, ID, Type..."

</script>

<template>
   <h3 class="title">What are you looking for in the Pokédex ?</h3>

   <div class="search-container">
        <img class="search-logo" width="22px" src="@public/search.png" alt="Search logo">
        
        <input type="search" name="search" id="search" :placeholder="placeholder">

        <button aria-label="search" class="buttton-search">Search</button>
        
    </div>
</template>

<style scoped>
    .title{
      color: white;
      padding-top: 20px;
    }

    .search-container {
        display: flex;
        position: relative;
    }

    #search {
        margin-top: 20px;
        margin-bottom: 30px;
        padding: 10px 2.5rem;

        border-radius: 10px;
        border: none;
        height: 44px;
        min-width: 18rem;

        font-size: 15px;
        font-weight: 700;
    }

    #search:focus {
        outline: none;
    }

    .search-logo {
        color: #000;
        position: absolute;
        padding: 11% 10px;
    }

    .buttton-search {
        border-radius: 20px;
        border: none;
        width: 4.3rem;
        height: 2.4rem;

        position: absolute;
        margin: 8% 75%;

        color: #fffefe;
        background: #000000e0;

        font-weight: 700;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
    }

    button:hover {
        cursor: pointer;
        opacity: 0.8;
    }
</style>