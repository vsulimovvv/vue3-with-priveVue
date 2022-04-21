import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      cart: [],
    };
  },
  getters: {
    cartLength(state) {
      return state.cart?.length ?? 0;
    },

    addedCardsList(state) {
      return state.cart;
    },

    totalPrice(state) {
      if (state.cart.length > 0) {
        return state.cart.reduce(
          (acc, curEl) => Number(curEl.price) + Number(acc),
          0
        );
      }

      return "0";
    },
  },

  mutations: {
    addCart(state, product) {
      state.cart.push(product);
    },
    removeCardFormCart(state, idxArray) {
      const findIndex = state.cart.findIndex(
        (card) => Number(card.id) === Number(idxArray)
      );
      state.cart.splice(findIndex, 1);
    },
  },
});

export default store;
