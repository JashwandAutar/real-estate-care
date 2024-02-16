<script setup>
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';
  import SchadeTable from "../components/SchadeTable.vue"; 
  import OnderhoudTable from "../components/OnderhoudTable.vue"; 
  import InstallatieTable from "../components/InstallatieTable.vue"; 
  import ModificatieTable from "../components/ModificatieTable.vue"; 
  import SvgIcon from '@jamescoyle/vue-icon';
  import { mdiArrowLeftThick } from '@mdi/js';

  const backToHome = ref(mdiArrowLeftThick);
</script>
<template>
    <h1><RouterLink to="/"><svg-icon type="mdi" :path="backToHome" /></RouterLink> Uitgevoerde Rapportages</h1>
    
    <TabView>
      <TabPanel header="Schade">
        <SchadeTable/>
      </TabPanel>
      <TabPanel header="Achterstallig Onderhoud">
        <OnderhoudTable/>
      </TabPanel>
      <TabPanel header="Technische installaties">
        <InstallatieTable/>
      </TabPanel>
      <TabPanel header="Modificaties inventariseren">
        <ModificatieTable/>
      </TabPanel>
    </TabView>
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