const { createApp } = Vue;

createApp({
  data() {
    return {
      products: [
        {
          name: "Vue.js Test",
          price: 100000,
          quantity: 1,
          image: "https://vuejs.org/images/logo.png",
        },
        {
          name: "React.js Test",
          price: 120000,
          quantity: 2,
          image: "https://reactjs.org/logo-og.png",
        },
        {
          name: "Angular Test",
          price: 110000,
          quantity: 1,
          image: "https://angular.io/assets/images/logos/angular/angular.svg",
        },
        {
          name: "Svelte Test",
          price: 130000,
          quantity: 3,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
        },
      ],
    };
  },
}).mount("#app");
