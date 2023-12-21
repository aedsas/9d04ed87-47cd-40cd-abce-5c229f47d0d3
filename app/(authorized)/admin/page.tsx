import MainMenu from '@/components/Menu/main-menu';
import UserList from '@/components/User/UserList';

export default async function Admin() {
  return (
    <div className="flex items-center justify-center w-full mb-[100px]">
      <div className="z-10 w-8/12 m-auto mt-5 rounded border border-gray-200 shadow-xl">
        <div className="flex flex-col items-center justify-center back-color chg-white p-5">
          <MainMenu></MainMenu>
          <h1>Users</h1>
          <UserList></UserList>
        </div>
      </div>
    </div>
  );
}
