<script setup>
const course = useCourse();
const route = useRoute();

const chapter = computed(() => {
  return course.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});

if (!chapter.value) {
  throw createError({ statusCode: 404, message: "Chapter not found" });
}

const lesson = computed(() => {
  return chapter.value.lessons.find(
    (lesson) => lesson.slug === route.params.lessonSlug
  );
});

if (!lesson.value) {
  throw createError({ statusCode: 404, message: "Lesson not found" });
}

const title = computed(() => {
  return `${lesson.value.title} - ${course.title}`;
});

useHead({
  title,
});

const progress = useLocalStorage("progress", []);

const isLessonComplete = computed(() => {
  const progressNumber = chapter.value.number - 1;
  const lessonNumber = lesson.value.number - 1;
  if (!progress.value[progressNumber]) {
    return false;
  }

  if (!progress.value[progressNumber][lessonNumber]) {
    return false;
  }
  console.log(progress.value);
  return progress.value[progressNumber][lessonNumber];
});

const toggleComplete = () => {
  const progressNumber = chapter.value.number - 1;
  const lessonNumber = lesson.value.number - 1;
  if (!progress.value[progressNumber]) {
    progress.value[progressNumber] = [];
  }

  progress.value[progressNumber][lessonNumber] = !isLessonComplete.value;

  console.log(progress.value);
};
</script>

<template>
  <div>
    <p class="mt-0 uppercase font-bold text-slate-400 mb-1">
      Lesson {{ chapter.number }} - {{ lesson.number }}
    </p>
    <h2 class="my-0">{{ lesson.title }}</h2>
    <div class="flex space-x-4 mt-2 mb-8">
      <NuxtLink
        v-if="lesson.sourceUrl"
        class="font-normal text-md text-gray-500"
        :to="lesson.sourceUrl"
        >Скачать Исходный Код</NuxtLink
      >
      <NuxtLink
        v-if="lesson.downloadUrl"
        class="font-normal text-md text-gray-500"
        :to="lesson.downloadUrl"
        >Скачать Видео</NuxtLink
      >
    </div>
    <VideoPlayer v-if="lesson.videoId" :videoId="lesson.videoId" />
    <p>{{ lesson.text }}</p>
    <LessonCompleteButton
      :model-value="isLessonComplete"
      @update:model-value="throw createError('Could not update');"
    />
  </div>
</template>
