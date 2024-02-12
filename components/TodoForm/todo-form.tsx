'use client';

import React from 'react';
import type { ICreateTask, IFormErrors } from '@/@types/todo';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { z } from 'zod';
import LoadingDots from '@/components/LoginForm/loading-dots';
import { useRouter } from 'next/navigation';

// Define Zod schema for form data
const formDataSchema = z.object({
  title: z.string().min(5).max(150),
  description: z.string().min(5).max(500)
});

function TodoForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<IFormErrors>({});
  const [formData, setFormData] = useState<ICreateTask>({
    title: '',
    description: '',
    done: false
  });

  // Update form data on input change
  const handleChange = (e: any): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'done' ? value === 'true' : value
    }));
  };

  // Validate form data using Zod schema
  const validateForm = () => {
    try {
      formDataSchema.parse(formData);
      setFormErrors({});
      return true;
    } catch (error: any) {
      setFormErrors(
        error.errors.reduce(
          (acc: any, err: any) => ({ ...acc, [err.path[0]]: err.message }),
          {}
        )
      );
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validate form data with Zod schema
    const isValid = validateForm();

    if (!isValid) {
      setLoading(false);
      toast.error(
        'Form could not submitted, please check the errors and try again.'
      );
    }

    try {
      const res = await fetch('/api/todos/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          done: formData.done
        })
      });

      if (res.status === 200) {
        toast.success('Form submitted successfully! Redirecting...');

        setFormData({
          title: '',
          description: '',
          done: false
        });

        setTimeout(() => {
          router.push('/todos');
        }, 1000);
      } else {
        const { error } = await res.json();
        throw new Error(error);
      }
    } catch (error: any) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="chg-form flex flex-col bg-gray-50 px-4 py-8 sm:px-16 w-100 text-left"
      >
        {/* Map over the keys of formData and render each key as an <li> element */}
        {Object.keys(formData).map((key) => (
          <div className="pb-[2rem]" key={key}>
            <label
              htmlFor={key}
              className="block text-[1.4rem] text-gray-600 uppercase"
            >
              {key.charAt(0).toUpperCase() + key.slice(1) + ': '}
            </label>

            {key === 'description' ? (
              <textarea
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="text-[1.4rem] mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2
                placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black"
              />
            ) : key === 'done' ? (
              <select
                name={key}
                id=""
                value={formData[key] ? 'true' : 'false'}
                onChange={handleChange}
                className="text-[1.4rem] mt-1 block w-full rounded-md border border-gray-300 px-3 py-2
                placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            ) : (
              <input
                type="text"
                name={key}
                value={(formData as { [key: string]: any })[key]}
                onChange={handleChange}
                required
                className="text-[1.4rem] mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2
                placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black"
              />
            )}
            {formErrors[key] && (
              <span style={{ color: 'red', fontSize: '1.6rem' }}>
                {formErrors[key]}
              </span>
            )}
          </div>
        ))}

        <div className="card flex flex-col bg-gray-50 px-4 py-8 sm:px-16 w-100">
          <div className="card-body">
            <h5 className="card-title">
              {formData.title === '' ? 'Preview Title' : formData.title}
            </h5>
            <p className="card-text">
              {formData.description === ''
                ? 'Lorem Ipsum'
                : formData.description}
            </p>
            {formData.done ? (
              <span className="btn btn-success w-100 text-[1.6rem]">Yes</span>
            ) : (
              <span className="btn btn-danger w-100 text-[1.6rem]">No</span>
            )}
          </div>
        </div>

        <div className={'text-center'}>
          <button
            disabled={loading}
            className={`${
              loading ? 'cursor-not-allowed border-gray-200 bg-gray-100' : ''
            } chg-button mt-4 w-100`}
          >
            {loading ? (
              <LoadingDots color="#808080" />
            ) : (
              <span className="block text-[1.4rem] text-gray-600 uppercase">
                Create Task
              </span>
            )}
          </button>
        </div>
      </form>
    </>
  );
}

export default TodoForm;
