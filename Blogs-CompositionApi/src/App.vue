<script setup></script>

<template>
  <div class="nav">
    <router-link :to="{name:'home'}">Home</router-link>
    <router-link :to="{name:'names'}">Names</router-link>
    <router-link :to="{name:'data'}">Fetch Data</router-link>
  </div>
  <RouterView />
</template>

<style scoped>
  .nav{
    display: flex;
    padding: 1rem;
    width: 200px;
    justify-content: space-around;
  }
</style>
