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
    <div>
      <form onSubmit={uploadToList}>
        <input
          ref={inputRef}
          onChange={(e) => {
            setToDoInput(e.target.value);
            console.log(e.target.value); // Test Code //
          }}
          value={toDoInput}
          required
        />
        <button type="submit">Button</button>
      </form>
    </div>
  );
};

export default TaskInput;
