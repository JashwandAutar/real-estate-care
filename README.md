# Real Estate Care  ![Gitea Last Commit](https://img.shields.io/gitea/last-commit/JashwandAutar/real-estate-care?style=for-the-badge) 
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

## Applicatie & JSON-Server 
Open de terminal waar de project  is opgeslagen (bv. VS-Code). 

### Installeer Node.js
Voor de zekerheid download en installeer [Node.JS](https://nodejs.org/en).

Type daarna deze commando in de terminal:
```bash
npm  install
```

### Start applicatie lokaal
```bash
npm  run  dev
```
Om af te sluiten druk op: **q**

### Applicatie Online 
Link naar applicatie online: [Real-Estate-Care](https://real-estate-care-f7b63.firebaseapp.com/)



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

Op **Toegewezen rapportages** vind je de formulieren on nieuwe rapportages te maken. Klik op de tabs om verschillende soorten rapportages te maken en wanneer je op **verzend** druk, word je toe verwezen naar de**Uitgevoerde rapportages**. Druk op de groene pijl om terug te gaan naar de vorige pagina.


### Uitgevoerde rapportages

Op **Uitgevoerde rapportages** vind je lijsten met items erin om volledige rapportages te bekijken. Klik op de item om de details van de rapportage te bekijken en op de pagina krijg je de opties om deze aan te passen of verwijderen . Druk op de groene pijl om terug te gaan naar de vorige pagina.
  
## WCAG 2.1-richtlijnen
### Wel gelukt
- Gebruikt iconen om makkelijk te navigeren
- Al de input-velden label-tags eraan gevoegd 

 ### Niet gelukt
- Nog geen fout-indicatie geïmplementeerd op de formulieren

## Contributie

**[Jashwand Autar](https://github.com/JashwandAutar/)**