<template>
    <div>

        <button @click.stop.prevent="addNum(5)"><router-link to="/page4">quiz1</router-link></button>
        <button @click.stop.prevent="addNum(0)"><router-link to="/page4">quiz1</router-link></button>
    </div>
</template>

<script>
  export default {
    name: "Page3",
    computed: {
      message() { 
          return this.$store.getters.message
      },
      num() { 
          return this.$store.getters.num
      }
    },
    methods: {
      addNum(num) {
        this.$store.dispatch('addNum', num)
      }
    }
  }
</script>

<style>
</style>