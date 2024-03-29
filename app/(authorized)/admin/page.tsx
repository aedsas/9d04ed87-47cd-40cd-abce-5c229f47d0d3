import MainMenu from '@/components/Menu/main-menu';
import UserList from '@/components/User/user-list';
import type { Metadata } from 'next';
import { PlusIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Admin | chg Web APP',
  description: 'Simple admin panel with User CRUD.'
};

function Admin() {
  return (
    <div className="flex items-center justify-center w-full mb-[100px]">
      <div className="z-10 w-11/12 md:w-10/12 xl:w-8/12 m-auto mt-5 rounded border border-gray-200 shadow-xl">
        <section className="flex flex-col items-center justify-center back-color chg-white p-5">
          <MainMenu active="admin"></MainMenu>
          <h1>Admin Panel</h1>

          <Link
            href="/admin/add-user"
            title="Start!"
            className="chg-button icon-link mb-5"
          >
            <PlusIcon />
            <span className="font-bold">Add User</span>
          </Link>

          <UserList></UserList>
        </section>
      </div>
    </div>
  );
}

export default Admin;
