<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <br />
<!--  <input :value="text" @input="onInput" placeholder="Type here">-->
  <input v-model="text"  placeholder="Type here">
  <p>{{ text }}</p>
<!--  <button @click="increment">count is: {{ count }}</button>-->
<!--  <HelloWorld />-->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'TestApp',
  // components: {
  //   HelloWorld
  // },
  data() {
    return {
      count: 0,
      text: ''
    }
  },
  methods: {
    onInput (e) {
      this.text = e.target.value
    },
    increment() {
      this.count++
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
