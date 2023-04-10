app.component("product-display", {
  props: {
    cart: {
      type: Array,
      required: true,
    },
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img :src="image" />
          </div>
          <div class="product-info">
            <h1>{{ product }}</h1>

            <p v-if="inStock > 10">
              Stock: In Stock | <span v-if="onSale">On Sale!</span>
            </p>
            <p v-else-if="inStock <= 10 && inStock > 0">
              Stock: Almost sold out! | <span v-if="onSale">On Sale!</span>
            </p>
            <p v-else>Stock: Out Of Stock</p>

            <p>Shipping: {{ shipping }}</p>

            <p>{{ description }}</p>
            <ul>
              <li v-for="detail in details">{{ detail }}</li>
            </ul>

            <div class="productColors">
              <div
                v-for="(variant, index) in variants"
                :key="variant.id"
                class="color-option"
              >
                <input
                  type="radio"
                  :key="variant.id"
                  v-model="selectedVariantId"
                  :value="variant.id"
                  @mouseover="updateVariant(index)"
                  :name="'productColor-' + variant.id"
                  :id="'productColor-' + variant.id"
                />
                <label
                  class="color-circle"
                  :key="variant.id"
                  :for="'productColor-' + variant.id"
                  :style="{ backgroundColor: variant.color }"
                ></label>
              </div>
            </div>

            <button
              class="button"
              @click="addToCart()"
              :class="{ disabledButton: !inStock }"
              :disabled="!inStock"
            >
              Add to Cart
            </button>
            <button
              class="button"
              :class="{ disabledButton: cart.length <= 0 }"
              :disabled="cart.length <= 0"
              @click="removeFromCart()"
            >
              Remove Item
            </button>
            <a :href="url">Made by Jelica R.</a>
          </div>
        </div>

        <review-list v-if="hasReviews" :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>

      </div>`,
  data() {
    return {
      selectedVariant: 0,
      url: "https://vuejs.org/",
      variants: [
        {
          id: 1,
          product: "Socks",
          color: "green",
          details: ["50% cotton", "30% wool", "20% polyester"],
          description:
            "Introducing our latest product - the Vue.js socks! These comfortable and stylish socks are perfect for any Vue.js enthusiast. Made from a soft and breathable material, these socks feature a colorful design inspired by the Vue.js framework. The design includes Vue.js logo and icons, making it a great gift for any web developer or tech enthusiast. These socks are perfect for wearing during coding sessions, attending meetups or conferences, or just lounging around the house. Available in a range of sizes, these Vue.js socks are a must-have for any fan of this powerful JavaScript framework. Order yours today and show off your love for Vue.js in style!",
          size: ["s", "m", "l", "xl"],
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
          onSale: true,
          reviews: [],
        },
        {
          id: 2,
          product: "Socks",
          color: "blue",
          details: ["50% cotton", "30% wool", "20% polyester"],
          description:
            "Introducing our latest product - the Vue.js socks! These comfortable and stylish socks are perfect for any Vue.js enthusiast. Made from a soft and breathable material, these socks feature a colorful design inspired by the Vue.js framework. The design includes Vue.js logo and icons, making it a great gift for any web developer or tech enthusiast. These socks are perfect for wearing during coding sessions, attending meetups or conferences, or just lounging around the house. Available in a range of sizes, these Vue.js socks are a must-have for any fan of this powerful JavaScript framework. Order yours today and show off your love for Vue.js in style!",
          size: ["xs", "s", "m"],
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
          onSale: false,
          reviews: [],
        },
      ],
      selectedVariantId: null,
    };
  },

  methods: {
    addToCart() {
      this.$emit("add-to-cart", {
        eventName: "add-to-cart",
        productId: this.variants[this.selectedVariant].id,
      });
    },
    removeFromCart() {
      this.$emit("remove-from-cart", {
        eventName: "remove-from-cart",
        productId: this.variants[this.selectedVariant].id,
      });
    },
    setActive(index) {
      this.activeIndex = index;
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
    addReview(review) {
      this.variants[this.selectedVariant].reviews.push(review);
    },
  },
  computed: {
    product() {
      return this.variants[this.selectedVariant].product;
    },
    details() {
      return this.variants[this.selectedVariant].details;
    },
    description() {
      return this.variants[this.selectedVariant].description;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    onSale() {
      return this.variants[this.selectedVariant].onSale;
    },
    shipping() {
      //@todo: this logic to be adjusted for logged in users
      if (this.premium) {
        return "Free";
      } else {
        return "$" + 2.99;
      }
    },
    hasReviews() {
      return (
        this.variants[this.selectedVariant].reviews &&
        this.variants[this.selectedVariant].reviews.length > 0
      );
    },
    reviews() {
      return this.variants[this.selectedVariant].reviews;
    },
  },
});
