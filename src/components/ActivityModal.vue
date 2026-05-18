<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue"
import ImgModal from "./ImgModal.vue"

const props = defineProps({
  isOpen: Boolean,
  act: Object,
})

const emit = defineEmits(["close"])

// ── gallery state ──────────────────────────────────────────
const activeIndex = ref(0)
const imgModalOpen = ref(false)

// reset when a new activity is opened
watch(
  () => props.act,
  () => {
    activeIndex.value = 0
    imgModalOpen.value = false
  }
)

// ── gallery helpers ─────────────────────────────────────────
function prev() {
  if (!props.act?.img?.length) return
  activeIndex.value = (activeIndex.value - 1 + props.act.img.length) % props.act.img.length
}

function next() {
  if (!props.act?.img?.length) return
  activeIndex.value = (activeIndex.value + 1) % props.act.img.length
}

function openImgModal() {
  imgModalOpen.value = true
}

// ── keyboard (only when this page is open & ImgModal is closed) ──
function onKeydown(e) {
  if (!props.isOpen || imgModalOpen.value) return
  if (e.key === "ArrowLeft")  prev()
  else if (e.key === "ArrowRight") next()
  else if (e.key === "Escape") emit("close")
}

onMounted(() => window.addEventListener("keydown", onKeydown))
onUnmounted(() => window.removeEventListener("keydown", onKeydown))
</script>

