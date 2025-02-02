<template>
  <div class="bg-gray-800 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-base font-semibold leading-7 text-cyan-400 animate__animated animate__fadeIn">Product Line</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl animate__animated animate__fadeIn animate__delay-1s">Revolutionary Robots</p>
        <p class="mt-6 text-lg leading-8 text-gray-300 animate__animated animate__fadeIn animate__delay-2s">Discover our lineup of advanced robotics solutions designed for the future of automation.</p>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="(product, index) in products" :key="product.name" 
                 class="flex flex-col items-start animate__animated animate__fadeInUp"
                 :style="{ 'animation-delay': `${index * 0.2 + 0.5}s` }">
          <div class="relative w-full">
            <img :src="product.imageUrl" alt="" class="aspect-[16/9] w-full rounded-2xl bg-gray-900 object-cover sm:aspect-[3/2]">
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-700"></div>
          </div>
          <div class="max-w-xl">
            <div class="mt-8 flex items-center gap-x-4 text-xs">
              <time :datetime="product.datetime" class="text-gray-400">{{ product.date }}</time>
              <span class="relative z-10 rounded-full bg-gray-700 px-3 py-1.5 font-medium text-cyan-400 hover:bg-gray-600">{{ product.category }}</span>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                <a :href="product.href">
                  <span class="absolute inset-0"></span>
                  {{ product.name }}
                </a>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">{{ product.description }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'animate.css'

const products = [
  {
    name: 'Atlas X-1 Industrial Robot',
    href: '#',
    description: 'Advanced industrial automation robot with precise articulation and AI-driven adaptability for manufacturing environments.',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    date: 'Mar 16, 2024',
    datetime: '2024-03-16',
    category: 'Industrial',
  },
  {
    name: 'Nexus Companion Bot',
    href: '#',
    description: 'Personal assistance robot with emotional intelligence and advanced interaction capabilities for home and healthcare settings.',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    date: 'Mar 10, 2024',
    datetime: '2024-03-10',
    category: 'Consumer',
  },
  {
    name: 'Quantum Explorer Drone',
    href: '#',
    description: 'Autonomous exploration drone with quantum sensing capabilities for extreme environments and research applications.',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    date: 'Mar 5, 2024',
    datetime: '2024-03-05',
    category: 'Research',
  },
]
</script>
