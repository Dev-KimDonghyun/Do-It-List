import TaskItem from "./TaskItem";

type ToDo = {
  id: number;
  content: string;
  whenCreated: string;
  didIt: boolean;
};

type TaskListProps = {
  toDoList: ToDo[];
  deleteToDo: (id: number) => void;
  completeToDo: (id: number) => void;
};

const TaskList = ({ toDoList, deleteToDo, completeToDo }: TaskListProps) => {
  return (
    <div>
      <ul className="mb-24">
        {toDoList.map((todo) => (
          <TaskItem
            key={todo.id}
            todo={todo}
            deleteToDo={deleteToDo}
            completeToDo={completeToDo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
