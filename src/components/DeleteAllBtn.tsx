type DeleteAllBtnProps = {
  deleteToDoAll: () => void;
};

const DeleteAllBtn = ({ deleteToDoAll }: DeleteAllBtnProps) => {
  return (
    <div>
      <button className="w-22 h-10 text-md text-sky-800 rounded-2xl bg-sky-300 cursor-pointer" onClick={deleteToDoAll}>Delete All</button>
    </div>
  );
};

export default DeleteAllBtn;
