import '@/styles/globals.css'

export const metadata = {
	title: 'SILAC - Laboratorio Línico Santa Inés',
	description: 'SILAC - Sistema de información para laboratorios clínicos'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<body>{children}</body>
		</html>
	);
}
