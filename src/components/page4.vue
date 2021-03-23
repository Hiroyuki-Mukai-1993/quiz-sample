<template>
   <div>
        
        <h1>{{ message }}</h1>
        <h1>{{ num }}</h1>
        <button @click="clear"><router-link to="/">analysis</router-link></button>
   </div>
</template>

<script>
  export default {
    name: "Page4",
    computed: {
      message() { 
          return this.$store.getters.message
      },
      num() { 
          return this.$store.getters.num
      }
    },
    methods: {
      clear() {
        this.$store.dispatch('clear')
      }
    }
  }
</script>

<style>
</style>