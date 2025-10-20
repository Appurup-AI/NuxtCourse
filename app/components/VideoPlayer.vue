<script setup lang="ts">
const props = defineProps({
  videoId: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <iframe
    width="430"
    height="315"
    :src="`https://player.vimeo.com/video/${props.videoId}`"
    title="Video player"
    frameborder="0"
    allow="accelerometr; autoplay; clipboard-write; encrypted-media"
    allowfullscreen
  ></iframe>
</template>

<style scoped></style>
