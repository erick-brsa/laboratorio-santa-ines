'use client';

import { FC, Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';

interface Analysis {
	id: string;
	name: string;
	price: number;
}

interface FourthStepProps {
	analysis: Analysis[];
	setStep: (step: number) => void;
	status: string;
	setStatus: Dispatch<SetStateAction<string>>;
}

const FourthStep: FC<FourthStepProps> = ({
	analysis,
	setStep,
	status,
	setStatus
}) => {
	const total = analysis.map(a => a.price).reduce((a, b) => a + b, 0);

	const handleChangeStatus = (newStatus: string) => {
		if (status === newStatus) {
			return;
		}
		setStatus(newStatus);
	};

	const handleSave = () => {
		toast('🚀 ¡Registro guardado!', {
			position: 'bottom-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark'
		});
		setStep(0)
	};

	return (
		<div className="mt-4 md:mt-6">
			<h2 className="my-4 font-semibold">
				Solicite el monto y seleccione una opción
			</h2>
			<div>
				<h3 className="font-semibold">Monto a pagar: ${total}</h3>
			</div>
			<div className="my-6 grid md:grid-cols-2 md:gap-x-6 max-w-lg">
				<div className="grid">
					<button
						onClick={() => handleChangeStatus('PENDING')}
						className={`px-6 py-2 text-yellow-500 font-semibold leading-6 text-center uppercase transition bg-transparent border-2 border-yellow-500 rounded ${
							status === 'PENDING'
								? 'bg-orange-100 border-yellow-600 text-yellow-600'
								: 'hover:bg-orange-100'
						}`}
					>
						Pendiente
					</button>
				</div>
				<div className="grid">
					<button
						onClick={() => handleChangeStatus('PAID')}
						className={`px-6 py-2 text-green-500 font-semibold leading-6 text-center uppercase transition bg-transparent border-2 border-green-500 rounded ${
							status === 'PAID'
								? 'bg-green-100 border-green-600 text-green-600'
								: ' hover:bg-green-100'
						}`}
					>
						Pagado
					</button>
				</div>
			</div>
			<div className="my-5 flex flex-col gap-4">
				<p className="font-semibold">Hoja de servicio</p>
				<button
					type="button"
					className="px-6 py-2 w-fit font-medium leading-6 text-center text-white uppercase transition bg-blue-600 rounded-full shadow hover:shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
				>
					Descargar
				</button>
			</div>
			<div className="flex gap-4">
				<button
					onClick={() => setStep(0)}
					type="button"
					className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Anterior
				</button>
				<button
					onClick={handleSave}
					type="button"
					className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Terminar
				</button>
			</div>
		</div>
	);
};

export default FourthStep;
