import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const allContents = await prisma.content.findMany()
  console.log(allContents)
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