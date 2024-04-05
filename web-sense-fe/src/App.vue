<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <h1>WebSense AI</h1>
  <h3>Welcome, here you can configure your new Chat Assistant.</h3>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
