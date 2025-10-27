<script setup>
const { title, chapters } = useCourse();
</script>

<template>
  <div>
    <div class="mb-4 flex justify-between items-center w-full">
      <h1>
        <span class="font-medium"
          >Course:
          <span class="font-bold">{{ title }}</span>
        </span>
      </h1>
      <UserCard />
    </div>
    <div class="flex flex-row justify-content flex-grow">
      <div
        class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] h-full min-w-[30ch] flex flex-col"
      >
        <h3>Chapters</h3>
        <div
          class="space-y-1 mb-7 flex flex-col"
          v-for="chapter in chapters"
          :key="chapter.slug"
        >
          <h4 class="font-bold">{{ chapter.title }}</h4>
          <NuxtLink
            v-for="(lesson, index) in chapter.lessons"
            :key="lesson.slug"
            :to="lesson.path"
            :class="{
              'text-blue-500': lesson.path === $route.fullPath,
              'text-gray-600': lesson.path !== $route.fullPath,
            }"
            class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1"
          >
            <span class="text-gray-500">{{ index + 1 }}.</span>
            <span>{{ lesson.title }}</span>
          </NuxtLink>
        </div>
      </div>
      <div class="prose p-12 bg-white rounded-md w-[65ch]">
        <NuxtErrorBoundary>
          <NuxtPage />
          <template #error="{ error, clearError }">
            <p>
              Oh no, something broke! <code>{{ error }}</code>
            </p>
            <p><button @click="clearError">Reset</button></p>
          </template>
        </NuxtErrorBoundary>
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply text-blue-500;
}
</style>
