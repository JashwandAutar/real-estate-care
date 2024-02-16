<script setup>
  import { ref } from 'vue';
  import Settings from '../components/Settings.vue';
  import { RouterLink } from 'vue-router';
  import SvgIcon from '@jamescoyle/vue-icon';
  import { mdiArrowLeftThick } from '@mdi/js';

  const backToHome = ref(mdiArrowLeftThick);
</script>
<template>
    <h1><RouterLink to="/"><svg-icon type="mdi" :path="backToHome" /></RouterLink> Instellingen</h1>
    <Settings/>
</template>

<style scoped>
  h1{
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.5rem;
  }
  a{
    color: var(--teal);
    transition: color 0.5s;
    width: 60px;
    height: 68px;
    margin-inline-end: 10px;
  }
  a:hover{
    color: var(--black);
    transition: color 0.5s;
  }
  svg{
    width: 70px;
    height: 70px;
  }
</style>