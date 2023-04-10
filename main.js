const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },

  methods: {
    updateCart(event) {
      if (event.eventName === "add-to-cart") {
        this.cart.push(event.productId);
      } else if (
        event.eventName === "remove-from-cart" &&
        this.cart.length >= 1
      ) {
        const index = this.cart.indexOf(event.productId);
        if (index > -1) {
          this.cart.splice(index, 1);
        }
      }
    },
  },
  computed: {},
});
