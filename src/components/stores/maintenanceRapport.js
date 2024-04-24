import { defineStore } from "pinia"; 
import axios from 'axios';



export const useMaintenanceRapportStore = defineStore({
    id: 'maintenanceRapport',
    state: () => ({
        
        maintenances: [],
        loading: false
    }),
    actions: {
        async fetchMaintenanceRapport(itemId){
            try{
                this.loading = true;

                const data = await axios.get(`http://localhost:3000/outstanding-maintenance/${itemId}`);
                this.maintenances = data.data;

                this.loading = false;
            }
            catch(error){
                alert(error);
            }
        },

        async postNewRapport(newItem){
            try{
                const makeID = (stringSize) => {
                    let result = '';
                    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    let counter = 0;
                    while (counter < stringSize) {
                        result += characters.charAt(Math.floor(Math.random() * characters.length));
                        counter += 1;
                    }
                    return result;
                }
                await axios.post('http://localhost:3000/outstanding-maintenance/',{
                    id: makeID(6),
                    location: newItem.location,
                    date: newItem.date,
                    typeOfMaintenance: newItem.typeOfMaintenance,
                    acuteActionRequired: newItem.acuteActionRequired,
                    costEstimate: newItem.costEstimate
                });
            }
            catch(error){
                alert(error);
            }    
        },

        async deleteRapport(itemId){
            try {
                await axios.delete(`http://localhost:3000/outstanding-maintenance/${itemId}`);
                
              } catch (error) {
                console.error('Error deleting item:', error);
                
              }
        },

        async editAndSave(itemId, updatedData) {
            try {
                await axios.patch(`http://localhost:3000/outstanding-maintenance/${itemId}`, updatedData);
              
            } catch (error) {
              console.error('Error editing and saving item:', error);
              throw error;
            }
        }
    },
    getters: {
        getDamageRapports(state){
            return state.maintenances;
        }
    }
});