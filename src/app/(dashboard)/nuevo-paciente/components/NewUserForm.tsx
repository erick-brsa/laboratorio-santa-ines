'use client';

import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import Stepper from './Stepper';
import FourthStep from './FourthStep';
import { useNewUser } from '@/hooks';

const NewUserForm = () => {
	const { step } = useNewUser();
	return (
		<>
			<Stepper />
			{step === 0 ? (
				<FirstStep />
			) : step === 1 ? (
				<SecondStep />
			) : step === 2 ? (
				<ThirdStep />
			) : (
				<FourthStep />
			)}
		</>
	);
};

export default NewUserForm;
