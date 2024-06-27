import { SingleTask } from "./SingleTask";

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

type TaskListProps = {
  tasks: Task[];
  toggleTask: (id: string, completed: boolean) => void;
  deleteTask: (id: string) => void;
};

export function TaskList({ tasks, toggleTask, deleteTask }: TaskListProps) {
  return (
    <div className="tasklist">
      {tasks.length === 0 && (
        <div className="noTask text-center pt-4">No task available</div>
      )}
      {tasks.map((task) => {
        return (
          <SingleTask
            key={task.id}
            {...task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        );
      })}
    </div>
  );
}
