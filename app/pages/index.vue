<script setup lang="ts">
const firstLesson = useFirstLesson();
</script>
<template>
  <NuxtLink class="underline font-medium" :to="firstLesson?.path"
    >К первой задаче
  </NuxtLink>
</template>
