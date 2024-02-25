<script setup>
    import { useRoute, RouterLink } from 'vue-router';
    import { ref, reactive, onMounted } from 'vue';
    import axios from 'axios';
    import SvgIcon from '@jamescoyle/vue-icon';
    import { mdiArrowLeftThick } from '@mdi/js';
    
    const backToHome = ref(mdiArrowLeftThick);
    
    const route = useRoute();
 
    let technicalInstallations = reactive({
            id: "",
            location: "",
            typeOfInstallation: "",
            reportedMalfunctions: "",
            approved: "",
            comments: ""
    });
    
    //const loading = ref(true);
    onMounted(() => {
        axios.get(`http://localhost:3000/technical-installations/${route.params.id}`).then((response) => {
            console.log(response.data);
            technicalInstallations.id = response.data.id;
            technicalInstallations.location = response.data.location;
            technicalInstallations.typeOfInstallation = response.data.typeOfInstallation;
            technicalInstallations.reportedMalfunctions = response.data.reportedMalfunctions;
            technicalInstallations.approved = response.data.approved;
            technicalInstallations.comments = response.data.comments;
            console.log(technicalInstallations);
        });
        
        const editRapport = () => {
            axios.put();
        }
    });
</script>

<template>
    <h2><RouterLink to="/performed"><svg-icon type="mdi" :path="backToHome" /></RouterLink> Modificatie</h2>
    <div class="detail">
        <h3>{{ technicalInstallations.location }}</h3>
        <hr>
        <p>Schade Type: <span class="bold">{{ technicalInstallations.typeOfInstallation }}</span></p>
        <p>Gemelde storingen: <span class="descriptions">{{ technicalInstallations.reportedMalfunctions }}</span></p>
        <p><span class="bold">{{ technicalInstallations.approved }}</span></p>
        <p><span class="descriptions">{{ technicalInstallations.comments }}</span></p>
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