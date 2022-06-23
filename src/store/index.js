// What is VueX- it basically allows us to store all our data and methods of getting & changing this data in one central store/place, and all of our apps components has access to this data & methods directly
import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    //state is where we store the data of our app
    counter: 0,
    colorCode: "blue",
  },
  mutations: {
    //mutations are methods that changes the data in the state
    // note we cannot do Async code in mutations we do those in our actions(fetch etc.)
    // triggering mutations is known as a commit, eg.of usage( @click="$store.commit('increaseCounter')")
    increaseCounter(state, randomNumber) {
      // the below is how we change data with the state
      state.counter += randomNumber;
    },
    decreaseCounter(state, randomNumber) {
      // the below is how we change data within the state
      state.counter += randomNumber;
    },
    setColorCode(state, newValue) {
      // the below is how we change data within the state
      state.colorCode = newValue;
    },
  },
  actions: {
    //actions are also methods althought they can't change data in the state ,but can access the data within the state
    // if we want to change data from a action then we would have to commit a mutation within the action eg.(commit("increaseCounter", response.data))
    // actions are methods used for Async function like fetching data from Api etc., trigerring actions is know as dispatch eg.(@click="$store.dispatch('increaseCounter')")
    increaseCounter({ commit }) {
      // console.log('increaseCounter (action)')
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then((response) => {
        commit("increaseCounter", response.data);
      });
    },
    decreaseCounter({ commit }) {
      // console.log('increaseCounter (action)')
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then((response) => {
        commit("decreaseCounter", response.data);
      });
    },
    setColorCode({ commit }, newValue) {
      commit("setColorCode", newValue);
    },
  },
  getters: {
    //getters allows us to get data from our states, we can acces teh state from any of components in our state
    // but with getters we can filter or change our data in some form or way be4 it is made available to all our components(check counterSquared comp)
    // getters will always return something
    counterSquared(state) {
      return state.counter * state.counter;
    },
  },
  modules: {
    //allows to create or break-up our store with various states,mutations,actions & getters
  },
});
