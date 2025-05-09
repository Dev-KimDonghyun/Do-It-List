import { useState } from 'react';
import dayjs from "dayjs";
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './index.css';

type ToDo = {
  id: number;
  content: string;
  whenCreated: string;
  didIt: boolean;
}

function App() {

  const [ toDoInput, setToDoInput ] = useState<string>('');
  const [ toDoList, setToDoList] = useState<ToDo[]>([]);

  const uploadToList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (toDoInput.trim() === '')
      return;

    const newToDo: ToDo = {
      id: Date.now(),
      content: toDoInput,
      whenCreated: dayjs().format('YYYY/MM/DD HH:mm'),
      didIt: false
    };

    const newList = [...toDoList, newToDo];
    setToDoInput('');
    setToDoList(newList);
    
    console.log(newList); // Test Code //
  };

  return (

    <div>
      <div>
        <header>
          <h1>Do It! List</h1>
        </header>
        <main>
          <div>
            <TaskInput
            toDoInput={toDoInput}
            setToDoInput={setToDoInput}
            uploadToList={uploadToList}
            />
          </div>
          <div>
            <TaskList/>
          </div>
        </main>
        <footer>
          <p>&copy; 2025 Dev-KimDonghyun. All rights reserved.</p>
        </footer>
      </div>
    </div>

  );

};

export default App;
