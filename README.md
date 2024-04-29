


# ![Static Badge](https://img.shields.io/badge/Framework-VUE-darkgreen?style=for-the-badge&color=%23239142) Real Estate Care
**Demo-applicatie voor het maken van rapportages**
___
  

## Tech

| Software | Name |
| ------: | :------ |
| **IDE** | Visual Studio Code |
| **Package Manager** | Node.js |
| **Framework** | VUE.js (Primevue) |
| **State Managenent** | Pinia |
| **Routing** | Vue-Router |
| **Web API** | Axios |
| **Authentication** | Google FireBase |

## Run application & JSON-Server 
Open de terminal waar de project  is opgeslagen (bv. VS-Code). 

### Run application locally

```bash
npm  run  dev
```
Om af te sluiten druk op: **ctrl+c**  


### Application Online 
Link naar applicatie online: [Real-Estate-Care](https://real-estate-care-f7b63.firebaseapp.com/)

### Run JSON-Server  locally
```bash
json-server --watch src/assets/rapports.json
```
Om af te sluiten druk op: **q**

> LET OP: Start **eerst** de JSON-server op, voordat je de applicatie zelf opent (lokaal en online)


## Main.JS

```JavaScript
import  './assets/main.css';
import  './assets/theme.css';
import  Lara  from  './presets/lara';

import { createApp } from  'vue';

import  App  from  './App.vue';

import  router  from  './router';

import {createPinia} from  'pinia';

import  Primevue  from  'primevue/config';
import  Toast  from  'primevue/toast';
import  ToastService  from  'primevue/toastservice';
import  ConfirmationService  from  'primevue/confirmationservice';
import  ConfirmDialog  from  'primevue/confirmdialog';
import  FloatLabel  from  'primevue/floatlabel';
import  InputText  from  'primevue/inputtext';
import  Textarea  from  'primevue/textarea';
import  Dropdown  from  'primevue/dropdown';
import  RadioButton  from  'primevue/radiobutton';
import  Button  from  'primevue/button';
import  Calendar  from  'primevue/calendar';
import  ToggleButton  from  'primevue/togglebutton';
import  FileUpload  from  'primevue/fileupload';
import  Password  from  'primevue/password';
import  Avatar  from  'primevue/avatar';
import  Toolbar  from  'primevue/toolbar';
import  TabView  from  'primevue/tabview';
import  TabPanel  from  'primevue/tabpanel';
import  Card  from  'primevue/card';
  
import {initializeApp} from  'firebase/app';
```
## Gebruik

### Toegewezen rapportages

Op **Toegewezen rapportages** vind je de formulieren on nieuwe rapportages te maken. Klik op de tabs om verschillende soorten rapportages te maken en druk op de groene pijl om terug te gaan naar de vorige pagina.


### Uitgevoerde rapportages

Op **Uitgevoerde rapportages** vind je lijsten met items erin om volledige rapportages te bekijken. Klik op de tabs om verschillende soorten rapportages te bekijken en druk op de groene pijl om terug te gaan naar de vorige pagina.
  
## WCAG

1. Gebruikt iconen om makkelijk te navigeren
1.
1.
1.
1.

## Contributie

**[Jashwand Autar](https://github.com/JashwandAutar/)**