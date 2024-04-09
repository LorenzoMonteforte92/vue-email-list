//generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// creare un array vuoto
//creare una funzione che stampi con un ciclo 10 mail diverse dall' api e pushi nell'array vuoto
//ciclare col v-for nel Dom l'array
//stampare dinamicamente gli li


const { createApp } = Vue;

createApp({
    data() {
        return {
           mailAddresses: []
        };
    },
    methods: {
        generateTenRandomMails(){
            
            for(let i = 0; i < 10; i++){
                axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
                .then((response) => {
                let rndmMail = response.data.response;
                this.mailAddresses.push(rndmMail)
            })   
          }
        }
    },
    mounted() {
        this.generateTenRandomMails()
    }
}).mount('#app');