const { createApp } = Vue;

createApp ({
    data() {
        return {
            //indice attivo
            count: 0,
            //inserimento dinamico da input
            newMessage: '',
            //inserimento dinamico da input
            contactSearch: '',
            contacts: [
                {
                    name: 'Teo',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages:   
                    [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },

                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },

                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: 
                    [
                        {
                            date: '09/01/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },

                        {
                            date: '09/01/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },

                        {
                            date: '09/01/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },

                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: 
                    [
                        {
                            date: '09/01/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        
                        {
                            date: '09/01/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },

                        {
                            date: '09/01/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: 
                    [
                        {
                            date: '08/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },

                        {
                            date: '08/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: 
                    [
                        {
                            date: '08/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },

                        {
                            date: '08/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Claudia',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: 
                    [
                        {
                            date: '08/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },

                        {
                            date: '08/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },

                        {
                            date: '08/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },

                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: 
                    [
                        {
                            date: '07/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },

                        {
                            date: '07/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: 
                    [
                        {
                            date: '07/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },

                        {
                            date: '07/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },

                        {
                            date: '07/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },

      methods: {

        formatTime(dateTime) {

            // creazione di un nuovo oggetto date
            const dateMessage = new Date(dateTime);
            /*attraverso .getHours().toString().padStart farò:
            .getHours()= restituisce le ore nell'intervallo (0/23)
            .toString()= trasforma tutto in stringa
            .padStart()= decidiamo la lunghezza dei caratteri e aggiungiamo lo '0' come padding.
            Se la stringa delle ore ha meno di 2 caratteri, il metodo padStart()
            aggiungerà uno o più zeri all'inizio della stringa per raggiungere una lunghezza di 2 caratteri.
            */
            const hours = dateMessage.getHours().toString().padStart(2, '0');
            const minutes = dateMessage.getMinutes().toString().padStart(2, '0');
            //ritorno il valore delle variabili
            return `${hours}:${minutes}`;

        },
        //funzione per cliccare l'indice attivo
        clickedContact(i) {
           this.count = i; 
        },
        //funzione per fare il replace dell'imagine in un altra sezione
        replaceAvatar() {
            const originalAvatar = this.contacts[this.count].avatar;
            return originalAvatar;
        },
        //funzione per fare il replace del nome in un altra sezione
        replaceName() {
            const originalName = this.contacts[this.count].name;
            return originalName;
        },
        //funzione per aggiungere un nuovo messaggio alla chat
        addNewMessage() {
            this.contacts[this.count].messages.push({
                message:this.newMessage,
                date:'11/01/2020 19:50:00', 
                status:'sent',
            });
            
            this.newMessage = '';
            //impostato timing per l'avvio della funzione "addNewMessageBot"
            setTimeout(this.addNewMessageBot, 2000);

        },
        //funzione per il messaggio automatico
        addNewMessageBot() {
            this.contacts[this.count].messages.push({
                message: 'ok',
                date:'12/01/2020 19:55:00', 
                status:'received',
            });
            
            this.newMessage = '';
        },
        //funzione per il filtraggio dei contatti
        filteringContact(contactToSearch) {
            this.contacts.forEach((contact) => {
                console.log(contact)
                if (contact.name.toLowerCase().includes(contactToSearch.toLowerCase().trim()))
                {
                    contact.visible = true;
                } else {
                    contact.visible = false;
                }
            });

            //toLowerCase() -> converte una stringa in caratteri minuscoli
            //startWidth() -> serve per determinare se una stringa inzia con...
        },
        
    },
}).mount('#app');



