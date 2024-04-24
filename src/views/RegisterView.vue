<script setup>
import {ref, reactive} from "vue";
import {getAuth, createUserWithEmailAndPassword, sendEmailVerification} from "firebase/auth";
import {useRouter} from "vue-router";
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiArrowLeftThick } from '@mdi/js';
const backToHome = ref(mdiArrowLeftThick);
const user = reactive({
    email: "",
    password: ""
});

const router = useRouter();
const auth = getAuth();

const register = () =>  {
    createUserWithEmailAndPassword(auth, user.email, user.password).then((data) => {
        sendEmailVerification(auth.currentUser).then(() => {
            alert("Email Verified!!!");
        });
    router.push('/feed');
    }).catch((err) => {
        console.log(err.code);
        alert(err.message);
    });
}
</script>
<template>
    <div class="page-title">
        <RouterLink to="/">
            <svg-icon 
                type="mdi" 
                :path="backToHome" 
            />
            <span>Ga Terug</span>
        </RouterLink>
    </div>
    <form>
    <h1>Registreer</h1>
    <FloatLabel>
        <InputText 
            id="new-user" 
            v-model="user.email" 
        />
        <label for="new-user">Gebruikers</label>
    </FloatLabel>
    <Password 
        v-model="user.password" 
        promptLabel="Kies je wachtwoord" 
        weakLabel="Zwak" 
        mediumLabel="Gemiddeld" 
        strongLabel="Sterk"
    />
    <Button 
        type="button" 
        label="Registreer" 
        :loading="loading" 
        @click="register()" 
    />
  </form>
  <Toast />
</template>
<style scoped>
  h1{
    font-size: 1.8rem;
  }
  form{
    max-width: 600px;
    min-height: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  .spacer{
    padding-top: 20px;
  }
  a{
        color: var(--black);
        transition: color 0.5s;
        margin-inline-end: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    a:hover{
        color: var(--teal);
        transition: color 0.5s;
    }
    a span{
        font-size: 1.5rem;
        color: var(--black);
    }
    a:hover span{
        color: var(--teal);
        transition: color 0.5s;
    }
  svg {  
    width: 70px;
    height: 70px;
  } 
</style>