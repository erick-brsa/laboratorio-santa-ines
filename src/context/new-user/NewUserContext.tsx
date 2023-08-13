'use client';

import axios from 'axios';
import {
	FC,
	useState,
	useEffect,
	Dispatch,
	ReactNode,
	createContext,
	SetStateAction
} from 'react';
import { toast } from 'react-toastify';

interface IUser {
	name: string;
	email: string;
	lastname: string;
	phoneNumber: string;
}

interface IAnalysis {
	id: string;
	name: string;
	price: number;
}

interface NewUserContextProps {
	user: IUser;
	step: number;
	total: number;
	status: string;
	clinic: string;
	analyses: IAnalysis[];

	saveUser: () => void;
	setUser: (user: IUser) => void;
	setStep: (step: number) => void;
	setTotal: (total: number) => void;
	setClinic: (clinic: string) => void;
	setStatus: (status: string) => void;
	setAnalyses: Dispatch<SetStateAction<IAnalysis[]>>;
}

const NewUserContext = createContext<NewUserContextProps>(
	{} as NewUserContextProps
);

interface Props {
	children: ReactNode;
}

export const NewUserProvider: FC<Props> = ({ children }) => {
	const [user, setUser] = useState<IUser>({
		name: '',
		lastname: '',
		email: '',
		phoneNumber: ''
	});
	const [step, setStep] = useState<number>(0);
	const [total, setTotal] = useState<number>(0);
	const [clinic, setClinic] = useState<string>('');
	const [status, setStatus] = useState<string>('');
	const [analyses, setAnalyses] = useState<IAnalysis[]>([]);

	useEffect(() => {
		setTotal(analyses.map(a => a.price).reduce((a, b) => a + b, 0));
	}, [analyses]);

	const saveUser = async () => {
		try {
			await axios.post('/api/users', {
				user,
				clinic,
				status,
				analyses
			})

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
			
		} catch (error) {
			toast.error('Algo salió mal', {
				position: 'bottom-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'dark'
			});
			console.log(error)
		}
	};

	return (
		<NewUserContext.Provider
			value={{
				user,
				step,
				total,
				clinic,
				status,
				analyses,
				saveUser,
				setUser,
				setStep,
				setTotal,
				setClinic,
				setStatus,
				setAnalyses
			}}
		>
			{children}
		</NewUserContext.Provider>
	);
};

export default NewUserContext;
