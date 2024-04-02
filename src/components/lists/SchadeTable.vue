<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import { RouterLink } from 'vue-router';
    

    let damages = ref([]);
    onMounted(() => {
        console.log("Mounted");
        axios.get('http://localhost:3000/damages').then((response) => {
            console.log(response.data);
            damages.value = response.data;
        });
    });
</script>

<template>
    <h2>Schade</h2>
    
    <div v-for="damage in damages" :key="damage.id" class="rapport">
        <RouterLink :to="`/damagedetail/${damage.id}`">
            <Card>
                <template #title>{{ damage.date }} , {{ damage.location }}</template>
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