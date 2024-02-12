import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { title, description, done } = await req.json();

  const createdTask = await prisma.task.create({
    data: {
      title,
      description,
      done: done ? true : false
    }
  });

  return NextResponse.json(createdTask);
}
