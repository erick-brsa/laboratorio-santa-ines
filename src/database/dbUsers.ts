import bcrypt from 'bcrypt';
import prisma from '@/lib/db';

export const checkUserEmailPassword = async (
	email: string,
	password: string
) => {
	const user = await prisma.user.findUnique({ where: { email } });

	if (!user) {
		return null;
	}

	if (!bcrypt.compareSync(password, user.password!)) {
		return null;
	}

	const { id, name, lastname, role } = user;

	return {
		id,
		email: email.toLocaleLowerCase(),
		role,
		name,
		lastname
	};
};

export const getAllPatients = async () => {
	const patients = await prisma.user.findMany({
		where: {
			role: 'CLIENT'
		},
		select: {
			id: true,
			name: true,
			lastname: true,
			phoneNumber: true,
			role: true
		}
	});
	return patients;
};

export const getSomePatients = async (skip: number, take: number) => {
	const patients = await prisma.user.findMany({
		skip,
		take,
		where: {
			role: 'CLIENT'
		},
		select: {
			id: true,
			name: true,
			lastname: true,
			phoneNumber: true,
			role: true
		}
	});
};
