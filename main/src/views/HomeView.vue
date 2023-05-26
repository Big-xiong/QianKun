<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <main>
    <div>
      <h1>主应用</h1>
      <div class="btn-wrap">
        <button @click="router.push('/vue')">vue-app</button>
        <button @click="router.push('/react')">react-app</button>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 100px;
  text-align: center;
}
.btn-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin: 0 10px;
  }
}
</style>
