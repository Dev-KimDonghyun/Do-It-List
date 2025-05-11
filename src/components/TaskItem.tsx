type TaskItem = {
  todo: {
    id: number;
    content: string;
    whenCreated: string;
    didIt: boolean;
  };
  deleteToDo: (id:number) => void;
  compeleteToDo: (id:number) => void;
};

const TaskItem = ({todo, deleteToDo, compeleteToDo}: TaskItem) => {

  return (

    <div>
      <li
      key={todo.id}
      >
        {todo.content}
        {todo.didIt ? <span>Done</span> : <span>Doing</span>}
        <button
          onClick={() => {compeleteToDo(todo.id)}}>
          {todo.didIt ? <span>Undo</span> : <span>Done</span>}
        </button>
        <button
        onClick={() => {deleteToDo(todo.id)}}>
          Delete
        </button>
      </li>
    </div>

  );

};

export default TaskItem;