import { Droppable, Draggable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem"

const TodoList = ({ todos, update, delete1 }) => {
  return (

    <Droppable droppableId="todos">
      {(droppableProvided) => (

        <div
          ref={droppableProvided.innerRef} {...droppableProvided.droppableProps}
          className="dark:bg-[#25273B] bg-white rounded-t-md [&>article]:p-4 mt-8 overflow-hidden">

          {todos.map((todo, index) => (
            <Draggable draggableId={`${todo.id}`} index={index} key={todo.id}
            >
              {
                (draggableProvided) => (
                  <TodoItem 
                  ref={draggableProvided.innerRef}
                  {...draggableProvided.dragHandleProps}
                  {...draggableProvided.draggableProps}
                    key={todo.id}
                    todo={todo}
                    update={update}
                    remove={delete1}
                  />
                )}
            </Draggable>
          ))}

          {droppableProvided.placeholder}

        </div>
      )}
    </Droppable>
  )
}

export default TodoList;