import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Hash the password
  const hashedPassword = await bcrypt.hash(
    process.env.NEXTAUTH_ADMIN_PASSWORD ?? '123456789',
    10
  );
  const admin = await prisma.user.upsert({
    where: { email: 'admin@chg.io' },
    update: {},
    create: {
      email: 'admin@chg.io',
      password: hashedPassword
    }
  });
  console.log({ admin });

  // Add Tasks
  const tasksData = [
    { title: 'Task 1', done: false },
    { title: 'Task 2', done: true }
  ];

  // Insert tasks into the database
  await prisma.task.createMany({
    data: tasksData.map((task) => ({
      title: task.title,
      done: task.done,
      userId: 1 // Assign tasks to a user (replace with actual user ID)
    }))
  });
  console.log(tasksData);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
