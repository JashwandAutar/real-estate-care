<script setup>
    import { ref, onMounted } from 'vue';
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


</script>

<template>
    <h2>Installaties</h2>
    <DataTable :value="yourData">
        <Column v-for="column in columns" :key="column.field" :field="column.field" :header="column.header"></Column>
    </DataTable>
</template>

<style scoped>
    
</style>