# Real Estate Care  
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


## Proces
Deze project (rapportage-systeem voor Real Estate Care) was gemaakt op Visual Studio Code en met Node.js voor het installeren van de volgende benodigde software. 

VUE.js is de framework voor het bouwen van deze applicatie en PrimeVue is de interne framework om knoppen, inputvelden en andere basis- en geadvanceerde componenten snel te gebruiken. 

Vue-Router is gebruikt om te navigeren en bezoeken naar andere view-componenten, zoals de uitgevoerde rapportages en de detailpagina's daarvan. 

Axios werd daarna geïnstalleerd voor het verbinden met het JSON-database waar de data van de rapportages zijn opgeslagen. Hiermee werden er overzichten gemaakt om de rapportages te weergeven en nieuwe rapportages worden gemaakt op de forms. (JSON-database staat online op Render.com)

Pinia werd gebruikt samen met Axios om bestaande rapportages te bewerken en verwijderen. 

Als laatst is de Google Firebase gebruikt voor authentication bij het inloggen en registreren op de applicatie en voor online hosting.  


### Applicatie Online 
Link naar applicatie online: [Real-Estate-Care](https://real-estate-care-f7b63.firebaseapp.com/)


## Gebruik
Je kan inloggen of registreren met gebruikersnaam en wachtwoord of je kan gelijk inloggen met je Gmail-account.
Wanneer je bent ingelogd of geregistreerd op de applicatie, krijg je op de hoofdscherm te zien knoppen om naar andere schermen te gaan. 
Druk op de **groene pijl** om terug te gaan naar de vorige schermen en klik **LogOut** om af te melden van de applicatie.
Wanneer je begint met maken en bewerken van

### Toegewezen rapportages

Op **Toegewezen rapportages** vind je de formulieren om nieuwe rapportages te maken. Klik op de tabs om een van de verschillende soorten rapportages te maken en wanneer je op **verzend** druk, word je terug verwezen naar de hoofdscherm. 


### Uitgevoerde rapportages

Op **Uitgevoerde rapportages** vind je lijsten met items erin om volledige rapportages te bekijken ook verdeeld in tabs. Klik op een item om de details van de rapportage te bekijken en op de pagina krijg je de opties om deze aan te passen of verwijderen.

> Wanneer je begint met het maken en bewerken van rapportages, wacht nog 1 of 2 minuten voordat je de lijsten ziet op **Uitgevoerde rapportages**.
  
### KennisBase/Documentatie
Op **KennisBase/Documentatie** zie je een PDF dat laat zien hoe alle inspecties en testprocedures gedaan moeten worden.

### Instellingen
Op **Instellingen** stel je de gebruikersnaam, wachtwoord en profielfoto(avatar) opnieuw in.


## WCAG 2.1-richtlijnen

### Wel gelukt
- Gebruikt iconen om makkelijk te navigeren
- Al de input-velden label-tags eraan gevoegd 

 ### Niet gelukt
- Nog geen fout-indicatie geïmplementeerd op de formulieren
- kan niet op de **Enter**-toets drukken om de gegevens van de formulier te sturen.
- kan niet op **Instellingen** gebruikersgegevens veranderen