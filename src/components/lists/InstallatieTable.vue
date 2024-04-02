<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import { RouterLink } from 'vue-router';
    const yourData = ref([
    {id: 1, soortInstallatie: 'beveiliging', locatie: 'Den Haag', gemeldeStoringen: 'Extra cameras installeren', goedgekeurd: 'goedgekeurd', opmerkingen: 'Te veel dodenhoeken'}
    ]);
    // Define columns dynamically
    const columns = ref([
    { field: 'soortInstallatie', header: 'Soort Installatie' },
    { field: 'locatie', header: 'Locatie' },
    { field: 'gemeldeStoringen', header: 'Gemelde Storingen' },
    { field: 'goedgekeurd', header: 'Goedgekeurd' },
    { field: 'opmerkingen', header: 'Opmerkingen' },
    // Add more columns as needed
    ]);
    let installations = ref([]);
    onMounted(() => {
        console.log("Mounted");
        axios.get('http://localhost:3000/technical-installations').then((response) => {
            console.log(response.data);
            installations.value = response.data;
        });
    });
</script>

<template>
    <h2>Installaties</h2>
    
    <div v-for="install in installations" :key="install.id" class="rapport">
        <RouterLink :to="`/installationdetail/${install.id}`">
            <Card>
                <template #title>{{ install.location }}</template>
                <template #content>
                    <p>{{ install.typeOfInstallation }}</p>
                </template>
            </Card>
        </RouterLink>
    </div>
</template>

<style scoped>
    a{
        text-decoration: none;
    }
    .rapport{
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .rapport *{
        background-color: white;
        transition: all 0.5s;
    }
    .rapport *:hover *{
        background-color: var(--teal);
    }
</style>