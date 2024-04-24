<script setup>
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';
  
  import DamageList from "../components/lists/DamageList.vue"; 
  import MaintenanceList from "../components/lists/MaintenanceList.vue"; 
  import InstallationList from "../components/lists/InstallationList.vue"; 
  import ModificationList from "../components/lists/ModificationList.vue"; 
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
      <h1>Uitgevoerde Rapportages</h1>
    </div>
    <TabView>
      <TabPanel header="Schade">
        <DamageList/>
      </TabPanel>
      <TabPanel header="Achterstallig Onderhoud">
        <MaintenanceList/>
      </TabPanel>
      <TabPanel header="Technische installaties">
        <InstallationList/>
      </TabPanel>
      <TabPanel header="Modificaties inventariseren">
        <ModificationList/>
      </TabPanel>
    </TabView>
</template>

<style scoped>
  h1{
    font-size: 1.5rem;
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
  a:hover{
    color: var(--teal);
    transition: color 0.5s;
  }
  a span{
    font-size: 1.5rem;
    color: var(--black);
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
