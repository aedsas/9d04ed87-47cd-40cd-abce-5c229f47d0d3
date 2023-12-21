import prisma from "@/lib/prisma";

interface User {
  id: number;
  email: string;
  password: string;
}

export const getUsers = async () => {
  return await prisma.user.findMany();
};

export const createUser = async (data: User) => {
  return prisma.user.create({ data });
};

export const updateUser = async (id: number, data: User) => {
  return prisma.user.update({
    where: { id },
    data,
  });
};

export const deleteUser = async (id: number) => {
  return prisma.user.delete({
    where: { id },
  });
};