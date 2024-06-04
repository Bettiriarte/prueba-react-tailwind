const TodoFilter = ({ changeFilter, filter }) => {
  return (
    <section className="container mx-auto mt-8">
      <div className="mt-8 bg-white rounded-md p-4 flex gap-4 justify-center dark:bg-[#25273B] ">
        <button
          className={`${filter === "All"
            ? "text-blue-700 hover:text-gray-400"
            : "text-gray-400 hover:text-blue-700"
            }`}
          onClick={() => changeFilter("All")}
        >All</button>
        <button
          className={`${filter === "Active"
            ? "text-blue-700 hover:text-gray-400"
            : "text-gray-400 hover:text-blue-700"
            }`}
          onClick={() => changeFilter("Active")}
        >Active</button>
        <button
          className={`${filter === "Completed"
            ? "text-blue-700 hover:text-gray-400"
            : "text-gray-400 hover:text-blue-700"
            }`}
          onClick={() => changeFilter("Completed")}
        >Completed</button>
      </div>
    </section>
  )
}
export default TodoFilter;