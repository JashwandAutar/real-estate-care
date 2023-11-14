<script setup>
    import { ref } from 'vue';
    import { useToast } from "primevue/usetoast";

    const toast = useToast();

    const onderhoudActie = ref();
    const onderhoudLocatie = ref();
    const selectedOnderhoud = ref();
    const onderhoud = ref([
        { name: 'Schilderwerk' },
        { name: 'Houtrot' },
        { name: 'Elektra' },
        { name: 'Leidingwerk' },
        { name: 'Beglazing' }
    ]);

    const selectedKosten = ref();
    const kosten = ref([
        { name: '0-500' },
        { name: '500-1500' },
        { name: '1500+' }
    ]);

    const showOnderhoudRapport = () => {
        toast.add({ 
            severity: 'Succes', 
            summary: 'Schade Rapport', 
            detail: 'Onderhoud Locatie: ' + onderhoudLocatie.value , 
            life: 3000 
        });
    };
</script>
<template>
    <form>   
        <h2>Achterstallig onderhoud opnemen</h2>
        <Toast />
        <span class="p-float-label">
            <InputText id="locatie" v-model="onderhoudLocatie" />
            <label for="locatie">Locatie</label>
        </span>
        <br>
        <Dropdown v-model="selectedOnderhoud" :options="onderhoud" optionLabel="name" placeholder="Kies Onderhoud Soort" class="w-full md:w-14rem" />
        <br>
        <div class="flex align-items-center">
            <RadioButton v-model="onderhoudActie" inputId="acute-actie" name="acute-actie" value="vereist" />
            <label for="acute-actie" class="ml-2"> Acute actie vereist</label>
        </div>
        <br>
        <Dropdown v-model="selectedKosten" :options="kosten" optionLabel="name" placeholder="KostenIndicatie" class="w-full md:w-14rem" />
        <br>
        <Button label="Verzend" @click="showOnderhoudRapport()" />
        <br>
    </form>
</template>