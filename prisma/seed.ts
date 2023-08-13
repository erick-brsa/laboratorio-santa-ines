import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import { users, catalogue, categories } from './data';

const main = async () => {
	await prisma.user.createMany({
		data: users
	});

	await prisma.category.createMany({
		data: categories
	});

	// await prisma.analysis.createMany({
	// 	data: catalogue
	// });
};

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async e => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
