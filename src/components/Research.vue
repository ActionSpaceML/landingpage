<template>
  <div class="bg-gray-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-cyan-400 animate__animated animate__fadeIn">Research & Innovation</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl animate__animated animate__fadeIn animate__delay-1s">Pushing the Boundaries of Possibility</p>
        <p class="mt-6 text-lg leading-8 text-gray-300 animate__animated animate__fadeIn animate__delay-2s">Our research teams are dedicated to solving the most challenging problems in robotics and artificial intelligence, creating breakthrough technologies that define the future.</p>
      </div>

      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="(field, index) in researchFields" :key="field.name" 
               class="flex flex-col bg-gray-800/50 rounded-2xl p-6 backdrop-blur-lg animate__animated animate__fadeInUp"
               :style="{ 'animation-delay': `${index * 0.2}s` }">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
              <component :is="field.icon" class="h-5 w-5 flex-none text-cyan-400" aria-hidden="true" />
              {{ field.name }}
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
              <p class="flex-auto">{{ field.description }}</p>
              <p class="mt-6">
                <a :href="field.href" class="text-sm font-semibold leading-6 text-cyan-400">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </div>
        </dl>
      </div>

      <!-- Latest Publications -->
      <div class="mx-auto mt-32 max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-cyan-400 animate__animated animate__fadeIn">Latest Publications</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl animate__animated animate__fadeIn animate__delay-1s">Research Papers & Findings</p>
      </div>

      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-2">
        <article v-for="(paper, index) in publications" :key="paper.title" 
                 class="flex flex-col bg-gray-800/50 rounded-2xl p-6 backdrop-blur-lg animate__animated animate__fadeInUp"
                 :style="{ 'animation-delay': `${index * 0.2}s` }">
          <div class="flex items-center gap-x-4 text-xs">
            <time :datetime="paper.datetime" class="text-gray-400">{{ paper.date }}</time>
            <span class="relative z-10 rounded-full bg-cyan-400/10 px-3 py-1.5 font-medium text-cyan-400">{{ paper.category }}</span>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
              {{ paper.title }}
            </h3>
            <p class="mt-5 text-sm leading-6 text-gray-300">{{ paper.description }}</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span v-for="tag in paper.tags" :key="tag" class="inline-flex items-center rounded-md bg-gray-700 px-2 py-1 text-xs font-medium text-gray-300">
                {{ tag }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BeakerIcon, BoltIcon, CommandLineIcon } from '@heroicons/vue/24/outline'
import 'animate.css'

const researchFields = [
  {
    name: 'Neural Robotics',
    description: 'Developing advanced neural networks that enable robots to learn and adapt to new situations in real-time, pushing the boundaries of machine learning in robotics.',
    icon: BoltIcon,
    href: '#',
  },
  {
    name: 'Quantum Computing Integration',
    description: 'Exploring the integration of quantum computing with robotic systems to solve complex optimization problems and enhance decision-making capabilities.',
    icon: CommandLineIcon,
    href: '#',
  },
  {
    name: 'Biomechanical Systems',
    description: 'Researching and developing bio-inspired robotic systems that mimic natural movements and adaptations found in nature.',
    icon: BeakerIcon,
    href: '#',
  },
]

const publications = [
  {
    title: 'Adaptive Neural Networks in Robotic Control Systems',
    description: 'A groundbreaking study on implementing adaptive neural networks in real-time robotic control systems, achieving unprecedented levels of precision and adaptability.',
    date: 'Jan 2025',
    datetime: '2025-01-15',
    category: 'Neural Networks',
    tags: ['Machine Learning', 'Robotics', 'Control Systems'],
  },
  {
    title: 'Quantum-Enhanced Path Planning Algorithms',
    description: 'Research paper detailing novel quantum computing algorithms for optimal path planning in complex, dynamic environments.',
    date: 'Dec 2024',
    datetime: '2024-12-20',
    category: 'Quantum Computing',
    tags: ['Quantum', 'Algorithms', 'Path Planning'],
  },
  {
    title: 'Biomimetic Actuators for Robotic Applications',
    description: 'Comprehensive study on new biomimetic actuator designs that significantly improve robot mobility and efficiency.',
    date: 'Nov 2024',
    datetime: '2024-11-30',
    category: 'Biomechanics',
    tags: ['Biomimetics', 'Actuators', 'Robotics'],
  },
  {
    title: 'Swarm Intelligence in Manufacturing Systems',
    description: 'Investigation into implementing swarm intelligence principles in automated manufacturing systems for improved efficiency and adaptability.',
    date: 'Oct 2024',
    datetime: '2024-10-15',
    category: 'Swarm Robotics',
    tags: ['Swarm Intelligence', 'Manufacturing', 'Automation'],
  },
]
</script>
