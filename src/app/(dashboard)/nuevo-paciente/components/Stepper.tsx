'use client';

import { FC } from 'react';

interface StepperProps {
	step: number;
	setStep: (step: number) => void;
}

const Stepper: FC<StepperProps> = ({ step, setStep }) => {
	return (
		<ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 sm:text-base">
			<li
				onClick={() => setStep(0)}
				className={`flex md:w-full items-center text-blue-600 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 cursor-pointer ${
					step > 0
						? 'after:border-blue-600 '
						: 'after:border-gray-200 '
				}`}
			>
				<span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
					<span className="mr-2">1</span>
					Datos{' '}
					<span className="hidden sm:inline-flex w-fit sm:ml-2">
						Personales
					</span>
				</span>
			</li>
			<li
				onClick={() => setStep(1)}
				className={`flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 cursor-pointer ${
					step >= 1 && 'text-blue-600'
				} ${
					step > 1 ? 'after:border-blue-600' : 'after:border-gray-200'
				}`}
			>
				<span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
					<span className="mr-2">2</span>
					Análisis{' '}
				</span>
			</li>
			<li
				onClick={() => setStep(2)}
				className={`flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 cursor-pointer ${
					step >= 2 && 'text-blue-600'
				} ${
					step > 2 ? 'after:border-blue-600' : 'after:border-gray-200'
				}`}
			>
				<span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
					<span className="mr-2">3</span>
					Resumen{' '}
				</span>
			</li>
			<li
				onClick={() => setStep(3)}
				className={`flex items-center cursor-pointer ${
					step > 2 && 'text-blue-600'
				}`}
			>
				<span className="mr-2">4</span>
				Cobro
			</li>
		</ol>
	);
};

export default Stepper;
