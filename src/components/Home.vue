<script setup>
import Features from './Features.vue'
import Products from './Products.vue'
import Stats from './Stats.vue'
import Contact from './Contact.vue'
import 'animate.css'
</script>

<template>
  <div>
    <!-- Hero Section -->
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-cyan-600 to-blue-800 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-gray-700 hover:ring-gray-600 animate__animated animate__slideInDown">
            Introducing our next-gen AI system. <router-link to="/ai-systems" class="font-semibold text-cyan-400"><span class="absolute inset-0" aria-hidden="true" />Learn more <span aria-hidden="true">→</span></router-link>
          </div>
        </div>
        <div class="text-center">
          <h1 class="animate__animated animate__fadeIn animate__slower text-5xl font-bold tracking-tight text-balance text-white sm:text-7xl">Shaping Tomorrow's Automation Today</h1>
          <p class="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8 animate__animated animate__fadeIn animate__delay-1s">Pioneering the future of robotics with cutting-edge AI integration, advanced automation systems, and revolutionary machine learning algorithms that transform industries.</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" class="animate__animated animate__bounceIn animate__delay-2s rounded-md bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 transition-colors hover:animate__pulse">Explore Solutions</a>
            <a href="#" class="animate__animated animate__fadeInRight animate__delay-2s text-sm/6 font-semibold text-gray-300 hover:text-cyan-400 transition-colors">Watch Demo <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-cyan-600 to-blue-800 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
    </div>

    <!-- Other Sections -->
    <Features />
    <Products />
    <Stats />
    <Contact />
  </div>
</template>
