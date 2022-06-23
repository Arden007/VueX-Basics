<template>
   <!-- to bind the colorCode to a specific tag we use a v-model to do this -->
  <div>
      <input v-model="colorCode" placeholder="Enter color code" type="text" />
    </div>
   <!-- then we need to create a computed property that will take in a get and set method -->
</template>

<script>
export default {
computed:{
    colorCode:{
      // the get method gets the value from our state
      get(){
        return this.$store.state.colorCode
      },
      // the get method sets the value of our state
      set(newValue){
        // remember to set a action we need to use the dispatch method
        this.$store.dispatch("setColorCode", newValue)
      }
    }
  },
}
</script>

<style>

</style>