import './assets/main.css';
import './assets/theme.css';
// import 'primevue/resources/primevue.min.css';
import Lara from './presets/';

import { createApp } from 'vue';
import App from './App.vue';

import router from './router';
import {createPinia} from 'pinia';
import Primevue from 'primevue/config';
import 'primeicons/primeicons.css'

import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';
import ConfirmDialog from 'primevue/confirmdialog';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import ToggleButton from 'primevue/togglebutton';
import FileUpload from 'primevue/fileupload';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional
import Password from 'primevue/password';
import Avatar from 'primevue/avatar';
import Toolbar from 'primevue/toolbar';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Card from 'primevue/card';

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

const app = createApp(App);

app.use(router);
app.use(Primevue, {unstyled: true, pt: Lara});

app.use(createPinia());
app.use(ToastService);
app.use(ConfirmationService);

app.component('ConfirmDialog', ConfirmDialog);
app.component('FloatLabel',FloatLabel);

app.component('InputText', InputText);
app.component('Textarea', Textarea);
app.component('Dropdown', Dropdown);
app.component('RadioButton', RadioButton);

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