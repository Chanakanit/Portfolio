<script setup>
const allLogos = [
  { icon: "/assets/logo-stack/CSS3.svg", name: "CSS3" },
  { icon: "/assets/logo-stack/Express.png", name: "Express.js" },
  { icon: "/assets/logo-stack/MySQL.png", name: "MySQL" },
  { icon: "/assets/logo-stack/NextJS.png", name: "Next.js" },
  { icon: "/assets/logo-stack/Node.js.png", name: "Node.js" },
  { icon: "/assets/logo-stack/PostgreSQL.png", name: "PostgreSQL" },
  { icon: "/assets/logo-stack/Prisma.png", name: "Prisma" },
  { icon: "/assets/logo-stack/Tailwind.png", name: "Tailwind CSS" },
  { icon: "/assets/logo-stack/TypeScript.png", name: "TypeScript" },
  { icon: "/assets/logo-stack/Vue.png", name: "Vue.js" },
  { icon: "/assets/logo-stack/docker.png", name: "Docker" },
  { icon: "/assets/logo-stack/gemini.png", name: "Gemini AI" },
  { icon: "/assets/logo-stack/git.png", name: "Git" },
  { icon: "/assets/logo-stack/github.png", name: "GitHub" },
  { icon: "/assets/logo-stack/html.png", name: "HTML5" },
  { icon: "/assets/logo-stack/indexeddb.png", name: "IndexedDB" },
  { icon: "/assets/logo-stack/js.png", name: "JavaScript" },
  { icon: "/assets/logo-stack/keycloak.png", name: "Keycloak" },
  { icon: "/assets/logo-stack/line.png", name: "Line API" },
  { icon: "/assets/logo-stack/make.png", name: "Make" },
  { icon: "/assets/logo-stack/python.png", name: "Python" },
  { icon: "/assets/logo-stack/react.png", name: "React" },
  { icon: "/assets/logo-stack/sheet.png", name: "Google Sheets" },
  { icon: "/assets/logo-stack/vscode.png", name: "VS Code" }
]

// Split logos into two rows for the marquee
const row1 = allLogos.slice(0, 12)
const row2 = allLogos.slice(12, 24)
</script>

<template>
    <section id="skills" class="pt-24 md:pt-34 overflow-hidden h-screen">
        <!-- Head -->
        <div class="flex flex-col items-center justify-center mb-16 px-6 text-center">
            <h1 class="text-4xl md:text-6xl font-black mb-4">
                Skills & <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Technologies</span>
            </h1>
            <p class="text-slate-500 dark:text-slate-400 max-w-2xl text-lg">
                The tools, languages, and frameworks I use to build modern, scalable, and user-friendly applications.
            </p>
            <div class="bg-gradient-to-r from-blue-500 to-purple-500 mt-6 h-1 w-24 rounded-full"></div>
        </div>

        <!-- Marquee Container -->
        <div class="relative flex flex-col gap-8 w-full py-10 marquee-container">
            
            <!-- Left & Right Fade Overlays -->
            <div class="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-bg-light dark:from-bg-dark to-transparent z-10 pointer-events-none"></div>
            <div class="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-bg-light dark:from-bg-dark to-transparent z-10 pointer-events-none"></div>

            <!-- Row 1: Moves Left -->
            <div class="flex animate-scroll-left">
                <!-- We render the list twice to create the infinite loop effect -->
                <div class="flex shrink-0" v-for="i in 2" :key="'row1-'+i">
                    <div 
                        v-for="(skill, index) in row1" 
                        :key="index" 
                        class="group flex items-center gap-4 px-6 md:px-8 py-4 mx-4 rounded-full bg-white/40 dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-lg hover:shadow-blue-500/20 hover:scale-110 hover:-translate-y-1 hover:bg-white dark:hover:bg-white/10 transition-all duration-300 cursor-pointer backdrop-blur-md"
                    >
                        <img loading="lazy" :src="skill.icon" :alt="skill.name" class="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm" />
                        <span class="text-lg md:text-xl font-bold text-slate-700 dark:text-slate-200 group-hover:text-blue-500 transition-colors">{{ skill.name }}</span>
                    </div>
                </div>
            </div>

            <!-- Row 2: Moves Right -->
            <div class="flex animate-scroll-right">
                <!-- We render the list twice to create the infinite loop effect -->
                <div class="flex shrink-0" v-for="i in 2" :key="'row2-'+i">
                    <div 
                        v-for="(skill, index) in row2" 
                        :key="index" 
                        class="group flex items-center gap-4 px-6 md:px-8 py-4 mx-4 rounded-full bg-white/40 dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-lg hover:shadow-purple-500/20 hover:scale-110 hover:-translate-y-1 hover:bg-white dark:hover:bg-white/10 transition-all duration-300 cursor-pointer backdrop-blur-md"
                    >
                        <img loading="lazy" :src="skill.icon" :alt="skill.name" class="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:-rotate-12 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm" />
                        <span class="text-lg md:text-xl font-bold text-slate-700 dark:text-slate-200 group-hover:text-purple-500 transition-colors">{{ skill.name }}</span>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes scroll-right {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

.animate-scroll-left {
  animation: scroll-left 40s linear infinite;
  width: max-content;
}

.animate-scroll-right {
  animation: scroll-right 40s linear infinite;
  width: max-content;
}

/* Pause animation on hover */
.marquee-container:hover .animate-scroll-left,
.marquee-container:hover .animate-scroll-right {
  animation-play-state: paused;
}
</style>