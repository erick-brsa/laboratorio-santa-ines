'use client';

import { useNewUser } from '@/hooks';

const FirstStep = () => {
	
	const { user, setUser, clinic, setClinic, setStep } = useNewUser();

	return (
		<div className="mt-4 md:mt-6 max-w-xl">
			<h2 className='my-4 font-semibold'>Datos del paciente</h2>
			<form method="POST" onSubmit={e => e.preventDefault()}>
				<div className="space-y-4 md:space-y-6">
					<div className="flex flex-col gap-2">
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-900"
						>
							Nombre(s)
						</label>
						<input
							value={user.name}
							onChange={e => setUser({
								...user,
								name: e.target.value
							})}
							id="name"
							type="text"
							name="name"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label
							htmlFor="lastname"
							className="block text-sm font-medium text-gray-900"
						>
							Apellidos
						</label>
						<input
							value={user.lastname}
							onChange={e => setUser({
								...user,
								lastname: e.target.value
							})}
							id="lastname"
							type="text"
							name="lastname"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-900"
						>
							Correo electrónico
						</label>
						<input
							value={user.email}
							onChange={e => setUser({
								...user,
								email: e.target.value
							})}
							id="email"
							type="email"
							name="email"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label
							htmlFor="phone"
							className="block text-sm font-medium text-gray-900"
						>
							Número de teléfono
						</label>
						<input
							value={user.phoneNumber}
							onChange={e => setUser({
								...user,
								phoneNumber: e.target.value
							})}
							id="phone"
							type="tel"
							name="phone"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label
							htmlFor="clinic"
							className="block text-sm font-medium text-gray-900"
						>
							Clínica de proveniencia
						</label>
						<input
							value={clinic}
							onChange={e => setClinic(e.target.value)}
							id="clinic"
							type="text"
							name="clinic"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
						/>
					</div>
					<button
						onClick={() => setStep(1)}
						type="button"
						className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Siguiente
					</button>
				</div>
			</form>
		</div>
	);
};

export default FirstStep;
