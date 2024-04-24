<script setup>
    import { ref } from 'vue';
    import { useToast } from "primevue/usetoast";
    import {useMaintenanceRapportStore} from '../../components/stores/maintenanceRapport';
    import { useRoute, useRouter } from 'vue-router';
    import { mdiArrowLeftThick } from '@mdi/js';
    import SvgIcon from '@jamescoyle/vue-icon';
    
    const backToHome = ref(mdiArrowLeftThick);

    const route = useRoute();
    const router = useRouter();
    
    const storeMaintenanceRapport = useMaintenanceRapportStore();
    storeMaintenanceRapport.fetchMaintenanceRapport(route.params.id);

    const toast = useToast();

    const onderhoud = ref([
        { name: 'Schilderwerk' },
        { name: 'Houtrot' },
        { name: 'Elektra' },
        { name: 'Leidingwerk' },
        { name: 'Beglazing' }
    ]);

    const kosten = ref([
        { name: '0-500' },
        { name: '500-1500' },
        { name: '1500+' }
    ]);

    const showOnderhoudRapport = () => {
        // toast.add({ 
        //     severity: 'Succes', 
        //     summary: 'Schade Rapport', 
        //     detail: 'Onderhoud Locatie: ' + onderhoudLocatie.value + "Type onderhoud: " + selectedOnderhoud.value.name + "Acute actie vereist: " + onderhoudActie.value + "Kostenindicatie: " + selectedKosten.value.name, 
        //     life: 3000 
        // });
        storeMaintenanceRapport.editAndSave(route.params.id, storeMaintenanceRapport.maintenances);
        router.push("/performed");
    };

    const onUpload = () => {
        toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
    };
</script>
<template>
    <div class="page-title">
        <RouterLink :to="`/maintenancedetail/${route.params.id}`"><svg-icon type="mdi" :path="backToHome" /><span>Ga Terug</span></RouterLink>
        <h1>Onderhoud Update</h1>
    </div>
    <form>   
        <h2>Achterstallig onderhoud opnemen</h2>
        <Toast />
        <FloatLabel>
            <InputText 
                id="locatie" 
                v-model="storeMaintenanceRapport.maintenances.location" 
            />
            <label for="locatie">Locatie</label>
        </FloatLabel>
        <br>
        <label for="datum">&nbsp;Datum</label>
        <Calendar 
            id="datum" 
            v-model="storeMaintenanceRapport.maintenances.date" 
            dateFormat="yy-mm-dd" 
            showIcon 
            showButtonBar
        />
        <br>
        <Dropdown 
            v-model="storeMaintenanceRapport.maintenances.typeOfMaintenance" 
            :options="onderhoud" 
            optionLabel="name" 
            placeholder="Kies Onderhoud Soort" 
            class="w-full md:w-14rem" 
        />
        <br>
        <p>Acute Actie Vereist</p>
        <div class="button-group">
            <label for="vereist">
                <RadioButton 
                v-model="storeMaintenanceRapport.maintenances.acuteActionRequired" 
                inputId="vereist" 
                name="acute-actie" 
                value="Vereist" 
                />Vereist
            </label>
            <label for="niet-vereist">
                <RadioButton 
                v-model="storeMaintenanceRapport.maintenances.acuteActionRequired" 
                inputId="niet-vereist" 
                name="acute-actie" 
                value="Niet Vereist" 
                />Niet Vereist
            </label>
        </div>
        <br>
        <Dropdown 
            v-model="storeMaintenanceRapport.maintenances.costEstimate" 
            :options="kosten" 
            optionLabel="name" 
            placeholder="KostenIndicatie" 
            class="w-full md:w-14rem" 
        />
        <br>
        <FileUpload 
            mode="basic" 
            name="demo[]" 
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
            @click="showOnderhoudRapport()" 
        />
        <br>
    </form>
</template>
<style scoped>
    h2{
        margin: 10px auto;
        font-size: 1.4rem;
    }
    form{
        margin: auto;
        margin-top: 10px;
        margin-bottom: 10px;
        max-width: 1000px;
        border: 3px solid rgba(0,170,162);
        background-color: rgba(41, 52, 57, 0.201);
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        padding: 5px;
    }
    .detail{
        margin-top: 1rem;
        border: 1px solid green;
        border-radius: 10px;
        padding: 3px;
    }
    h1{
        font-size: 1.5rem;
    }
    .page-title{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    a{
        color: var(--black);
        transition: color 0.5s;
        margin-inline-end: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    a:hover{
        color: var(--teal);
        transition: color 0.5s;
    }
    a span{
        font-size: 1.5rem;
        color: var(--black);
    }
    a:hover span{
        color: var(--teal);
        transition: color 0.5s;
    }
    .bold{
        font-weight: bolder;
    }
    .descriptions{
        border: 1px dashed black;
        padding: 3px;
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
    svg{
        width: 70px;
        height: 70px;
    } 
</style>