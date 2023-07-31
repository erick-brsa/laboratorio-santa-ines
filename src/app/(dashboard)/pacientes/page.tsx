import prisma from '@/lib/db';
import PatientList from './components/PatientList';

const fetchPatients = async () => {
	const patients = await prisma.user.findMany({
		where: {
			role: 'CLIENT'
		}
	});
	return patients;
};

export const metadata = {
	title: 'SILAC - Listado de pacientes'
};

export default async function Pacientes() {
	const patients = await fetchPatients();
	return (
		<div className="bg-white p-6 shadow rounded">
			<h1 className="text-xl font-bold text-gray-900 md:text-2xl">
				Pacientes
			</h1>
			<div className="mt-5 overflow-x-auto">
				<div className="min-w-full inline-block align-middle">
					<div className="border rounded-lg divide-y divide-gray-200 overflow-hidden">
						{/* TODO: SEARCH BOX */}
						{/* <div className="py-3 px-4">
								<div className="relative max-w-xs">
									<label
										htmlFor="hs-table-with-pagination-search"
										className="sr-only"
									>
										Buscar
									</label>
									<input
										type="text"
										name="hs-table-with-pagination-search"
										id="hs-table-with-pagination-search"
										className="p-3 pl-10 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
										placeholder="Buscar paciente"
									/>
									<div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
										<MagnifyingGlassIcon className="h-4 w-4 text-gray-500" />
									</div>
								</div>
							</div> */}

						<div className="overflow-hidde">
							<PatientList patients={patients} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
