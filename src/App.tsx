import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './index.css';

function App() {

  const [ toDoInput, setToDoInput ] = useState<string>('');

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
