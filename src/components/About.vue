<template>
  <div class="bg-gray-900">
    <!-- Hero section -->
    <div class="relative isolate overflow-hidden pt-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-base font-semibold leading-7 text-cyan-400 animate__animated animate__fadeIn">About NexusRobotics</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl animate__animated animate__fadeIn animate__delay-1s">Shaping the Future of Robotics</p>
          <p class="mt-6 text-lg leading-8 text-gray-300 animate__animated animate__fadeIn animate__delay-2s">
            Founded in 2020, NexusRobotics has been at the forefront of robotics innovation, pushing the boundaries of what is possible in autonomous systems and artificial intelligence.
          </p>
        </div>
      </div>
    </div>

    <!-- Values section -->
    <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl animate__animated animate__fadeIn">Our Values</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300 animate__animated animate__fadeIn animate__delay-1s">
          We believe in creating technology that enhances human capabilities while maintaining the highest standards of ethics and safety.
        </p>
      </div>
      <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
        <div v-for="(value, index) in values" :key="value.name" 
             class="relative pl-9 animate__animated animate__fadeInUp"
             :style="{ 'animation-delay': `${index * 0.2}s` }">
          <dt class="inline font-semibold text-white">
            <component :is="value.icon" class="absolute left-1 top-1 h-5 w-5 text-cyan-400" aria-hidden="true" />
            {{ value.name }}
          </dt>
          <dd class="inline">{{ value.description }}</dd>
        </div>
      </dl>
    </div>

    <!-- Team section -->
    <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl animate__animated animate__fadeIn">Our Team</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300 animate__animated animate__fadeIn animate__delay-1s">
          Meet the innovators and visionaries behind NexusRobotics groundbreaking technologies.
        </p>
      </div>
      <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
        <li v-for="(person, index) in team" :key="person.name" 
            class="animate__animated animate__fadeInUp"
            :style="{ 'animation-delay': `${index * 0.2}s` }">
          <img :src="person.imageUrl" :alt="person.name" class="aspect-[14/13] w-full rounded-2xl object-cover bg-gray-800">
          <h3 class="mt-6 text-lg font-semibold leading-8 text-white">{{ person.name }}</h3>
          <p class="text-base leading-7 text-gray-300">{{ person.role }}</p>
          <p class="text-sm leading-6 text-gray-500">{{ person.location }}</p>
        </li>
      </ul>
    </div>

    <!-- Mission section -->
    <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 mt-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl animate__animated animate__fadeIn">Our Mission</h2>
          <p class="mt-6 text-lg leading-8 text-gray-300 animate__animated animate__fadeIn animate__delay-1s">
            To revolutionize the field of robotics through innovative solutions that solve real-world challenges and improve human lives. We are committed to developing autonomous systems that are not only technologically advanced but also ethical, safe, and accessible to all.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BeakerIcon, LightBulbIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/vue/24/outline'
import 'animate.css'

const values = [
  {
    name: 'Innovation',
    description: ' is at our core. We constantly push the boundaries of what is possible in robotics and AI.',
    icon: LightBulbIcon,
  },
  {
    name: 'Ethics',
    description: ' guide every decision we make. We believe in responsible innovation that benefits humanity.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Collaboration',
    description: ' drives our success. We work closely with partners and communities to create meaningful solutions.',
    icon: UserGroupIcon,
  },
  {
    name: 'Scientific Excellence',
    description: ' is our foundation. We maintain the highest standards in research and development.',
    icon: BeakerIcon,
  },
]

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Executive Officer',
    location: 'San Francisco, CA',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Dr. Marcus Rodriguez',
    role: 'Chief Technology Officer',
    location: 'Boston, MA',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Dr. Emily Patel',
    role: 'Head of Research',
    location: 'Cambridge, UK',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Dr. James Wilson',
    role: 'Lead Robotics Engineer',
    location: 'Tokyo, Japan',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
]
</script>
