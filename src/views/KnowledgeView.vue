<script setup>
  import { ref } from 'vue';
  import PdfViewer from '../components/PdfViewer.vue';
  import { RouterLink } from 'vue-router';
  import SvgIcon from '@jamescoyle/vue-icon';
  import { mdiArrowLeftThick } from '@mdi/js';

  const backToHome = ref(mdiArrowLeftThick);
</script>

<template>
  <div class="page-title">
    <RouterLink to="/feed">
      <svg-icon 
        type="mdi" 
        :path="backToHome" 
      />
      <span>Ga Terug</span>
    </RouterLink>
    <h1>KennisBase/Documentatie</h1>
  </div>
    <PdfViewer/>
</template>

<style scoped>
  h1{
    font-size: 1.18rem;
  }
  .page-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  a{
    color: var(--black);
    transition: color 0.5s;
    margin-inline-end: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  a span{
    font-size: 1.5rem;
    color: var(--black);
  }
  a:hover{
    color: var(--teal);
    transition: color 0.5s;
  }
  a:hover span{
    color: var(--teal);
    transition: color 0.5s;
  }
  svg{
    width: 70px;
    height: 70px;
  }
</style>