<script setup>
    import { ref, onMounted } from 'vue';
    const yourData = ref([
        {id: 1, datum: '22-11-2023', soortSchade: 'Slijtage', locatie: 'Den Haag', nieuweSchade: 'nieuw', acuteActieVereist: 'vereist', omschrijving: 'Waterleidingen verroest'}
    ]);

    // Define columns dynamically
    const columns = ref([
    
    { field: 'datum', header: 'Datum' },
    { field: 'soortSchade', header: 'Soort Schade' },
    { field: 'locatie', header: 'Locatie' },
    { field: 'nieuweSchade', header: 'Nieuwe Schade' },
    { field: 'acuteActieVereist', header: 'Acute Actie Vereist' },
    { field: 'omschrijving', header: 'Omschrijving' },
    // Add more columns as needed
    ]);


</script>

<template>
    <h2>Schade</h2>
    <DataTable :value="yourData">
        <Column v-for="column in columns" :key="column.field" :field="column.field" :header="column.header"></Column>
    </DataTable>
</template>

<style scoped>

</style>