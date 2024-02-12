'use client';

import Table from 'react-bootstrap/Table';
import LoadingDots from '@/components/LoginForm/loading-dots';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import { TrashIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';

interface User {
  id: number;
  email: string;
}

export default function UserList() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([
    {
      id: 0,
      email: 'loading...'
    }
  ]);
  const { data: session } = useSession();

  let currentUser: string | null | undefined = '';
  if (session?.user) {
    currentUser = session.user.email;
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    (async () => {
      await fetchUsers();
    })();
  }, []);

  const handleDelete = async (userId: number) => {
    try {
      const response = await fetch(`/api/users/delete/${userId}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Failed to delete user');
      }

      toast.success('User with Id ' + userId + ' was successfully removed.');

      // Remove the deleted user from the state
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingDots />
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th># Id</th>
              <th>Email</th>
              <th>Password</th>
              <th className={'w-[20%]'}>Delete</th>
              {/*  TODO Add Edit Functionality */}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>*********</td>
                <td style={{ width: '180px' }}>
                  {currentUser !== user.email ? (
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="chg-button small-button static-link icon-link"
                    >
                      <TrashIcon />
                      <span>Delete</span>
                    </button>
                  ) : (
                    <button
                      className="chg-button small-button danger static-link icon-link"
                      disabled
                    >
                      <ExclamationCircleIcon />
                      <span>Current user</span>
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}
