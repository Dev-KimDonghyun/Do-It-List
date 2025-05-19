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
        <div className="bg-sky-300 flex text-center items-center justify-center w-68 md:w-76 h-10 rounded-2xl md:mr-2">
          {todo.didIt ? (
            <span className="text-2xl text-green-500">Done</span>
          ) : (
            <span className="text-2xl text-yellow-500">Doing</span>
          )}
          <button
            className="mx-2 text-md px-1 rounded-lg bg-blue-200 cursor-pointer"
            onClick={() => {
              compeleteToDo(todo.id);
            }}
          >
            {todo.didIt ? (
              <span className="text-md text-yellow-500 cursor-pointer">
                Undo
              </span>
            ) : (
              <span className="text-md text-green-500 cursor-pointer">
                Done
              </span>
            )}
          </button>
          <button
            className="text-md text-red-500 px-1 rounded-lg bg-blue-200 cursor-pointer"
            onClick={() => {
              deleteToDo(todo.id);
            }}
          >
            Delete
          </button>
        </div>
      </li>
    </div>
  );
};

export default TaskItem;
