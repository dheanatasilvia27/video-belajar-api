import { useEffect, useState } from "react";
import api from "../services/api";

export function useCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const res = await api.get("/course");
      setCourses(res.data);
    } catch (error) {
      console.error("Gagal memuat data:", error);
    } finally {
      setLoading(false);
    }
  };

  const addCourse = async (newCourse) => {
    try {
      const res = await api.post("/course", newCourse);
      setCourses([...courses, res.data]);
    } catch (error) {
      console.error("Gagal menambahkan data:", error);
    }
  };

  const updateCourse = async (id, updatedTitle) => {
    try {
      const res = await api.put(`/course/${id}`, { title: updatedTitle });
      setCourses(
        courses.map((course) =>
          course.id === id ? { ...course, ...res.data } : course
        )
      );
    } catch (error) {
      console.error("Gagal memperbaharui data:", error);
    }
  };

  const deleteCourse = async (id) => {
    try {
      await api.delete(`/course/${id}`);
      setCourses(courses.filter((course) => course.id !== id));
    } catch (error) {
      console.error("Gagal menghapus data:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return { courses, loading, addCourse, updateCourse, deleteCourse };
}
