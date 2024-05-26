<script setup>
    import { ref, reactive } from 'vue';
    import { useRouter } from 'vue-router';
    import { useToast } from "primevue/usetoast";
    import {useDamageRapportStore} from '../../components/stores/damageRapport';

    const router = useRouter();
    const toast = useToast();

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

    const showSchadeRapport = () => {
        damageRapportStore.postNewRapport(damages);
        toast.add({ 
            severity: 'Succes', 
            summary: 'Schade Rapport', 
            detail: ' schade rapport gemaakt ', 
            life: 6000 
        });
        router.push("/feed");
    };
    
    const onUpload = () => {
        toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
    };

    
</script>
<template>
    <form>  
        <h2>Schade opnemen</h2>
        <Toast />
        <FloatLabel>
            <InputText 
                id="locatie" 
                name="locatie" 
                v-model="damages.location" 
            />
            <label for="locatie">Locatie</label>
        </FloatLabel>
        <br>
        <label for="datum">&nbsp;Datum</label>
        <Calendar 
            id="datum" 
            v-model="damages.date" 
            dateFormat="yy-mm-dd" 
            showIcon 
            showButtonBar 
        />
        <br>
        <Dropdown 
            v-model="damages.typeOfDamage" 
            :options="schade" 
            optionLabel="name" 
            placeholder="Kies Schade Soort"
            class="w-full md:w-14rem" 
        />
        <br>
        <p>&nbsp;Acute Actie Vereist</p>
        <div class="button-group">
            <label for="vereist">
                <RadioButton 
                v-model="damages.acuteActionRequired" 
                inputId="vereist" 
                name="acute-actie" 
                value="Vereist" 
                />Vereist
            </label>
            <label for="niet-vereist">
                <RadioButton 
                v-model="damages.acuteActionRequired" 
                inputId="niet-vereist" 
                name="acute-actie" 
                value="Niet Vereist" 
                />Niet Vereist
            </label>
        </div>
        <br>
        <p>&nbsp;Nieuwe of Oude Schade</p>
        <div class="button-group">
            <label for="nieuwe-schade">
                <RadioButton 
                    v-model="damages.newDamage" 
                    inputId="nieuwe-schade" 
                    name="schade" 
                    value="Nieuw" 
                />
                Nieuwe schade
            </label>
            <label for="oude-schade">
                <RadioButton 
                    v-model="damages.newDamage" 
                    inputId="oude-schade" 
                    name="schade" 
                    value="Oud" 
                />
                Oude schade
            </label>
        </div>
        <br>
        <Textarea 
            v-model="damages.description" 
            rows="5" 
            cols="30" 
            placeholder="Beschrijving schade" 
        />
        <br>
        <FileUpload 
            mode="basic" name="demo[]" 
            url="/api/upload" 
            accept="image/*" 
            :maxFileSize="1000000" 
            @upload="onUpload" 
            :multiple="true" 
            chooseLabel="Foto's voor deze Rapport"
        />
        <br>
        <Button 
            label="Verzend" 
            @click="showSchadeRapport()" 
        />
        <br>
    </form>
</template>
<style scoped>
    h2{
        margin: 10px auto;
        font-size: 1.4rem;
    }
    .button-group{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 3px;
    }
    .button-group *{
        margin-left: 3px;
    }
    
</style>
