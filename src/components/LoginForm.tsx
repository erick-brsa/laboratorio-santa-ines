'use client';

import { FormEvent, useState } from 'react';

export default function LoginForm() {
	const [username, setUsername] = useState<String>('');
	const [password, setPassword] = useState<String>('');
	const [error, setError] = useState<String>('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (username.trim() === '') {
			setError('El usuario es requerido');
			return;
		}
		if (password.trim() === '') {
			setError('La contraseña es requerida');
			return;
		}
        setError('');
	};

	return (
		<form
			className="space-y-4 md:space-y-6"
            method='POST'
			noValidate
			onSubmit={handleSubmit}
		>
			<div>
				<label
					htmlFor="email"
					className="block mb-2 text-sm font-medium text-gray-900"
				>
					Usuario o correo electrónico
				</label>
				<input
					type="email"
					name="email"
					id="email"
					className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="usuario@laboratoriosantaines.com"
					required
                    onChange={(e) => setUsername(e.target.value)}
				/>
			</div>
			<div>
				<label
					htmlFor="password"
					className="block mb-2 text-sm font-medium text-gray-900"
				>
					Contraseña
				</label>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="••••••••"
					className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					required
                    onChange={(e) => setPassword(e.target.value)}
				/>
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
				<div
					className="bg-red-100 border-l-4 border-red-500 text-red-700 py-2 px-4"
					role="alert"
				>
					{/* <p className="font-bold">Error</p> */}
					<p>{error}</p>
				</div>
			)}
			<button
				type="submit"
				className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Ingresar
			</button>
		</form>
	);
}
