import { useEffect, useState } from "react";
import { NewTaskForm } from "./components/NewTaskForm";
import { TaskList } from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/App.css";
import "./styles/font/TripSans-Medium.ttf";
import { Quotes } from "./components/Quote";

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const localValues = localStorage.getItem("ITEMS");
    if (localValues == null) return [];
    return JSON.parse(localValues);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(title: string) {
    setTasks((currentTasks) => {
      return [
        ...currentTasks,
        { id: crypto.randomUUID(), title: title, completed: false },
      ];
    });
  }

  function toggleTask(id: string, completed: boolean) {
    setTasks((currentTasks) => {
      return currentTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed };
        }
        return task;
      });
    });
  }

  function deleteTask(id: string) {
    setTasks((currentTask) => {
      return currentTask.filter((task) => task.id !== id);
    });
  }

  return (
    <>
      <div className="main mx-auto col-6">
        <NewTaskForm onSubmit={addTask} />
        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      <Quotes />
      </div>
    </>
  );
}

export default App;
