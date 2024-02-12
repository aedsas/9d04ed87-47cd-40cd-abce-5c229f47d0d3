import MainMenu from '@/components/Menu/main-menu';
import type { Metadata } from 'next';
import TodoList from '@/components/TodoList/todo-list';
import { PlusIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Todos | chg Web APP',
  description: 'List of Todos.'
};

function Todos() {
  return (
    <div className="flex items-center justify-center w-full mb-[100px]">
      <div className="z-10 w-11/12 md:w-10/12 xl:w-8/12 m-auto mt-5 rounded border border-gray-200 shadow-xl">
        <section className="flex flex-col items-center justify-center back-color chg-white p-5 text-center">
          <MainMenu active="todos"></MainMenu>
          <h1>List of Todos</h1>

          <Link
            href="/todos/add-task"
            title="Start!"
            className="chg-button icon-link mb-5"
          >
            <PlusIcon />
            <span className="font-bold">Add Task</span>
          </Link>

          <TodoList />
        </section>
      </div>
    </div>
  );
}

export default Todos;
