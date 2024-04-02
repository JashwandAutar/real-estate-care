import { defineStore } from "pinia"; 
import axios from 'axios';

export const useModificationRapportStore = defineStore({
    id: 'modificationRapport',
    state: () => ({
        
        modifications: [],
        loading: false
    }),
    actions: {
        async fetchDamageRapports(itemId){
            try{
                this.loading = true;

                const data = await axios.get(`http://localhost:3000/modifications/${itemId}`);
                this.modifications = data.data;

                this.loading = false;
            }
            catch(error){
                alert(error);
            }
        },

        async postNewRapport(newItem){
            try{
                const data = await axios.get(`http://localhost:3000/modifications/`);
                const post = await axios.post('http://localhost:3000/modifications/',{
                    id: String(data.data.length + 1),
                    location: newItem.location,
                    executedBy: newItem.executedBy,
                    actionToBeTaken: newItem.actionToBeTaken,
                    comments: newItem.comments,
                    description: newItem.description
                });
            }
            catch(error){
                alert(error);
            }    
        },

        async deleteRapport(itemId){
            try {
                const data = await axios.delete(`http://localhost:3000/damages/`)
                await myStore.deleteItem(itemId);
                
              } catch (error) {
                console.error('Error deleting item:', error);
                
              }
        },
        
        async editAndSave(itemId, updatedData) {
            try {
              const response = await axios.patch(`http://localhost:3000/damages/${itemId}`, updatedData);
              return response.data; 
            } catch (error) {
              console.error('Error editing and saving item:', error);
              throw error;
            }
        }
    },
    getters: {
        getDamageRapports(state){
            return state.modifications;
        }
    }
});