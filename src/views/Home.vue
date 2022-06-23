<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Counter />
    <CounterSquared />
    <Buttons />
    <ColorCode />
  
  <!-- to bind the colorCode to the we need to first bind the style attribute to the div thTat contains our info shown below -->
    <!-- <div :style="{ color: $store.state.colorCode }" class="counter">
      the below shows how we display data from our store with the state method
      {{ $store.state.counter }}
    </div> -->
    <!-- <div class="counter-squared">
      {{ $store.state.counter }}
      <sup>2</sup>
      {{ $store.getters.counterSquared }}
    </div> -->
    <!-- <div class="buttons"> -->
    <!--  -->
    <!-- <button @click="$store.dispatch('decreaseCounter')">-</button> -->
    <!-- the below is how we pass through methods  -->
    <!-- commit is used for mutations -->
    <!-- <button @click="$store.commit('increaseCounter')"> +</button> -->
    <!-- dispatch is used for actions -->
    <!-- <button @click="$store.dispatch('increaseCounter')">+</button>
    </div> -->

   <!-- to bind the colorCode to a specific tag we use a v-model to do this -->
    <!-- <div>
      <input v-model="colorCode" placeholder="Enter color code" type="text" />
    </div> -->
    <!-- then we need to create a computed property that will take in a get and set method -->

  </div>
</template>

<script>
import Counter from "../components/Counter.vue";
import CounterSquared from "../components/CounterSquared.vue";
import Buttons from "../components/Buttons.vue";
import ColorCode from "../components/ColorCode.vue";
export default {
  name: "Home",
  components: {
    Counter,
    CounterSquared,
    Buttons,
    ColorCode,
  },

  //
  // computed:{
  //   colorCode:{
  //     get(){
  //       return this.$store.state.colorCode
  //     },
  //     set(newValue){
  //       this.$store.dispatch("setColorCode", newValue)
  //     }
  //   }
  // },

  //this data property will now be our state in our store
  // data(){
  //   return{
  // counter:0
  //   }
  // },
  //this data property will now be our state in our store

  // this will now become our mutations  in our store
  // methods: {
  // increaseCounter(){
  //   this.counter++;
  //         console.log(this.counter);

  // },
  // decreaseCounter(){
  //   this.counter--;
  //         console.log(this.counter);

  // }
  //   }
  // this will now become our mutations  in our store
};
</script>

<style scoped>
div {
  margin-bottom: 10px;
}
.counter {
  font-size: 80px;
}
.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>
