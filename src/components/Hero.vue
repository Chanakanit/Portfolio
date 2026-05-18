<script setup>
import { useReveal } from '../script/useReveal.js'
useReveal()

const socialLinks = [
  { 
    name: 'GitHub',
    url: 'https://github.com/Chanakanit',
    icon: 'bg-icon-github-dark dark:bg-icon-github-light'
  },
  { 
    name: 'Instagram',
    url: 'https://www.instagram.com/b.bigo.o/',
    icon: 'bg-icon-instagram-dark dark:bg-icon-instagram-light'
  },
  { 
    name: 'Facebook',
    url: 'https://web.facebook.com/chanakan.unkhaow.2025',
    icon: 'bg-icon-face-dark dark:bg-icon-face-light'
  },
  { 
    name: 'Email',
    url: 'mailto:chanakanbbig@gmail.com',
    icon: 'bg-icon-email-dark dark:bg-icon-email-light'
  },
]
</script>

<template>
    <section
        id="hero"
        aria-labelledby="hero-heading"
        class="flex flex-col-reverse px-6 py-8 md:p-0 md:flex-row gap-12 h-screen bg-white dark:bg-bg-dark smooth"
    >
        <!-- Left -->
        <div class="relative flex flex-col h-full mt-20 md:mt-0 md:justify-center flex-1 opacity-0 animate-delay-200 animate-fade-left">

            <p
                class="smooth-bg text-gradient-primary uppercase mb-3 text-lg font-semibold animate-typing"
                style="--typing-chars: 19; --typing-duration: 2s;"
                aria-hidden="true"
            >
                hello, i'm
            </p>

            <h1
                id="hero-heading"
                class="smooth-bg text-gradient-hero-name font-bold text-6xl animate-gradient"
            >
                Chanakanit
            </h1>

            <p
                class="smooth-bg text-gradient-hero-title font-black mb-3 text-5xl animate-gradient"
                aria-label="Full Stack Developer"
            >
                Full Stack Developer
            </p>

            <p class="smooth-bg text-lg text-slate-800 dark:text-slate-300 max-w-xl">
                Creating clean, responsive, and user-friendly web applications.
            </p>

            <!-- Button -->
            <div class="mt-8">
                <a
                    href="#projects"
                    class="group inline-flex items-center gap-3
                        bg-primary dark:bg-primary-dark
                        text-white
                        px-7 py-3.5 rounded-2xl font-semibold
                        shadow-lg shadow-primary/20
                        hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30
                        transition-all duration-300"
                >

                        View Projects
                </a>
            </div>

            <!-- Social -->
            <div class="absolute bottom-32 md:bottom-20 z-10">
                <p
                    class="text-gray-500 font-bold mb-4 text-xs tracking-widest select-none uppercase"
                    aria-hidden="true"
                >
                    Find me on
                </p>

                <ul
                    class="flex gap-3"
                    aria-label="Social media links"
                    role="list"
                >
                    <li
                        v-for="social in socialLinks"
                        :key="social.name"
                    >
                        <a
                            :href="social.url"
                            :aria-label="`Visit my ${social.name} profile`"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex items-center justify-center bg-blur dark:bg-blur-blue icon-blur-accent w-13 h-13 rounded-2xl"
                        >
                            <span
                                class="bg-no-repeat bg-contain bg-center w-12 h-12 smooth-bg"
                                :class="social.icon"
                                aria-hidden="true"
                            ></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Right -->
        <div
            class="hidden md:inline-flex relative flex-1 h-full rounded-full smooth opacity-0 animate-delay-200 animate-fade-right"
            aria-hidden="true"
            role="presentation"
        >
            <video
                autoplay
                muted
                loop
                playsinline
                poster="/assets/logo/logo-model-dark.svg"
                class="hidden dark:block absolute inset-0 h-full w-full object-contain opacity-80 smooth"
            >
                <source
                    src="/assets/logo/animation-logo-dark.mp4"
                    type="video/mp4"
                />
            </video>
            
            <video
                autoplay
                muted
                loop
                playsinline
                poster="/assets/logo/logo-model-light.svg"
                class="block dark:hidden absolute inset-0 h-full w-full object-contain smooth"
            >
                <source
                    src="/assets/logo/animation-logo-light.mp4"
                    type="video/mp4"
                />
            </video>
        </div>

        <!-- Scroll -->
        <div
            class="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center"
            aria-hidden="true"
        >
            <span
                class="material-symbols-outlined smooth-bg animate-bounce
                       bg-blur dark:bg-blur-accent
                       text-primary dark:text-primary-dark-soft
                       shadow-lg dark:shadow-purple-100/30
                       p-3 font-bold rounded-full select-none"
            >
                keyboard_arrow_down
            </span>
        </div>

    </section>
</template>