
import { useState } from "react";
import { Toaster } from "react-hot-toast";

// import MyButton from "./components/Button";
// import MyInput from "./components/Input";
import UserCard from "./components/UserCard";
import Header from "./components/Header";
// import Counter from "./components/Counter";
// import ShowHide from "./components/Showhide";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/Todolist";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const name = "ducanh";

  const [todos, setTodos] = useState<Todo[]>([]);

  // Thêm Todo
  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <>
      <Header logo="DA"></Header>

      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Chào mừng đến với WEB502
        </h1>

        <p>ten toi la : {name}</p>

        <UserCard name="nam" />

        {/* <UserCard
          name="hoadv"
          avatar="https://i.pravatar.cc/150?img=3"
        />

        <MyInput />

        <MyButton
          label="ButtonApp"
          onClick={() => alert("Truyen Onlick")}
        />

        <MyButton label="ButtonSecond" text="Second" />

        <Counter />

        <ShowHide /> */}

        
        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-5">Todo List</h2>

          <TodoForm onAdd={addTodo} />

          <TodoList
            todos={todos}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
          />
        </div>
      </div>

      <Toaster />
    </>
  );
}

export default App;

