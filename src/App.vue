<template>
  <div class="bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen flex flex-col">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate__animated animate__pulse animate__infinite animate__slower"></div>
      <div class="absolute bottom-1/3 right-1/3 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate__animated animate__pulse animate__infinite animate__slower animate__delay-2s"></div>
      <div class="absolute top-1/2 right-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate__animated animate__pulse animate__infinite animate__slower animate__delay-4s"></div>
      <div class="absolute bottom-1/4 left-1/3 w-36 h-36 bg-indigo-500/20 rounded-full blur-xl animate__animated animate__pulse animate__infinite animate__slower animate__delay-2s"></div>
    </div>
    
    <router-view />
  </div>
</template>

<script setup>
// Root App component
</script>
