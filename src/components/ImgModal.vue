<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  show: Boolean,
  images: Array,
  activeIndex: Number
})

const emit = defineEmits([
  'close',
  'update:index'
])

const touchStartX = ref(0)
const touchEndX = ref(0)

const handleTouchStart = (e) => {
  touchStartX.value = e.changedTouches ? e.changedTouches[0].screenX : e.screenX
}

const handleTouchEnd = (e) => {
  touchEndX.value = e.changedTouches ? e.changedTouches[0].screenX : e.screenX
  handleSwipe()
}

const handleSwipe = () => {
  const swipeThreshold = 50 // Minimum pixels to be considered a swipe
  if (touchEndX.value < touchStartX.value - swipeThreshold) {
    nextImage()
  }
  if (touchEndX.value > touchStartX.value + swipeThreshold) {
    prevImage()
  }
}

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
        class="fixed inset-0 z-200 flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-sm"
        @click.self="emit('close')"
      >
        <!-- close -->
        <button
          @click="emit('close')"
          class="absolute top-5 right-5 text-white/70 hover:text-white transition z-50 hover:scale-110 drop-shadow-md"
        >
          <span class="material-symbols-outlined text-5xl md:text-6xl">
            close
          </span>
        </button>

        <!-- prev -->
        <button
          @click.stop="prevImage"
          @mousedown.stop
          @touchstart.stop
          class="absolute left-6 md:left-8 w-10 h-10 md:w-12 md:h-12 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-all hover:scale-110 z-50 bg-black/30 hover:bg-black/80 border border-white/30 rounded-full"
        >
          <span class="material-symbols-outlined mt-1 ]">
            chevron_left
          </span>
        </button>

        <!-- image container -->
        <div class="relative flex items-center justify-center max-w-full max-h-full">
          <img
            :src="images[activeIndex]"
            class="max-w-full max-h-[90vh] rounded-xl select-none cursor-grab active:cursor-grabbing object-contain shadow-2xl"
            draggable="false"
            @touchstart="handleTouchStart"
            @touchend="handleTouchEnd"
            @mousedown="handleTouchStart"
            @mouseup="handleTouchEnd"
          />
        </div>

        <!-- next -->
        <button
          @click.stop="nextImage"
          @mousedown.stop
          @touchstart.stop
          class="absolute right-6 md:right-8 w-10 h-10 md:w-12 md:h-12 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-all hover:scale-110 z-50 bg-black/30 hover:bg-black/80 border border-white/30 rounded-full"
        >
          <span class="material-symbols-outlined mt-1 ">
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