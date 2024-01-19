import { defineStore } from 'pinia'

export const useCallStore = defineStore('call', {
    state: () => ({
        calls: []
    }),
    actions:{
        addCall(call){
            this.call.push(call);
        }
    }
})
