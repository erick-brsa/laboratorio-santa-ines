import Image from 'next/image';

import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import Link from 'next/link';

interface Props {
	sidebarOpen: string | boolean | undefined;
	setSidebarOpen: (arg0: boolean) => void;
}

export default function Header({ sidebarOpen, setSidebarOpen }: Props) {
	return (
		<header className="sticky top-0 z-40 flex w-full bg-gray-50 shadow">
			<div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
				<div className="flex items-center gap-2 sm:gap-4 lg:hidden">
					{/* <!-- Hamburger Toggle BTN --> */}
					<button
						aria-controls="sidebar"
						onClick={e => {
							e.stopPropagation();
							setSidebarOpen(!sidebarOpen);
						}}
						className="z-40 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm lg:hidden"
					>
						<Bars3Icon className="h-6 w-6 text-gray-500" />
					</button>
					{/* <!-- Hamburger Toggle BTN --> */}

					<Link className="block flex-shrink-0 lg:hidden" href="/">
						<Image
							src="/img/Logo.svg"
							alt="Logo"
							width={40}
							height={40}
						/>
					</Link>
				</div>

				<div className="hidden sm:block">
					<form action="" method="POST">
						<div className="relative">
							<button className="absolute top-1/2 left-0 -translate-y-1/2">
								<MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
							</button>

							<input
								type="text"
								placeholder="Realizar busqueda..."
								className="w-full bg-transparent pr-4 pl-9 focus:outline-none"
							/>
						</div>
					</form>
				</div>

				<div className="flex items-center gap-3 2xsm:gap-7">
					<ul className="flex items-center gap-2 2xsm:gap-4">
						{/* <!-- Dark Mode Toggler --> */}
						{/* <DarkModeSwitcher /> */}
						{/* <!-- Dark Mode Toggler --> */}

						{/* <!-- Notification Menu Area --> */}
						{/* <DropdownNotification /> */}
						{/* <!-- Notification Menu Area --> */}

						{/* <!-- Chat Notification Area --> */}
						{/* <DropdownMessage /> */}
						{/* <!-- Chat Notification Area --> */}
					</ul>

					{/* <!-- User Area --> */}
					{/* <DropdownUser /> */}
					{/* <!-- User Area --> */}
				</div>
			</div>
		</header>
	);
}
