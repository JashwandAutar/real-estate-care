<script setup>
    import { useRoute, RouterLink, useRouter } from 'vue-router';
    import { ref, reactive, onMounted } from 'vue';
    import axios from 'axios';
    import SvgIcon from '@jamescoyle/vue-icon';
    import { mdiArrowLeftThick } from '@mdi/js';
    import {useMaintenanceRapportStore} from '../../components/stores/maintenanceRapport';
    import { useConfirm } from "primevue/useconfirm";

    const maintenanceRapportStore = useMaintenanceRapportStore();

    const backToHome = ref(mdiArrowLeftThick);

    const confirm = useConfirm();

    const route = useRoute();
    const router = useRouter();

    let outstandingMaintenance = reactive({
            id: "",
            date: "",
            location: "",           
            typeOfMaintenance: "",
            acuteActionRequired: "",
            costEstimate: ""
    });

    const deleteRapport = () => {
        maintenanceRapportStore.deleteRapport(route.params.id);
        router.push("/feed");
    }

    const confirmDelete = () => {
        confirm.require({
            message: ' Wilt u deze rapportage verwijderen?',
            header: 'Verwijderen',
            icon: 'pi pi-info-circle',
            rejectLabel: 'Nee',
            acceptLabel: 'Ja',
            rejectClass: 'p-button-secondary p-button-outlined',
            acceptClass: 'p-button-danger',
            accept: () => {
                deleteRapport();
            },
            reject: () => {
                // do nothing
            }
        });
    };
    
    onMounted(() => {
        axios.get(`https://project-data-1-c7k7.onrender.com/outstanding-maintenance/${route.params.id}`).then((response) => {
            outstandingMaintenance.id = response.data.id;
            outstandingMaintenance.date = response.data.date;
            outstandingMaintenance.location = response.data.location;
            outstandingMaintenance.typeOfMaintenance= response.data.typeOfMaintenance;
            outstandingMaintenance.acuteActionRequired = response.data.acuteActionRequired;
            outstandingMaintenance.costEstimate = response.data.costEstimate;
        });
    });
</script>

<template>
    <div class="page-title">
        <RouterLink to="/performed">
            <svg-icon 
                type="mdi" 
                :path="backToHome" 
            />
            <span>Ga Terug</span>
        </RouterLink>
        <h1>Onderhoud Detail</h1>
    </div>
    <div class="detail">
        <h2>{{ outstandingMaintenance.date.slice(0,10) }} | {{ outstandingMaintenance.location }}</h2>
        <hr>
        <p>Type Onderhoud: <span class="bold">{{ outstandingMaintenance.typeOfMaintenance.name }}</span></p>
        <p>Acute Actie: <span class="bold">{{ outstandingMaintenance.acuteActionRequired }}</span></p>
        <p>Kosten Indicatie: <span class="bold">{{ outstandingMaintenance.costEstimate.name }}</span></p>
        <br>
        <div class="button-group">
            <RouterLink 
                :to="`/editmaintenance/${outstandingMaintenance.id}`">
                <Button 
                    icon="pi pi-wrench" 
                    aria-label="Update" 
                    label="Aanpassen" 
                />
            </RouterLink>
            <ConfirmDialog />
            <Button 
                icon="pi pi-times" 
                severity="danger" 
                aria-label="Delete" 
                label="Verwijder" 
                @click="confirmDelete()"
            />
        </div>
    </div>
</template>

<style scoped>
    .detail{
        margin-top: 1rem;
        border: 1px solid green;
        border-radius: 10px;
        padding: 3px;
    }
    h1{
        font-size: 1.8rem;
    }
    h2{
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 5px;
    }
    .page-title{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .button-group{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    p{
        font-size: 1.25rem;
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
    :deep(.text-white){
        color: rgba(41,52,57);
    }
    :deep(.text-white:hover){
        color: rgb(255, 255, 255)
    }
</style>