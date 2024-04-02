<script setup>
    import { ref, reactive } from 'vue';
    import { useToast } from "primevue/usetoast";
    import {useDamageRapportStore} from '../../components/stores/damageRapport';

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

    let damages = reactive({
        location: "",
        newDamage: "",
        typeOfDamage: "",
        date: "",
        acuteActionRequired: "",
        description: ""
    });
    const damageRapportStore = useDamageRapportStore();
    const date = ref();
    const showSchadeRapport = () => {
        
        damageRapportStore.postNewRapport(damages);
        toast.add({ 
            severity: 'Succes', 
            summary: 'Schade Rapport', 
            detail: ' schadeLocatie: ' + damages.location + ' Nieuwe schade: ' + damages.newDamage + ' Type schade: ' + damages.typeOfDamage + ' Datum: '  + damages.date + " Acute actie vereist: " + damages.acuteActionRequired + ' Opmerkingen: ' + damages.description, 
            life: 6000 
        });
        console.log(damages);
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
            <InputText id="locatie" v-model="damages.location" />
            <label for="locatie">Locatie</label>
        </span>
        <br>
        <Dropdown 
            v-model="damages.typeOfDamage" 
            :options="schade" 
            optionLabel="name" 
            placeholder="Kies Schade Soort" 
            class="w-full md:w-14rem" 
        />
        <br>
        <div class="flex align-items-center">
            <label for="schade" class="ml-2">
                <RadioButton 
                    v-model="damages.newDamage" 
                    inputId="nieuwe-schade" 
                    name="nieuwe-schade" 
                    value="Nieuw" />
                    Nieuwe schade
                <RadioButton 
                    v-model="damages.newDamage" 
                    inputId="oude-schade" 
                    name="oude-schade" 
                    value="Oud" />
                    Oude schade
            </label>
        </div>
        <br>
        <Calendar v-model="damages.date" dateFormat="yy-mm-dd" showIcon showButtonBar/>
        <br>
        <div class="flex align-items-center">
            <label for="acute-actie" class="ml-2">Acute actie vereist: </label>
            <RadioButton v-model="damages.acuteActionRequired" inputId="acute-actie" name="acute-actie" value="Vereist" />Vereist
            <RadioButton v-model="damages.acuteActionRequired" inputId="acute-actie" name="acute-actie" value="Niet Vereist" />Niet Vereist
        </div>
        <br>
        <Textarea v-model="damages.description" rows="5" cols="30" />
        <br>
        <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" :multiple="true" chooseLabel="Foto's voor deze Rapport" />
        <br>
        <Button label="Verzend" @click="showSchadeRapport()" />
        <br>
    </form>
</template>