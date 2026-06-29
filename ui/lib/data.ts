import { PlayCircle, CheckCircle, GraduationCap, Mail, BookOpen, Trophy } from "lucide-react";
import { Colors } from "./tokens";
import type {
  CourseData, ModuleData, LessonData, QuizData,
  UserData, EnrollmentData, LeaderboardEntry, ActivityEntry, QuizRunnerData,
} from "./types";

export const coursesData: CourseData[] = [
  { id: 1, title: "Advanced .NET Architecture", instructor: "Dr. Chen Wei", moduleCount: 8, lessonCount: 42, enrollmentCount: 312, progress: 72, status: "published", category: "Backend", iconColor: Colors.indigo },
  { id: 2, title: "PostgreSQL & EF Core Mastery", instructor: "Sarah Miller", moduleCount: 5, lessonCount: 28, enrollmentCount: 198, progress: 100, status: "published", category: "Database", iconColor: Colors.cyan },
  { id: 3, title: "JWT Auth & Security Patterns", instructor: "Alex Rossi", moduleCount: 4, lessonCount: 18, enrollmentCount: 145, progress: 45, status: "published", category: "Security", iconColor: Colors.purple },
  { id: 4, title: "Docker & Containerization", instructor: "Ming Liu", moduleCount: 3, lessonCount: 15, enrollmentCount: 267, progress: 8, status: "published", category: "DevOps", iconColor: Colors.amber },
  { id: 5, title: "AutoMapper & Clean Architecture", instructor: "Dr. Chen Wei", moduleCount: 6, lessonCount: 31, enrollmentCount: 89, progress: 60, status: "draft", category: "Backend", iconColor: Colors.green },
  { id: 6, title: "ASP.NET Core Web API Deep Dive", instructor: "Sarah Miller", moduleCount: 10, lessonCount: 56, enrollmentCount: 421, progress: 0, status: "published", category: "Backend", iconColor: Colors.red },
];
export const modulesData: ModuleData[] = [
  { id: 1, courseId: 1, title: "Intro to N-Tier Architecture", lessonCount: 6, order: 1, status: "published" },
  { id: 2, courseId: 1, title: "Repository Pattern Deep Dive", lessonCount: 5, order: 2, status: "published" },
  { id: 3, courseId: 1, title: "Dependency Injection Patterns", lessonCount: 7, order: 3, status: "published" },
  { id: 4, courseId: 1, title: "Middleware Pipelines", lessonCount: 5, order: 4, status: "draft" },
  { id: 5, courseId: 2, title: "EF Core Fundamentals", lessonCount: 8, order: 1, status: "published" },
  { id: 6, courseId: 2, title: "Code-First Migrations", lessonCount: 6, order: 2, status: "published" },
];
export const lessonsData: LessonData[] = [
  { id: 1, moduleId: 1, title: "What is N-Tier?", duration: "12:34", completed: true },
  { id: 2, moduleId: 1, title: "Layer Responsibilities", duration: "18:22", completed: true },
  { id: 3, moduleId: 1, title: "Setting Up the Solution", duration: "24:10", completed: true },
  { id: 4, moduleId: 1, title: "Layer Communication Rules", duration: "15:45", completed: false },
  { id: 5, moduleId: 2, title: "Generic Repository Interface", duration: "20:18", completed: false },
  { id: 6, moduleId: 2, title: "Concrete Implementation", duration: "22:05", completed: false },
];
export const quizzesData: QuizData[] = [
  { id: 1, courseId: 1, title: "N-Tier Architecture Fundamentals", questionCount: 4, timeLimit: 10, attempts: 2, bestScore: 95, status: "done" },
  { id: 2, courseId: 2, title: "EF Core Relationships & Migrations", questionCount: 6, timeLimit: 15, attempts: 1, bestScore: 88, status: "done" },
  { id: 3, courseId: 3, title: "JWT Claims & Authorization", questionCount: 5, timeLimit: 12, attempts: 1, bestScore: 92, status: "done" },
  { id: 4, courseId: 5, title: "AutoMapper Profiles & Mappings", questionCount: 3, timeLimit: 8, attempts: 0, bestScore: null, status: "pending" },
  { id: 5, courseId: 1, title: "Middleware & Request Pipeline", questionCount: 5, timeLimit: 10, attempts: 0, bestScore: null, status: "pending" },
  { id: 6, courseId: 4, title: "Docker Compose Deep Dive", questionCount: 4, timeLimit: 10, attempts: 0, bestScore: null, status: "pending" },
];
export const usersData: UserData[] = [
  { id: 1, name: "Ahmed Hasib", email: "ahmed@learnspace.io", role: "Student", joined: "2024-09-01", courses: 6, active: true },
  { id: 2, name: "Sara Rahman", email: "sara@learnspace.io", role: "Instructor", joined: "2024-03-15", courses: 3, active: true },
  { id: 3, name: "Tanvir Khan", email: "tanvir@learnspace.io", role: "Student", joined: "2024-10-20", courses: 4, active: true },
  { id: 4, name: "Dr. Chen Wei", email: "chen@learnspace.io", role: "Instructor", joined: "2024-01-10", courses: 2, active: true },
  { id: 5, name: "Nadia Islam", email: "nadia@learnspace.io", role: "Student", joined: "2024-11-05", courses: 5, active: true },
  { id: 6, name: "Admin User", email: "admin@learnspace.io", role: "Admin", joined: "2023-12-01", courses: 0, active: true },
  { id: 7, name: "Rafiq Ahmed", email: "rafiq@learnspace.io", role: "Student", joined: "2025-01-18", courses: 2, active: false },
  { id: 8, name: "Ming Liu", email: "ming@learnspace.io", role: "Staff", joined: "2024-02-28", courses: 1, active: true },
];
export const enrollmentsData: EnrollmentData[] = [
  { id: 1, student: "Ahmed Hasib", course: "Advanced .NET Architecture", date: "2024-09-15", progress: 72, status: "active" },
  { id: 2, student: "Ahmed Hasib", course: "PostgreSQL & EF Core Mastery", date: "2024-09-15", progress: 100, status: "completed" },
  { id: 3, student: "Ahmed Hasib", course: "JWT Auth & Security Patterns", date: "2024-10-01", progress: 45, status: "active" },
  { id: 4, student: "Tanvir Khan", course: "Advanced .NET Architecture", date: "2024-10-20", progress: 30, status: "active" },
  { id: 5, student: "Nadia Islam", course: "Docker & Containerization", date: "2024-11-10", progress: 55, status: "active" },
  { id: 6, student: "Rafiq Ahmed", course: "JWT Auth & Security Patterns", date: "2025-01-20", progress: 10, status: "active" },
];
export const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, name: "Sara Rahman", points: 2840, percentage: 100, gradient: "linear-gradient(135deg,#C9A227,#A07C10)", isMe: false },
  { rank: 2, name: "Tanvir Khan", points: 2415, percentage: 85, gradient: "linear-gradient(135deg,#8A9BAE,#5C6D7E)", isMe: false },
  { rank: 3, name: "Nadia Islam", points: 2190, percentage: 77, gradient: "linear-gradient(135deg,#A0714F,#7A5130)", isMe: false },
  { rank: 4, name: "Ahmed Hasib", points: 2010, percentage: 71, gradient: `linear-gradient(135deg,${Colors.indigo},${Colors.purple})`, isMe: true },
  { rank: 5, name: "Rafiq Ahmed", points: 1740, percentage: 61, gradient: "linear-gradient(135deg,#10E5A0,#00D4FF)", isMe: false },
  { rank: 6, name: "Fatima Zahra", points: 1580, percentage: 56, gradient: "linear-gradient(135deg,#FF6B6B,#FF8C42)", isMe: false },
];
export const activityData: ActivityEntry[] = [
  { Icon: PlayCircle, label: "Completed Lesson 11 — Middleware Pipelines", time: "2h ago", accentColor: Colors.indigo },
  { Icon: CheckCircle, label: "Quiz Passed — JWT Claims & Roles · 92%", time: "Yesterday", accentColor: Colors.green },
  { Icon: GraduationCap, label: "Enrolled in Docker & Containerization", time: "2 days ago", accentColor: Colors.cyan },
  { Icon: Mail, label: "Password reset email sent", time: "3 days ago", accentColor: Colors.amber },
  { Icon: BookOpen, label: "New module unlocked — EF Core Migrations", time: "4 days ago", accentColor: Colors.purple },
  { Icon: Trophy, label: "Achieved Top 5 rank on Leaderboard", time: "5 days ago", accentColor: Colors.green },
];
export const quizRunnerData: QuizRunnerData = {
  title: "N-Tier Architecture Fundamentals",
  questions: [
    { text: "Which layer should contain business logic in N-Tier?", options: ["Data Layer", "Business Layer", "API Layer", "UI Layer"], answerIndex: 1 },
    { text: "What does the Repository Pattern abstract?", options: ["HTTP requests", "Database access", "UI rendering", "Authentication"], answerIndex: 1 },
    { text: "Which .NET feature enables DI across layers?", options: ["AutoMapper", "EF Core", "IServiceCollection", "JWT Bearer"], answerIndex: 2 },
    { text: "Correct layer order (top to bottom)?", options: ["Data→Business→API", "API→Business→Data", "Business→API→Data", "UI→Data→Business"], answerIndex: 1 },
  ],
};
