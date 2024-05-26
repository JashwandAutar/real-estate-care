<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import { RouterLink } from 'vue-router';
    
    let maintenance = ref([]);
    onMounted(() => {
        axios.get('https://project-data-1-c7k7.onrender.com/outstanding-maintenance').then((response) => {
            maintenance.value = response.data;
        });
    });
</script>

<template>
    <h2>Onderhoud</h2>
    <div v-for="main in maintenance" :key="maintenance.id" class="rapport">
        <RouterLink :to="`/maintanencedetail/${main.id}`">
            <Card>
                <template #title>{{ main.date.slice(0,10) }} , {{ main.location }}</template>
                <template #content>
                    <p>{{ main.typeOfMaintenance.name }}</p>
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