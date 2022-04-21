<template>
  <header class="header">
    <div
      class="overlay"
      :class="{ active: isShowCart }"
      @click="isShowCart = false"
    ></div>

    <div class="cart-box" :class="{ active: isShowCart }">
      <ul class="cart-box__list">
        <li
          class="cart-box__item"
          v-for="(card, index) in addedCardsList"
          :key="index"
        >
          <div class="cart-box-card">
            <div class="cart-box-card__img">
              <img width="40" height="40" :src="card.img" />
            </div>
            <div class="cart-box-card__right">
              <div class="cart-box-card__name">
                {{ card.title }}
              </div>
              <p class="cart-box-card__price">{{ card.price }}</p>

              <Button
                @click="removeCard(card.id)"
                class="p-button-danger"
                icon="pi pi-times"
              />
            </div>
          </div>
        </li>
      </ul>

      <!-- <div class="total">1000000 $</div> -->
    </div>

    <div class="container">
      <Menubar class="menubar" :model="items">
        <template #start>
          <img
            class="logo"
            alt="logo"
            src="@/assets/shop-logo.png"
            height="60"
            width="60"
          />
          <router-link to="/">Главная</router-link>
          <router-link to="/catalog">Каталог</router-link>
          <router-link to="/about">О нас</router-link>
        </template>

        <template #end>
          <button class="cart" href="#" @click="isShowCart = true">
            <i class="pi pi-shopping-cart"></i>

            <span class="cart__count">{{ cartLength }}</span>
            <span class="cart__total"> {{ totalPrice }} $</span>
          </button>
        </template>
      </Menubar>
    </div>
  </header>
</template>

<script>
import Menubar from "primevue/menubar";
import Button from "primevue/button";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "AppHeader",
  components: {
    Menubar,
    Button,
  },
  data() {
    return {
      items: [
        {
          label: "Главная",
        },
        {
          label: "Каталог",
        },
        {
          label: "О магазине",
        },
      ],

      isShowCart: false,
    };
  },

  computed: {
    ...mapGetters(["cartLength", "addedCardsList", "totalPrice"]),
  },

  methods: {
    ...mapMutations(["removeCardFormCart"]),
    removeCard(cardId) {
      this.removeCardFormCart(cardId);
    },
  },
};
</script>

<style lang="scss">
.header {
  margin-bottom: 30px;
  background-color: #f8f9fa;
  position: fixed;
  z-index: 3;
  width: 100%;

  // &.scroll {
  //   position: fixed;
  //   width: 100px;
  //   height: auto;
  // }
}
.cart-box {
  overflow-y: auto;
}
.cart-box-card {
  &__img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f00;
  }
}

.p-menubar-root-list {
  width: 100%;
}
</style>
