<template>
  <div class="relative isolate bg-gray-900">
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
            <div class="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]" aria-hidden="true">
              <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-cyan-600 to-blue-800 opacity-30" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
          </div>
          <h2 class="text-base font-semibold leading-7 text-cyan-400 animate__animated animate__fadeIn">Get in touch</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-white animate__animated animate__fadeIn animate__delay-1s">Let's Build the Future Together</p>
          <p class="mt-6 text-lg leading-8 text-gray-300 animate__animated animate__fadeIn animate__delay-2s">Join us in revolutionizing automation. Whether you're looking to implement robotics solutions or explore partnership opportunities, we're here to help.</p>
          <dl class="mt-10 space-y-4 text-base leading-7 text-gray-300">
            <div v-for="(contact, index) in contactInfo" :key="contact.id" 
                 class="flex gap-x-4 animate__animated animate__fadeInLeft"
                 :style="{ 'animation-delay': `${index * 0.2 + 1}s` }">
              <dt class="flex-none">
                <span class="sr-only">{{ contact.label }}</span>
                <component :is="contact.icon" class="h-7 w-6 text-cyan-400" aria-hidden="true" />
              </dt>
              <dd>{{ contact.value }}</dd>
            </div>
          </dl>
        </div>
      </div>
      <form class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 animate__animated animate__fadeInRight animate__delay-1s">
        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label for="first-name" class="block text-sm font-semibold leading-6 text-white">First name</label>
              <div class="mt-2.5">
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 bg-gray-800/50 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-cyan-400 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-sm font-semibold leading-6 text-white">Last name</label>
              <div class="mt-2.5">
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 bg-gray-800/50 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-cyan-400 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-semibold leading-6 text-white">Email</label>
              <div class="mt-2.5">
                <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 bg-gray-800/50 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-cyan-400 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-semibold leading-6 text-white">Message</label>
              <div class="mt-2.5">
                <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 bg-gray-800/50 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-cyan-400 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>
          </div>
          <div class="mt-8 flex justify-end">
            <button type="submit" class="rounded-md bg-cyan-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400">Send message</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'
import 'animate.css'

const contactInfo = [
  { 
    id: 1,
    label: 'Address',
    icon: BuildingOffice2Icon,
    value: '123 Innovation Drive, Silicon Valley, CA 94025'
  },
  {
    id: 2,
    label: 'Phone',
    icon: PhoneIcon,
    value: '+1 (555) 234-5678'
  },
  {
    id: 3,
    label: 'Email',
    icon: EnvelopeIcon,
    value: 'contact@nexusrobotics.tech'
  }
]
</script>
