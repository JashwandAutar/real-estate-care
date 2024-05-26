<script setup>
    import { ref, reactive } from 'vue';
    import { useRouter } from 'vue-router';
    import { useToast } from "primevue/usetoast";
    import { useMaintenanceRapportStore } from '../../components/stores/maintenanceRapport';

    const router = useRouter();
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
    
    const maintenanceRapportStore = useMaintenanceRapportStore();
    
    let maintenances = reactive({
        location: "",
        date: "",
        typeOfMaintenance: "",
        acuteActionRequired: "",
        costEstimate: ""
    });

    const showOnderhoudRapport = () => {
        maintenanceRapportStore.postNewRapport(maintenances);
        toast.add({ 
            severity: 'Succes', 
            summary: 'Schade Rapport', 
            detail: 'Onderhoud Locatie ', 
            life: 3000 
        });
        router.push("/feed");
    };

    const onUpload = () => {
        toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
    };
</script>
<template>
    <form>   
        <h2>Achterstallig onderhoud opnemen</h2>
        <Toast />
        <FloatLabel>
            <InputText id="locatie" v-model="maintenances.location" />
            <label for="locatie">Locatie</label>
        </FloatLabel>
        <br>
        <label>&nbsp;Datum:</label>
        <Calendar v-model="maintenances.date" dateFormat="yy-mm-dd" showIcon showButtonBar/>
        <br>
        <Dropdown v-model="maintenances.typeOfMaintenance" :options="onderhoud" optionLabel="name" placeholder="Kies Onderhoud Soort" class="w-full md:w-14rem" />
        <br>
        <p>Acute Actie Vereist</p>
        <div class="button-group">
            <label for="vereist">
                <RadioButton 
                v-model="maintenances.acuteActionRequired" 
                inputId="vereist" 
                name="acute-actie" 
                value="Vereist" 
                />Vereist
            </label>
            <label for="niet-vereist">
                <RadioButton 
                v-model="maintenances.acuteActionRequired" 
                inputId="niet-vereist" 
                name="acute-actie" 
                value="Niet Vereist" 
                />Niet Vereist
            </label>
        </div>
        <br>
        <Dropdown 
            v-model="maintenances.costEstimate" 
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