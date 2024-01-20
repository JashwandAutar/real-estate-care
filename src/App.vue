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
  const name = ref("Jazz Autar");
  const image = ref("/src/assets/account-template.png");
</script>

<template>
  <header>
    
    <img alt="Vue logo" class="logo" src="./assets/logo REC.png"  />
    <Toolbar style="border-radius: 3rem; background-image: linear-gradient(to right, var(--teal), var(--black))">
      <template #start>
        <nav>
          <RouterLink to="/assigned"><svg-icon type="mdi" :path="icons.path.value" /><span>Toegewezen Rap.</span></RouterLink>
          <RouterLink to="/performed"><svg-icon type="mdi" :path="icons.path1.value" /><span>Uitgevoerde Rap.</span></RouterLink>
          <RouterLink to="/knowledge"><svg-icon type="mdi" :path="icons.path2.value" /><span>KennisBase</span></RouterLink>
          <RouterLink to="/settings"><svg-icon type="mdi" :path="icons.path3.value" /><span>Instellingen</span></RouterLink>
        </nav>
        
      </template>

      <template #end> 
        <Avatar :image=image size="xlarge" shape="circle" />
        <span class="username">{{ name }}</span>
      </template>
    </Toolbar>
    
  
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
    padding: 0 5px 0 5px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.5rem;
    color: white;
    transition: color 0.25s;
    display: flex;
    align-items: center;
  }
  nav a:hover{
    text-decoration: none;
    color: var(--black);
  }

  .p-toolbar {
    width: 100%;
  }
  .username{
    color: white;
    font-weight: bold;
    padding-left: 5px;
  }
  main{
    /* background-image: linear-gradient(50deg, var(--teal) 58%, var(--black) 72%); */
    padding: 8px;
    border-width: 5px;
    border-style: solid;
    border-color: var(--black) var(--black) var(--teal) var(--teal);
  }
</style>
