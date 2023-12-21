import Table from 'react-bootstrap/Table'
import { getUsers, deleteUser } from '@/lib/user';

export default async function UserList() {
  let users = await getUsers();

  const refreshUsers = async () => {
    users = await getUsers();
  };

  const handleDeleteUser = async (id: number) => {
    await deleteUser(id);
    await refreshUsers();
  };

  return (
    <Table striped bordered hover>
        <thead>
          <tr>
            <th># Id</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id} </td>
              <td>{user.email}</td>
              <td>Edit</td>
              <td>
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
  )
}