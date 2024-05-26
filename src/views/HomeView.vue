<script setup>
import {ref, reactive} from "vue";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {RouterLink, useRouter} from "vue-router";
import { useToast } from "primevue/usetoast";

const user = reactive({
    email: "",
    password: ""
});

const errMessage = ref();
const router = useRouter();
const toast = useToast();

const loading = ref(false);
const load = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
};

const auth = getAuth();

const Login = () =>  {
  signInWithEmailAndPassword(auth, user.email, user.password).then((data) => {
    load();
    router.push('/feed');
  }).catch((err) => {
    switch(err.message){
      case "auth/invalid-email":
        errMessage.value = "Niet gelukt om in te loggen";
        toast.add({ 
            severity: 'Error', 
            summary: errMessage.value, 
            detail: 'Deze email is niet geldig' , 
            life: 1000 
        });
        break;
      case "auth/user-not-found":
        errMessage.value = "Niet gelukt om in te loggen";
        toast.add({ 
            severity: 'Error', 
            summary: errMessage.value, 
            detail: 'Deze gebruiker niet gevonden/bestaat niet', 
            life: 1000 
        });
        break;
      case "auth/wrong-password":
        errMessage.value = "Niet gelukt om in te loggen";
        toast.add({ 
            severity: 'Error', 
            summary: errMessage.value, 
            detail: 'Deze wachtwoord is niet correct', 
            life: 1000 
        });
        break;
      default:
        errMessage.value = "Niet gelukt om in te loggen";
        toast.add({ 
            severity: 'Error', 
            summary: errMessage.value, 
            detail: 'Deze email en/of wachtwoord is niet correct', 
            life: 1000 
        });
        break;
    }
  });
}
</script>

<template>
  <form>
    <h1>Log In</h1> 
    <FloatLabel>
      <InputText 
        id="user" 
        type="text"
        v-model="user.email" 
      />
      <label for="user">E-mail</label>
    </FloatLabel>
    <FloatLabel>
      <Password 
        id="password" 
        v-model="user.password"
        :feedback="false"
      />
      <label for="password">Wachtwoord</label>
    </FloatLabel>
    <Button 
      type="button" 
      label="Log In" 
      :loading="loading" 
      @click="Login()" 
    />
    <p>Heeft u nog geen Account?&nbsp;
      <RouterLink to="/register">
        <Button label="Registreer" />
      </RouterLink>
    </p>
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
  p{
    font-size: 1.1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

</style>