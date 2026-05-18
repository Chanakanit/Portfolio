<script setup>
import { ref, onMounted } from 'vue';

const isDark = ref(false)

import { useReveal } from '../script/useReveal.js'
useReveal()

function applyTheme(value) {
    isDark.value = value
    document.documentElement.classList.toggle("dark", value)
    localStorage.setItem("theme", value ? "dark" : "light")
}

onMounted(() => {
    const savedTheme = localStorage.getItem("theme")
    const shouldUseDark =
        savedTheme === "dark" ||
        (savedTheme === null && window.matchMedia("(prefers-color-scheme: dark)").matches)
    applyTheme(shouldUseDark)
})

function toggleTheme() {
    applyTheme(!isDark.value)
}

const navs = [
    { name: "About",    href: "#about" },
    { name: "Skills",   href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Activities",  href: "#activities" },
    { name: "Contact",  href: "#contact" },
]

const openHam = ref(false)
function toggleHam() {
    openHam.value = !openHam.value
}
</script>

<template>
    <header
        role="banner"
        class="fixed md:max-w-5/6 top-0 w-full z-100 flex justify-between items-center px-6 pt-4 md:pt-10 md:px-0"
    >
        <!-- Logo -->
        <a href="/" aria-label="Chanakanit — go to home page"
            class="opacity-0 animate-delay-200 animate-fade-down smooth-bg bg-logo-light dark:bg-logo-dark bg-no-repeat bg-cover h-15 w-15"
        ></a>

        <!-- Desktop nav -->
        <nav aria-label="Main navigation"
            class="opacity-0 animate-delay-200 animate-fade-down dark:text-secondary-dark0 hidden text-blue-800 dark:text-blue-100 md:flex items-center justify-center gap-6 bg-blur px-6 py-3 rounded-full transition-all duration-200 text-lg ease-in hover:px-12  "
        >
            <a v-for="nav in navs" :key="nav.name"
                :href="nav.href"
                class=" hover:font-semibold  hover-link"
            >{{ nav.name }}</a>
        </nav>

        <!-- Desktop theme toggle -->
        <button
            @click="toggleTheme"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            :aria-pressed="isDark"
            class="opacity-0 animate-delay-200 animate-fade-down hidden md:flex items-center justify-center"
        >
            <span class="material-symbols-outlined bg-blur icon-blur" aria-hidden="true">
                {{ isDark ? 'light_mode' : 'dark_mode' }}
            </span>
        </button>

        <!-- Mobile hamburger -->
        <button
            @click="toggleHam"
            :aria-label="openHam ? 'Close navigation menu' : 'Open navigation menu'"
            :aria-expanded="openHam"
            aria-controls="mobile-drawer"
            class="opacity-0 animate-delay-200 animate-fade-down flex md:hidden items-center justify-center bg-blur icon-blur relative z-100"
        >
            <span class="material-symbols-outlined" aria-hidden="true">
                {{ openHam ? 'close' : 'menu' }}
            </span>
        </button>

        <!-- Mobile backdrop -->
        <div
            v-if="openHam"
            class="fixed inset-0 z-49 bg-black/20 dark:bg-black/10 backdrop-blur-[1px]"
            aria-hidden="true"
            @click="toggleHam"
        ></div>

        <!-- Mobile drawer -->
        <Transition
            enter-active-class="transition-all duration-150 ease-in"
            enter-from-class="translate-x-100"
            enter-to-class="translate-x-0"
            leave-active-class="transition-all duration-150 ease-in"
            leave-from-class="translate-x-0"
            leave-to-class="translate-x-100"
        >
            <div
                v-if="openHam"
                id="mobile-drawer"
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
                class="fixed inset-0 z-50"
            >
                <!-- Click-outside overlay -->
                <div class="absolute inset-0 z-51" aria-hidden="true" @click="toggleHam"></div>

                <div class="absolute flex flex-col items-center z-52 right-0 top-0 h-full w-4/5 max-w-sm
                            bg-white/80 dark:bg-bg-dark/90 backdrop-blur-2xl
                            border-l border-white/20 dark:border-white/10 shadow-2xl">

                    <!-- Mobile links -->
                    <nav aria-label="Mobile navigation" class="my-auto flex flex-col gap-10 text-center text-3xl">
                        <a v-for="nav in navs" :key="nav.name"
                            :href="nav.href"
                            class="hover-link hover:font-semibold"
                            @click="toggleHam"
                        >{{ nav.name }}</a>
                    </nav>

                    <!-- Mobile theme toggle -->
                    <button
                        @click="toggleTheme"
                        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
                        :aria-pressed="isDark"
                        class="flex items-center justify-center mb-10"
                    >
                        <span
                            class="material-symbols-outlined"
                            :class="isDark ? 'bg-blur icon-blur' : 'bg-blur-blue icon-blur-blue'"
                            aria-hidden="true"
                        >
                            {{ isDark ? 'light_mode' : 'dark_mode' }}
                        </span>
                    </button>
                </div>
            </div>
        </Transition>

    </header>
</template>