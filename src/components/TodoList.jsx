import TodoItem from "./TodoItem"

const TodoList = ({ todos, update, delete1}) => {
  return (
    <div className="dark:bg-[#25273B] bg-white rounded-t-md [&>article]:p-4 mt-8 overflow-hidden">

      {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} update={update} remove={delete1}/>
       ))}
    </div>
  )
}

export default TodoList;