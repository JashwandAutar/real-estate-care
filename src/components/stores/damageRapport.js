import { defineStore } from "pinia"; 
import axios from 'axios';
let damageRapports = [];


export const useDamageRapportStore = defineStore({
    id: 'damageRapport',
    state: () => ({
        
        damages: [],
        loading: false
    }),
    actions: {
        async fetchDamageRapport(itemId){
            try{
                this.loading = true;

                const data = await axios.get(`http://localhost:3000/damages/${itemId}`);
                this.damages = data.data;

                this.loading = false;
            }
            catch(error){
                alert(error);
            }
        },

        async postNewRapport(newItem){
            try{
                const data = await axios.get(`http://localhost:3000/damages/`);
                const post = await axios.post('http://localhost:3000/damages/',{
                    id: String(data.data.length + 1),
                    location: newItem.location,
                    newDamage: newItem.newDamage,
                    typeOfDamage: newItem.typeOfDamage,
                    date: newItem.date,
                    acuteActionRequired: newItem.acuteActionRequired,
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
            return state.damages;
        }
    }
});