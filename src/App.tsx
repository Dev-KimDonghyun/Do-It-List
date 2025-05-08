import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './index.css';

function App() {

  return (

    <div>
      <div>
        <header>
          <h1>Do It! List</h1>
        </header>
        <main>
          <div>
            <TaskInput/>
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
