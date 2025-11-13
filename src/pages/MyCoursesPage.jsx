import { useState } from "react";
import CourseCard from "../components/CourseCard";

export default function MyCoursePage() {
  const [course, setCourse] = useState([
    { id: 1, title: "Dasar React JS", category: "Frontend", duration: "2 Jam" },
    {
      id: 2,
      title: "Belajar Tailwind CSS",
      category: "UI Design",
      duration: "1.5 Jam",
    },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newDuration, setNewDuration] = useState("");

  const handleAddCourse = () => {
    if (!newTitle || !newCategory || !newDuration)
      return alert("Lengkapi Semua Kolom!");
    const newCourse = {
      id: Date.now(),
      title: newTitle,
      category: newCategory,
      duration: newDuration,
    };

    setCourse([...course, newCourse]);

    setNewTitle("");
    setNewCategory("");
    setNewDuration("");
  };

  const handleUpdateCourse = (id, updatedTitle) => {
    setCourse(
      course.map((course) =>
        course.id === id ? { ...course, title: updatedTitle } : course
      )
    );
  };

  const handleDeleteCourse = (id) => {
    setCourse(course.filter((course) => course.id !== id));
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

      <div className="grid gap-4 w-full max-w-5xl sm:grid-col-2 lg:grid-cols-3">
        {course.length > 0 ? (
          course.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onDelete={handleDeleteCourse}
              onUpdate={handleUpdateCourse}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center w-full">Belum ada kursus</p>
        )}
      </div>
    </div>
  );
}
