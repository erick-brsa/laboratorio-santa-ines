'use client';

import { useState } from 'react';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import Stepper from './Stepper';
import FourthStep from './FourthStep';

interface Analysis {
	id: string;
	name: string;
	price: number;
}

const NewUserForm = () => {
	const [step, setStep] = useState(0);
	const [user, setUser] = useState({
		name: '',
		lastname: '',
		email: '',
		phoneNumber: '',
		clinic: ''
	});
	const [analysis, setAnalysis] = useState<Analysis[]>([]);
	const [status, setStatus] = useState('');
	// TODO: Optimizar el código creando un custom hook para manejar el estado

	return (
		<>
			<Stepper step={step} setStep={setStep} />
			{step === 0 ? (
				<FirstStep setStep={setStep} user={user} setUser={setUser} />
			) : step === 1 ? (
				<SecondStep
					setStep={setStep}
					analysis={analysis}
					setAnalysis={setAnalysis}
				/>
			) : step === 2 ? (
				<ThirdStep setStep={setStep} user={user} analysis={analysis} />
			) : (
				<FourthStep
					setStep={setStep}
					analysis={analysis}
					status={status}
					setStatus={setStatus}
				/>
			)}
		</>
	);
};

export default NewUserForm;
