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
};

const TaskList = ({toDoList, deleteToDo}: TaskListProps) => {

  return (

    <div>
      <ul>
        {toDoList.map((todo) => (
          <TaskItem
          key={todo.id}
          todo={todo}
          deleteToDo={deleteToDo}
          />
        ))}
      </ul>
    </div>

  );

};

export default TaskList;