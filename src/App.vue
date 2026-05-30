<script setup>
import { defineAsyncComponent } from 'vue';
import Hero from './components/Hero.vue';
import Navbar from './components/Navbar.vue';

const About = defineAsyncComponent(() => import('./components/About.vue'));
const Skills = defineAsyncComponent(() => import('./components/Skills.vue'));
const Project = defineAsyncComponent(() => import('./components/Project.vue'));
const Activities = defineAsyncComponent(() => import('./components/Activities.vue'));
const Contact = defineAsyncComponent(() => import('./components/Contact.vue'));
const Footer = defineAsyncComponent(() => import('./components/Footer.vue'));
</script>

<template>
  <main class="mx-auto md:max-w-5/6">
    <Navbar />
    <Hero/>
    <About/>
    <Skills/>
    <Project/>
    <Activities/>
    <Contact/>
    <Footer/>
  </main>
</template>
