<script setup>
    import { ref, reactive } from 'vue';
    import { useToast } from "primevue/usetoast";
    import { useInstallationRapportStore } from '../../components/stores/installationRapport';

    const toast = useToast();

    const installatieLocatie = ref();
    const gemeldeStoringenInstallatie = ref();
    const opmerkingenInstallatie = ref();
    const selectedInstallatie = ref();
    const goedgekeurdInstallatie = ref(true);
    const installatie = ref([
        { name: 'Koeling' },
        { name: 'Verwarming' },
        { name: 'Luchtverversing' },
        { name: 'Elektra' },
        { name: 'Beveiliging' }
    ]);
    const installationRapportStore = useInstallationRapportStore();
    const installations = reactive({
      location: "",
      typeOfInstallation: "",
      reportedMalfunctions: "",
      approved: "",
      comments: ""
    });
    const showInstallatieRapport = () => {
        installationRapportStore.postNewRapport(installations);
        toast.add({ 
            severity: 'Succes', 
            summary: 'Installatie Rapport', 
            detail: 'Installatie Locatie: ' + goedgekeurdInstallatie.value, 
            life: 3000 
        });
        console.log(typeof goedgekeurdInstallatie.value);
    };
    const onUpload = () => {
        toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
    };
</script>
<template>
    <form>  
        <h2>Technische installaties inspecteren</h2>
        <Toast />
        <span class="p-float-label">
            <InputText id="locatie" v-model="installations.location" />
            <label for="locatie">Locatie</label>
        </span>
        <br>
        <Dropdown v-model="installations.typeOfInstallation" :options="installatie" optionLabel="name" placeholder="Kies Installatie Soort" class="w-full md:w-14rem" />
        <br>
        <Textarea v-model="installations.reportedMalfunctions" rows="5" cols="30" placeholder="Gemelde Storingen" />
        <br>
        <div class="flex align-items-center">
            <RadioButton v-model="installations.approved" inputId="goedgekeurd-installatie" name="goedgekeurdInstallatie" value=true />
            <label for="acute-actie" class="ml-2">Goed gekeurd</label>
        </div>
        <br>
        <a href="/public/files/WEB_handboek-RVB-BOEI-Deel1.pdf" target="_blank" rel="noopener noreferrer" class="p-button font-bold">Testprocedure</a>
        <br>
        <Textarea v-model="installations.comments" rows="5" cols="30" placeholder="Opmerkingen" />
        <br>
        <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" :multiple="true" chooseLabel="Foto's voor deze Rapport" />
        <br>
        <Button label="Verzend" @click="showInstallatieRapport()" />
        <br>
    </form>
</template>