import { FC } from 'react';

interface Analysis {
	id: string;
	name: string;
	price: number;
}

interface ThirdStepProps {
	setStep: (step: number) => void;
	user: {
		name: string;
		lastname: string;
		email: string;
		phoneNumber: string;
		clinic: string;
	};
	analysis: Analysis[];
}

const ThirdStep: FC<ThirdStepProps> = ({ user, setStep, analysis }) => {
	const total = analysis.map(a => a.price).reduce((a, b) => a+b, 0)
	return (
		<div className="mt-4 md:mt-6">
			<h2 className="my-4 font-semibold">Resumen</h2>

			<div className="grid md:grid-cols-2">
				<div className="mt-2 md:mt-0">
					<h3 className="font-semibold mb-2">Datos del paciente</h3>
					<p>Nombre: {`${user.name} ${user.lastname}`}</p>
					<p>Teléfono: {user.phoneNumber}</p>
					<p>Correo electrónico: {user.email}</p>
					<p>Clínica: {user.clinic}</p>
				</div>
				<div className="mt-6 md:mt-0">
					<h3 className="font-semibold mb-2">Análisis a realizar</h3>
					<div className="flex flex-col gap-4">
						{analysis.map(a => (
							<article
								key={a.id}
								className="bg-gray-100 p-4 shadow rounded"
							>
								<h4 className="font-semibold">{a.name}</h4>
								<p>${a.price}</p>
							</article>
						))}
						<div>
						<p>Total a pagar: ${total}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex gap-4 mt-6">
				<button
					onClick={() => setStep(1)}
					type="button"
					className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Anterior
				</button>
				<button
					onClick={() => setStep(3)}
					type="button"
					className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Siguiente
				</button>
			</div>
		</div>
	);
};

export default ThirdStep;
