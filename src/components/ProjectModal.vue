<script setup>
import { ref, watch } from 'vue'
import ImgModal from './ImgModal.vue'

const props = defineProps({
  project: Object,
  show: Boolean
})

defineEmits(['close'])

const activeTab = ref(0)

watch(() => props.project, () => {
  activeTab.value = 0
})


const showModal = ref(false)
const activeImageIndex = ref(0)

const openImage = (index) => {
  activeImageIndex.value = index
  showModal.value = true
}

</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="show && project"
        class="fixed inset-0 z-100 p-10 md:px-16 w-full overflow-y-auto bg-bg-light dark:bg-bg-dark dark:text-white "
      >
        <!-- Nav -->
        <div class="flex justify-between">
          <button
            @click="$emit('close')"
            class="flex items-center gap-2 px-4 py-2 rounded-2xl text-purple-700 hover:text-secondary dark:text-accent  dark:hover:text-accent-dark-soft transition  -all"
          >
            <span class="material-symbols-outlined">
              arrow_back
            </span>

            <p class="font-medium">
              Back to projects
            </p>
          </button>
        </div>

        <!-- Hero Section -->
        <div class="flex flex-col md:flex-row w-full md:justify-between mt-6 gap-8">
          
          <!-- Screenshot -->
          <div class="flex-1 flex h-full my-auto">
            <div
              class="h-full w-full bg-center  min-h-60 rounded-2xl bg-contain bg-no-repeat"
              :style="`background-image: url(${project.screenshot[0]})`"
            />
          </div>

          <!-- Project Info -->
          <div
            class="w-full md:w-1/2 h-full bg-blur rounded-2xl p-6 flex flex-col gap-4"
          >
            <div>
              <h2 class="text-3xl font-black">
                {{ project.name }}
              </h2>

              <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-2">
                {{ project.desc }}
              </p>
            </div>

            <!-- Buttons -->
            <div class="flex flex-wrap gap-3 my-3">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                class="flex gap-2 items-center px-4 py-2.5 rounded-xl bg-blur hover:shadow-none hover:border-black/20 dark:hover:border-white/30 text-sm font-semibold transition-all"
              >
                <img src="../assets/logo-stack/github.png" class="w-6 h-6" alt=""> <p>GitHub</p>
              </a>

              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                class="flex gap-2 items-center px-8 py-2.5 rounded-xl bg-linear-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all"
              >
                <span class="material-symbols-outlined">
                  open_in_new
                </span>

                <p>Livw Demo</p>
              </a>

              <span
                v-else
                class="px-8 py-2.5 rounded-xl bg-white/5 text-slate-500 text-sm cursor-not-allowed border border-black/20 dark:border-white/20"
              >
                No Demo
              </span>
            </div>

            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <!-- row 2 -->
        <div class="flex flex-col md:flex-row md:justify-between gap-4 mt-12">
          <!-- Detail Tabs -->
          <div v-if="project.detail" class="w-full md:w-3/4 overflow-auto">
            <!-- Tabs -->
            <div class="overflow-x-auto scrollbar-hide  dark:border-white/10">
              <div class="flex gap-4">
                <button
                  v-for="(tab, index) in project.detail"
                  :key="index"
                  class="relative text-lg font-semibold whitespace-nowrap transition-colors duration-200"
                  :class="activeTab === index
                    ? 'text-violet-500 dark:text-violet-400 font-semibold'
                    : 'text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white'"
                  @click="activeTab = index"
                >
                  {{ tab.title }}
  
                  <span
                    v-if="activeTab === index"
                    class="absolute bottom-0 left-0 w-full h-0.5 bg-violet-500 rounded-full"
                  />
                </button>
              </div>
            </div>
  
            <!-- Content -->
            <div class="pt-5 space-y-2 w-full md:w-2/3">
              <p
                v-for="(paragraph, i) in project.detail[activeTab].desc"
                :key="i"
                class=" text-slate-600 dark:text-slate-300"
              >
                {{ paragraph }}
              </p>
            </div>
          </div>

          <!-- Project Info -->
          <div class="w-full md:w-1/2 md:max-w-md ml-auto bg-blur py-4 px-6 flex flex-col rounded-lg gap-2">
            <h2 class="text-xl font-semibold text-primary pb-2">Project Info</h2>
            <div class="flex justify-between">
              <p class="text-slate-600 dark:text-slate-300">Category</p>
              <p class="text-accent dark:text-accent-dark-soft">{{ project.category }}</p>
            </div>
            <div class="flex justify-between">
              <p class="text-slate-600 dark:text-slate-300">Type</p>
              <p class="text-secondary-dark">{{ project.type }}</p>
            </div>
            <div class="flex justify-between">
              <p class="text-slate-600 dark:text-slate-300">Role Type</p>
              <p class="text-pink-500">{{ project.roleType }}</p>
            </div>
            <div class="flex justify-between">
              <p class="text-slate-600 dark:text-slate-300">Contributors</p>
              <div class="">
                <p class="text-orange-500 text-sm" v-for="contributor in project.contributors">{{ contributor }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- row3 -->
          <div class="mt-10 w-full mb-10">
            <h1 class="text-2xl text-primary font-semibold pb-4">
              Screen Shot
            </h1>

            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full  ">
              <div
                v-for="(img, index) in project.screenshot"
                :key="index"
                @click="openImage(index)"
                class="aspect-video rounded-lg bg-cover bg-center cursor-pointer border border-black/20 dark:border-white/20 hover:scale-[1.02] smooth"
                :style="`background-image: url(${img})`"
              ></div>
            </div>
          </div>

          <!-- Modal -->
          <ImgModal
            :show="showModal"
            :images="project.screenshot"
            :activeIndex="activeImageIndex"
            @close="showModal = false"
            @update:index="activeImageIndex = $event"
          />

      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>