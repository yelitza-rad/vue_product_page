const app = Vue.createApp({
  data() {
    return {
      cart: [],
      quantity: 0,
      premium: true,
    };
  },

  methods: {
    updateCart(event) {
      if (event.eventName === "add-to-cart") {
        for (let i = 0; i < this.quantity; i++) {
          this.cart.push(event.productId);
        }
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
    updateQuantity(event) {
      if (event.eventName === "decrement-quantity" && this.quantity > 0) {
        this.quantity -= 1;
      } else if (
        event.eventName === "increment-quantity" &&
        this.quantity < event.inStock
      ) {
        this.quantity += 1;
      }
      this.quantity = this.quantity;
    },
  },
  computed: {},
});
