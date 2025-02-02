<script setup>
import Navigation from './components/Navigation.vue'
</script>

<template>
  <div class="bg-gray-900 min-h-screen">
    <Navigation />
    <main>
      <router-view />
    </main>
  </div>
</template>
