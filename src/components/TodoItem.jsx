import CrossIcon from "./icons/CrossIcon";
import CheckIcon from "./icons/CheckIcon";
import React from "react";

const TodoItem = React.forwardRef(({ todo, update, remove, ...props }, ref) => {
  const { id, title, completed } = todo
  return (
    <article {...props} ref={ref} className="flex gap-4 ml-auto border-b-[0.5px]  border-b-gray-300  dark:border-b-gray-700 dark:bg-[#25273B]">

      <button className={`h-5 w-5 rounded-full border-2  ${completed
        ? " grid place-items-center  bg-gradient-to-r from-sky-500 to-indigo-500 "
        : "inline-block "
        }`}
        onClick={() => update(id)}
      >
        {completed && <CheckIcon />}
      </button>

      <p className={`text-gray-600 grow dark:text-gray-400 ${completed && "line-through"}`}>{title}</p>

      <button
        className="flex none"
        onClick={() => remove(id)}
      >
        <CrossIcon />
      </button>
    </article>
  )
})
export default TodoItem;