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
