import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seed script run successfully (no-op).');
}

main().finally(() => prisma.$disconnect());
