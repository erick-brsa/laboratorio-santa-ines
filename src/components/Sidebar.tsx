'use client';

import {
	ArrowLeftOnRectangleIcon,
	CalendarIcon,
	ChartPieIcon,
	ChevronDownIcon,
	ChevronLeftIcon,
	ClipboardDocumentListIcon,
	Cog6ToothIcon,
	UserCircleIcon,
	UsersIcon
} from '@heroicons/react/24/outline';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import SidebarLinkGroup from './SidebarLinkGroup';
import Image from 'next/image';
import { signOut } from 'next-auth/react';

interface SidebarProps {
	sidebarOpen: boolean;
	setSidebarOpen: (arg: boolean) => void;
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
	const pathname = usePathname();
	const trigger = useRef<any>(null);
	const sidebar = useRef<any>(null);
	const [sidebarExpanded, setSidebarExpanded] = useState<Boolean>(false);
	useEffect(() => {
		const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
		storedSidebarExpanded === null
			? setSidebarExpanded(false)
			: storedSidebarExpanded === 'true' && setSidebarExpanded(true);
	}, []);

	// close on click outside
	useEffect(() => {
		const clickHandler = ({ target }: MouseEvent) => {
			if (!sidebar.current || !trigger.current) return;
			if (!sidebar.current) return;
			if (
				!sidebarOpen ||
				sidebar.current.contains(target)
				||trigger.current.contains(target)
			)
				return;
			setSidebarOpen(false);
		};
		document.addEventListener('click', clickHandler);
		return () => document.removeEventListener('click', clickHandler);
	});

	useEffect(() => {
		localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
		if (sidebarExpanded) {
			document.querySelector('body')?.classList.add('sidebar-expanded');
		} else {
			document
				.querySelector('body')
				?.classList.remove('sidebar-expanded');
		}
	}, [sidebarExpanded]);

