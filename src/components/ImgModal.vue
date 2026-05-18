<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  show: Boolean,
  images: Array,
  activeIndex: Number
})

const emit = defineEmits([
  'close',
  'update:index'
])

const nextImage = () => {
  if (props.activeIndex < props.images.length - 1) {
    emit('update:index', props.activeIndex + 1)
  } else {
    emit('update:index', 0)
  }
}

const prevImage = () => {
  if (props.activeIndex > 0) {
    emit('update:index', props.activeIndex - 1)
  } else {
    emit('update:index', props.images.length - 1)
  }
}

const handleKeydown = (e) => {
  if (!props.show) return

  // next
  if (
    e.key === '>' ||
    e.key === '.' ||
    e.key === 'ArrowRight'
  ) {
    nextImage()
  }

  // prev
  if (
    e.key === '<' ||
    e.key === ',' ||
    e.key === 'ArrowLeft'
  ) {
    prevImage()
  }

  // close
  if (e.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="show"
        class="fixed inset-0 z-150 flex items-center justify-center p-10 bg-black/80"
      >
        <!-- close -->
        <button
          @click="emit('close')"
          class="absolute top-5 right-5 text-white text-4xl hover:opacity-70 transition"
        >
          <span class="material-symbols-outlined text-8xl">
            close
          </span>
        </button>

        <!-- prev -->
        <button
          @click="prevImage"
          class="absolute left-5 text-white hover:opacity-70 transition"
        >
          <span class="material-symbols-outlined text-8xl">
            chevron_left
          </span>
        </button>

        <!-- image -->
        <img
          :src="images[activeIndex]"
          class="max-w-full max-h-[90vh] rounded-xl select-none"
          draggable="false"
        />

        <!-- next -->
        <button
          @click="nextImage"
          class="absolute right-5 text-white hover:opacity-70 transition"
        >
          <span class="material-symbols-outlined text-5xl">
            chevron_right
          </span>
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>