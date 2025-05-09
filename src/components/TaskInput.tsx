type ToDoInputProps = {
  toDoInput: string;
  setToDoInput: (value: string) => void;
  uploadToList: (e: React.FormEvent<HTMLFormElement>) => void;
} 

const TaskInput = ({toDoInput, setToDoInput, uploadToList}: ToDoInputProps) => {

  return (

    <div>
      <form
      onSubmit={uploadToList}
      >
        <input
        onChange={(e) => {
          setToDoInput(e.target.value)
          console.log(e.target.value) // Test Code //
        }}
        value={toDoInput}
        required
        />
        <button
        type='submit'
        >
          Button
        </button>
      </form>
    </div>
    
  );

};

export default TaskInput;