	return (
		<aside
			ref={sidebar}
			className={`bg-[#1C2434] absolute left-0 top-0 z-50 flex h-screen w-72 flex-col overflow-y-hidden duration-300 ease-linear lg:static lg:translate-x-0 ${
				sidebarOpen ? 'translate-x-0' : '-translate-x-full'
			}`}
		>
			{/* <!-- SIDEBAR HEADER --> */}
			<div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-6">
				<Link
					href="/dashboard"
					className="bg-white w-full p-2 lg:p-3 rounded flex items-center text-2xl font-semibold text-gray-900 gap-2"
				>
					<Image
						src="/img/logo.svg"
						alt="logo"
						width={55}
						height={55}
						className=""
					/>
					<p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
						<span className="hidden lg:block uppercase tracking-tighter text-sm leading-3">
							Laboratorio Clinico
						</span>
						<span className="text-2xl lg:text-3xl tracking-tight">
							Santa <b className="font-extrabold">Inés</b>
						</span>
					</p>
				</Link>

				<button
					ref={trigger}
					onClick={() => setSidebarOpen(!sidebarOpen)}
					aria-controls="sidebar"
					aria-expanded={sidebarOpen}
					className="block lg:hidden"
				>
					<ChevronLeftIcon className="h-8 w-8 text-[#DEE4EE]" />
				</button>
			</div>
			{/* <!-- SIDEBAR HEADER --> */}

			<div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
				{/* <!-- Sidebar Menu --> */}
				<nav className="py-4 px-4 lg:px-6">
					{/* <!-- Menu Group --> */}
					<div>
						<h3 className="mb-4 ml-4 text-sm font-semibold text-gray-300">
							MENU
						</h3>

						<ul className="mb-6 flex flex-col gap-1">
							{/* <!-- Menu Item Dashboard --> */}
							<SidebarLinkGroup
								activeCondition={
									pathname === '/' ||
									pathname.includes('dashboard')
								}
							>
								{(handleClick, open) => {
									return (
										<>
											<Link
												href="#"
												className={`relative flex items-center gap-2 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-[#333A48] text-[#DEE4EE] ${
													(pathname === '/' ||
														pathname.includes(
															'dashboar'
														)) &&
													'bg-[#333A48]'
												}`}
												onClick={e => {
													e.preventDefault();
													sidebarExpanded
														? handleClick()
														: setSidebarExpanded(
																true
														  );
												}}
											>
												<UsersIcon className="h-6 w-6" />
												Pacientes
												<ChevronDownIcon
													className={`h-6 w-6 absolute right-4 top-1/2 -translate-y-1/2 ${
														open && 'rotate-180'
													}`}
												/>
											</Link>
											{/* <!-- Dropdown Menu Start --> */}
											<div
												className={`translate transform overflow-hidden ${
													!open && 'hidden'
												}`}
											>
												<ul className="mt-4 mb-5 flex flex-col gap-2 pl-6">
													<li>
														<Link
															href="/nuevo-paciente"
															className="relative flex items-center gap-2 rounded-md px-4 font-medium text-gray-300 duration-300 ease-in-out hover:text-white"
														>
															Nuevo paciente
														</Link>
													</li>
													<li>
														<Link
															href="/pacientes"
															className="relative flex items-center gap-2 rounded-md px-4 font-medium text-gray-300 duration-300 ease-in-out hover:text-white"
														>
															Listado
														</Link>
													</li>
												</ul>
											</div>
											{/* <!-- Dropdown Menu End --> */}
										</>
									);
								}}
							</SidebarLinkGroup>
							{/* <!-- Menu Item Dashboard --> */}

							{/* <!-- Menu Item Calendar --> */}
							<li>
								<Link
									href="/calendario"
									className={`relative flex items-center gap-2 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-[#333A48] text-[#DEE4EE] ${
										pathname.includes('calendario') &&
										'bg-[#333A48]'
									}`}
								>
									<CalendarIcon className="h-6 w-6" />
									Calendario
								</Link>
							</li>
							{/* <!-- Menu Item Calendar --> */}

							{/* <!-- Menu Item Catalogue --> */}
							<li>
								<Link
									href="/catalogo"
									className={`relative flex items-center gap-2 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-[#333A48] text-[#DEE4EE] ${
										pathname.includes('catalogo') &&
										'bg-[#333A48]'
									}`}
								>
									<ClipboardDocumentListIcon className="h-6 w-6" />
									Catálogo
								</Link>
							</li>
							{/* <!-- Menu Item Catalogue --> */}

							{/* <!-- Menu Item Profile --> */}
							<li>
								<Link
									href="/perfil"
									className={`relative flex items-center gap-2 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-[#333A48] text-[#DEE4EE] ${
										pathname.includes('perfil') &&
										'bg-[#333A48]'
									}`}
								>
									<UserCircleIcon className="h-6 w-6" />
									Perfil
								</Link>
							</li>
							{/* <!-- Menu Item Profile --> */}
						</ul>
					</div>

					{/* <!-- Others Group --> */}
					<div>
						<h3 className="mb-4 ml-4 text-sm font-semibold text-gray-300">
							OTROS
						</h3>

						<ul className="mb-6 flex flex-col gap-1">
							{/* <!-- Menu Item Chart --> */}
							<li>
								<Link
									href="/graficas"
									className={`relative flex items-center gap-2 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-[#333A48] text-[#DEE4EE] ${
										pathname.includes('graficas') &&
										'bg-[#333A48]'
									}`}
								>
									<ChartPieIcon className="h-6 w-6" />
									Gráficas
								</Link>
							</li>
							{/* <!-- Menu Item Chart --> */}

							{/* <!-- Menu Item Settings --> */}
							<li>
								<Link
									href="/configuracion"
									className={`relative flex items-center gap-2 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-[#333A48] text-[#DEE4EE] ${
										pathname.includes('configuracion') &&
										'bg-[#333A48]'
									}`}
								>
									<Cog6ToothIcon className="h-6 w-6" />
									Configuración
								</Link>
							</li>
							
							{/* <!-- Menu Item Logout --> */}
							<li>
								<button
									type="button"
									onClick={() => signOut()}
									className={`relative w-full flex items-center gap-2 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-[#333A48] text-[#DEE4EE]`}
								>
									<ArrowLeftOnRectangleIcon className="h-6 w-6" />
									Cerrar sesión
								</button>
							</li>
							{/* <!-- Menu Item Settings --> */}
						</ul>
					</div>
				</nav>
				{/* <!-- Sidebar Menu --> */}
			</div>
		</aside>
	);
}
