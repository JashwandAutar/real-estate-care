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
                const data = await axios.get(`http://localhost:3000/outstanding-maintenance/`);
                const post = await axios.post('http://localhost:3000/outstanding-maintenance/',{
                    id: String(data.data.length + 1),
                    location: newItem.location,
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
                const data = await axios.delete(`http://localhost:3000/outstanding-maintenance/`)
                await myStore.deleteItem(itemId);
                
              } catch (error) {
                console.error('Error deleting item:', error);
                
              }
        },

        async editAndSave(itemId, updatedData) {
            try {
              const response = await axios.patch(`http://localhost:3000/outstanding-maintenance/${itemId}`, updatedData);
              return response.data; 
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