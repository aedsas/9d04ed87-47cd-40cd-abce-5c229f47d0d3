import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const bcrypt = require('bcrypt');

async function main() {
  const hashedPassword = await bcrypt.hash(process.env.NEXTAUTH_ADMIN_PASSWORD ?? '123456789', 10); // Hash the password
  const admin = await prisma.user.upsert({
    where: { email: 'admin@chg.io' },
    update: {},
    create: {
      email: 'admin@chg.io',
      password: hashedPassword,
    },
  })
  console.log({ admin })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })