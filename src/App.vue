<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { ref } from 'vue';
  import SvgIcon from '@jamescoyle/vue-icon';
  import { mdiCheckboxBlankBadge, mdiFormatListBulletedType, mdiFileDocument, mdiCog, mdiSearchWeb } from '@mdi/js';
  
  const icons = {
    check: ref(mdiCheckboxBlankBadge),
    list: ref(mdiFormatListBulletedType),
    fileDocument: ref(mdiFileDocument),
    cog: ref(mdiCog),
    searchWeb: ref(mdiSearchWeb)
  };
  const name = ref("Jazz Autar");
  const image = ref("/src/assets/account-template.png");
</script>

<template>
  <header>
    <Toolbar style="background-color: var(--black);">
      <template #start>
        <img alt="real-estate-care-logo" class="logo" src="./assets/logo.png"/>
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
  <footer>
    <nav>
      <RouterLink to="/assigned"><svg-icon type="mdi" :path="icons.check.value" /><span>Toegewezen Rap.</span></RouterLink>
      <RouterLink to="/settings"><svg-icon type="mdi" :path="icons.searchWeb.value" /><span>Zoeken</span></RouterLink>
      <RouterLink to="/knowledge"><svg-icon type="mdi" :path="icons.fileDocument.value" /><span>KennisBase</span></RouterLink>
    </nav>
  </footer>
</template>

<style scoped>
  
  .logo{
    width: 14rem;
  }

  header{
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 5px solid var(--teal);
    border-left: 5px solid var(--black);
    border-right: 5px solid var(--black);
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
    flex-direction: column;
    align-items: center;
  }
  nav a:hover{
    text-decoration: none;
    color: var(--black);
  }
  svg{
    width: 40px;
    height: 40px;
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
    
    border-left: 5px solid var(--black);
    border-right: 5px solid var(--black);
  }
  footer{
    background-color: var(--teal);
    border-bottom: 5px solid var(--teal);
  }

  @media(max-width: 500px){
    nav a{
      font-size: 1rem;
    }
    svg{
      width: 30px;
      height: 30px;
    }
  }
</style>
