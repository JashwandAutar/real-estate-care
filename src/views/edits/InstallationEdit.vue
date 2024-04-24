<script setup>
    import { ref } from 'vue';
    import { useToast } from "primevue/usetoast";
    import { useInstallationRapportStore } from '../../components/stores/installationRapport';
    import { useRoute, useRouter } from 'vue-router';
    import { mdiArrowLeftThick } from '@mdi/js';
    import SvgIcon from '@jamescoyle/vue-icon';
    
    const backToHome = ref(mdiArrowLeftThick);
    
    const route = useRoute();
    const router = useRouter();

    const storeInstallationRapport = useInstallationRapportStore();
    storeInstallationRapport.fetchInstallationRapport(route.params.id);

    const toast = useToast();

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
            detail: 'Installatie Locatie: ', 
            life: 3000 
        });
        storeInstallationRapport.editAndSave(route.params.id, storeInstallationRapport.installations);
        router.push("/performed");
    };
    const onUpload = () => {
        toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
    };
</script>
<template>
    <div class="page-title">
        <RouterLink :to="`/installationdetail/${route.params.id}`">
            <svg-icon 
                type="mdi" 
                :path="backToHome" 
            />
            <span>Ga Terug</span>
        </RouterLink>
        <h1>Installatie Update</h1>
    </div>
    <form>  
        <h2>Technische installaties inspecteren</h2>
        <Toast />
        <a 
            href="/public/files/WEB_handboek-RVB-BOEI-Deel1.pdf" 
            target="_blank" rel="noopener noreferrer" 
            class="p-button font-bold"
        >
            <Button label="Testprocedure" />
        </a>
        <br>
        <FloatLabel>
            <InputText 
                id="locatie" 
                v-model="storeInstallationRapport.installations.location" 
            />
            <label for="locatie">Locatie</label>
        </FloatLabel>
        <br>
        <label for="datum">&nbsp;Datum</label>
        <Calendar 
            id="datum" 
            v-model="storeInstallationRapport.installations.date" 
            dateFormat="yy-mm-dd" 
            showIcon 
            showButtonBar
        />
        <br>
        <Dropdown 
            v-model="storeInstallationRapport.installations.typeOfInstallation" 
            :options="installatie" 
            optionLabel="name" 
            placeholder="Kies Installatie Soort" 
            class="w-full md:w-14rem" 
        />
        <br>
        <Textarea 
            v-model="storeInstallationRapport.installations.reportedMalfunctions" 
            rows="5" 
            cols="30" 
            placeholder="Gemelde Storingen" 
        />
        <br>
        <div class="button-group">
            <label for="goed-gekeurd">
                <RadioButton 
                    v-model="storeInstallationRapport.installations.approved" 
                    inputId="goed-gekeurd" 
                    name="goedgekeurd-installatie" 
                    value="Goed Gekeurd" 
                />
                Goed Gekeurd
            </label>
            <label for="niet-goed-gekeurd">
                <RadioButton 
                    v-model="storeInstallationRapport.installations.approved" 
                    inputId="niet-goed-gekeurd" 
                    name="goedgekeurd-installatie" 
                    value="Niet Vereist" 
                />
                Niet Goed Gekeurd
            </label>
        </div>
        <br>
        <Textarea 
            v-model="storeInstallationRapport.installations.comments" 
            rows="5" 
            cols="30"
            placeholder="Opmerkingen"
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
            @click="showInstallatieRapport()" 
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
    svg{
        width: 70px;
        height: 70px;
    } 
</style>