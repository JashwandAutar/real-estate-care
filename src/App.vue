<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { ref } from 'vue';
  import SvgIcon from '@jamescoyle/vue-icon';
  import { mdiCheckboxBlankBadge, mdiFormatListBulletedType, mdiFileDocument, mdiCog } from '@mdi/js';

  const icons = {
    path: ref(mdiCheckboxBlankBadge),
    path1: ref(mdiFormatListBulletedType),
    path2: ref(mdiFileDocument),
    path3: ref(mdiCog)
  };
</script>

<template>
  <header>
    
    <img alt="Vue logo" class="logo" src="./assets/logo REC.png"  />
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/assigned"><svg-icon type="mdi" :path="icons.path.value" /><span>Toegewezen Rap.</span></RouterLink>
      <RouterLink to="/performed"><svg-icon type="mdi" :path="icons.path1.value" /><span>Uitgevoerde Rap.</span></RouterLink>
      <RouterLink to="/knowledge"><svg-icon type="mdi" :path="icons.path2.value" /><span>KennisBase</span></RouterLink>
      <RouterLink to="/settings"><svg-icon type="mdi" :path="icons.path3.value" /><span>Instellingen</span></RouterLink>
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
    display: flex;
    align-items: center;
  }
  nav a:hover{
    text-decoration: none;
    color: var(--teal);
  }

  main{
    /* background-image: linear-gradient(50deg, var(--teal) 58%, var(--black) 72%); */
    padding: 8px;
    border-width: 5px;
    border-style: solid;
    border-color: var(--black) var(--black) var(--teal) var(--teal);
  }
</style>
