<script setup>
    import { useRoute, RouterLink, useRouter } from 'vue-router';
    import { ref, reactive, onMounted } from 'vue';
    import axios from 'axios';
    import SvgIcon from '@jamescoyle/vue-icon';
    import { mdiArrowLeftThick } from '@mdi/js';
    import {useModificationRapportStore} from '../../components/stores/modificationRapport';
    import { useConfirm } from "primevue/useconfirm";

    const modificationRapportStore = useModificationRapportStore();

    const backToHome = ref(mdiArrowLeftThick);

    const confirm = useConfirm();

    const route = useRoute();
    const router = useRouter();

    let modifications = reactive({
            id: "",
            date: "",
            location: "",
            executedBy: "",
            comments: "",
            actionToBeTaken: "",
            description: ""
    });
    //const loading = ref(true);
    const deleteRapport = () => {
        modificationRapportStore.deleteRapport(route.params.id);
        router.push("/performed");
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
        axios.get(`http://localhost:3000/modifications/${route.params.id}`).then((response) => {
            modifications.id = response.data.id;
            modifications.date = response.data.date;
            modifications.location = response.data.location;
            modifications.executedBy = response.data.executedBy;
            modifications.actionToBeTaken = response.data.actionToBeTaken;
            modifications.description = response.data.description;
            modifications.comments = response.data.comments;
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
        <h1>Modificatie Detail</h1>
    </div>
    <div class="detail">
        <h2>{{ modifications.date.slice(0,10) }} | {{ modifications.location }}</h2>
        <hr>
        <p>Uitgevoerd Door: <span class="bold">{{ modifications.executedBy.name }}</span></p>
        <p>Omschrijving:</p>
        <p><span class="descriptions">{{ modifications.description}}</span></p>
        <br>
        <p>Actie Ondernomen: <span class="bold">{{ modifications.actionToBeTaken.name}}</span></p>
        <p>Opmerkingen:</p>
        <p><span class="descriptions">{{ modifications.comments }}</span></p>
        <br>
        <div class="button-group">
            <RouterLink 
                :to="`/editmodification/${modifications.id}`"
            >
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