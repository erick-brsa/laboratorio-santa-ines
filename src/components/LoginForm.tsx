'use client';

import { signIn, useSession  } from 'next-auth/react';
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useState, useEffect } from 'react';

interface FormValues {
	email: string;
	password: string;
}

const initialValues: FormValues = {
	email: '',
	password: ''
};

const LoginForm = () => {
	const [error, setError] = useState('');
	const router = useRouter();
	const session = useSession();

	useEffect(() => {
	  if (session?.status === 'authenticated') {
		router.push('/dashboard')
	  }
	}, [router, session?.status])
	

	const handleSubmit = async (values: FormValues) => {
		const response = await signIn('credentials', {
			...values,
			redirect: false
		});

		if (response?.error) {
			setError('Credenciales incorrectas');
			setTimeout(() => {
				setError('');
			}, 5000);
			return;
		}
	};

	const signinSchema = Yup.object().shape({
		email: Yup.string()
			.email('Correo no valido')
			.required('El usuario requerido'),
		password: Yup.string().required('La contraseña es requerida')
	});

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={signinSchema}
			onSubmit={values => handleSubmit(values)}
			validateOnChange={false}
		>
			{({ errors, touched }) => (
				<Form
					className="space-y-4 md:space-y-6"
					method="POST"
					noValidate
				>
					<div className="flex flex-col gap-2">
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-900"
						>
							Usuario
						</label>
						<Field
							type="email"
							name="email"
							id="email"
							className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 ${
								errors.email
									? 'focus:ring-red-600 focus:border-red-600'
									: 'focus:ring-blue-600 focus:border-blue-600'
							}`}
							placeholder="Usuario17"
						/>
						{touched.email && errors.email && (
							<div className="bg-red-100 text-red-600 py-1 px-2 rounded">
								<p className="text-sm">{errors.email}</p>
							</div>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-900"
						>
							Contraseña
						</label>
						<Field
							type="password"
							name="password"
							id="password"
							placeholder="••••••••"
							className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 ${
								errors.password
									? 'focus:ring-red-600 focus:border-red-600'
									: 'focus:ring-blue-600 focus:border-blue-600'
							}`}
						/>
						{touched.password && errors.password && (
							<div className="bg-red-100 text-red-600 py-1 px-2 rounded">
								<p className="text-sm">{errors.password}</p>
							</div>
						)}
					</div>
					<div className="flex items-center justify-end">
						<a
							href="#"
							className="text-sm font-medium text-blue-600 hover:underline"
						>
							¿Olvidaste tu contraseña?
						</a>
					</div>
					{error && (
						<div className="bg-red-100 text-red-600 p-2 rounded">
							<p className="text-sm">{error}</p>
						</div>
					)}
					<button
						type="submit"
						className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Ingresar
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
