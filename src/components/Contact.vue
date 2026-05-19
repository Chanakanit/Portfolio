<script setup>
import { reactive, ref } from 'vue'
import { useReveal } from '../script/useReveal.js'

useReveal()

const contacts = [
  {
    title: 'Email',
    value: 'chanakanbbig@gmail.com',
    link: 'mailto:chanakanbbig@gmail.com',
    icon: 'alternate_email',
    color: 'text-orange-500'
  },
  {
    title: 'GitHub',
    value: 'github.com/Chanakanit',
    link: 'https://github.com/Chanakanit',
    icon: 'code',
    color: 'text-purple-500'
  },
  {
    title: 'Instagram',
    value: '@b.bigo.o',
    link: 'https://www.instagram.com/b.bigo.o/',
    icon: 'photo_camera',
    color: 'text-pink-500'
  },
  {
    title: 'Facebook',
    value: 'Chanakan Unkhaow',
    link: 'https://web.facebook.com/chanakan.unkhaow.2025',
    icon: 'public',
    color: 'text-blue-500'
  }
]

const form = reactive({ name: '', email: '', message: '' })
const status = ref('') // 'sending' | 'success' | 'error'

async function handleSubmit() {
  status.value = 'sending'

  const res = await fetch('https://formspree.io/f/xwvzvpdp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form)
  })

  if (res.ok) {
    status.value = 'success'
    form.name = ''
    form.email = ''
    form.message = ''
  } else {
    status.value = 'error'
  }
}
</script>

<template>
    <section
        id="contact"
        class="bg-universal bg-no-repeat bg-cover bg-fixed px-6  py-24 md:py-30 md:px-0"
    >
        <div class="max-w-6xl mx-auto">
            
            <!-- Title -->
            <div class="text-center mb-16 opacity-0 animate-fade-up">
                <p class="uppercase tracking-[0.3em] text-sm text-orange-600 dark:text-orange-400 mb-4">
                    Contact
                </p>

                <h1 class="text-5xl md:text-6xl font-black font-serif">
                    Let&apos;s <span class="text-primary-dark dark:text-primary">Connect</span>
                </h1>

                <div class="mx-auto mt-5 h-1 w-52 bg-gradient-hero-blue animate-gradient rounded-full"></div>

                <p class="mt-6 text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
                    Feel free to reach out for collaboration, freelance projects, or just to say hello.
                </p>
            </div>

            <!-- Content -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
                
                <!-- Left -->
                <div class="opacity-0 animate-fade-left">
                    <div class="bg-blur rounded-4xl h-full p-8 md:p-10 smooth-bg border border-white/10">
                        
                        <div class="flex items-center gap-4 mb-8">
                            <span
                                class="material-symbols-outlined bg-blur text-primary dark:text-primary-dark-soft p-4 rounded-full select-none"
                            >
                                mail
                            </span>

                            <div>
                                <p class="text-sm uppercase tracking-widest text-slate-500">
                                    Contact Info
                                </p>

                                <h2 class="text-3xl font-bold">
                                    Get In Touch
                                </h2>
                            </div>
                        </div>

                        <div class="space-y-5 font-mono">
                            
                            <a
                                v-for="contact in contacts"
                                :key="contact.title"
                                :href="contact.link"
                                target="_blank"
                                class="bg-blur-theme rounded-3xl p-5 flex items-center gap-4 border border-transparent hover:border-white/10 hover:-translate-y-1 transition-all duration-300"
                            >
                                <span
                                    class="material-symbols-outlined bg-blur p-3 rounded-full select-none"
                                    :class="contact.color"
                                >
                                    {{ contact.icon }}
                                </span>

                                <div>
                                    <p class="text-sm text-slate-500 dark:text-slate-400">
                                        {{ contact.title }}
                                    </p>

                                    <p class="text-slate-800 dark:text-slate-200 break-all">
                                        {{ contact.value }}
                                    </p>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>

                <!-- Right -->
                <div class="opacity-0 animate-fade-right">
                    <form @submit.prevent="handleSubmit" class="bg-blur rounded-4xl p-8 md:p-10 border border-white/10 smooth-bg">
                        <div class="space-y-6">

                            <!-- Name -->
                            <div>
                                <label for="name" class="block mb-3 text-sm uppercase tracking-widest text-slate-500">
                                    Your Name
                                </label>
                                <input
                                    id="name"
                                    v-model="form.name"
                                    type="text"
                                    placeholder="Enter your name"
                                    required
                                    class="w-full rounded-2xl bg-blur-theme px-5 py-4 outline-none border border-white/10
                                           text-slate-800 dark:text-slate-100
                                           placeholder:text-slate-500 dark:placeholder:text-slate-400
                                           focus:border-primary dark:focus:border-primary-dark smooth"
                                />
                            </div>

                            <!-- Email -->
                            <div>
                                <label for="email" class="block mb-3 text-sm uppercase tracking-widest text-slate-500">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    v-model="form.email"
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    class="w-full rounded-2xl bg-blur-theme px-5 py-4 outline-none border border-white/10
                                           text-slate-800 dark:text-slate-100
                                           placeholder:text-slate-500 dark:placeholder:text-slate-400
                                           focus:border-primary dark:focus:border-primary-dark smooth"
                                />
                            </div>

                            <!-- Message -->
                            <div>
                                <label for="message" class="block mb-3 text-sm uppercase tracking-widest text-slate-500">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    v-model="form.message"
                                    rows="6"
                                    placeholder="Write your message..."
                                    required
                                    class="w-full rounded-2xl bg-blur-theme px-5 py-4 outline-none border border-white/10 resize-none
                                           text-slate-800 dark:text-slate-100
                                           placeholder:text-slate-500 dark:placeholder:text-slate-400
                                           focus:border-primary dark:focus:border-primary-dark smooth"
                                ></textarea>
                            </div>

                            <!-- Button -->
                            <button
                                type="submit"
                                :disabled="status === 'sending'"
                                class="group cursor-pointer w-full bg-gradient-hero-primary animate-gradient rounded-2xl py-4 font-semibold text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                <span class="flex items-center justify-center gap-2">
                                    {{ status === 'sending' ? 'Sending...' : 'Send Message' }}
                                    <span class="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                                        arrow_forward
                                    </span>
                                </span>
                            </button>

                            <!-- Feedback -->
                            <p v-if="status === 'success'" class="text-green-500 text-sm text-center">
                                ✅ Message sent successfully!
                            </p>
                            <p v-if="status === 'error'" class="text-red-500 text-sm text-center">
                                ❌ Something went wrong. Please try again.
                            </p>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    </section>
</template>