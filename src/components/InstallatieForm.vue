<script setup>
    import { ref } from 'vue';
    import { useToast } from "primevue/usetoast";

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

    const showInstallatieRapport = () => {
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
            <InputText id="locatie" v-model="installatieLocatie" />
            <label for="locatie">Locatie</label>
        </span>
        <br>
        <Dropdown v-model="selectedInstallatie" :options="installatie" optionLabel="name" placeholder="Kies Installatie Soort" class="w-full md:w-14rem" />
        <br>
        <Textarea v-model="gemeldeStoringenInstallatie" rows="5" cols="30" placeholder="Gemelde Storingen" />
        <br>
        <div class="flex align-items-center">
            <RadioButton v-model="goedgekeurdInstallatie" inputId="goedgekeurd-installatie" name="goedgekeurdInstallatie" value=true />
            <label for="acute-actie" class="ml-2">Goed gekeurd</label>
        </div>
        <br>
        <a href="/public/files/WEB_handboek-RVB-BOEI-Deel1.pdf" target="_blank" rel="noopener noreferrer" class="p-button font-bold">Testprocedure</a>
        <br>
        <Textarea v-model="opmerkingenInstallatie" rows="5" cols="30" placeholder="Opmerkingen" />
        <br>
        <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" :multiple="true" chooseLabel="Foto's voor deze Rapport" />
        <br>
        <Button label="Verzend" @click="showInstallatieRapport()" />
        <br>
    </form>
</template>