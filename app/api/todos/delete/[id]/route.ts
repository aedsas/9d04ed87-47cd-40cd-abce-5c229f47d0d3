import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const deletedTask = await prisma.task.delete({
    where: { id: Number(id) }
  });

  return NextResponse.json(deletedTask);
}
