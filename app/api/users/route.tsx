import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export async function GET() {
  const list = await prisma.user.findMany();
  return NextResponse.json(list);
}
