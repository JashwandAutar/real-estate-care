<script setup>
    import { ref } from 'vue';

    const value = ref(null);
    const options = ref([
        { name: 'Schade opnemen', value: 1 },
        { name: 'Achterstallig onderhoud opnemen', value: 2 },
        { name: 'Technische installaties inspecteren', value: 3 },
        { name: 'Modificaties inventariseren', value: 4 }
    ]);
</script>

<template>
    <form>
        <SelectButton v-model="value" :options="options" optionLabel="name" multiple aria-labelledby="multiple" />
    </form>
    <p>{{ value }}</p>
</template>