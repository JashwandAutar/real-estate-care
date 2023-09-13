<script setup>
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <header>
    
    <img alt="Vue logo" class="logo" src="./assets/logo REC.png"  />
    
  
  </header>

  <main>
    <HelloWorld msg="Welkom bij Real Estate Care" />
  </main>
</template>

<style scoped>
  
  .logo{
    width: 15rem;
  }

  header{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  main{
    background-image: linear-gradient(50deg, var(--teal) 58%, var(--black) 72%);
  }
</style>
