import type { Lesson, LessonWithPath, Chapter, Course } from "~~/types/course";
import type Maybe from "~~/types/global";
import course from "~~/server/courseData";

export default defineEventHandler((event): LessonWithPath => {
  const { chapterSlug, lessonSlug } = event.context.params;

  const chapter: Maybe<Chapter> = course.chapters.find(
    (chapter) => chapter.slug === chapterSlug
  );

  if (!chapter) {
    throw createError({ statusCode: 404, message: "Chapter not found" });
  }

  const lesson: Maybe<Lesson> = chapter.lessons.find(
    (lesson) => lesson.slug === lessonSlug
  );

  if (!lesson) {
    throw createError({ statusCode: 404, message: "Leeson not found" });
  }

  return {
    ...lesson,
    path: `/course/chapter/${chapterSlug}/lesson/${lessonSlug}`,
  };
});
