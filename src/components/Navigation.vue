<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <router-link to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">NexusRobotics</span>
          <div class="flex items-center animate__animated animate__fadeInLeft">
            <span class="ml-2 text-lg font-bold text-white">NexusRobotics</span>
          </div>
        </router-link>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <router-link v-for="(item, index) in navigation" :key="item.name" :to="item.to" 
           class="text-sm/6 font-semibold text-gray-300 hover:text-cyan-400 transition-colors animate__animated animate__fadeInDown"
           :style="{ 'animation-delay': `${index * 0.2}s` }">
          {{ item.name }}
        </router-link>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <router-link to="/contact" class="text-sm/6 font-semibold text-cyan-400 animate__animated animate__fadeInRight">Contact Us <span aria-hidden="true">→</span></router-link>
      </div>
    </nav>
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-800">
        <div class="flex items-center justify-between">
          <router-link to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">NexusRobotics</span>
            <CircuitBoardIcon class="h-8 w-auto text-cyan-500" />
          </router-link>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-300" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-700">
            <div class="space-y-2 py-6">
              <router-link v-for="item in navigation" :key="item.name" :to="item.to" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-300 hover:bg-gray-800 hover:text-cyan-400">{{ item.name }}</router-link>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import 'animate.css'

const navigation = [
  { name: 'Contact', to: '/contact' },
]

const mobileMenuOpen = ref(false)
</script>
