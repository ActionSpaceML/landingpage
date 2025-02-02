<template>
  <div class="bg-gray-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-base font-semibold leading-7 text-cyan-400 animate__animated animate__fadeIn">Advanced Robotics</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl animate__animated animate__fadeIn animate__delay-1s">Next Generation Autonomous Systems</p>
        <p class="mt-6 text-lg leading-8 text-gray-300 animate__animated animate__fadeIn animate__delay-2s">Experience the future of robotics with our cutting-edge autonomous systems, designed to revolutionize industries and enhance human capabilities.</p>
      </div>
      
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="(robot, index) in robots" :key="robot.name" class="flex flex-col items-start bg-gray-800/50 rounded-2xl p-6 backdrop-blur-lg animate__animated animate__fadeInUp" :style="{ 'animation-delay': `${index * 0.2}s` }">
          <div class="relative w-full">
            <img :src="robot.imageUrl" alt="" class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]">
          </div>
          <div class="max-w-xl">
            <div class="mt-8 flex items-center gap-x-4 text-xs">
              <time :datetime="robot.datetime" class="text-gray-400">{{ robot.date }}</time>
              <span class="relative z-10 rounded-full bg-cyan-400/10 px-3 py-1.5 font-medium text-cyan-400">{{ robot.category }}</span>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                <span class="absolute inset-0"></span>
                {{ robot.name }}
              </h3>
              <p class="mt-5 text-sm leading-6 text-gray-300">{{ robot.description }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'animate.css';

const robots = [
  {
    name: 'Atlas Pro',
    description: 'Our flagship humanoid robot designed for complex industrial operations and disaster response. Features advanced AI and real-time adaptation capabilities.',
    date: 'Mar 16, 2024',
    datetime: '2024-03-16',
    category: 'Industrial',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    name: 'Nexus Scout',
    description: 'Autonomous exploration robot equipped with advanced sensors and mapping technology for unknown terrain navigation.',
    date: 'Mar 10, 2024',
    datetime: '2024-03-10',
    category: 'Exploration',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    name: 'MediBot X',
    description: 'Healthcare assistance robot with precise motor control for surgical support and patient care, featuring advanced sterile protocols.',
    date: 'Mar 5, 2024',
    datetime: '2024-03-05',
    category: 'Healthcare',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
];
</script>
