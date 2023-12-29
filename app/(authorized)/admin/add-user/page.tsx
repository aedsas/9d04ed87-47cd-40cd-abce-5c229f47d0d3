'use client';

import Form from '@/components/LoginForm/form';
import MainMenu from '@/components/Menu/main-menu';

export default function AddUser() {
  return (
    <div className="flex items-center justify-center w-full mb-[100px]">
      <div className="z-10 w-11/12 md:w-10/12 xl:w-8/12 m-auto mt-5 rounded border border-gray-200 shadow-xl">
        <section className="flex flex-col items-center justify-center back-color chg-white p-5">
          <MainMenu active="admin"></MainMenu>
          <h1>Add users</h1>
          <Form type="admin" />
        </section>
      </div>
    </div>
  );
}
