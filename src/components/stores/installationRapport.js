import { defineStore } from "pinia"; 
import axios from 'axios';

export const useInstallationRapportStore = defineStore({
    id: 'installationRapport',
    state: () => ({
        
        installations: [],
        loading: false
    }),
    actions: {
        async fetchInstallationRapport(itemId){
            try{
                this.loading = true;

                const data = await axios.get(`http://localhost:3000/technical-installations/${itemId}`);
                this.installations = data.data;

                this.loading = false;
            }
            catch(error){
                alert(error);
            }
        },

        async postNewRapport(newItem){
            try{
                const data = await axios.get(`http://localhost:3000/technical-installations/`);
                const post = await axios.post('http://localhost:3000/technical-installations/',{
                    id: String(data.data.length + 1),
                    location: newItem.location,
                    reportedMalfunctions: newItem.reportedMalfunctions,
                    typeOfInstallation: newItem.typeOfInstallation,
                    approved: newItem.approved,
                    comments: newItem.comments
                });
            }
            catch(error){
                alert(error);
            }    
        },

        async deleteRapport(itemId){
            try {
                const data = await axios.delete(`http://localhost:3000/technical-installations/`)
                await myStore.deleteItem(itemId);
                
              } catch (error) {
                console.error('Error deleting item:', error);
                
              }
        },
        async editAndSave(itemId, updatedData) {
            try {
              const response = await axios.patch(`http://localhost:3000/technical-installations/${itemId}`, updatedData);
              return response.data; 
            } catch (error) {
              console.error('Error editing and saving item:', error);
              throw error;
            }
        }
    },
    getters: {
        getDamageRapports(state){
            return state.installations;
        }
    }
});