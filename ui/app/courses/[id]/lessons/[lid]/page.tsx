export default async function LessonPage({
  params,
}: {
  params: Promise<{ id: string; lid: string }>;
}) {
  const { id, lid } = await params;
  return <div>Course {id} — Lesson {lid}</div>;
}
