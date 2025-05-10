import TaskItem from "./TaskItem";

type ToDo = {
  id: number;
  content: string;
  whenCreated: string;
  didIt: boolean;
};

type TaskListProps = {
  toDoList: ToDo[];
};

const TaskList = ({toDoList}: TaskListProps) => {

  return (

    <div>
      <ul>
        {toDoList.map((todo) => (
          <TaskItem
          key={todo.id}
          todo={todo}
          />
        ))}
      </ul>
    </div>

  );

};

export default TaskList;