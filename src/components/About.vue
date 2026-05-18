<script setup>
import { useReveal } from '../script/useReveal.js'
useReveal()

const timeline = [
  {
    year: "2024",
    title: "Started Web Development",
    desc: "Began learning frontend development and modern web technologies.",
    color: "from-purple-500 to-pink-500",
    text: "text-purple-400"
  },
  {
    year: "2025",
    title: "Built Real Projects",
    desc: "Worked on real-world web projects and improved UI/UX and development skills.",
    color: "from-yellow-400 to-amber-500",
    text: "text-yellow-400"
  },
  {
    year: "2026",
    title: "Learning Full Stack & Business",
    desc: "Expanding knowledge in backend systems, scalable applications, and business concepts.",
    color: "from-blue-400 to-cyan-500",
    text: "text-blue-400"
  },
]
</script>

<template>
    <section class="bg-universal bg-no-repeat bg-cover bg-fixed" id="about">
        <div class="pt-24 md:pb-28 px-6 md:p-0 md:pt-28">
            <!-- About -->
            <div class="grid grid-rows-[auto_auto_auto] md:flex md:flex-row md:justify-between md:items-center md:h-100 gap-4">

                <!-- Left Text -->
                <div class="animate-fade-left md:flex-1 md:flex md:flex-col md:justify-around md:h-90 bg-blur-text">
                    <div>
                        <h1 class="text-6xl font-serif font-black">About <span class="text-primary-dark dark:text-primary">Me</span></h1>
                        <div class="bg-white h-1 w-1/2 mt-4 bg-gradient-hero-secondary animate-gradient mb-6 md:mb-0"></div>
                    </div>

                    <!-- รูป (mobile only) -->
                    <div class="animate-fade-in md:hidden h-80 flex justify-center items-center">
                        <div class="bg-blur-gradient-primary w-60 h-full rounded-2xl smooth-bg">
                            <div class="bg-Profile h-full bg-no-repeat bg-center bg-cover rounded-2xl" aria-label="Chanakan Profile">
                                <div class="w-full md:w-6/7 h-17 relative top-60 md:-left-4 bg-blur-theme flex items-center gap-4 p-4 rounded-lg animate-floating">
                                    <span class="material-symbols-outlined bg-blur text-secondary p-2 rounded-full flex items-center justify-center select-none">
                                        school
                                    </span>
                                    <div class="space-y-1">
                                        <p class="">Chanakan Unkhoaw</p>
                                        <p class="font-mono text-xs md:text-sm text-orange-500 font-semibold">Full Stack Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- text อธิบาย -->
                    <div class="smooth-bg flex flex-col mt-8 font-mono gap-8 text-slate-800 dark:text-slate-200">
                        <p>
                            I'm an Information Technology student at <span class="text-orange-600 dark:text-orange-500">SIT KMUTT</span> who&apos;s passionate about Full Stack Development, startups, and tech-driven solutions.
                        </p>
                        <p>
                            I enjoy building modern web applications and exploring how technology and business can come together to solve real-world problems and create meaningful impact.
                        </p>
                    </div>
                </div>

                <!-- Right Profile (desktop only) -->
                <div class="animate-fade-in hidden md:flex md:flex-1 h-100 justify-center items-center">
                    <div class="bg-blur-gradient-primary w-80 h-full rounded-2xl smooth-bg">
                        <div class="bg-Profile h-full bg-no-repeat bg-center bg-cover rounded-2xl" aria-label="Chanakan Profile">
                            <div class="w-6/7 h-17 relative top-80 left-2 bg-blur-theme flex items-center gap-4 p-4 rounded-lg animate-floating">
                                <span class="material-symbols-outlined bg-blur text-secondary p-2 rounded-full flex items-center justify-center select-none">
                                    school
                                </span>
                                <div class="space-y-1">
                                    <p class="">Chanakan Unkhoaw</p>
                                    <p class="font-mono text-sm text-orange-500 font-semibold dark:text-accent-dark">Full Stack Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pt-12 flex flex-col md:flex-row items-center">
                <!-- Journey -->
                <div class="flex-1">
                    <!-- title -->
                    <div class="text-xl flex items-center gap-4">
                        <div class="h-3 w-3 rounded-full bg-gradient-hero-primary animate-gradient"></div>
                        <h2 class="text-4xl font-semibold">My <span class="text-3xl text-primary-dark dark:text-primary">Journey</span></h2>
                    </div>

                    <!-- Content -->
                    <div class="px-4 md:px-6 pt-8 bg-blur-text">
                        <div
                            v-for="(item, index) in timeline"
                            :key="index"
                            class="grid grid-cols-[55px_65px_1fr] md:grid-cols-[70px_85px_1fr] gap-1"
                        >
                            <!-- YEAR -->
                            <div class="text-lg md:text-2xl font-bold pt-2" :class="item.text">
                                {{ item.year }}
                            </div>

                            <!-- LINE + DOT -->
                            <div class="relative flex justify-center">
                                <div v-if="index !== timeline.length - 1" class="absolute top-10 w-1 h-3/4 bg-linear-to-b" :class="item.color"></div>
                                <div class="border w-8 h-8 md:w-10 md:h-10 rounded-full border-current bg-bg-light dark:bg-bg-dark flex justify-center items-center timeline-dot" :class="item.text">
                                    <div class="w-4 h-4 md:w-5 md:h-5 rounded-full bg-current"></div>
                                </div>
                            </div>

                            <!-- CONTENT -->
                            <div class="pb-6 md:pb-10">
                                <h2 class="text-base md:text-xl font-semibold mb-1">
                                    {{ item.title }}
                                </h2>
                                <p class="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {{ item.desc }}
                                </p>
                                <div class="mt-3 md:mt-4 h-px bg-white/10"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Career Goal -->
                <div class="flex-1 flex flex-col justify-center mt-4 md:mt-0">
                    <div class="flex flex-col justify-center bg-blur bg-white/90 dark:bg-bg-dark/60 rounded-xl mx-4 md:mx-24 h-auto md:h-80 px-6 md:px-8 py-6">
                        <div class="flex items-center gap-4 pb-4 md:pb-6">
                            <span class="material-symbols-outlined bg-blur p-3 rounded-full select-none text-orange-500" aria-hidden="true">
                                flag
                            </span>
                            <h1 class="text-xl md:text-2xl font-semibold text-accent">Career Goal</h1>
                        </div>
                        <p class="text-sm md:text-base text-slate-700 dark:text-slate-300 pb-3 md:pb-4">
                            My goal is to become a Full Stack Developer who creates impactful digital products by combining technology, creativity, and business understanding.
                        </p>
                        <p class="text-sm md:text-base text-blue-700 dark:text-secondary">
                            I want to build solutions meaningful problems for people.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>