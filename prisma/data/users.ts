import bcrypt from 'bcrypt';
import { ROLE } from '@prisma/client'

export const users = [
	{
		role: ROLE.RECEPTIONIST,
		name: 'Erick',
		lastname: 'Briones',
		username: 'erick-brsa',
		email: 'briones@gmail.com',
		password: bcrypt.hashSync('password', 12)
	}
];
