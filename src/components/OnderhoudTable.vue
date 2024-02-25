<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import { RouterLink } from 'vue-router';
    
    let maintenance = ref([]);
    onMounted(() => {
        console.log("Mounted");
        axios.get('http://localhost:3000/outstanding-maintenance').then((response) => {
            console.log(response.data);
            maintenance.value = response.data;
        });
    });
</script>

<template>
    <h2>Onderhoud</h2>
    
    <div v-for="main in maintenance" :key="maintenance.id" class="rapport">
        <RouterLink :to="`/maintanencedetail/${main.id}`">
            <Card>
                <template #title>{{ main.location }}</template>
                <template #content>
                    <p>{{ main.typeOfMaintenance }}</p>
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