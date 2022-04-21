<template>
  <div class="site-wrapper">
    <component :is="layout">
      <RouterView />
    </component>

    <main class="main">
      <div class="container">
        <div class="catalog">
          <ul class="catalog__list">
            <li
              class="catalog__item"
              v-for="(card, index) in productsList"
              :key="index"
            >
              <Card>
                <template #header>
                  <img :src="card.img" />
                </template>
                <template #title> {{ card.title }} </template>
                <template #subtitle>
                  <i class="pi pi-dollar"></i>
                  <span>{{ card.price }}</span>
                </template>
                <template #content>
                  <p>
                    {{ card.descr }}
                  </p>
                </template>
                <template #footer>
                  <Button
                    @click="addProductToCart(card)"
                    icon="pi pi-check"
                    label="Добавить"
                  />
                </template>
              </Card>
            </li>
          </ul>
        </div>
      </div>
    </main>

    <footer class="footer">
      <div class="footer__text">
        <p>© 2022 ClubHouse</p>
      </div>
    </footer>
  </div>
</template>

<script>
import AppHeader from "@/layouts/AppHeader";

import Button from "primevue/button";
import Card from "primevue/card";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import { mapMutations, mapState } from "vuex";

export default {
  name: "App",
  components: {
    AppHeader,
    Button,
    Card,
  },

  data() {
    return {
      text: null,
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
      productsList: [
        {
          img: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          title: "Дом мечты ",
          price: "2000",
          descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          id: this.generateId(),
        },
        {
          img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          title: "Hello 2",
          price: "2000",
          descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          id: this.generateId(),
        },
        {
          img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          title: "Hello 3",
          price: "2000",
          descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          id: this.generateId(),
        },
      ],
    };
  },

  computed: {
    layout() {
      return this.$route.meta.layout || "AppHeader";
    },

    // getCartLength(){}
  },

  created() {
    document.title = this.$route.meta.title || "Главная";
  },
  methods: {
    ...mapMutations(["addCart"]),

    generateId() {
      return Date.now().toString(36) + Math.random().toString(36).substr(2);
    },

    addProductToCart(card) {
      // this.productsList.push(card);
      this.addCart(card);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1,
h2,
h3 {
  margin: 0;
}

.container {
  max-width: 1310px;
  margin: 0 auto;
  padding: 0 15px;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  z-index: 10;

  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(5px);
  transition: 200ms ease-in;

  &.active {
    opacity: 1;
    visibility: visible;
    transition-delay: 550ms ease;
  }
}

.cart-box {
  position: absolute;
  width: 400px;
  height: 100vh;
  right: 0;
  top: 0;
  z-index: 10;
  background-color: var(--surface-0);
  transform: translateX(100%);
  transition: 350ms ease;

  &.active {
    transform: translateX(0);
  }

  &__close {
    position: absolute;
    top: 0;
    left: 0;
  }
}

button {
  border: none;
  background-color: transparent;
  outline: transparent;
  cursor: pointer;
  display: inline-block;
}
.main {
  padding-top: 110px;
}

.logo {
  object-fit: contain;
}
.p-component {
  gap: 10px;
}
.p-menubar {
  border: none;
}
.p-menuitem {
  position: relative;
}

.cart {
  width: 40px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding-right: 10px;

  i {
    font-size: 1.2rem;
  }

  &__count {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--blue-500);
    color: #fff;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__total {
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(30px);
    right: 50px;
    width: 100px;
    padding: 5px 10px;
    border-radius: 5px;
    background: var(--orange-700);
    line-height: 1;
    color: #fff;
    opacity: 0;
    visibility: hidden;
    transition: 250ms ease;
    transition-delay: 250ms;
  }

  &:hover {
    background-color: #f1f1f1;

    .cart__total {
      opacity: 1;
      visibility: visible;
      transition-delay: 250ms;
      transform: translateY(-50%) translateX(0);
    }
  }
}

.catalog {
  padding-bottom: 50px;
  &__list {
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 400px));
    gap: 20px;
    justify-content: center;

    @media screen and (max-width: 991px) {
      grid-template-columns: repeat(2, minmax(auto, 400px));
    }
    @media screen and (max-width: 576px) {
      grid-template-columns: minmax(auto, 400px);
    }
  }

  &__item {
    width: 100%;
    height: 100%;
  }
}
.p-card {
  &:hover {
    .p-card-header {
      overflow: hidden;
      img {
        transform: scale(1.2);
      }
    }
  }
}
.p-card-header {
  height: 250px;
  width: 100%;
  overflow: hidden;
  @media screen and (max-width: 576px) {
    height: 200px;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: 450ms ease;
  }
}

p {
  margin: 0;
}
.p-card {
  transition: 350ms ease;
  // &:hover {
  //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  //   transform: scale(1.01);
  // }
  .p-card-title {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .p-card-subtitle {
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 18px;
  }
  .p-card-content {
    padding: 0;
  }
}

.footer {
  margin-top: auto;
  padding: 50px 0;
  background-color: #f1f1f1;
}
</style>
