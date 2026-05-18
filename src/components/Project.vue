<script setup>
import { ref, computed, watch } from 'vue'
import ProjectCard from './ProjectCard.vue'
import ProjectModal from './ProjectModal.vue'
import { categories, projects } from '../data/projects'

const navs = categories
const activeFilter = ref("All")
const selectedProject = ref(null)
const showModal = ref(false)

const filtered = computed(() =>
  activeFilter.value === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter.value)
)

function openModal(project) {
  selectedProject.value = project
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

watch(showModal, (value) => {
  document.body.style.overflow = value ? "hidden" : "auto"
})
</script>

<template>
  <section id="projects" class="pt-24 md:pt-34 pb-24 flex flex-col px-4 md:px-0">
    <h1 class="text-5xl md:text-6xl font-black  text-center mb-4">
      Pro<span class="text-primary-dark dark:text-primary">jects</span>
    </h1>

    <!-- Filter Nav -->
    <nav class="flex flex-wrap items-center gap-2 mb-6 p-2">
      <button
        v-for="cat in navs"
        :key="cat"
        :class="[
          'px-5 py-2 rounded-4xl border text-sm font-medium transition-all duration-200',
          activeFilter === cat
            ? 'bg-blue-400/20 border-blue-400 text-blue-800 dark:text-white'
            : 'bg-white/5 border-white/10 text-slate-400 hover:border-blue-500/40 hover:text-blue-300'
        ]"
        @click="activeFilter = cat"
      >{{ cat }}</button>
    </nav>

    <!-- Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
      <ProjectCard
        v-for="project in filtered"
        :key="project.id"
        :project="project"
        @open="openModal"
      />
    </div>

    <!-- Modal -->
    <ProjectModal
      :project="selectedProject"
      :show="showModal"
      @close="closeModal"
    />
  </section>
</template>