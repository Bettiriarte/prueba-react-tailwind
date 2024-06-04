import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

// const initialStateTodos = [
//   { id: 1, title: "Hacer ejercicio", completed: true },
//   { id: 2, title: "Terminar Proyecto de la U", completed: false },
//   { id: 3, title: "Limpiar y organizar la casa", completed: false },
//   { id: 4, title: "Lavar la ropa", completed: false },
//   { id: 5, title: "Ir a la peluqueria", completed: false }
// ]

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    }
    setTodos([...todos, newTodo]);
  }

  const UpdateTodo = (id) => {
    setTodos(todos.map(
      todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const RemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const ComputedTodo = todos.filter((todo) => !todo.completed).length;

  const ClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const [filter, setFilter] = useState("All")
  const ChangeFilter = (filter) => setFilter(filter)
  const FilterTodo = () => {
    switch (filter) {
      case "All":
        return todos;
      case "Active":
        return todos.filter((todo) => !todo.completed);
      case "Completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen dark:bg-[#171721] transition-all duration-1000 md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">

      <Header />

      <main className="container mx-auto px-4 mt-8 md:max-w-xl">
        <TodoCreate
          create={createTodo}
        />

        <TodoList
          todos={FilterTodo()}
          update={UpdateTodo}
          delete1={RemoveTodo}
        />

        <TodoComputed
          computed={ComputedTodo}
          clear={ClearCompleted}
        />

        <TodoFilter
          changeFilter={ChangeFilter}
          filter={filter}
        />
      </main>

      <footer className="text-center text-gray-400 mt-8"> Drag and drop to reorder list</footer>

    </div>
  )
};
export default App;