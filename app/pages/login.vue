<script setup>
const { title } = useCourse();
</script>
<template>
  <div class="prose w-full max-x-2xl h-9">
    <h1>Log in to {{ title }}</h1>
    <button class="bg-blue-500 font-bold py-2 px-4 rounded">
      Log in with GitHub
    </button>
  </div>
</template>
