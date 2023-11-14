<script setup>
  import { ref } from 'vue';
  //import InspectionForm from '../components/InspectionForm.vue';
  import SchadeForm from '../components/SchadeForm.vue';
  import OnderhoudForm from '../components/OnderhoudForm.vue';
  import InstallatieForm from '../components/InstallatieForm.vue';
  import ModificatieForm from '../components/ModificatieForm.vue';

  const editingSchade = ref(false);
  const editingOnderhoud = ref(false);
  const editingInstallatie = ref(false);
  const editingModificatie = ref(false);

</script>

<template>
    <h1>Toegewezen Rapportages</h1>
    <div class="toggle-buttons">
        <ToggleButton v-model="editingSchade" onLabel="Schade" offLabel="Schade"/>
        <ToggleButton v-model="editingOnderhoud" onLabel="Achterstallig Onderhoud" offLabel=" Achterstallig Onderhoud" />
        <ToggleButton v-model="editingInstallatie" onLabel="Technische installaties" offLabel="Technische installaties" />
        <ToggleButton v-model="editingModificatie" onLabel="Modificaties inventariseren" offLabel="Modificaties inventariseren" />
    </div>

    <SchadeForm v-if="editingSchade"/>
    <OnderhoudForm v-if="editingOnderhoud"/>
    <InstallatieForm v-if="editingInstallatie"/>
    <ModificatieForm v-if="editingSchade"/>
    
</template>

<style scoped>
  form{
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 80%;
    border: 3px solid rgba(0,170,162);
    background-color: rgba(41, 52, 57, 0.201);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
  }

  .toggle-buttons{
    margin: auto 0 12px;
    display: flex;
    justify-content: space-evenly;
  }
</style>