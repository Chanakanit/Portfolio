<script setup>
import Hero from './components/Hero.vue';
import Navbar from './components/Navbar.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Project from './components/Project.vue';
import Activities from './components/Activities.vue';
</script>

<template>
  <div class="mx-auto md:max-w-5/6">
    <Navbar />
    <Hero/>
    <About/>
    <Skills/>
    <Project/>
    <Activities/>
  </div>
</template>
