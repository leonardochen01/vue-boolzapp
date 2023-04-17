const { createApp } = Vue;

const app = createApp({
  data(){
    return{

      //array di persone
      contacts:[
        {
          user: 'Michele',
          profile: 'img/avatar_1.jpg'
        },
        {
          user: 'Fabio',
          profile: 'img/avatar_2.jpg'
        },
        {
          user: 'Samuele',
          profile: 'img/avatar_3.jpg'
        },
        {
          user: 'Alessandro B.',
          profile: 'img/avatar_4.jpg'
        },
        {
          user: 'Alessandro L.',
          profile: 'img/avatar_5.jpg'
        },
        {
          user: 'Claudia',
          profile: 'img/avatar_6.jpg'
        },
        {
          user: 'Federico',
          profile: 'img/avatar_7.jpg'
        },
        {
          user: 'Davide',
          profile: 'img/avatar_8.jpg'
        }
      ]
    }
  }
}).mount('#app')