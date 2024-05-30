import CrossIcon from "./componets/icons/CrossIcon";
import MoonIcon from "./componets/icons/MoonIcon";

const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
      <header className="container mx-auto pt-8 px-4">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-bold tracking-[0.3em]">Todo</h1>
          <button>
            <MoonIcon/>
          </button>
        </div>
        <form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8">
          <span className="rounded-full border-2 inline-block h-5 w-5 "></span>
          <input
            type="text"
            placeholder="Create a new todo.."
            className="w-full text-gray-400 outline-none"
          />
        </form>
      </header>
      <main className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-md [&>article]:p-4">

          <article className="flex gap-4 ml-auto border-b border-b-gray-300">
            <button className="rounded-full border-2 inline-block h-5 w-5"></button>
            <p className="text-gray-400 grow">complete online JavaScript course</p>
            <button className="flex none">
              <CrossIcon />
            </button>
          </article>

          <article className="flex gap-4 ml-auto border-b border-b-gray-300">
            <button className="rounded-full border-2 inline-block h-5 w-5 "></button>
            <p className="grow">complete online JavaScript course</p>
            <button className="flex none">
              <CrossIcon />
            </button>
          </article>

          <article className="flex gap-4 ml-auto border-b border-b-gray-300">
            <button className="rounded-full border-2 inline-block h-5 w-5 "></button>
            <p className="grow">complete online JavaScript course</p>
            <button className="flex none">
              <CrossIcon />
            </button>
          </article>

          <section className=" px-4 py-4 flex gap-4 justify-between">
            <span className="text-gray-400"> 5 item left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>
        </div>

      </main>
      <section className="container mx-auto px-4 text-center">
        <div className="mt-8 bg-white rounded-md p-4 flex gap-4 justify-center text-gray-400">
        <button className="text-blue-700">All </button>
          <button className="hover:text-blue-700">Active </button>
          <button className="hover:text-blue-700">Completed </button>
        </div>
      </section>

      <p className="text-center text-gray-400 mt-8"> Drag and drop to reorder list</p>

    </div>
  )
};
export default App;