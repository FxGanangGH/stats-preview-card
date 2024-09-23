<template>
  <main
    class="flex size-full min-h-screen items-center justify-center bg-project-main py-10"
  >
    <div class="flex w-11/12 max-w-sm flex-col md:w-11/12 lg:max-w-5xl lg:flex-row">
      <div v-if="!isDesktop" class="relative">
        <img class="rounded-t-lg" src="/images/image-header-mobile.jpg" />
        <div class="absolute top-0 z-10 size-full rounded-t-lg bg-project-accent/50" />
      </div>
      <div
        class="flex flex-col items-center justify-center rounded-b-lg bg-project-card p-10 lg:w-1/2 lg:items-start lg:rounded-br-none lg:rounded-tl-lg lg:pl-14 statsDesktop:pr-20"
      >
        <h1
          class="text-center font-inter text-3xl font-bold text-white lg:text-left lg:text-4xl"
        >
          Get <span class="text-project-accent">insights</span> that help your business
          grow.
        </h1>
        <p
          class="mt-5 text-center font-inter text-stats text-white/75 lg:mt-8 lg:text-left"
        >
          Discover the benefits of data analytics and make better decisions regarding
          revenue, customer experience, and overall efficiency.
        </p>
        <div
          class="mt-10 flex flex-col items-center justify-center gap-y-5 lg:mt-16 lg:flex-row lg:gap-x-14 lg:gap-y-0"
        >
          <div
            v-for="(stat, index) in shows"
            :key="index"
            class="flex flex-col items-center justify-center lg:items-start"
          >
            <h2 class="font-inter text-2xl font-bold text-white">
              {{ stat.number }}
            </h2>
            <span class="font-lexend text-xs uppercase tracking-widest text-white/60">
              {{ stat.type }}
            </span>
          </div>
        </div>
      </div>
      <div v-if="isDesktop" class="relative h-full w-1/2">
        <img class="rounded-r-lg" src="/images/image-header-desktop.jpg" />
        <div class="absolute top-0 z-10 size-full rounded-r-lg bg-project-accent/50" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const currentWidth = ref(window.innerWidth);
const isDesktop = computed(() => currentWidth.value >= 1024);

const updateWidth = () => {
  currentWidth.value = window.innerWidth;
  console.log(isDesktop.value);
  console.log(currentWidth.value);
};

const shows = [
  {
    type: "companies",
    number: 10 + "k+",
  },

  {
    type: "templates",
    number: 314,
  },

  {
    type: "queries",
    number: 12 + "M+",
  },
];

onMounted(() => {
  window.addEventListener("resize", updateWidth);
});
</script>
