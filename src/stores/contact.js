import { defineStore } from 'pinia'

export const useContactStore = defineStore('contact', {
    state: () => ({
        phone: '',
        contact: [
            {
                name: 'Léora',
                phone: '123456',
            },
            {
                name: 'Raphaël',
                phone: '06 12 34 56 78',
            },
            {
                name: 'Louca',
                phone: '06 12 34 56 78',
            }]
    }),
    actions:{
        ajoutContact(contact){
            this.contact.push(contact);
        },

        addNumber(number){
            this.phone += number;
        },
    }
})
