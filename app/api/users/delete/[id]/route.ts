import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const deletedUser = await prisma.user.delete({
    where: { id: Number(id) }
  });

  return NextResponse.json(deletedUser);
}
