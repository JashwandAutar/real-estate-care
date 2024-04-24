<script setup>
    import { ref, reactive } from 'vue';
    import { useToast } from "primevue/usetoast";
    import { useRouter } from 'vue-router';
    import { useInstallationRapportStore } from '../../components/stores/installationRapport';

    const router = useRouter();
    const toast = useToast();

    const installatie = ref([
        { name: 'Koeling' },
        { name: 'Verwarming' },
        { name: 'Luchtverversing' },
        { name: 'Elektra' },
        { name: 'Beveiliging' }
    ]);
    const installationRapportStore = useInstallationRapportStore();
    const installations = reactive({
      location: "",
      date: "",
      typeOfInstallation: "",
      reportedMalfunctions: "",
      approved: "",
      comments: ""
    });
    const showInstallatieRapport = () => {
        installationRapportStore.postNewRapport(installations);
        toast.add({ 
            severity: 'Succes', 
            summary: 'Installatie Rapport', 
            detail: 'Installatie Locatie: ', 
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
        <h2>Technische installaties inspecteren</h2>
        <Toast />
        <a 
            href="/public/files/WEB_handboek-RVB-BOEI-Deel1.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="p-button font-bold"
        >
            <Button label="Testprocedure" />
        </a>
        <br>
        <FloatLabel>
            <InputText 
                id="locatie" 
                v-model="installations.location" 
            />
            <label for="locatie">Locatie</label>
        </FloatLabel>
        <br>
        <label for="datum">&nbsp;Datum</label>
        <Calendar 
            id="datum" 
            v-model="installations.date" 
            dateFormat="yy-mm-dd" 
            showIcon 
            showButtonBar
        />
        <br>
        <Dropdown 
            v-model="installations.typeOfInstallation" 
            :options="installatie" 
            optionLabel="name" 
            placeholder="Kies Installatie Soort" 
            class="w-full md:w-14rem" 
        />
        <br>
        <Textarea 
            v-model="installations.reportedMalfunctions" 
            rows="5" 
            cols="30" 
            placeholder="Gemelde Storingen" 
        />
        <br>
        <p>Installatie Goedgekeurd</p>
        <div class="button-group">
            <label for="goed-gekeurd">
                <RadioButton 
                    v-model="installations.approved" 
                    inputId="goed-gekeurd" 
                    name="goedgekeurd-installatie" 
                    value="Goed Gekeurd" 
                />
                Goed Gekeurd
            </label>
            <label for="niet-goed-gekeurd">
                <RadioButton 
                    v-model="installations.approved" 
                    inputId="niet-goed-gekeurd" 
                    name="goedgekeurd-installatie" 
                    value="Niet Vereist" 
                />
                Niet Goed Gekeurd
            </label>
        </div>
        <br>
        <Textarea 
            v-model="installations.comments" 
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
            @click="showInstallatieRapport()" 
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