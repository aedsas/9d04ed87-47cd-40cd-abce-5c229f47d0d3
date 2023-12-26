import MainMenu from '@/components/Menu/main-menu';
// import UserList from '@/components/User/user-list';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin | chg Web APP',
  description: 'Simple admin panel with User CRUD.'
};

export default async function Admin() {
  return (
    <div className="flex items-center justify-center w-full mb-[100px]">
      <div className="z-10 w-11/12 md:w-10/12 xl:w-8/12 m-auto mt-5 rounded border border-gray-200 shadow-xl">
        <div className="flex flex-col items-center justify-center back-color chg-white p-5">
          <MainMenu active="admin"></MainMenu>
          <h1>Admin Panel</h1>
          {/*<UserList></UserList>*/}
        </div>
      </div>
    </div>
  );
}
