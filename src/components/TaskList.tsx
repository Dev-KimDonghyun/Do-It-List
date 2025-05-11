import TaskItem from "./TaskItem";

type ToDo = {
  id: number;
  content: string;
  whenCreated: string;
  didIt: boolean;
};

type TaskListProps = {
  toDoList: ToDo[];
  deleteToDo: (id:number) => void;
  compeleteToDo: (id:number) => void;
  deleteToDoAll: () => void;
};

const TaskList = ({toDoList, deleteToDo, compeleteToDo, deleteToDoAll}: TaskListProps) => {

  return (

    <div>
      <button
      onClick={deleteToDoAll}
      >
        Delete All
      </button>
      <ul>
        {toDoList.map((todo) => (
          <TaskItem
          key={todo.id}
          todo={todo}
          deleteToDo={deleteToDo}
          compeleteToDo={compeleteToDo}
          />
        ))}
      </ul>
    </div>

  );

};

export default TaskList;