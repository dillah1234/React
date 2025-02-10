import { create } from "zustand";
import { useState } from "react";

const useTaskStore = create((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  removeTask: (index) => set((state) => ({ tasks: state.tasks.filter((_, i) => i !== index) })),
}));

export default function TodoList() {
  const { tasks, addTask, removeTask } = useTaskStore();
  const [task, setTask] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white p-6">
      <h1 className="text-4xl font-extrabold mb-6 animate-pulse">To-Do List</h1>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          className="px-4 py-2 text-black rounded-lg shadow-lg"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg transform transition hover:scale-110 hover:bg-green-600"
          onClick={() => {
            if (task.trim()) {
              addTask(task);
              setTask("");
            }
          }}
        >
          Tambah Tugas
        </button>
      </div>
      <ul className="w-1/2">
        {tasks.length === 0 ? (
          <p className="text-lg">Tidak ada tugas</p>
        ) : (
          tasks.map((t, index) => (
            <li key={index} className="flex justify-between bg-white text-black px-4 py-2 mb-2 rounded-lg shadow-lg">
              {t}
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                onClick={() => removeTask(index)}
              >
                Hapus
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
