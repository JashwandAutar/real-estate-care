<script setup>
    import { ref } from 'vue';
    import { useToast } from "primevue/usetoast";

    const toast = useToast();

    const installatieLocatie = ref();
    const gemeldeStoringenInstallatie = ref();
    const selectedInstallatie = ref();
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
            detail: 'Installatie Locatie: ' + installatieLocatie.value, 
            life: 3000 
        });
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
        <Dropdown v-model="selectedInstallatie" :options="installatie" optionLabel="name" placeholder="Kies Installatie Soort" class="w-full md:w-14rem" />
        <br>
        <Textarea v-model="gemeldeStoringenInstallatie" rows="5" cols="30" placeholder="Gemelde Storingen" />
        <br>
        <Button label="Testprocedure" :href="'/path/to/your/pdf-file.pdf'" target="_blank" />
        <br>
        <Textarea v-model="opmerkingenModificatie" rows="5" cols="30" placeholder="Opmerkingen" />
        <Button label="Verzend" @click="showInstallatieRapport()" />
        <br>
    </form>
</template>