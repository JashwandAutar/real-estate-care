<script setup>
    import { useRoute, RouterLink, useRouter } from 'vue-router';
    import { ref, reactive, onMounted } from 'vue';
    import axios from 'axios';
    import SvgIcon from '@jamescoyle/vue-icon';
    import {useInstallationRapportStore} from '../../components/stores/installationRapport';
    import { mdiArrowLeftThick } from '@mdi/js';
    import { useConfirm } from "primevue/useconfirm";

    const installationRapportStore = useInstallationRapportStore();
    
    const backToHome = ref(mdiArrowLeftThick);

    const confirm = useConfirm();
    
    const route = useRoute();
    const router = useRouter();
 
    let technicalInstallations = reactive({
            id: "",
            date: "",
            location: "",
            typeOfInstallation: "",
            reportedMalfunctions: "",
            approved: "",
            comments: ""
    });

    const deleteRapport = () => {
        installationRapportStore.deleteRapport(route.params.id);
        router.push("/feed");
    }

    const confirmDelete = () => {
        confirm.require({
            message: ' Wilt u deze rapportage verwijderen?',
            header: 'Verwijderen',
            icon: 'pi pi-info-circle',
            rejectLabel: 'Ja',
            acceptLabel: 'Nee',
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
    
    //const loading = ref(true);
    onMounted(() => {
        axios.get(`https://project-data-1-c7k7.onrender.com/technical-installations/${route.params.id}`).then((response) => {
            technicalInstallations.id = response.data.id;
            technicalInstallations.location = response.data.location;
            technicalInstallations.date = response.data.date;
            technicalInstallations.typeOfInstallation = response.data.typeOfInstallation;
            technicalInstallations.reportedMalfunctions = response.data.reportedMalfunctions;
            technicalInstallations.approved = response.data.approved;
            technicalInstallations.comments = response.data.comments;
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
        <h1>Installatie Detail</h1>
    </div>
    <div class="detail">
        <h2>{{ technicalInstallations.date.slice(0,10) }} | {{ technicalInstallations.location }}</h2>
        <hr>
        <p>Schade Type: <span class="bold">{{ technicalInstallations.typeOfInstallation.name }}</span></p>
        <p>Installatie goedgekeurd: <span class="bold">{{ technicalInstallations.approved }}</span></p>
        <br>
        <p>Gemelde storingen:</p>
        <p><span class="descriptions">{{ technicalInstallations.reportedMalfunctions }}</span></p>
        <br>
        <p>Opmerkingen:</p>
        <p><span class="descriptions">{{ technicalInstallations.comments }}</span></p>
        <br>
        <div class="button-group">
            <RouterLink :to="`/editinstallation/${technicalInstallations.id}`">
                <Button 
                    icon="pi pi-wrench" 
                    aria-label="Update" 
                    label="Aanpassen" 
                />
            </RouterLink>
            <ConfirmDialog/>
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
        font-weight: bold;
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