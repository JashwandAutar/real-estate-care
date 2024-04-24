<script setup>
    import { ref, reactive } from 'vue';
    import { useToast } from "primevue/usetoast";
    import { useRouter } from 'vue-router';
    import { useModificationRapportStore } from '../../components/stores/modificationRapport';

    const router = useRouter();
    const toast = useToast();

    const modificatieUitgevoerd = ref([
        { name: 'Huurder' },
        { name: 'Aannemer' },
        { name: 'Onbekend' }
    ]);
    
    const modificatieActie = ref([
        { name: 'Accepteren' },
        { name: 'Laten Keuren' },
        { name: 'Laten Verwijderen' },
        { name: 'Laten Aanpassen en Keuren' }
    ]);

    const modificationRapportStore = useModificationRapportStore();
    const modifications = reactive({
      location: "",
      executedBy: "",
      description: "",
      actionToBeTaken: "",
      comments: ""
    });

    const showModificatieRapport = () => {
        modificationRapportStore.postNewRapport(modifications);
        toast.add({ 
            severity: 'Succes', 
            summary: 'Modificatie Rapport', 
            detail: 'ModificatieLocatie: ', 
            life: 3000 
        });
        router.push("/performed");
    };

    const onUpload = () => {
        toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
    };
</script>
<template>
    <form>
        <h2>Modificaties inventariseren</h2>
        <Toast />
        <a 
            href="/public/files/WEB_handboek-RVB-BOEI-Deel1.pdf" 
            target="_blank" rel="noopener noreferrer" 
            class="p-button font-bold"
        >
            <Button label="Bestaande situatie en gedocumenteerde modificaties" />
        </a>
        <br>
        <FloatLabel>
            <InputText 
                id="locatie" 
                v-model="modifications.location" 
            />
            <label for="locatie">Locatie</label>
        </FloatLabel>
        <br>
        <label for="datum">&nbsp;Datum</label>
        <Calendar 
            id="datum" 
            v-model="modifications.date" 
            dateFormat="yy-mm-dd" 
            showIcon 
            showButtonBar
        />
        <br>
        <Dropdown 
            v-model="modifications.executedBy" 
            :options="modificatieUitgevoerd" 
            optionLabel="name" 
            placeholder="Uitgevoerd door: " 
            class="w-full md:w-14rem" 
        />
        <br>
        <Textarea 
            v-model="modifications.description" 
            rows="5" 
            cols="30" 
            placeholder="Beschrijving modificatie" 
        />
        <br>
        <Dropdown 
            v-model="modifications.actionToBeTaken" 
            :options="modificatieActie" 
            optionLabel="name" 
            placeholder="Te ondernemen actie" 
            class="w-full md:w-14rem" 
        />
        <br>
        <Textarea 
            v-model="modifications.comments" 
            rows="5" 
            cols="30" 
            placeholder="Opmerkingen" 
        />
        <br>
        <FileUpload 
            mode="basic" 
            name="demo[]" 
            url="/api/upload" 
            accept="image/*" 
            :maxFileSize="1000000" 
            @upload="onUpload" 
            :multiple="true" 
            chooseLabel="Foto's voor deze Rapport" 
        />
        <br>
        <Button 
            label="Verzend" 
            @click="showModificatieRapport()" 
        />
        <br>
    </form>
</template>
<style scoped>
    h2{
        margin: 10px auto;
        font-size: 1.4rem;
    }
</style>