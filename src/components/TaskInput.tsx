import { useEffect, useRef } from "react";

type TaskInputProps = {
  toDoInput: string;
  setToDoInput: (value: string) => void;
  uploadToList: (e: React.FormEvent<HTMLFormElement>) => void;
};

const TaskInput = ({
  toDoInput,
  setToDoInput,
  uploadToList,
}: TaskInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div className="mt-2 mb-10">
      <form className="justify-center items-center" onSubmit={uploadToList}>
        <input
          className="align-middle w-45 md:w-90 h-8 md:h-10 bg-sky-200 text-lg md:text-xl text-center text-sky-900 rounded-xl md:rounded-2xl mr-2 shadow-inner shadow-sky-300 hover:scale-101 transition-transform duration-300 cursor-text"
          ref={inputRef}
          onChange={(e) => {
            setToDoInput(e.target.value);
          }}
          value={toDoInput}
          required
        />
        <button
          className="align-middle w-20 md:w-30 h-8 md:h-10 bg-sky-300 text-sm md:text-xl text-sky-800 rounded-xl md:rounded-2xl md:shadow shadow-sky-400 cursor-pointer hover:scale-98 transition-transform duration-300"
          type="submit"
        >
          Button
        </button>
      </form>
    </div>
  );
};

export default TaskInput;
