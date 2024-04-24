# ![Static Badge](https://img.shields.io/badge/Framework-VUE-darkgreen?style=for-the-badge&color=%23239142) Real Estate Care 

***Demo-applicatie voor het maken van rapportages***

## Tech
- Visual Studio Code
- Node.JS
- Vue.JS
- PrimeVue
- VueRouter
- Pinia
- Axios
- FireBase

## Gebruik

### Toegewezen rapportages
Op **Toegewezen rapportages** vind je de formulieren on nieuwe rapportages te maken. Klik op de tabs om verschillende soorten rapportages te maken en druk op de groene pijl om terug te gaan naar de vorige pagina.

### Uitgevoerde rapportages
Op **Uitgevoerde rapportages** vind je lijsten met items erin om volledige rapportages te bekijken. Klik op de tabs om verschillende soorten rapportages te bekijken en druk op de groene pijl om terug te gaan naar de vorige pagina.



## Run application & JSON-Server start

```bash
npm  run  dev
json-server  --watch  src/assets/rapports.json
```

## Main.JS
```JavaScript
import  './assets/main.css';
import  './assets/theme.css';
import  'primevue/resources/primevue.min.css';

import { createApp } from  'vue';
import  App  from  './App.vue';

import  router  from  './router';
import {createPinia} from  'pinia';
import  Primevue  from  'primevue/config';
import  Toast  from  'primevue/toast';
import  ToastService  from  'primevue/toastservice';
import  SelectButton  from  'primevue/selectbutton';
import  InputText  from  'primevue/inputtext';
import  Textarea  from  'primevue/textarea';
import  Dropdown  from  'primevue/dropdown';
import  RadioButton  from  'primevue/radiobutton';
import  Checkbox  from  'primevue/checkbox';
import  Button  from  'primevue/button';
import  Calendar  from  'primevue/calendar';
import  ToggleButton  from  'primevue/togglebutton';
import  FileUpload  from  'primevue/fileupload';
import  DataTable  from  'primevue/datatable';
import  Column  from  'primevue/column';
import  ColumnGroup  from  'primevue/columngroup'; // optional
import  Row  from  'primevue/row'; // optional
import  Password  from  'primevue/password';
import  Avatar  from  'primevue/avatar';
import  Toolbar  from  'primevue/toolbar';
import  TabView  from  'primevue/tabview';
import  TabPanel  from  'primevue/tabpanel';
import  Card  from  'primevue/card';

  
import {initializeApp} from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyAtQOa4uGyQjdAqPqg2zo-GolVT3qLRhMw",
    authDomain: "real-estate-care-f7b63.firebaseapp.com",
    projectId: "real-estate-care-f7b63",
    storageBucket: "real-estate-care-f7b63.appspot.com",
    messagingSenderId: "832644646164",
    appId: "1:832644646164:web:1c7c49af51eb4c3052ee01",
    measurementId: "G-KFTRDJX015"
};
initializeApp(firebaseConfig);

const  app  =  createApp(App);

app.use(router);
app.use(Primevue);
app.use(createPinia());
app.use(ToastService);

app.component('SelectButton', SelectButton);
app.component('InputText', InputText);
app.component('Textarea', Textarea);
app.component('Dropdown', Dropdown);
app.component('RadioButton', RadioButton);
app.component('Checkbox', Checkbox);
app.component('Button', Button);
app.component('Calendar', Calendar);
app.component('ToggleButton', ToggleButton);
app.component('FileUpload', FileUpload);
app.component('Toast', Toast);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('Password', Password);
app.component('Avatar', Avatar);
app.component('Toolbar', Toolbar);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('Card', Card);

app.mount('#app');
```

## Contributie
**[Jashwand Autar](https://github.com/JashwandAutar/)**