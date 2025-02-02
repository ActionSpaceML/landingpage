<template>
  <div class="bg-gray-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="text-center">
          <h2 class="text-base font-semibold leading-7 text-cyan-400 animate__animated animate__fadeIn">Company Impact</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl animate__animated animate__fadeIn animate__delay-1s">Transforming Industries Worldwide</p>
        </div>
        <dl class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="(stat, index) in stats" :key="stat.id" 
               class="flex flex-col bg-gray-800/80 p-8 animate__animated animate__fadeInUp"
               :style="{ 'animation-delay': `${index * 0.2}s` }">
            <dt class="text-sm font-semibold leading-6 text-gray-300">{{ stat.name }}</dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-cyan-400">{{ stat.value }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'animate.css'

const stats = [
  { id: 1, name: 'Robots Deployed', value: '10,000+' },
  { id: 2, name: 'Global Patents', value: '500+' },
  { id: 3, name: 'Countries Served', value: '80+' },
  { id: 4, name: 'Client Satisfaction', value: '99.9%' },
]
</script>
