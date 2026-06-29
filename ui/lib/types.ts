import type { LucideIcon } from "lucide-react";

export interface CourseData {
  id: number;
  title: string;
  instructor: string;
  moduleCount: number;
  lessonCount: number;
  enrollmentCount: number;
  progress: number;
  status: string;
  category: string;
  iconColor: string;
}

export interface ModuleData {
  id: number;
  courseId: number;
  title: string;
  lessonCount: number;
  order: number;
  status: string;
}

export interface LessonData {
  id: number;
  moduleId: number;
  title: string;
  duration: string;
  completed: boolean;
}

export interface QuizData {
  id: number;
  courseId: number;
  title: string;
  questionCount: number;
  timeLimit: number;
  attempts: number;
  bestScore: number | null;
  status: string;
}

export interface QuizQuestion {
  text: string;
  options: string[];
  answerIndex: number;
}

export interface QuizRunnerData {
  title: string;
  questions: QuizQuestion[];
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  role: string;
  joined: string;
  courses: number;
  active: boolean;
}

export interface EnrollmentData {
  id: number;
  student: string;
  course: string;
  date: string;
  progress: number;
  status: string;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  percentage: number;
  gradient: string;
  isMe: boolean;
}

export interface ActivityEntry {
  Icon: LucideIcon;
  label: string;
  time: string;
  accentColor: string;
}

export interface RoleColorConfig {
  color: string;
  background: string;
  border: string;
}
