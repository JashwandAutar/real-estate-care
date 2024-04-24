import { defineStore } from "pinia"; 
import axios from 'axios';

export const useModificationRapportStore = defineStore({
    id: 'modificationRapport',
    state: () => ({
        
        modifications: [],
        loading: false
    }),
    actions: {
        async fetchModificationRapport(itemId){
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
                await axios.post('http://localhost:3000/modifications/',{
                    id: makeID(6),
                    location: newItem.location,
                    date: newItem.date,
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
                await axios.delete(`http://localhost:3000/modifications/${itemId}`);
                
              } catch (error) {
                console.error('Error deleting item:', error);
                
              }
        },
        
        async editAndSave(itemId, updatedData) {
            try {
              await axios.patch(`http://localhost:3000/modifications/${itemId}`, updatedData);
              
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