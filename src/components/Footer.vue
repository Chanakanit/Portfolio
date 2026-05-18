<script setup>
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
  }
]
</script>

<template>
    <footer
        class="px-6 md:px-0 py-7 bg-white dark:bg-bg-dark border-t border-slate-200 dark:border-white/10 smooth"
    >
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

            <!-- Left -->
            <div class="flex flex-col md:flex-row md:items-center gap-5 md:gap-7">

                <h1
                    class="text-3xl font-black font-serif text-slate-900 dark:text-white"
                >
                    Chanakanit
                </h1>

                <!-- Social -->
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
                            :aria-label="social.name"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex items-center justify-center
                                   bg-slate-100 dark:bg-slate-800
                                   border border-slate-200 dark:border-slate-700
                                   w-11 h-11 rounded-2xl
                                   hover:-translate-y-1 hover:border-primary/40
                                   transition-all duration-300"
                        >
                            <span
                                class="bg-no-repeat bg-contain bg-center w-7 h-7 smooth-bg"
                                :class="social.icon"
                                aria-hidden="true"
                            ></span>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Right -->
            <div class="flex flex-col md:items-end text-center md:text-right">
                <a
                    href="mailto:chanakanbbig@gmail.com"
                    class="text-sm text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                >
                    chanakanbbig@gmail.com
                </a>

                <p class="text-sm text-slate-500 mt-2">
                    © 2026 Chanakanit. All rights reserved.
                </p>
            </div>

        </div>
    </footer>
</template>