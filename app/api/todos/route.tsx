import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

// Avoids Next.js static optimization - route caching
export const dynamic = 'force-dynamic';

export async function GET() {
  const list = await prisma.task.findMany();
  return NextResponse.json(list);
}
