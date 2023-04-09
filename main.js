const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      premium: true,
    };
  },

  methods: {
    updateCart(event) {
      if (event.eventName === "add-to-cart") {
        this.cart += 1;
      } else if (event.eventName === "remove-from-cart" && this.cart >= 1) {
        this.cart -= 1;
      }
    },
  },
  computed: {},
});
