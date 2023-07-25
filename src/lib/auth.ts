import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions, getServerSession } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import { checkUserEmailPassword } from '@/database';
import prisma from '@/lib/db';

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	session: {
		strategy: 'jwt'
	},
	pages: {
		signIn: '/'
	},
	providers: [
		CredentialsProvider({
			name: 'Custom Login',
			credentials: {
				email: {
					label: 'Correo:',
					type: 'email',
					placeholder: 'name@example.com'
				},
				password: {
					label: 'Contraseña:',
					type: 'password',
					placeholder: '*******'
				}
			},
			async authorize(credentials, req) {
				// validar con la base de datos
				return await checkUserEmailPassword(
					credentials?.email!,
					credentials?.password!
				);
			}
		})
	],
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			return true;
		},
		async redirect({ url, baseUrl }) {
			if (url.startsWith('/')) return `${baseUrl}${url}`;
			// Allows callback URLs on the same origin
			else if (new URL(url).origin === baseUrl) return url;
			return baseUrl;
		}
	}
};

export const getAuthSession = () => getServerSession(authOptions);
