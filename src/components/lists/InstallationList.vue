<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import { RouterLink } from 'vue-router';

    let installations = ref([]);
    onMounted(() => {
        axios.get('https://project-data-1-c7k7.onrender.com/technical-installations').then((response) => {
            installations.value = response.data;
        });
    });
</script>

<template>
    <h2>Installaties</h2>
    <div v-for="install in installations" :key="install.id" class="rapport">
        <RouterLink :to="`/installationdetail/${install.id}`">
            <Card>
                <template #title>{{ install.date.slice(0,10) }} , {{ install.location }}</template>
                <template #content>
                    <p>{{ install.typeOfInstallation.name }}</p>
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