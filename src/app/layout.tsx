import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import { NextAuthProvider } from '@/context';

import "react-toastify/dist/ReactToastify.css";
import '@/styles/globals.css';

export const metadata = {
	title: 'SILAC - Laboratorio Clínico Santa Inés',
	description: 'Sistema de información para laboratorios clínicos',
	icons: { icon: '/favicon.ico' }
};

export default function RootLayout({
	children
}: {
	children: ReactNode;
}) {
	return (
		<html lang="es">
			<body className='bg-gray-50'>
				<ToastContainer />
				<NextAuthProvider>
					{children}
				</NextAuthProvider>
			</body>
		</html>
	);
}
