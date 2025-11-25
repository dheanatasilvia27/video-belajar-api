import CourseCard from "../components/CourseCard";
import { useCourses } from "../hooks/useCourses";

export default function Home() {
  const { courses, loading, deleteCourse, updateCourse } = useCourses();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 p-4">
      {courses.map((course) => (
        <CourseCard
          key={courses.id}
          course={course}
          onDelete={deleteCourse}
          onUpdate={updateCourse}
        />
      ))}
    </div>
  );
}
