<script setup>
    import { ref } from 'vue';
    import { useToast } from "primevue/usetoast";
    const toast = useToast();

    const editingSchade = ref(false);
    const editingOnderhoud = ref(false);
    const editingInstallatie = ref(false);
    const editingModificatie = ref(false);

    const schadeLocatie = ref();
    const schadeNieuw = ref();
    const schadeActie = ref();
    const schadeOmschrijving = ref();
    const selectedSchade = ref();
    const schade = ref([
        { name: 'Moedwilleg' },
        { name: 'Slijtage' },
        { name: 'Geweld' },
        { name: 'Normaal gebruik' },
        { name: 'Calamiteit' },
        { name: 'Anders' }
    ]);

    const date = ref();
    const showSchadeRapport = () => {
        toast.add({ 
            severity: 'Succes', 
            summary: 'Schade Rapport', 
            detail: 'schadeLocatie: ' + schadeLocatie.value + 'Nieuwe schade: ' + schadeNieuw.value + 'Type schade: ' + selectedSchade.value + 'Datum: ' + date.value + 'Opmerkingen: ' + schadeOmschrijving.value, 
            life: 3000 
        });
    };
    
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

    const installatieLocatie = ref();
    const gemeldeStoringenInstallatie = ref();
    const selectedInstallatie = ref();
    const installatie = ref([
        { name: 'Koeling' },
        { name: 'Verwarming' },
        { name: 'Luchtverversing' },
        { name: 'Elektra' },
        { name: 'Beveiliging' }
    ]);

    const showInstallatieRapport = () => {
        toast.add({ 
            severity: 'Succes', 
            summary: 'Installatie Rapport', 
            detail: 'Installatie Locatie: ' + installatieLocatie.value, 
            life: 3000 
        });
    };

    const modificatieLocatie = ref();
    const selectedModificatieUitgevoerd = ref();
    const modificatieUitgevoerd = ref([
        { name: 'Huurder' },
        { name: 'Aannemer' },
        { name: 'Onbekend' }
    ]);
    const selectedModificatieActie = ref();
    const beschrijvingModificatie = ref();
    const modificatieActie = ref([
        { name: 'Accepteren' },
        { name: 'Laten Keuren' },
        { name: 'Laten Verwijderen' },
        { name: 'Laten Aanpassen en Keuren' }
    ]);

    const showModificatieRapport = () => {
        toast.add({ 
            severity: 'Succes', 
            summary: 'Modificatie Rapport', 
            detail: 'ModificatieLocatie: ' + modificatieLocatie.value, 
            life: 3000 
        });
    };
</script>

<template>
    <div class="toggle-buttons">
        <ToggleButton v-model="editingSchade" onLabel="Schade" offLabel="Schade"/>
        <ToggleButton v-model="editingOnderhoud" onLabel="Achterstallig Onderhoud" offLabel=" Achterstallig Onderhoud" />
        <ToggleButton v-model="editingInstallatie" onLabel="Technische installaties" offLabel="Technische installaties" />
        <ToggleButton v-model="editingModificatie" onLabel="Modificaties inventariseren" offLabel="Modificaties inventariseren" />
    </div>
    <form v-if="editingSchade">  
        <h2>Schade opnemen</h2>
        <Toast />
        <span class="p-float-label">
            <InputText id="locatie" v-model="schadeLocatie" />
            <label for="locatie">Locatie</label>
        </span>
        <br>
        <Dropdown v-model="selectedSchade" :options="schade" optionLabel="name" placeholder="Kies Schade Soort" class="w-full md:w-14rem" />
        <br>
        <div class="flex align-items-center">
            <RadioButton v-model="schadeNieuw" inputId="nieuwe-schade" name="nieuwe-schade" value="true" />
            <label for="nieuwe-schade" class="ml-2"> Nieuwe schade</label>
        </div>
        <br>
        <Calendar v-model="date" dateFormat="dd-mm-yy" showIcon showButtonBar/>
        <br>
        <div class="flex align-items-center">
            <RadioButton v-model="schadeActie" inputId="acute-actie" name="acute-actie" value="vereist" />
            <label for="acute-actie" class="ml-2"> Acute actie vereist</label>
        </div>
        <br>
        <Textarea v-model="schadeOmschrijving" rows="5" cols="30" />
        <br>
        <Button label="Verzend" @click="showSchadeRapport()" />
        <br>
    </form>

    <form v-if="editingOnderhoud">   
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

    <form v-if="editingInstallatie">  
        <h2>Technische installaties inspecteren</h2>
        <Toast />
        <span class="p-float-label">
            <InputText id="locatie" v-model="installatieLocatie" />
            <label for="locatie">Locatie</label>
        </span>
        <Dropdown v-model="selectedInstallatie" :options="installatie" optionLabel="name" placeholder="Kies Installatie Soort" class="w-full md:w-14rem" />
        <br>
        <Textarea v-model="gemeldeStoringenInstallatie" rows="5" cols="30" placeholder="Gemelde Storingen" />
        <br>
        <Button label="Testprocedure" :href="'/path/to/your/pdf-file.pdf'" target="_blank" />
        <br>
        <Textarea v-model="opmerkingenModificatie" rows="5" cols="30" placeholder="Opmerkingen" />
        <Button label="Verzend" @click="showInstallatieRapport()" />
        <br>
    </form>

    <form v-if="editingModificatie">
        <h2>Modificaties inventariseren</h2>
        <Toast />
        <span class="p-float-label">
            <InputText id="locatie" v-model="modificatieLocatie" />
            <label for="locatie">Locatie</label>
        </span>
        <Dropdown v-model="selectedModificatieUitgevoerd" :options="modificatieUitgevoerd" optionLabel="name" placeholder="Uitgevoerd door: " class="w-full md:w-14rem" />
        <br>
        <Textarea v-model="beschrijvingModificatie" rows="5" cols="30" placeholder="Beschrijving modificatie" />
        <br>
        <Button label="Bestaande situatie en gedocumenteerde modificaties" :href="'/path/to/your/pdf-file.pdf'" target="_blank" />
        <br>
        <Dropdown v-model="selectedModificatieActie" :options="modificatieActie" optionLabel="name" placeholder="Te ondernemen actie" class="w-full md:w-14rem" />
        <br>
        <Textarea v-model="opmerkingenModificatie" rows="5" cols="30" placeholder="Opmerkingen" />
        <Button label="Verzend" @click="showModificatieRapport()" />
        <br>
    </form>
    
</template>
<style scoped>
    form{
        margin: auto;
        margin-top: 10px;
        margin-bottom: 10px;
        width: 80%;
        border: 3px solid rgba(0,170,162);
        background-color: rgba(41, 52, 57, 0.201);
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
    }

    .toggle-buttons{
        margin: auto 0 12px;
        display: flex;
        justify-content: space-evenly;
    }
    
</style>