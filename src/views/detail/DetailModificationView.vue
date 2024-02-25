<script setup>
    import { useRoute, RouterLink } from 'vue-router';
    import { ref, reactive, onMounted } from 'vue';
    import axios from 'axios';
    import SvgIcon from '@jamescoyle/vue-icon';
    import { mdiArrowLeftThick } from '@mdi/js';
    
    const backToHome = ref(mdiArrowLeftThick);
    
    const route = useRoute();
    let modifications = reactive({
            id: "",
            location: "",
            executedBy: "",
            comments: "",
            actionToBeTaken: "",
            description: ""
    });
    //const loading = ref(true);
    onMounted(() => {
        
        axios.get(`http://localhost:3000/modifications/${route.params.id}`).then((response) => {
            console.log(response.data);
            modifications.id = response.data.id;
            modifications.location = response.data.location;
            modifications.executedBy = response.data.executedBy;
            modifications.actionToBeTaken = response.data.actionToBeTaken;
            modifications.description = response.data.description;
            modifications.comments = response.data.comments;
            console.log(modifications);
        });

        const editRapport = () => {
            axios.put();
        }
    });
</script>

<template>
    <h2><RouterLink to="/performed"><svg-icon type="mdi" :path="backToHome" /></RouterLink> Modificatie</h2>
    <div class="detail">
        <h3>{{ modifications.location }}</h3>
        <hr>
        <p>Uitgevoerd Door: <span class="bold">{{ modifications.executedBy }}</span></p>
        <p><span class="descriptions">{{ modifications.description }}</span></p>
        <p>Actie Ondernomen: <span class="bold">{{ modifications.actionToBeTaken}}</span></p>
        <p><span class="descriptions">{{ modifications.comments }}</span></p>
    </div>
</template>

<style scoped>
    .detail{
        margin-top: 1rem;
        border: 1px solid green;
        border-radius: 10px;
        padding: 3px;
    }

    .bold{
        font-weight: bolder;
    }

    .descriptions{
        border: 1px dashed black;
        padding: 3px;
    }   

    h2{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 1.5rem;
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