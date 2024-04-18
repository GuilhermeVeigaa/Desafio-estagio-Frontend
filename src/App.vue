<script setup>
import Search from './components/Search.vue';


</script>

<template>
  <header>
    <nav>
      <img class="pokeball-logo" src="../public/pokeball.png" alt="Logo do site: uma pokébola">

      <Search />
    </nav>
  </header>
</template>

<style scoped>
  nav {
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #0000ff;
  }

  .pokeball-logo {
    margin-top: 20px;
    width: 84px;
    }

</style>
