<script setup>
  import { ref } from 'vue';

  import SchadeTable from "../components/SchadeTable.vue"; 
  import OnderhoudTable from "../components/OnderhoudTable.vue"; 
  import InstallatieTable from "../components/InstallatieTable.vue"; 
  import ModificatieTable from "../components/ModificatieTable.vue"; 

  const editingSchade = ref(false);
  const editingOnderhoud = ref(false);
  const editingInstallatie = ref(false);
  const editingModificatie = ref(false);
</script>
<template>
    <h1>Uitgevoerde Rapportages</h1>
    <div class="toggle-buttons">
        <ToggleButton v-model="editingSchade" onLabel="Schade" offLabel="Schade"/>
        <ToggleButton v-model="editingOnderhoud" onLabel="Achterstallig Onderhoud" offLabel=" Achterstallig Onderhoud" />
        <ToggleButton v-model="editingInstallatie" onLabel="Technische installaties" offLabel="Technische installaties" />
        <ToggleButton v-model="editingModificatie" onLabel="Modificaties inventariseren" offLabel="Modificaties inventariseren" />
    </div>
    <SchadeTable v-if="editingSchade"/>
    <br>
    <OnderhoudTable v-if="editingOnderhoud"/>
    <br>
    <InstallatieTable v-if="editingInstallatie"/>
    <br>
    <ModificatieTable v-if="editingModificatie"/>
</template>

<style scoped>
  .toggle-buttons{
    margin: auto 0 12px;
    display: flex;
    justify-content: space-evenly;
    }
</style>