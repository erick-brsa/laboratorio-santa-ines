import { withAuth } from 'next-auth/middleware';

export default withAuth({
	pages: {
		signIn: '/'
	}
});

export const config = {
	matcher: [
		'/calendario',
		'/catalogo',
		'/configuracion',
		'/dashboard',
		'/graficas',
		'/nuevo-paciente',
		'/pacientes',
		'/perfil'
	]
};
