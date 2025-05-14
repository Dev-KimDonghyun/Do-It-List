import { useEffect, useState } from "react";
import dayjs from "dayjs";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./styles/index.css";

type ToDo = {
  id: number;
  content: string;
  whenCreated: string;
  didIt: boolean;
};

function App() {
  const [toDoInput, setToDoInput] = useState<string>("");
  const [toDoList, setToDoList] = useState<ToDo[]>([]);

  useEffect(() => {
    const localStorageValue: string | null = localStorage.getItem(
      "DevKimDH_To_Do_Web_App_Value"
    );
    if (localStorageValue !== null) {
      setToDoList(JSON.parse(localStorageValue));
    }
  }, []);

  useEffect(() => {
    const localStorageValue: string | null = localStorage.getItem(
      "DevKimDH_To_Do_Web_Value"
    );
    if (localStorageValue !== null) {
      const savedValue = JSON.parse(localStorageValue);
      setToDoList(savedValue);
    }

    const setDisplayHeight = () => {
      const displayHeight = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${displayHeight}px`);
    };

    setDisplayHeight();
    window.addEventListener("resize", setDisplayHeight);
    return () => window.removeEventListener("resize", setDisplayHeight);
  }, []);

  const uploadToList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (toDoInput.trim() === "") return;

    const newToDo: ToDo = {
      id: Date.now(),
      content: toDoInput,
      whenCreated: dayjs().format("YYYY/MM/DD HH:mm"),
      didIt: false,
    };

    const newList = [...toDoList, newToDo];
    setToDoInput("");
    setToDoList(newList);

    console.log(newList); // Test Code //

    localStorage.setItem(
      "DevKimDH_To_Do_Web_App_Value",
      JSON.stringify(newList)
    );
  };

  const deleteToDo = (id: number) => {
    const deleteUpdateToDo = toDoList.filter((todo) => todo.id !== id);

    setToDoList(deleteUpdateToDo);
    localStorage.setItem(
      "DevKimDH_To_Do_Web_App_Value",
      JSON.stringify(deleteUpdateToDo)
    );
  };

  const deleteToDoAll = () => {
    setToDoList([]);
    localStorage.setItem("DevKimDH_To_Do_Web_App_Value", JSON.stringify([]));
  };

  const compeleteToDo = (id: number) => {
    const compeleUpdateToDo = toDoList.map((todo) =>
      todo.id === id ? { ...todo, didIt: !todo.didIt } : todo
    );

    setToDoList(compeleUpdateToDo);
    localStorage.setItem(
      "DevKimDH_To_Do_Web_App_Value",
      JSON.stringify(compeleUpdateToDo)
    );
  };

  return (
    <div>
      <div style={{ height: "calc(var(--vh, 1vh) * 100)" }}>
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
            <TaskList
              deleteToDoAll={deleteToDoAll}
              toDoList={toDoList}
              deleteToDo={deleteToDo}
              compeleteToDo={compeleteToDo}
            />
          </div>
        </main>
        <footer>
          <p>&copy; 2025 Dev-KimDonghyun. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
