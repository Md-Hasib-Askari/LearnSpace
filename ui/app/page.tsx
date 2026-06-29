'use client';

import { useCallback, useState } from "react";
import { GlobalStyles } from "@/lib/tokens";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import LoginPage from "./(auth)/login/page";
import DashboardPage from "@/components/pages/DashboardPage";
import CoursesPage from "./courses/page";
import CourseDetailPage from "./courses/[id]/page";
import ModulesPage from "./modules/page";
import LessonsPage from "./lessons/page";
import QuizzesPage from "./quizzes/page";
import EnrollmentsPage from "./enrollments/page";
import ProgressPage from "./progress/page";
import UsersPage from "./users/page";
import SettingsPage from "./settings/page";
import LessonPlayer from "@/components/pages/LessonPlayer";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [page, setPage] = useState("dashboard");
  const navigate = useCallback((p: string) => setPage(p), []);

  if (!authenticated) return (
    <>
      <style>{GlobalStyles}</style>
      <LoginPage onLogin={() => setAuthenticated(true)} />
    </>
  );

  const PAGES: Record<string, React.ReactNode> = {
    dashboard: <DashboardPage onNavigate={navigate} />,
    courses: <CoursesPage onNavigate={navigate} />,
    "course-detail": <CourseDetailPage onNavigate={navigate} />,
    "lesson-player": <LessonPlayer onNavigate={navigate} />,
    modules: <ModulesPage onNavigate={navigate} />,
    lessons: <LessonsPage onNavigate={navigate} />,
    quizzes: <QuizzesPage />,
    enrollments: <EnrollmentsPage />,
    progress: <ProgressPage />,
    users: <UsersPage />,
    settings: <SettingsPage onLogout={() => setAuthenticated(false)} />,
  };

  return (
    <>
      <style>{GlobalStyles}</style>
      <div style={{ display: "flex", minHeight: "100vh", position: "relative" }}>
        <div style={{
          position: "fixed", inset: 0,
          backgroundImage: "linear-gradient(rgba(108,99,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(108,99,255,.022) 1px,transparent 1px)",
          backgroundSize: "38px 38px", pointerEvents: "none", zIndex: 0
        }} />
        <Sidebar page={page} onNavigate={navigate} />
        <div style={{
          flex: 1, display: "flex", flexDirection: "column", minWidth: 0,
          position: "relative", zIndex: 1, marginLeft: 200
        }}>
          <Topbar page={page} />
          <div style={{ flex: 1, padding: "22px 28px 48px", overflowY: "auto" }}>
            {PAGES[page] || PAGES.dashboard}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
