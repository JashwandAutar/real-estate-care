import { defineStore } from "pinia"; 
import axios from 'axios';


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

                const data = await axios.get(`https://project-data-1-c7k7.onrender.com/damages/${itemId}`);
                this.damages = data.data;

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
                

                const post = await axios.post('https://project-data-1-c7k7.onrender.com/damages/',{
                    id: makeID(6),
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
                await axios.delete(`https://project-data-1-c7k7.onrender.com/damages/${itemId}`);

              } catch (error) {
                console.error('Error deleting item:', error);
                
              }
        },
        async editAndSave(itemId, updatedData) {
            try {
                await axios.patch(`https://project-data-1-c7k7.onrender.com/damages/${itemId}`, updatedData);
               
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