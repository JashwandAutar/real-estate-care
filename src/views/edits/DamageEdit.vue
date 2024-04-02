<script setup>
    import { ref, onMounted } from 'vue';
    import { useToast } from "primevue/usetoast";
    import {useDamageRapportStore} from '../../components/stores/damageRapport';
    import { useRoute } from 'vue-router';
    
    const route = useRoute();

    const storeDamageRapport = useDamageRapportStore();
    storeDamageRapport.fetchDamageRapport(route.params.id);
    
    const toast = useToast();

    const selectedDamage = ref();
    const schade = ref([
        { name: 'Moedwilleg' },
        { name: 'Slijtage' },
        { name: 'Geweld' },
        { name: 'Normaal gebruik' },
        { name: 'Calamiteit' },
        { name: 'Anders' }
    ]);

    const date = ref();
    
    
    const onUpload = () => {
        toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
        storeDamageRapport.editAndSave(route.params.id, storeDamageRapport.damages);
    };

    console.log(storeDamageRapport.damages.typeOfDamage);
    console.log(typeof(storeDamageRapport.damages.typeOfDamage));
</script>
<template>
    <form>  
        <h2>Schade opnemen</h2>
        <Toast />
        <span class="p-float-label">
            <InputText id="locatie" v-model="storeDamageRapport.damages.location" />
            <label for="locatie">Locatie</label>
        </span>
        <br>
        <Dropdown 
            v-model="storeDamageRapport.damages.typeOfDamage" 
            :options="schade" 
            optionLabel="name" 
            placeholder="Kies Schade Soort" 
            class="w-full md:w-14rem" 
        />
        <br>
        <div class="flex align-items-center">
            <label for="schade" class="ml-2">
                Oud of Nieuw: 
            </label>
            <RadioButton 
                    v-model="storeDamageRapport.damages.newDamage" 
                    inputId="nieuwe-schade" 
                    name="nieuwe-schade" 
                    value="Nieuw" />
                    Nieuwe schade
                <RadioButton 
                    v-model="storeDamageRapport.damages.newDamage" 
                    inputId="oude-schade" 
                    name="oude-schade" 
                    value="Oud" />
                    Oude schade
        </div>
        <br>
        <Calendar v-model="storeDamageRapport.damages.date" dateFormat="dd-mm-yy" showIcon showButtonBar/>
        <br>
        <div class="flex align-items-center">
            <label for="acute-actie" class="ml-2">Acute actie vereist: </label>
            <RadioButton v-model="storeDamageRapport.damages.acuteActionRequired" inputId="acute-actie" name="acute-actie" value="Vereist" />Vereist
            <RadioButton v-model="storeDamageRapport.damages.acuteActionRequired" inputId="acute-actie" name="acute-actie" value="Niet Vereist" />Niet Vereist
        </div>
        <br>
        <Textarea v-model="storeDamageRapport.damages.description" rows="5" cols="30" />
        <br>
        <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" :multiple="true" chooseLabel="Foto's voor deze Rapport" />
        <br>
        <Button label="Verzend" @click="onUpload()" />
        <br>
    </form>
</template>