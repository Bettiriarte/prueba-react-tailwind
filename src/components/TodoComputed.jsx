const TodoComputed = ({ computed, clear }) => {
  return (
    <section className=" px-4 py-4 flex gap-4 justify-between bg-white rounded-b-md dark:bg-[#25273B]">
      <span className="text-gray-400"> {computed} item left</span>
      <button
        className="text-gray-400 hover:text-blue-700"
        onClick={clear}
      >Clear completed</button>
    </section>
  )
}
export default TodoComputed;