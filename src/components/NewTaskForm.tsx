import { useState } from "react";

export function NewTaskForm(props: { onSubmit: (arg0: string) => void; }) {
  const [NewTask, setNewTask] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();           
    if(NewTask === "") return
    props.onSubmit(NewTask);
    setNewTask("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="title text-center pb-3 pt-3">Todo List</h1>
      <input
        type="text"
        className="taskInput w-100 p-3 mb-2 bg-transparent border border-light text-light"
        value={NewTask}
        onChange={(e) => setNewTask(e.target.value)}
        name="task"
        placeholder="Do the laundry,..."
      />
      <button className="submitButton w-100 p-2 bg-transparent border border-light mt-2 text-light" type="submit">Add Task</button>
    </form>
  );
}
