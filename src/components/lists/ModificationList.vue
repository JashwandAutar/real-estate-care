<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import { RouterLink } from 'vue-router';
    
    let modifications = ref([]);
    onMounted(() => {
        axios.get('https://project-data-1-c7k7.onrender.com/modifications').then((response) => {
            modifications.value = response.data;
        });
    });
</script>

<template>
    <h2>Modificaties</h2>
    <div v-for="mod in modifications" :key="mod.id" class="rapport">
        <RouterLink :to="`/modificationdetail/${mod.id}`">
            <Card>
                <template #title>{{ mod.date.slice(0,10) }} , {{ mod.location }}</template>
                <template #content>
                    <p>{{ mod.executedBy.name }}</p>
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