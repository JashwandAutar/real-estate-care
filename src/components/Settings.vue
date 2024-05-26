<script setup>
    import { ref } from 'vue';
    import { useToast } from "primevue/usetoast";

    const password = ref(null);
    const username = ref(null);
    const toast = useToast();

    const onUpload = () => {
        toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
    };

    const updatedUser = () => {
        toast.add({ severity: 'succes', summary: 'Success', detail: 'Gebruiker gegevens Bijgewerkt', life: 3000 });
    };
</script>
<template>
    <form>
        <Toast />
        <FloatLabel>
            <InputText 
                id="username" 
                v-model="username" 
            />
            <label for="username">Gebruikersnaam</label>
        </FloatLabel>
        <br>
        <FloatLabel>
            <Password 
                id="password" 
                v-model="password" 
                promptLabel="Stell uw wachtwoord in" 
                weakLabel="Zwak" 
                mediumLabel="Oké" 
                strongLabel="Sterk" 
                toggleMask
            />
            <label for="password">Wachtwoord</label>
        </FloatLabel>>
        <br>
        <FileUpload 
            mode="basic" 
            name="demo[]" 
            url="/api/upload" 
            accept="image/*" 
            :maxFileSize="1000000" 
            @upload="onUpload" 
            :auto="true" 
            chooseLabel="Nieuwe Avatar" 
        />
        <br>
        <Button label="Registreer" @click="updatedUser()" />
    </form>
</template>
<style scoped>
    form{
        margin: auto;
        margin-top: 10px;
        margin-bottom: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
        width: 80%;
        border: 3px solid rgba(0,170,162);
        background-color: rgba(41, 52, 57, 0.201);
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
    }
</style>
