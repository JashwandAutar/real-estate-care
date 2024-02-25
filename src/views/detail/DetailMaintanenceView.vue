<script setup>
    import { useRoute, RouterLink } from 'vue-router';
    import { ref, reactive, onMounted } from 'vue';
    import axios from 'axios';
    import SvgIcon from '@jamescoyle/vue-icon';
    import { mdiArrowLeftThick } from '@mdi/js';
    
    const backToHome = ref(mdiArrowLeftThick);
    
    const route = useRoute();

    let outstandingMaintenance = reactive({
            id: "",
            location: "",           
            typeOfMaintenance: "",
            acuteActionRequired: "",
            costEstimate: ""
    });
    
    onMounted(() => {
        
        axios.get(`http://localhost:3000/outstanding-maintenance/${route.params.id}`).then((response) => {
            console.log(response.data);
            outstandingMaintenance.id = response.data.id;
            outstandingMaintenance.location = response.data.location;
            outstandingMaintenance.typeOfMaintenance= response.data.typeOfMaintenance;
            outstandingMaintenance.acuteActionRequired = response.data.acuteActionRequired;
            outstandingMaintenance.costEstimate = response.data.costEstimate;
            console.log(outstandingMaintenance);
        });

        const editRapport = () => {
            axios.put();
        }
    });
</script>

<template>
    <h2><RouterLink to="/performed"><svg-icon type="mdi" :path="backToHome" /></RouterLink>Acterstallig Onderhoud</h2>
    <div class="detail">
        <h3>{{ outstandingMaintenance.location }}</h3>
        <hr>
        <p>Type Onderhoud: <span class="bold">{{ outstandingMaintenance.typeOfMaintenance }}</span></p>
        <p>Acute Actie: <span class="bold">{{ outstandingMaintenance.acuteActionRequired }}</span></p>
        <p>Kosten Indicatie: <span class="bold">{{ outstandingMaintenance.costEstimate }}</span></p>
    </div>
</template>

<style scoped>
    .detail{
        margin-top: 1rem;
        border: 1px solid green;
        border-radius: 10px;
        padding: 3px;
    }
    .bold{
        font-weight: bolder;
    }

    h2{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 1.5rem;
    }

    a{
        color: var(--teal);
        transition: color 0.5s;
        width: 60px;
        height: 68px;
        margin-inline-end: 10px;
    }

    a:hover{
        color: var(--black);
        transition: color 0.5s;
    }

    svg{
        width: 70px;
        height: 70px;
    }
</style>