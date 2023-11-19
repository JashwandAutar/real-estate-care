<script setup>
    import { ref, onMounted } from 'vue';
    const yourData = ref([
        {id: 1, soortOnderhoud: 'Schilderwerk', locatie: 'Den Haag',  acuteActieVereist: 'vereist', kostenindicatie: '0-500'}
    ]);

    // Define columns dynamically
    const columns = ref([

        { field: 'soortOnderhoud', header: 'Soort Onderhoud' },
        { field: 'locatie', header: 'Locatie' },
        { field: 'acuteActieVereist', header: 'Acute Actie Vereist' },
        { field: 'kostenindicatie', header: 'Kostenindicatie' },

    ]);


</script>

<template>
    <h2>Onderhoud</h2>
    <DataTable :value="yourData">
        <Column v-for="column in columns" :key="column.field" :field="column.field" :header="column.header"></Column>
    </DataTable>
</template>

<style scoped>
    
</style>