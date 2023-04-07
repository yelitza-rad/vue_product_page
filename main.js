const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      image: "./assets/images/socks_green.jpg",
      description:
        "Introducing our latest product - the Vue.js socks! These comfortable and stylish socks are perfect for any Vue.js enthusiast. Made from a soft and breathable material, these socks feature a colorful design inspired by the Vue.js framework. The design includes Vue.js logo and icons, making it a great gift for any web developer or tech enthusiast. These socks are perfect for wearing during coding sessions, attending meetups or conferences, or just lounging around the house. Available in a range of sizes, these Vue.js socks are a must-have for any fan of this powerful JavaScript framework. Order yours today and show off your love for Vue.js in style!",
      url: "https://vuejs.org/",
      inventory: 10,
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 1,
          color: "green",
          size: ["s", "m", "l", "xl"],
          image: "./assets/images/socks_green.jpg",
        },
        {
          id: 2,
          color: "blue",
          size: ["xs", "s", "m"],
          image: "./assets/images/socks_blue.jpg",
        },
      ],
      selectedVariantId: null,
    };
  },

  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      if (this.cart >= 1) {
        this.cart -= 1;
      }
    },
    setActive(index) {
      this.activeIndex = index;
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});
