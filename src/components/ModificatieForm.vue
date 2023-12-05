<script setup>
    import { ref } from 'vue';
    import { useToast } from "primevue/usetoast";

    const toast = useToast();

    const modificatieLocatie = ref();
    const selectedModificatieUitgevoerd = ref();
    const modificatieUitgevoerd = ref([
        { name: 'Huurder' },
        { name: 'Aannemer' },
        { name: 'Onbekend' }
    ]);
    
    const opmerkingenModificatie = ref();
    const beschrijvingModificatie = ref();
    
    const selectedModificatieActie = ref();
    const modificatieActie = ref([
        { name: 'Accepteren' },
        { name: 'Laten Keuren' },
        { name: 'Laten Verwijderen' },
        { name: 'Laten Aanpassen en Keuren' }
    ]);

    const showModificatieRapport = () => {
        toast.add({ 
            severity: 'Succes', 
            summary: 'Modificatie Rapport', 
            detail: 'ModificatieLocatie: ' + modificatieLocatie.value + ' Uitgevoerd door: ' + selectedModificatieUitgevoerd.value.name + 'Beschrijving: ' + beschrijvingModificatie.value + ' Actie ondernomen: ' + selectedModificatieActie.value.name + ' Opmerkingen: ' + opmerkingenModificatie.value, 
            life: 3000 
        });
    };

    const onUpload = () => {
        toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
    };
</script>
<template>
    <form>
        <h2>Modificaties inventariseren</h2>
        <Toast />
        <a href="/public/files/WEB_handboek-RVB-BOEI-Deel1.pdf" target="_blank" rel="noopener noreferrer" class="p-button font-bold">Bestaande situatie en gedocumenteerde modificaties</a>
        <br>
        <span class="p-float-label">
            <InputText id="locatie" v-model="modificatieLocatie" />
            <label for="locatie">Locatie</label>
        </span>
        <br>
        <Dropdown v-model="selectedModificatieUitgevoerd" :options="modificatieUitgevoerd" optionLabel="name" placeholder="Uitgevoerd door: " class="w-full md:w-14rem" />
        <br>
        <Textarea v-model="beschrijvingModificatie" rows="5" cols="30" placeholder="Beschrijving modificatie" />
        <br>
        <Dropdown v-model="selectedModificatieActie" :options="modificatieActie" optionLabel="name" placeholder="Te ondernemen actie" class="w-full md:w-14rem" />
        <br>
        <Textarea v-model="opmerkingenModificatie" rows="5" cols="30" placeholder="Opmerkingen" />
        <br>
        <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" :multiple="true" chooseLabel="Foto's voor deze Rapport" />
        <br>
        <Button label="Verzend" @click="showModificatieRapport()" />
        <br>
    </form>
</template>