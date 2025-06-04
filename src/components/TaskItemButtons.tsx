type ButtonsType = {
  todo: {
    id: number;
    content: string;
    whenCreated: string;
    didIt: boolean;
  };
  deleteToDo: (id: number) => void;
  compeleteToDo: (id: number) => void;
};

const TaskItemButtons = ({ todo, deleteToDo, compeleteToDo }: ButtonsType) => {
  return (
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
          <span className="text-md text-yellow-500 cursor-pointer">Undo</span>
        ) : (
          <span className="text-md text-green-500 cursor-pointer">Done</span>
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
      <span className="w-24 md:w-auto h-10 md:h-auto ml-0 md:ml-2 pl-2 md:px-0 text-sm md:text-md">
        {todo.whenCreated}
      </span>
    </div>
  );
};

export default TaskItemButtons;
