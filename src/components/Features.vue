<template>
  <div class="bg-gray-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-base font-semibold leading-7 text-cyan-400 animate__animated animate__fadeIn">Advanced Technology</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl animate__animated animate__fadeIn animate__delay-1s">Next Generation Robotics</p>
        <p class="mt-6 text-lg leading-8 text-gray-300 animate__animated animate__fadeIn animate__delay-2s">Experience the convergence of cutting-edge AI and precision engineering in our revolutionary robotics solutions.</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="(feature, index) in features" :key="feature.name" 
               class="flex flex-col animate__animated animate__fadeInUp"
               :style="{ 'animation-delay': `${index * 0.2 + 0.5}s` }">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
              <component :is="feature.icon" class="h-5 w-5 flex-none text-cyan-400" aria-hidden="true" />
              {{ feature.name }}
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
              <p class="flex-auto">{{ feature.description }}</p>
              <p class="mt-6">
                <a :href="feature.href" class="text-sm font-semibold leading-6 text-cyan-400">Learn more <span aria-hidden="true">→</span></a>
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BoltIcon, CircleStackIcon, CpuChipIcon } from '@heroicons/vue/24/outline'
import 'animate.css'

const features = [
  {
    name: 'AI-Powered Intelligence',
    description: 'Our robots leverage advanced machine learning algorithms for real-time decision making and adaptive behavior in complex environments.',
    icon: CpuChipIcon,
    href: '#',
  },
  {
    name: 'Quantum Processing',
    description: 'Next-generation quantum computing integration enables unprecedented processing power for complex automation tasks.',
    icon: BoltIcon,
    href: '#',
  },
  {
    name: 'Neural Networks',
    description: 'Deep learning neural networks provide sophisticated pattern recognition and autonomous learning capabilities.',
    icon: CircleStackIcon,
    href: '#',
  },
]
</script>
