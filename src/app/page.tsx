import Image from 'next/image';

export default function Login() {
	return (
		<section className="bg-gray-50">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<a
					href="#"
					className="bg-white p-5 rounded shadow flex items-center mb-6 text-2xl font-semibold text-gray-900"
				>
					<Image
						width={100}
						height={100}
						className="mr-2"
						src="/img/logo.svg"
						alt="logo"
					/>
					<p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
						<span className="block uppercase tracking-tighter text-lg">
							Laboratorio Clinico
						</span>
						<span className="text-4xl leading-5 tracking-tight">
							Santa <b className="font-extrabold">Inés</b>
						</span>
					</p>
				</a>
				<div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold text-gray-900 md:text-2xl">
							Iniciar sesión
						</h1>
						<form className="space-y-4 md:space-y-6" action="#">
							<div>
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium text-gray-900"
								>
									Correo electrónico
								</label>
								<input
									type="email"
									name="email"
									id="email"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="name@company.com"
									required
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
							<button
								type="submit"
								className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								Ingresar
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
