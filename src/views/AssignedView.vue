<script setup>
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';
  import SvgIcon from '@jamescoyle/vue-icon';
  import { mdiArrowLeftThick } from '@mdi/js';
  import DamageForm from "../components/forms/DamageForm.vue";
  import MaintenanceForm from '../components/forms/MaintenanceForm.vue';
  import InstallationForm from '../components/forms/InstallationForm.vue';
  import ModificationForm from '../components/forms/ModificationForm.vue';

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
    <h1>Toegewezen Rapportages</h1>
  </div>
  <TabView>
    <TabPanel header="Schade">
      <DamageForm />
    </TabPanel>
    <TabPanel header="Achterstallig Onderhoud">
      <MaintenanceForm/>
    </TabPanel>
    <TabPanel header="Technische installaties">
      <InstallationForm />
    </TabPanel>
    <TabPanel header="Modificaties inventariseren">
      <ModificationForm />
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
    padding: 5px;
  }
  .page-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  h1{
    font-size: 1.5rem;
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
  @media(max-width: 500px){
    form{
      border: 0px solid rgba(0,170,162);
      background-color: rgba(41, 52, 57, 0);
      flex-wrap: nowrap;
    }
  }
</style>