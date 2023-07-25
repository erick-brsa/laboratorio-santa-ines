import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import bcrypt from 'bcrypt';

const users = [
	{
		role: 'receptionist',
		name: 'Erick',
		lastname: 'Briones',
		username: 'erick-brsa',
		email: 'briones@gmail.com',
		password: bcrypt.hashSync('password', 12)
	}
];

const main = async () => {
	await prisma.user.createMany({ data: users });
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
