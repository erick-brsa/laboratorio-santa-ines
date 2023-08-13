import { NewUserProvider } from '@/context';
import NewUserForm from './components/NewUserForm';

export const metadata = {
	title: 'SILAC - Nuevo Paciente'
};

export default function NuevoPaciente() {
	return (
		<div className="bg-white p-6 shadow rounded">
			<h1 className="text-xl font-bold text-gray-900 md:text-2xl">
				Nuevo paciente
			</h1>
			<div className="mt-4 md:mt-6">
				<NewUserProvider>
					<NewUserForm />
				</NewUserProvider>
			</div>
		</div>
	);
}
