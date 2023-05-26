<script setup>
import { ref } from 'vue'
const count = ref(0)
function handleCount() {
  count.value++
}
</script>

<template>
  <main>
    <div>
      <h1>我是vue3-子应用</h1>
      <button @click="handleCount">count is {{ count }}</button>
    </div>
  </main>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 40px;
  text-align: center;
}
button {
  display: block;
  margin: 0 auto;
}
</style>
