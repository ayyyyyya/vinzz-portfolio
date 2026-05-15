<script setup lang="ts">
import {
  ArrowRight,
  Code2,
  ExternalLink,
  Github,
  Mail,
  MessageCircle,
  Rocket,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-vue-next";
import { projects } from "~/data/projects";
import { skills } from "~/data/skills";
import { socials } from "~/data/socials";

const socialIcons = {
  github: Github,
  email: Mail,
  whatsapp: MessageCircle,
};

const stats = [
  {
    label: "Focus",
    value: "Web & Bot",
  },
  {
    label: "Stack",
    value: "Nuxt",
  },
  {
    label: "Deploy",
    value: "VPS NAT",
  },
];
</script>

<template>
  <main class="relative min-h-screen overflow-hidden px-5 py-6 text-white sm:px-8 lg:px-16">
    <div class="grid-bg pointer-events-none absolute inset-0 opacity-25" />

    <section id="home" class="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center">
      <nav class="absolute top-0 flex w-full items-center justify-between py-4">
        <a href="#home" class="text-lg font-black tracking-tight">
          Vinzz<span class="text-purple-400">.</span>
        </a>

        <div class="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          <a href="#about" class="transition hover:text-white">About</a>
          <a href="#skills" class="transition hover:text-white">Skills</a>
          <a href="#projects" class="transition hover:text-white">Projects</a>
          <a href="#contact" class="transition hover:text-white">Contact</a>
        </div>

        <a
          href="#contact"
          class="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
        >
          Contact
        </a>
      </nav>

      <div class="grid items-center gap-12 pt-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="fade-up">
          <div
            class="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-purple-100"
          >
            <Sparkles class="mr-2 h-4 w-4 text-purple-300" />
            Modern Developer Portfolio
          </div>

          <h1 class="max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm
            <span class="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-red-400 bg-clip-text text-transparent">
              Vinzz
            </span>
          </h1>

          <p class="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
            Developer yang fokus bikin website modern, bot automation, dan project digital yang clean,
            cepat, dan gampang dikembangkan.
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              class="inline-flex items-center justify-center rounded-2xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-500"
            >
              View Projects
              <ArrowRight class="ml-2 h-4 w-4" />
            </a>

            <a
              href="#contact"
              class="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>

          <div class="mt-10 grid max-w-xl grid-cols-3 gap-3">
            <div
              v-for="item in stats"
              :key="item.label"
              class="glass-card rounded-2xl p-4"
            >
              <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">
                {{ item.label }}
              </p>
              <p class="mt-2 font-bold text-zinc-100">
                {{ item.value }}
              </p>
            </div>
          </div>
        </div>

        <div class="float-soft relative">
          <div class="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-purple-500/30 to-red-500/20 blur-2xl" />

          <div class="glass-card relative overflow-hidden rounded-[2rem] p-7 shadow-2xl">
            <div class="mb-8 flex items-center gap-3">
              <div class="h-3 w-3 rounded-full bg-red-400" />
              <div class="h-3 w-3 rounded-full bg-yellow-400" />
              <div class="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div class="space-y-4 font-mono text-sm text-zinc-300">
              <p>
                <span class="text-purple-300">const</span>
                <span class="text-white"> developer</span> = {
              </p>
              <p class="pl-5">
                name: <span class="text-red-300">"Vinzz"</span>,
              </p>
              <p class="pl-5">
                role: <span class="text-red-300">"Web & Bot Developer"</span>,
              </p>
              <p class="pl-5">
                stack: <span class="text-red-300">"Nuxt + Tailwind"</span>,
              </p>
              <p class="pl-5">
                server: <span class="text-red-300">"VPS NAT"</span>,
              </p>
              <p>}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="relative mx-auto max-w-6xl py-24">
      <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p class="mb-4 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-purple-100">
            About
          </p>
          <h2 class="text-3xl font-black tracking-tight sm:text-4xl">
            Portfolio simple, modern, dan gampang diurus dari HP.
          </h2>
        </div>

        <div class="glass-card rounded-[2rem] p-7">
          <p class="leading-8 text-zinc-300">
            Vinzz Portfolio dibuat dengan workflow yang simpel: edit source code di GitHub,
            pull ke VPS lewat Termius, lalu deploy pakai script. Cocok untuk project pribadi,
            showcase bot, dan identitas developer.
          </p>

          <div class="mt-6 grid gap-3 sm:grid-cols-3">
            <div class="rounded-2xl bg-white/5 p-4">
              <Code2 class="mb-3 h-5 w-5 text-purple-300" />
              <p class="font-bold">Clean Code</p>
            </div>
            <div class="rounded-2xl bg-white/5 p-4">
              <Terminal class="mb-3 h-5 w-5 text-purple-300" />
              <p class="font-bold">VPS Flow</p>
            </div>
            <div class="rounded-2xl bg-white/5 p-4">
              <Zap class="mb-3 h-5 w-5 text-purple-300" />
              <p class="font-bold">Fast Deploy</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="relative mx-auto max-w-6xl py-24">
      <p class="mb-4 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-purple-100">
        Skills
      </p>

      <h2 class="max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
        Stack yang dipakai untuk build dan deploy.
      </h2>

      <div class="mt-10 grid gap-5 md:grid-cols-3">
        <div
          v-for="group in skills"
          :key="group.title"
          class="glass-card rounded-3xl p-6 transition hover:-translate-y-1 hover:bg-white/10"
        >
          <h3 class="text-xl font-bold">
            {{ group.title }}
          </h3>

          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="skill in group.items"
              :key="skill"
              class="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-zinc-200"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="relative mx-auto max-w-6xl py-24">
      <p class="mb-4 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-purple-100">
        Projects
      </p>

      <h2 class="max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
        Featured projects.
      </h2>

      <p class="mt-4 max-w-2xl leading-7 text-zinc-300">
        Bagian ini bisa kamu edit gampang dari file data/projects.ts.
      </p>

      <div class="mt-10 grid gap-5 md:grid-cols-3">
        <a
          v-for="project in projects"
          :key="project.title"
          :href="project.href"
          class="glass-card group rounded-3xl p-6 text-white transition hover:-translate-y-1 hover:bg-white/10"
        >
          <div class="mb-5 flex items-center justify-between">
            <Rocket class="h-6 w-6 text-purple-300" />
            <ExternalLink class="h-4 w-4 text-zinc-500 transition group-hover:text-white" />
          </div>

          <h3 class="text-xl font-bold">
            {{ project.title }}
          </h3>

          <p class="mt-3 text-sm leading-7 text-zinc-300">
            {{ project.description }}
          </p>

          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="rounded-full border border-purple-300/20 bg-purple-300/10 px-3 py-1 text-xs text-purple-100"
            >
              {{ tag }}
            </span>
          </div>
        </a>
      </div>
    </section>

    <section id="contact" class="relative mx-auto max-w-6xl py-24">
      <div class="glass-card rounded-[2rem] p-8 sm:p-10">
        <p class="mb-4 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-purple-100">
          Contact
        </p>

        <h2 class="max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
          Let's build something cool.
        </h2>

        <p class="mt-4 max-w-2xl leading-7 text-zinc-300">
          Hubungi Vinzz lewat GitHub, email, atau WhatsApp. Link bisa kamu edit dari file data/socials.ts.
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            v-for="social in socials"
            :key="social.label"
            :href="social.href"
            :target="social.external ? '_blank' : undefined"
            :rel="social.external ? 'noreferrer' : undefined"
            class="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            <component :is="socialIcons[social.type]" class="mr-2 h-4 w-4" />
            {{ social.label }}
          </a>
        </div>
      </div>
    </section>

    <footer class="relative mx-auto max-w-6xl border-t border-white/10 py-8 text-center text-sm text-zinc-400">
      © {{ new Date().getFullYear() }} Vinzz. Built with Nuxt, GitHub, and VPS.
    </footer>
  </main>
</template>