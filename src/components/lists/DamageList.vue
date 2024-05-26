<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import { RouterLink } from 'vue-router';
    
    let damages = ref([]);
    onMounted(() => {
        axios.get('https://project-data-1-c7k7.onrender.com/damages').then((response) => {
            damages.value = response.data;
        });
    });
</script>

<template>
    <h2>Schade</h2>
    <div v-for="damage in damages" :key="damage.id" class="rapport">
        <RouterLink :to="`/damagedetail/${damage.id}`">
            <Card>
                <template #title>{{ damage.date.slice(0,10) }} , {{ damage.location }}</template>
                <template #content>
                    <p>{{ damage.typeOfDamage.name }}</p>
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