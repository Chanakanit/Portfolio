<script setup>
const skillCategories = [
  {
    title: "Frontend",
    icon: "code",
    skills: [
      { icon: "/src/assets/logo-stack/Vue.png", name: "Vue.js" },
      { icon: "/src/assets/logo-stack/js.png", name: "JavaScript" },
      { icon: "/src/assets/logo-stack/html.png", name: "HTML5" },
      { icon: "/src/assets/logo-stack/CSS3.svg", name: "CSS3" },
      { icon: "/src/assets/logo-stack/Tailwind.png", name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    icon: "dns",
    skills: [
      { icon: "/src/assets/logo-stack/Node.js.png", name: "Node.js" },
      { icon: "/src/assets/logo-stack/Express.png", name: "Express.js" },
      { icon: "/src/assets/logo-stack/MySQL.png", name: "MySQL" },
      { icon: "/src/assets/logo-stack/docker.png", name: "Docker" },
    ],
  },
  {
    title: "Tools",
    icon: "construction",
    skills: [
      { icon: "/src/assets/logo-stack/git.png", name: "Git" },
      { icon: "/src/assets/logo-stack/github.png", name: "GitHub" },
      { icon: "/src/assets/logo-stack/vscode.png", name: "VS Code" }
    ],
  },
  {
    title: "Soft Skills",
    icon: "person",
    skills: [
      { icon: "/src/assets/logo-stack/puzzle.png", name: "Problem Solving" },
      { icon: "/src/assets/logo-stack/lightning.png", name: "Fast Learning" },
      { icon: "/src/assets/logo-stack/group.png", name: "Teamwork" },
      { icon: "/src/assets/logo-stack/light-bulb.png", name: "Creativity" },
      { icon: "/src/assets/logo-stack/chat.png", name: "Communication" },
    ],
  },
]
</script>

<template>
    <section id="skills" class="pt-15 pb-28 ">
        <!-- Head -->
        <div class="flex p-6 md:justify-between">
             <!-- left Text -->
             <h1 class="text-4xl md:text-6xl font-black w-2/5 my-auto">Skills &
                 <br/> <span class="text-4xl md:text-5xl text-secondary">Technologies</span>
                 <div class="bg-gradient-hero-primary animate-gradient mt-4 h-1 w-48"></div>
             </h1>
            
             <!-- right Bg -->
             <div class="hidden md:flex flex-1 bg-stack-light dark:bg-stack-dark bg-no-repeat bg-center bg-contain h-75 "></div>
         </div>

         <!-- Content -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 gap-4">
              <div
                 v-for="category in skillCategories"
                 :key="category.title"
                 class="rounded-xl p-6 flex-1 bg-blur"
             >
                 <div class="flex items-center gap-3 mb-6">
                     <span class="material-symbols-outlined text-primary text-3xl bg-blur p-2 rounded-full">
                     {{ category.icon }}
                     </span>
     
                     <h2 class="text-2xl font-bold">
                     {{ category.title }}
                     </h2>
                 </div>
     
                 <div class="space-y-4">
                     <div
                     v-for="skill in category.skills"
                     :key="skill.name"
                     class="flex items-center gap-3"
                     >
                         <img class="w-7 h-7" :src="skill.icon" />
     
                         <p>{{ skill.name }}</p>
                     </div>
                 </div>
             </div>
          </div>
    </section>
</template>