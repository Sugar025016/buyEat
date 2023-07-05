import { defineStore } from "pinia";

let useInfoStore = defineStore("info",{
    state:() =>{
        return {
            count:99
        }
    },
    actions:{
        updateNum(a:number,b:number){
            this.count+=a;
        }
    },
    getters:{
        
    }
})