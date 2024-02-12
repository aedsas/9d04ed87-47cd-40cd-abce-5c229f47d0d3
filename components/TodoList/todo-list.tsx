'use client';

import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import LoadingDots from '@/components/LoginForm/loading-dots';
import toast from 'react-hot-toast';
import { TrashIcon, BookOpenIcon } from '@heroicons/react/24/solid';
import type { ITask } from '@/@types/todo';

function TodoList() {
  const [todos, setTodos] = useState<ITask[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('/api/todos');
        if (!response.ok) {
          throw new Error('Failed to fetch todos');
        }
        const data = await response.json();
        setTodos(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    (async () => {
      await fetchTodos();
    })();
  }, []);

  const handleDelete = async (taskId: number) => {
    try {
      const response = await fetch(`/api/todos/delete/${taskId}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Failed to delete user');
      }

      toast.success('Task with Id ' + taskId + ' was successfully removed.');

      // Remove the deleted user from the state
      setTodos((t) => t.filter((task) => task.id !== taskId));
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
              <th>Title</th>
              <th>Description</th>
              <th>Complete</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>
                  {task.description === ('' || null) ? 'N/A' : task.description}
                </td>
                <td>
                  {task.done ? (
                    <span className="btn btn-success w-100 text-[1.6rem]">
                      Yes
                    </span>
                  ) : (
                    <span className="btn btn-danger w-100 text-[1.6rem]">
                      No
                    </span>
                  )}
                </td>
                <td style={{ width: '180px' }}>
                  <button
                    onClick={() => handleDelete(task.id ?? 0)}
                    className="chg-button small-button static-link icon-link mr-2"
                  >
                    <TrashIcon />
                    <span>Delete</span>
                  </button>
                  <button className="chg-button small-button static-link icon-link">
                    <BookOpenIcon />
                    <span>Edit</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}

export default TodoList;
