<script setup>
//import TheWelcome from '../components/TheWelcome.vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCheckboxBlankBadge, mdiFormatListBulletedType, mdiFileDocument, mdiCog } from '@mdi/js';
  
  const icons = {
    check: ref(mdiCheckboxBlankBadge),
    list: ref(mdiFormatListBulletedType),
    fileDocument: ref(mdiFileDocument),
    cog: ref(mdiCog),
  };
</script>

<template>
  <div class="flex-box">
    <div class="flex-item">
      <RouterLink to="/assigned">
        <svg-icon type="mdi" :path="icons.check.value" />
        <span>Toegewezen Rap.</span>
      </RouterLink>
    </div>
    <div class="flex-item">
      <RouterLink to="/performed">
        <svg-icon type="mdi" :path="icons.list.value" />
        <span>Uitgevoerde Rap.</span>
      </RouterLink>
      
    </div>
    <div class="flex-item">
      <RouterLink to="/knowledge">
        <svg-icon type="mdi" :path="icons.fileDocument.value" />
        <span>KennisBase</span>
      </RouterLink>
      
    </div>
    <div class="flex-item">
      <RouterLink to="/settings">
        <svg-icon type="mdi" :path="icons.cog.value" />
        <span>Instellingen</span>
      </RouterLink>
    </div>
  </div>
    
</template>
<style scoped>
  :root{
    --square: 100px;
  }
  .flex-box {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .flex-item{
    width: 49%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-width: 1px;
    border-style: groove;
    border-color: black;
    border-radius: 8px;
    margin-top: 1px;
    margin-bottom: 1px;
    padding-bottom: 5px;
    background-color: white;
    transition: all 0.5s;
  }
  .flex-item *{
    color: var(--black);
    background-color: white;
    transition: all 0.5s;
  }
  .flex-item:hover{
    
    background-color: var(--black);
  }
  .flex-item:hover *{
    color: var(--teal);
    background-color: var(--black);
  }
  .flex-item span{
    font-size: 2rem;
  }
  .flex-item span:hover{
    color: var(--teal);
  }
  a{
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-block-end: 8px;
  }
  svg{
    width: 10rem;
    height: 10rem;
  }
  @media(max-width: 500px){
    .flex-item span{
      font-size: 1.1rem;
    }
    svg{
      width: 7rem;
      height: 7rem;
    }
  }
</style>