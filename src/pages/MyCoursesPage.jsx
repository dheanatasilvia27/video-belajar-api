import { useState } from "react";
import { useCourses } from "../hooks/useCourses";
import CourseCard from "../components/CourseCard";

export default function MyCoursePage() {
  const { courses, loading, addCourse, updateCourse, deleteCourse } =
    useCourses();

  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newDuration, setNewDuration] = useState("");

  const handleAddCourse = () => {
    if (!newTitle || !newCategory || !newDuration) {
      alert("Lengkapi semua kolom!");
      return;
    }

    addCourse({
      title: newTitle,
      category: newCategory,
      duration: newDuration,
    });

    setNewTitle("");
    setNewCategory("");
    setNewDuration("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-8 text-center">
        Kursus Video Belajar
      </h1>

      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg mb-8 border-indigo-100 ">
        <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center sm:text-left">
          Tambah Kursus Baru
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input
            type="text"
            placeholder="Judul Kursus"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <input
            type="text"
            placeholder="Kategori"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <input
            type="text"
            placeholder="Durasi (contoh: 2 Jam)"
            value={newDuration}
            onChange={(e) => setNewDuration(e.target.value)}
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          />
        </div>

        <button
          onClick={handleAddCourse}
          className="w-full mt-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition"
        >
          Tambah Kursus
        </button>
      </div>

      {loading ? (
        <p className="text-gray-600">Memuat data...</p>
      ) : (
        <div className="grid gap-4 w-full max-w-5xl sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onDelete={deleteCourse}
              onUpdate={updateCourse}
            />
          ))}
        </div>
      )}
    </div>
  );
}
