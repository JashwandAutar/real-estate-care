<script setup>
  import { RouterLink, RouterView, useRouter } from 'vue-router'
  import {onMounted, ref} from "vue";
  import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
  import SvgIcon from '@jamescoyle/vue-icon';
  import { mdiCheckboxBlankBadge, mdiFormatListBulletedType, mdiFileDocument, mdiCog, mdiSearchWeb } from '@mdi/js';
  import imageURL from '/src/assets/account-template.png';
  const icons = {
    check: ref(mdiCheckboxBlankBadge),
    list: ref(mdiFormatListBulletedType),
    fileDocument: ref(mdiFileDocument),
    cog: ref(mdiCog),
    searchWeb: ref(mdiSearchWeb)
  };
 

  const router = useRouter();
  const currentUser = ref(null);
  let auth;
  onMounted(()=>{
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if(user){
        let index = user.email.indexOf("@");
        let cutName = user.email.slice(0, index); 
        currentUser.value = cutName;
      }
      else{
        currentUser.value = null;
      }
      });
    });
    const handleSignOut = () => {
        signOut(auth).then(() => {
            router.push("/");
        });
    }
</script>

<template>
  <header>
    <Toolbar style="background-color: var(--black);">
      <template #start>
        <img 
          alt="real-estate-care-logo" 
          class="logo" 
          src="./assets/logo.png"
        />
      </template>
      <template #end> 
        <div 
          class="currentUser" 
          v-if="currentUser"
        >
          <Avatar 
            :image=imageURL  
            size="xlarge" 
            shape="circle" 
            alt="real-estate-care-user"
          />
          <span class="username">{{ currentUser }}</span>
          <Button 
            label="Log Out" 
            @click="handleSignOut"
          />
        </div>
      </template>
    </Toolbar>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <nav>
      <RouterLink to="/assigned"><svg-icon type="mdi" :path="icons.check.value" /><span>Toegewezen Rap.</span></RouterLink>
      <RouterLink to="/performed"><svg-icon type="mdi" :path="icons.searchWeb.value" /><span>Zoeken</span></RouterLink>
      <RouterLink to="/knowledge"><svg-icon type="mdi" :path="icons.fileDocument.value" /><span>KennisBase</span></RouterLink>
    </nav>
  </footer>
</template>

<style scoped>
  .logo{
    width: 14rem;
  }

  header{
    border-top: 5px solid var(--teal);
    border-left: 5px solid var(--black);
    border-right: 5px solid var(--black);
  }

  .currentUser{
    width: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  
  nav{
    width: 100%;
    padding-top: 8px;
    padding-bottom: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

  }
  nav a{
    padding: 5px 5px 5px 5px;
    border: 3px solid var(--black);
    border-radius: 25px;
    background-color: var(--black);
    text-decoration: none;
    font-weight: bold;
    font-size: 1.5rem;
    color: white;
    transition: color 0.25s;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  nav a:hover{
    text-decoration: none;
    color: var(--teal);
  }
  svg{
    width: 40px;
    height: 40px;
  }
  .p-toolbar {
    width: 100%;
  }
  .username{
    color: white;
    font-weight: bold;
    padding-left: 5px;
  }
  main{
    width: 100%;
    min-height: 600px;
    padding: 8px;
    border-left: 5px solid var(--black);
    border-right: 5px solid var(--black);
  }
  footer{
    background-color: var(--teal);
    border-bottom: 5px solid var(--teal);
  }
  :deep(.text-white){
    color: rgba(41,52,57);
  }
  :deep(.text-white:hover){
    color: rgb(255, 255, 255)
  }
  @media(max-width: 600px){
    nav a{
      font-size: 1.2rem;
    }
    svg{
      width: 30px;
      height: 30px;
    }
  }
</style>
