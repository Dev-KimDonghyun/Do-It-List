type TaskItem = {
  todo: {
    id: number;
    content: string;
    whenCreated: string;
    didIt: boolean;
  };
  deleteToDo: (id:number) => void;
};

const TaskItem = ({todo, deleteToDo}: TaskItem) => {

  return (

    <div>
      <li
      key={todo.id}
      >
        {todo.content}
        <button
        onClick={() => {deleteToDo(todo.id)}}>
          Delete
        </button>
      </li>
    </div>

  );

};

export default TaskItem;