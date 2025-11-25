import { useState } from "react";

export default function CourseCard({ course, onDelete, onUpdate, loading }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(course.title);

  const handleUpdate = () => {
    onUpdate(course.id, updatedTitle);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
          className="border p-2 rounded-md mb-3 w-full focus:ring-2 focus:rinf-indigo-400 outline-none "
        />
      ) : (
        <div className="mb-3 text-center sm:text-left">
          <h2 className="text-lg font-semibold text-gray-800">
            {course.title}
          </h2>
          <p className="text-sm text-gray-500">
            {course.category} {course.duration}{" "}
          </p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-2 mt-auto">
        {isEditing ? (
          <button
            onClick={handleUpdate}
            className="px-3 py-2 bg-green-500 text-white rounded-md text-sm hover:bg-green-600 transition"
          >
            Simpan
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-3 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => onDelete(course.id)}
          className="px-3 py-2 bg-red-500 text-white rounded-md text-sm hover:bg-red-600 transition "
        >
          Hapus
        </button>
      </div>
    </div>
  );
}
