<template>
  <div class="bg-gray-900 min-h-screen">
    <!-- Hero Section -->
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-cyan-600 to-blue-800 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="text-center animate__animated animate__fadeIn">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Next Generation AI Systems</h1>
          <p class="mt-6 text-lg leading-8 text-gray-300">Pushing the boundaries of artificial intelligence with advanced neural networks, real-time learning, and adaptive decision-making capabilities.</p>
        </div>
      </div>
    </div>

    <!-- Key Capabilities -->
    <div class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-base font-semibold leading-7 text-cyan-400 animate__animated animate__fadeInUp">Advanced Capabilities</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl animate__animated animate__fadeInUp animate__delay-1s">Redefining What's Possible</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div v-for="(feature, index) in features" :key="feature.name" 
                 class="flex flex-col animate__animated animate__fadeInUp"
                 :style="{ 'animation-delay': `${index * 0.2}s` }">
              <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                <component :is="feature.icon" class="h-5 w-5 flex-none text-cyan-400" aria-hidden="true" />
                {{ feature.name }}
              </dt>
              <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-400">
                <p class="flex-auto">{{ feature.description }}</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <!-- Technical Specs -->
    <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-base font-semibold leading-7 text-cyan-400 animate__animated animate__fadeInLeft">Technical Specifications</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl animate__animated animate__fadeInLeft animate__delay-1s">Built for Performance</p>
          <p class="mt-6 text-lg leading-8 text-gray-300 animate__animated animate__fadeInLeft animate__delay-2s">Our AI systems are engineered with cutting-edge architecture designed for maximum efficiency and scalability.</p>
        </div>
        <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div v-for="(stat, index) in stats" :key="stat.name" 
               class="flex flex-col gap-y-3 border-l border-white/10 pl-6 animate__animated animate__fadeInUp"
               :style="{ 'animation-delay': `${index * 0.2}s` }">
            <dt class="text-sm leading-6 text-gray-400">{{ stat.name }}</dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-white">{{ stat.value }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BoltIcon, CircleStackIcon, CommandLineIcon } from '@heroicons/vue/24/outline'
import 'animate.css'

const features = [
  {
    name: 'Neural Processing',
    description: 'Advanced neural networks capable of processing and analyzing complex data patterns in real-time.',
    icon: BoltIcon,
  },
  {
    name: 'Adaptive Learning',
    description: 'Self-improving algorithms that continuously evolve and adapt to new scenarios and challenges.',
    icon: CircleStackIcon,
  },
  {
    name: 'System Integration',
    description: 'Seamless integration capabilities with existing infrastructure and third-party systems.',
    icon: CommandLineIcon,
  },
]

const stats = [
  { name: 'Processing Power', value: '15 PFLOPS' },
  { name: 'Response Time', value: '<10ms' },
  { name: 'Accuracy Rate', value: '99.99%' },
  { name: 'Neural Layers', value: '150+' },
]
</script>
