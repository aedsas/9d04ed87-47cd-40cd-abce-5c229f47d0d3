import MainMenu from '@/components/Menu/main-menu';
import TodoForm from '@/components/TodoForm/todo-form';
import type { Metadata } from 'next';
import { BackwardIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Add Task | chg Web APP',
  description: 'Add Task to Todo list.'
};

function Page() {
  return (
    <div className="flex items-center justify-center w-full mb-[100px]">
      <div className="z-10 w-11/12 md:w-10/12 xl:w-8/12 m-auto mt-5 rounded border border-gray-200 shadow-xl">
        <section className="flex flex-col items-center justify-center back-color chg-white p-5 text-center">
          <MainMenu active="todos"></MainMenu>
          <h1>Add Task</h1>

          <Link href={'/todos'}>
            <div className="actions mb-5">
              <button className="chg-button small-button static-link icon-link">
                <BackwardIcon />
                <span>Go back</span>
              </button>
            </div>
          </Link>

          <TodoForm />
        </section>
      </div>
    </div>
  );
}

export default Page;
