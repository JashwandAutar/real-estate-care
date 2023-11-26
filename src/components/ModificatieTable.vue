<script setup>
    import { ref, onMounted } from 'vue';
    const yourData = ref([
        {id: 1, locatie: 'Den Haag', uitgevoerdDoor: 'Huurder', beschrijving: 'Nieuwe vloer op de balkon gezet', actieOndernemen: 'accepteren', opmerkingen: 'Oude vloer was van hout en gaf splinters'}
    ]);
    // Define columns dynamically
    const columns = ref([
        { field: 'uitgevoerdDoor', header: 'Uitgevoerd door' },
        { field: 'locatie', header: 'Locatie' },
        { field: 'beschrijving', header: 'Beschrijving' },
        { field: 'actieOndernemen', header: 'actieOndernemen' },
        { field: 'opmerkingen', header: 'Opmerkingen' },
        // Add more columns as needed
    ]);
</script>

<template>
    <h2>Modificaties</h2>
    <DataTable :value="yourData">
        <Column v-for="column in columns" :key="column.field" :field="column.field" :header="column.header"></Column>
    </DataTable>
</template>

<style scoped>
</style>