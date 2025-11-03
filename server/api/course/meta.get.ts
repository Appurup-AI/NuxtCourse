import type { Lesson, LessonWithPath, Chapter, Course } from "~~/types/course";
import course from "~~/server/courseData";

course as Course;

type OutlineBase = {
  title: string;
  slug: string;
  number: number;
};

type OutlineChapter = OutlineBase & {
  lessons: OutlineLesson[];
};

type OutlineLesson = OutlineBase & {
  path: string;
};

type CourseMeta = {
  title: string;
  chapters: OutlineChapter[];
};

export default defineEventHandler((event): CourseMeta => {
  const outline: OutlineChapter[] = course.chapters.reduce((prev, next) => {});
});
