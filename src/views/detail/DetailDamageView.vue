<script setup>
    import { useRoute, RouterLink } from 'vue-router';
    import { ref, reactive, onMounted } from 'vue';
    import axios from 'axios';
    import SvgIcon from '@jamescoyle/vue-icon';
    import { mdiArrowLeftThick } from '@mdi/js';
    
    const backToHome = ref(mdiArrowLeftThick);

    const route = useRoute();

    let damages = reactive({
            id: "",
            location: "",
            newDamage: "",
            typeOfDamage: "",
            date: "",
            acuteActionRequired: "",
            description: ""
    });
    
    onMounted(() => {
        axios.get(`http://localhost:3000/damages/${route.params.id}`).then((response) => {
            console.log(response.data);
            damages.id = response.data.id;
            damages.location = response.data.location;
            damages.newDamage = response.data.newDamage;
            damages.typeOfDamage = response.data.typeOfDamage;
            damages.soortSchade = response.data.soortSchade;
            damages.date = response.data.date;
            damages.acuteActionRequired = response.data.acuteActionRequired;
            damages.description = response.data.description;
            console.log(damages);
        });

        const editRapport = () => {
            axios.put();
        }
    });
</script>

<template>
    <h2><RouterLink to="/performed"><svg-icon type="mdi" :path="backToHome" /></RouterLink> Schade</h2>
    <div class="detail">
        <h2>{{ damages.date }} | {{ damages.location }}</h2>
        <hr>
        <p>Schade: <span class="bold">{{ damages.newDamage }}</span></p>
        <p>Type: <span class="bold">{{ damages.typeOfDamage }}</span></p>
        <p>Acute Actie: <span class="bold">{{ damages.acuteActionRequired }}</span></p>
        <p><span class="descriptions">{{ damages.description }}</span></p>
    </div>
</template>

<style scoped>
    .detail{
        margin-top: 1rem;
        border: 1px solid green;
        border-radius: 10px;
        padding: 3px;
    }
    h2{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 1.5rem;
    }
    .bold{
        font-weight: bolder;
    }
    .descriptions{
        border: 1px dashed black;
        padding: 3px;
    }   
    a{
        color: var(--teal);
        transition: color 0.5s;
        width: 60px;
        height: 68px;
        margin-inline-end: 10px;
    }
    a:hover{
        color: var(--black);
        transition: color 0.5s;
    }
    svg{
        width: 70px;
        height: 70px;
    } 
</style>