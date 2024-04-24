<script setup>
    import { useRoute, RouterLink, useRouter } from 'vue-router';
    import { ref, reactive, onMounted } from 'vue';
    import axios from 'axios';
    import SvgIcon from '@jamescoyle/vue-icon';
    import { mdiArrowLeftThick } from '@mdi/js';
    import {useDamageRapportStore} from '../../components/stores/damageRapport';
    import { useConfirm } from "primevue/useconfirm";

    const damageRapportStore = useDamageRapportStore();

    const backToHome = ref(mdiArrowLeftThick);

    const confirm = useConfirm();

    const route = useRoute();
    const router = useRouter();

    let damages = reactive({
            id: "",
            location: "",
            newDamage: "",
            typeOfDamage: "",
            date: "",
            acuteActionRequired: "",
            description: ""
    });

    const deleteRapport = () => {
        damageRapportStore.deleteRapport(route.params.id);
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
        axios.get(`http://localhost:3000/damages/${route.params.id}`).then((response) => {
            damages.id = response.data.id;
            damages.location = response.data.location;
            damages.newDamage = response.data.newDamage;
            damages.typeOfDamage = response.data.typeOfDamage;
            damages.date = response.data.date;
            damages.acuteActionRequired = response.data.acuteActionRequired;
            damages.description = response.data.description;
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
        <h1>Schade Detail</h1>
    </div>
    <div class="detail">
        <h2>{{ damages.date.slice(0,10) }} | {{ damages.location }}</h2>
        <hr>
        <p>Schade: <span class="bold">{{ damages.newDamage }}</span></p>
        <p>Type: <span class="bold">{{ damages.typeOfDamage.name }}</span></p>
        <p>Acute Actie: <span class="bold">{{ damages.acuteActionRequired }}</span></p>
        <br>
        <p>Omschrijving:</p>
        <p><span class="descriptions">{{ damages.description }}</span></p>
        <br>
        <div class="button-group">
            <RouterLink :to="`/editdamage/${damages.id}`">
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
        padding: 5px;
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