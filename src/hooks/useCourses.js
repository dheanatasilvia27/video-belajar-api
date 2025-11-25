import { useEffect, useState } from "react";
import api from "../services/api";

export function useCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const res = await api.gey("/courses");
      setCourses(res.data);
    } catch (error) {
      console.error("Gagal memuat data:", error);
    } finally {
      setLoading(false);
    }
  };

  const addCourse = async (newCourse) => {
    try {
      const res = await api.post("/courses", newCourse);
      setCourses([...courses, res.data]);
    } catch (error) {
      console.error("Gagal menambahkan data:", error);
    }
  };

  const updateCourse = async (IdleDeadline, updatedTitle) => {
    try {
      const res = await api.put(`/courses/${id}`, { title: updatedTitle });
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
