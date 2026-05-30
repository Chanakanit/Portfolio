<script setup>
defineProps({
  project: Object
})
defineEmits(['open'])
</script>

<template>
    <div
    class="group relative bg-blur border rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 hover:scale-102 flex flex-col justify-between"
    @click="$emit('open', project)"
    >
        <!-- IMG -->
         <div class="overflow-hidden w-full h-50">
           <img loading="lazy" :src="project.screenshot[0]" :alt="project.name" class="w-full h-full smooth-bg object-cover  hover:scale-110"/>
         </div>

        <!-- Title + Desc -->
        <div class="py-3 px-5 ">
          <h3 class="text-2xl font-bold mb-1.5 truncate">{{ project.name }}</h3>
          <p class="text-sm text-slate-400 leading-relaxed line-clamp-3">{{ project.desc }}</p>
        </div>

        <!-- Category Tags -->
        <div class="flex flex-wrap gap-1.5 px-3">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="text-xs px-3 py-1 rounded-full bg-blur dark:text-slate-300"
          >{{ tag }}</span>
        </div>

        <div class="flex justify-between items-center my-4 mx-5">
            <!-- Tech Icons -->
            <div class="flex items-center gap-3 ">
              <img
                v-for="tech in project.techIcons"
                :key="tech.name"
                :src="tech.icon"
                :alt="tech.name"
                :title="tech.name"
                class="w-6 h-6 object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
    
            </div>
            
            <!-- Arrow button -->
             <span class="material-symbols-outlined flex items-center justify-center text-2xl text-black/40 dark:text-white/40 animate-floating-x cursor-pointer">
            arrow_right_alt
            </span>
        </div>
      </div>
</template>