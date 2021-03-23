<template>
    <div>
        <button @click.stop.prevent="addNum(5)"><router-link to="/page3">quiz1</router-link></button>
        <button @click.stop.prevent="addNum(0)"><router-link to="/page3">quiz1</router-link></button>
    </div>
</template>

<script>
  export default {
    name: "Page2",
    methods: {
      addNum(num) {
        this.$store.dispatch('addNum', num)
      }
    }
  }
</script>

<style>
</style>