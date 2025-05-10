type TaskItem = {
  todo: {
    id: number;
    content: string;
    whenCreated: string;
    didIt: boolean;
  };
};

const TaskItem = ({todo}: TaskItem) => {

  return (

    <div>
      <li
      key={todo.id}
      >
        {todo.content}
      </li>
    </div>

  );

};

export default TaskItem;