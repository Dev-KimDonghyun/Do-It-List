type DeleteAllBtnProps = {
  deleteToDoAll: () => void;
};

const DeleteAllBtn = ({ deleteToDoAll }: DeleteAllBtnProps) => {
  return (
    <div>
      <button onClick={deleteToDoAll}>Delete All</button>
    </div>
  );
};

export default DeleteAllBtn;
