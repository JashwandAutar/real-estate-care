<script setup>
    import { ref } from 'vue';
    import { useToast } from "primevue/usetoast";

    const toast = useToast();

    const schadeLocatie = ref();
    const schadeNieuw = ref();
    const schadeActie = ref();
    const schadeOmschrijving = ref();
    const selectedSchade = ref();
    const schade = ref([
        { name: 'Moedwilleg' },
        { name: 'Slijtage' },
        { name: 'Geweld' },
        { name: 'Normaal gebruik' },
        { name: 'Calamiteit' },
        { name: 'Anders' }
    ]);

    const date = ref();
    const showSchadeRapport = () => {
        toast.add({ 
            severity: 'Succes', 
            summary: 'Schade Rapport', 
            detail: ' schadeLocatie: ' + schadeLocatie.value + ' Nieuwe schade: ' + schadeNieuw.value + ' Type schade: ' + selectedSchade.value.name + ' Datum: '  + date.value + " Acute actie vereist: " + schadeActie.value + ' Opmerkingen: ' + schadeOmschrijving.value, 
            life: 6000 
        });
    };
    
    const onUpload = () => {
        toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
    };
</script>
<template>
    <form>  
        <h2>Schade opnemen</h2>
        <Toast />
        <span class="p-float-label">
            <InputText id="locatie" v-model="schadeLocatie" />
            <label for="locatie">Locatie</label>
        </span>
        <br>
        <Dropdown v-model="selectedSchade" :options="schade" optionLabel="name" placeholder="Kies Schade Soort" class="w-full md:w-14rem" />
        <br>
        <div class="flex align-items-center">
            <RadioButton v-model="schadeNieuw" inputId="nieuwe-schade" name="nieuwe-schade" value="Nieuw" />
            <label for="nieuwe-schade" class="ml-2"> Nieuwe schade</label>
        </div>
        <br>
        <Calendar v-model="date" dateFormat="dd-mm-yy" showIcon showButtonBar/>
        <br>
        <div class="flex align-items-center">
            <RadioButton v-model="schadeActie" inputId="acute-actie" name="acute-actie" value="Vereist" />
            <label for="acute-actie" class="ml-2"> Acute actie vereist</label>
        </div>
        <br>
        <Textarea v-model="schadeOmschrijving" rows="5" cols="30" />
        <br>
        <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" :multiple="true" chooseLabel="Foto's voor deze Rapport" />
        <br>
        <Button label="Verzend" @click="showSchadeRapport()" />
        <br>
    </form>
</template>