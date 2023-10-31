<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    
    <img alt="Vue logo" class="logo" src="./assets/logo REC.png"  />
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/assigned">Toegewezen Rap.</RouterLink>
      <RouterLink to="/performed">Uitgevoerde Rap.</RouterLink>
      <RouterLink to="/knowledge">KennisBase</RouterLink>
      <RouterLink to="/settings">Instellingen</RouterLink>
    </nav>
    
  
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
  
  .logo{
    width: 15rem;
  }

  header{
    display: flex;
    flex-direction: column;
    align-items: center;
    border-width: 5px;
    border-style: solid;
    border-color: var(--teal) var(--teal) var(--black) var(--black)
  }

  nav{
    width: 100%;
    padding-top: 8px;
    padding-bottom: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

  }
  nav a{
    text-decoration: none;
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--black);
    transition: color 0.25s;
  }
  nav a:hover{
    text-decoration: none;
    color: var(--teal);
  }

  main{
    background-image: linear-gradient(50deg, var(--teal) 58%, var(--black) 72%);
  }
</style>
