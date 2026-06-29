# LearnSpace UI

A modern learning platform frontend built with **Next.js 15 (App Router)**, **TypeScript**, and **Bun**.

## Project Overview

LearnSpace UI is the frontend for LearnSpace, a .NET 10 + JWT learning platform.
It provides dashboards, course management, lesson players, quiz runners,
enrollment tracking, leaderboards, and user administration.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Runtime**: Bun
- **Styling**: Inline CSS via a design token system (no Tailwind in components)
- **Icons**: Lucide React
- **HTTP**: Axios (API client configured for localhost:5255)

## Project Structure

```
ui/
├── app/                       # Next.js App Router pages
│   ├── (auth)/login/          # Login / register page
│   ├── courses/               # Course list, detail, lesson pages
│   ├── enrollments/           # Enrollment management
│   ├── lessons/               # Lesson listing
│   ├── modules/               # Module management
│   ├── progress/              # Progress & analytics
│   ├── quizzes/               # Quiz listing & runner
│   ├── settings/              # User settings
│   └── users/                 # User management
├── components/
│   ├── features/              # Feature components (QuizRunner, FormField)
│   ├── layout/                # Layout components (Sidebar, Topbar)
│   ├── pages/                 # Page-level components (Dashboard, LessonPlayer)
│   └── ui/                    # Reusable UI primitives (Btn, Card, Modal, etc.)
├── lib/
│   ├── api.ts                 # Axios instance
│   ├── data.ts                # Mock data
│   ├── tokens.ts              # Design tokens (Colors, GlobalStyles, CourseIcons, etc.)
│   └── types.ts               # TypeScript interfaces
└── styles/                    # Global stylesheets
```

## Design Tokens (`lib/tokens.ts`)

All colors and global styles are centralized in `lib/tokens.ts`:

| Export | Purpose |
|---|---|
| `Colors` | Color palette (indigo, cyan, purple, green, red, amber, text, muted, dimmed, background, surface, card, cardAlt, border, borderHover) |
| `GlobalStyles` | Global CSS (fonts, scrollbar, inputs, animations) |
| `CourseIcons` | Lucide icon array for course category icons |
| `RoleColors` | Per-role color config (Admin, Staff, Instructor, Student, Guest) |
| `RoleIcons` | Per-role icon mapping |

## Naming Conventions

- **Components**: PascalCase, descriptive names (`SectionHead`, not `SH`; `FormField`, not `FF`)
- **Props**: Full words, not abbreviations (`children`, not `ch`; `variant`, not `v`; `onClick`, not `on`; `small`, not `sm`; `value`, not `val`; `size`, not `sz`; `gradient`, not `grad`)
- **Variables**: camelCase (`questionIndex`, not `qi`; `selectedIndex`, not `sel`)
- **Interfaces**: `ComponentNameProps` pattern
- **Exports**: Default export for components

## Component Props Reference

### Btn

```ts
interface BtnProps {
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "danger" | "success" | "subtle";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
  small?: boolean;
}
```

### Card

```ts
interface CardProps {
  children?: React.ReactNode;
  style?: CSSProperties;
  onClick?: () => void;
  className?: string;
}
```

### Badge

```ts
interface BadgeProps {
  children: React.ReactNode;
  color?: "indigo" | "cyan" | "green" | "red" | "purple" | "amber" | "muted";
}
```

### PBar

```ts
interface PBarProps {
  value: number;
  color?: string;
  height?: number;
}
```

### Avatar

```ts
interface AvatarProps {
  name: string;
  size?: number;
  gradient?: string;
}
```

### StatCard

```ts
interface StatCardProps {
  Icon: LucideIcon;
  label: string;
  value: string | number;
  change?: string;
  accentColor: string;
}
```

## Getting Started

```bash
cd ui
bun install
bun dev        # Development server on http://localhost:3000
bun run build  # Production build
bun run lint   # ESLint
```

## Backend Connection

The API client is configured in `lib/api.ts` and connects to `http://localhost:5255`.
Start the LearnSpace.API project before running the UI for full functionality.
