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

                const data = await axios.get(`https://project-data-1-c7k7.onrender.com/technical-installations/${itemId}`);
                this.installations = data.data;

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
                await axios.post('https://project-data-1-c7k7.onrender.com/technical-installations/',{
                    id: makeID(6),
                    location: newItem.location,
                    date: newItem.date,
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
                await axios.delete(`https://project-data-1-c7k7.onrender.com/technical-installations/${itemId}`);
                
              } catch (error) {
                console.error('Error deleting item:', error);
                
              }
        },
        async editAndSave(itemId, updatedData) {
            try {
              await axios.patch(`https://project-data-1-c7k7.onrender.com/technical-installations/${itemId}`, updatedData);
              
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