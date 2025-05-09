type ToDoInputProps = {
  toDoInput: string;
  setToDoInput: (value: string) => void;
} 

const TaskInput = ({toDoInput, setToDoInput}: ToDoInputProps) => {

  return (

    <div>
      <form>
        <input
        onChange={(e) => {
          setToDoInput(e.target.value)
          console.log(e.target.value) // Test Code //
        }}
        value={toDoInput}
        required
        />
        <button
        type="submit"
        >
          Button
        </button>
      </form>
    </div>
    
  );

};

export default TaskInput;