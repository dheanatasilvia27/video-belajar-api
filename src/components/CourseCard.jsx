export default function CoursesCard({ title, category, duration }) {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="font-semibold text-lg text-indigo-600">{title}</h3>
      <p className="text-gray-600">{category}</p>
      <p className="text-gray-500 text-sm">{duration}</p>
    </div>
  );
}
