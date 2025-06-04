import TaskItemButtons from "./TaskItemButtons";

type TaskItem = {
  todo: {
    id: number;
    content: string;
    whenCreated: string;
    didIt: boolean;
  };
  deleteToDo: (id: number) => void;
  compeleteToDo: (id: number) => void;
};

const TaskItem = ({ todo, deleteToDo, compeleteToDo }: TaskItem) => {
  return (
    <div className="mt-8 flex text-center items-center justify-center">
      <li
        className="bg-sky-200 gap-y-2 md:gap-y-0 w-72 h-27 md:w-160 md:h-14 rounded-3xl flex flex-col md:flex-row text-center items-center justify-center"
        key={todo.id}
      >
        <span className="w-[90%] md:w-[40%] right text-4xl text-sky-800 mx-auto truncate block">
          {todo.content}
        </span>
        <TaskItemButtons
          deleteToDo={deleteToDo}
          compeleteToDo={compeleteToDo}
          todo={todo}
        />
      </li>
    </div>
  );
};

export default TaskItem;
