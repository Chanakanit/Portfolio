<script setup>
import { ref, computed, watch, onUnmounted } from "vue"
import { categories, activities } from "../data/Activities.js"
import ActivityModal from "./ActivityModal.vue"

const navs = categories
const activeFilter = ref("All")

// modal state
const isOpen = ref(false)
const selectedAct = ref(null)

// open modal
const openModal = (act) => {
  selectedAct.value = act
  isOpen.value = true
}

// close modal
const closeModal = () => {
  isOpen.value = false
  selectedAct.value = null
}

watch(isOpen, (value) => {
  if (value) {
    document.body.classList.add("overflow-hidden")
  } else {
    document.body.classList.remove("overflow-hidden")
  }
})

onUnmounted(() => {
  document.body.classList.remove("overflow-hidden")
})

const filtered = computed(() => {
  if (activeFilter.value === "All") return activities

  return activities
    .map((item) => ({
      ...item,
      act: item.act.filter(
        (act) => act.type === activeFilter.value
      ),
    }))
    .filter((item) => item.act.length > 0)
})
</script>

<template>
  <section
    id="activities"
    class="pt-24 md:pt-30 pb-24 flex flex-col px-4"
  >
    <!-- Header -->
    <div class="mb-6">
      <h1
        class="text-4xl lg:text-6xl font-black leading-tight tracking-tight"
      >
        Activities
        <br />

        <span
          class="bg-linear-to-r from-purple-400 dark:from-purple-300 to-purple-600 bg-clip-text text-transparent"
        >
          & Competitions
        </span>
      </h1>

      <div
        class="w-48 h-1 mt-3 rounded-full bg-linear-to-r from-yellow-300 via-pink-500 to-purple-600 animate-gradient"
      ></div>
    </div>

    <!-- Filter -->
    <nav class="flex flex-wrap items-center gap-2 mb-6 p-2">
      <button
        v-for="cat in navs"
        :key="cat"
        @click="activeFilter = cat"
        :aria-pressed="activeFilter === cat"
        :class="[
          'btn-filter',
          activeFilter === cat
            ? 'bg-blue-400/20 border-blue-400 text-blue-800 dark:text-white'
            : 'bg-white/5 border-white/10 text-slate-400 hover:border-blue-500/40 hover:text-blue-300',
        ]"
      >
        {{ cat }}
      </button>
    </nav>

    <!-- Activities -->
    <div class="rounded-2xl bg-blur p-8">
      <div class="flex items-center gap-3 mb-12">
        <span class="material-symbols-outlined text-purple-400 text-4xl">
          emoji_events
        </span>

        <h2 class="text-3xl font-bold">
          {{ activeFilter }}
        </h2>
      </div>

      <div
        v-for="item in filtered"
        :key="item.year"
        class="flex flex-col md:flex-row gap-4 mt-8 md:gap-8"
      >
        <!-- year -->
        <div class="text-purple-400 font-bold text-4xl">
          {{ item.year }}
        </div>

        <div class="flex-1 flex-col gap-4">
          <!-- card -->
          <div
            v-for="act in item.act"
            :key="act.title"
            @click="openModal(act)"
            class="rounded-3xl bg-blur mb-4 p-6 hover:border-purple-500 transition cursor-pointer"
          >
            <div class="flex items-start gap-5">
              <!-- icon -->
              <div
                class="min-w-10 md:min-w-20 h-10 md:h-20 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center"
              >
                <span
                  class="material-symbols-outlined text-yellow-400 text-3xl"
                >
                  {{ act.icon }}
                </span>
              </div>

              <div>
                <h3 class="text-lg md:text-2xl font-bold">
                  {{ act.title }}
                </h3>

                <p class="text-purple-400 font-semibold mt-1">
                  {{ act.badge }}
                </p>

                <p
                  class="text-gray-400 mt-4 line-clamp-1 w-3/4 font-mono"
                >
                  {{ act.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <ActivityModal
      :isOpen="isOpen"
      :act="selectedAct"
      @close="closeModal"
    />
  </section>
</template>