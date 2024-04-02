<script setup>
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';
  import SvgIcon from '@jamescoyle/vue-icon';
  import { mdiArrowLeftThick } from '@mdi/js';
  import SchadeForm from "../components/forms/SchadeForm.vue";
  import OnderhoudForm from '../components/forms/OnderhoudForm.vue';
  import InstallatieForm from '../components/forms/InstallatieForm.vue';
  import ModificatieForm from '../components/forms/ModificatieForm.vue';

  const backToHome = ref(mdiArrowLeftThick);
</script>

<template>
  <h1><RouterLink to="/"><svg-icon type="mdi" :path="backToHome" /></RouterLink> Toegewezen Rapportages</h1>
  <TabView>
    <TabPanel header="Schade">
      <SchadeForm />
    </TabPanel>
    <TabPanel header="Achterstallig Onderhoud">
      <OnderhoudForm/>
    </TabPanel>
    <TabPanel header="Technische installaties">
      <InstallatieForm/>
    </TabPanel>
    <TabPanel header="Modificaties inventariseren">
      <ModificatieForm/>
    </TabPanel>
  </TabView>
 
</template>

<style scoped>
  form{
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    max-width: 1000px;
    border: 3px solid rgba(0,170,162);
    background-color: rgba(41, 52, 57, 0.201);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
  }
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
  @media(max-width: 500px){
    form{
      border: 0px solid rgba(0,170,162);
      background-color: rgba(41, 52, 57, 0);
      flex-wrap: nowrap;
    }
  }
</style>