<template>
  <transition name="fade">
    <div
      v-if="isOpen && act"
      class="fixed inset-0 z-100 p-2 md:p-10 md:px-16 w-full overflow-y-auto
             bg-white text-gray-900
             dark:bg-bg-dark dark:text-white"
    >

      <!-- Nav -->
      <div class="flex justify-between ">
        <button
          @click="$emit('close')"
          class="flex items-center gap-2 py-2 rounded-2xl text-purple-700 hover:text-secondary dark:text-accent  dark:hover:text-accent-dark-soft transition  -all"
        >
          <span class="material-symbols-outlined">
            arrow_back
          </span>

          <p class="font-medium">
            Back to Activities
          </p>
        </button>
      </div>

      <div class="grid lg:grid-cols-2 gap-10 mt-8">

        <div>
          <div
            v-if="act.type"
            class="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6
                   border border-purple-400/40 bg-purple-100 text-purple-700
                   dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-300"
          >
            <span class="material-symbols-outlined text-xl md:text-2xl">
              {{ act.icon ?? "emoji_events" }}
            </span>
            {{ act.type }}
          </div>

          <h1 class="text-xl md:text-2xl lg:text-5xl font-black leading-tight
                     text-gray-900 dark:text-white">
            {{ act.title }}
          </h1>

          <p v-if="act.achievement"
             class="text-lg md:text-2xl mt-3 text-purple-600 dark:text-purple-400">
            {{ act.achievement }}
          </p>

          <p v-if="act.organizer"
             class="text-sm mt-2 text-gray-500 dark:text-gray-400">
            {{ act.organizer }}
          </p>

          <div class="w-full h-px bg-linear-to-r from-yellow-400 via-pink-500 to-purple-500 my-4" />

          <p v-if="act.description"
             class="leading-7 md:leading-9 text-sm md:text-lg
                    text-gray-700 dark:text-gray-300">
            {{ act.description }}
          </p>

          <div v-if="act.technologies?.length" class="mt-8">
            <h2 class="text-lg md:text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Technologies
            </h2>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in act.technologies"
                :key="tech"
                class="px-3 py-1 rounded-full text-sm
                       border border-purple-400/40 bg-purple-100 text-purple-700
                       dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-300"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div v-if="act.leaned || act.learned" class="mt-10">
            <h2 class="text-xl md:text-2xl font-bold mb-5 text-gray-800 dark:text-white">
              What I Learned
            </h2>
            <div class="rounded-3xl p-6
                        border border-gray-200 bg-gray-50
                        dark:border-white/10 dark:bg-white/5">
              <p class="leading-6 md:leading-8 text-sm md:text-base text-gray-700 dark:text-gray-300">
                {{ act.learned ?? act.leaned }}
              </p>
            </div>
          </div>
        </div>

        <div>
          <div
            v-if="act.img?.length"
            class="relative rounded-2xl overflow-hidden group
                   border border-gray-200 dark:border-white/10"
          >
            <button
              class=" block focus:outline-none"
              :title="act.img.length > 1 ? 'Click to view fullscreen' : undefined"
              @click="openImgModal"
            >
              <img
                :src="act.img[activeIndex]"
                :alt="act.title"
                class=" h-[420px] object-cover transition-all duration-300
                       group-hover:brightness-90"
              />
              <div
                class="absolute inset-0 flex items-center justify-center
                       opacity-0 group-hover:opacity-100 transition-all pointer-events-none"
              >
                <span
                  class="material-symbols-outlined text-white text-5xl drop-shadow-lg"
                >
                  zoom_in
                </span>
              </div>
            </button>

            <template v-if="act.img.length > 1">
              <button
                @click.stop="prev"
                class="absolute left-3 top-1/2 -translate-y-1/2
                       w-10 h-10 rounded-full flex items-center justify-center
                       bg-black/50 hover:bg-black/70 text-white
                       transition-all opacity-0 group-hover:opacity-100 z-10"
                aria-label="Previous image"
              >
                <span class="material-symbols-outlined text-[20px]">chevron_left</span>
              </button>

              <button
                @click.stop="next"
                class="absolute right-3 top-1/2 -translate-y-1/2
                       w-10 h-10 rounded-full flex items-center justify-center
                       bg-black/50 hover:bg-black/70 text-white
                       transition-all opacity-0 group-hover:opacity-100 z-10"
                aria-label="Next image"
              >
                <span class="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>

              <div class="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium
                          bg-black/50 text-white backdrop-blur-sm pointer-events-none z-10">
                {{ activeIndex + 1 }} / {{ act.img.length }}
              </div>

              <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                <button
                  v-for="(_, i) in act.img"
                  :key="i"
                  @click.stop="activeIndex = i"
                  :class="[
                    'w-2 h-2 rounded-full transition-all',
                    i === activeIndex
                      ? 'bg-white scale-125'
                      : 'bg-white/40 hover:bg-white/70',
                  ]"
                  :aria-label="`Image ${i + 1}`"
                />
              </div>
            </template>
          </div>

          <div
            v-if="act.img?.length > 1"
            class="flex gap-3 mt-4 overflow-x-auto pb-1"
          >
            <button
              v-for="(image, index) in act.img"
              :key="index"
              @click="activeIndex = index"
              :class="[
                ' h-[68px] rounded-xl overflow-hidden border-2 transition-all',
                index === activeIndex
                  ? 'border-purple-500 dark:border-purple-400 opacity-100 scale-105'
                  : 'border-gray-200 dark:border-white/10 opacity-50 hover:opacity-80',
              ]"
              :aria-label="`View image ${index + 1}`"
            >
              <img
                :src="image"
                :alt="`${act.title} ${index + 1}`"
                class="w-full h-full object-cover"
              />
            </button>
          </div>

          <div
            v-if="act.overview"
            class="mt-8 rounded-3xl p-7
                   border border-gray-200 bg-gray-50
                   dark:border-white/10 dark:bg-white/5"
          >
            <div class="flex items-center gap-3 mb-4">
              <span class="material-symbols-outlined text-3xl
                           text-purple-600 dark:text-purple-400">
                code
              </span>
              <h2 class="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                Project Overview
              </h2>
            </div>
            <p class="leading-6 md:leading-8 text-sm md:text-base text-gray-700 dark:text-gray-300">
              {{ act.overview }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </transition>

  <ImgModal
    v-if="act?.img?.length"
    :show="imgModalOpen"
    :images="act.img"
    :active-index="activeIndex"
    @close="imgModalOpen = false"
    @update:index="activeIndex = $event"
  />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}
</style>