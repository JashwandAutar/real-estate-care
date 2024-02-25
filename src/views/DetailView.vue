<script setup>
    import { useRoute } from 'vue-router';
    import { reactive, onMounted } from 'vue';
    import axios from 'axios';
    
    const route = useRoute();
    

    
    let damages = reactive({
            id: "",
            location: "",
            newDamage: "",
            typeOfDamage: "",
            date: "",
            acuteActionRequired: "",
            description: ""
    });
    let outstandingMaintenance = reactive({
            id: "",
            location: "",           
            typeOfMaintenance: "",
            acuteActionRequired: "",
            costEstimate: ""
    });
    let technicalInstallations = reactive({
            id: "",
            location: "",
            typeOfInstallation: "",
            reportedMalfunctions: "",
            approved: "",
            comments: ""
    });
    let modifications = reactive({
            id: "",
            location: "",
            executedBy: "",
            comments: "",
            actionToBeTaken: "",
            description: ""
    });
    //const loading = ref(true);
    onMounted(() => {
        axios.get(`http://localhost:3000/damages/${route.params.id}`).then((response) => {
            console.log(response.data);
            damages.id = response.data.id;
            damages.locatie = response.data.location;
            damages.nieuweSchade = response.data.newDamage;
            damages.soortSchade = response.data.soortSchade;
            damages.datum = response.data.datum;
            damages.acuteActieVereist = response.data.acuteActionRequired;
            damages.omschrijving = response.data.description;
            console.log(damages);
        });

        axios.get(`http://localhost:3000/outstanding-maintenance/${route.params.id}`).then((response) => {
            console.log(response.data);
            outstandingMaintenance.id = response.data.id;
            outstandingMaintenance.locatie = response.data.location;
            
            outstandingMaintenance.soortOnderhoud = response.data.typeOfMaintenance;
            
            outstandingMaintenance.acuteActieVereist = response.data.acuteActionRequired;
            outstandingMaintenance.kostenindicatie = response.data.costEstimate;
            console.log(outstandingMaintenance);
        });
        axios.get(`http://localhost:3000/technical-installations/${route.params.id}`).then((response) => {
            console.log(response.data);
            technicalInstallations.id = response.data.id;
            technicalInstallations.locatie = response.data.location;
            
            technicalInstallations.soortInstallatie = response.data.typeOfInstallation;
            technicalInstallations.gemeldeStoringen = response.data.reportedMalfunctions;
            technicalInstallations.goedgekeurd = response.data.approved;
            technicalInstallations.opmerkingen = response.data.comments;
            console.log(technicalInstallations);
        });
        axios.get(`http://localhost:3000/modifications/${route.params.id}`).then((response) => {
            console.log(response.data);
            modifications.id = response.data.id;
            modifications.locatie = response.data.location;
            
            modifications.uitgevoerdDoor = response.data.executedBy;
            modifications.actieOndernomen = response.data.actionToBeTaken;
            modifications.omschrijving = response.data.description;
            modifications.opmerkingen = response.data.comments;
            console.log(modifications);
        });

        const editRapport = () => {
            axios.put();
        }
    });
</script>

<template>
    <div class="detail">
        <h2>Detail pagina</h2>
        <!-- <p>{{ schades.locatie }}, {{ schades.datum }}</p>
        <p>{{ schades.soortSchade }}</p>
        <p>{{ schades.omschrijving }}</p>
        <p v-if="schades.acuteActieVereist">Acute Actie is Vereist</p>
        <p v-else>Acute Actie is NIET Vereist</p> -->
    </div>
</template>

<style scoped>
    .detail{
        margin-top: 1rem;
        border: 1px solid green;
        border-radius: 10px;
        padding: 3px;
    }

</style>