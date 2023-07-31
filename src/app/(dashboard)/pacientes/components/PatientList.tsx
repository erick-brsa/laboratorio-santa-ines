'use client';

import { Menu, Transition } from '@headlessui/react';
import { FC, Fragment, useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import Link from 'next/link';
import { User } from '@prisma/client';
import {
	EllipsisVerticalIcon,
	PencilSquareIcon,
	TrashIcon
} from '@heroicons/react/24/outline';

interface PatientListProps {
	patients: User[];
}

function EditInactiveIcon(props: any) {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 13V16H7L16 7L13 4L4 13Z"
				fill="#EDE9FE"
				stroke="#A78BFA"
				strokeWidth="2"
			/>
		</svg>
	);
}

function EditActiveIcon(props: any) {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 13V16H7L16 7L13 4L4 13Z"
				fill="#8B5CF6"
				stroke="#C4B5FD"
				strokeWidth="2"
			/>
		</svg>
	);
}

function DuplicateInactiveIcon(props: any) {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 4H12V12H4V4Z"
				fill="#EDE9FE"
				stroke="#A78BFA"
				strokeWidth="2"
			/>
			<path
				d="M8 8H16V16H8V8Z"
				fill="#EDE9FE"
				stroke="#A78BFA"
				strokeWidth="2"
			/>
		</svg>
	);
}

function DuplicateActiveIcon(props: any) {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 4H12V12H4V4Z"
				fill="#8B5CF6"
				stroke="#C4B5FD"
				strokeWidth="2"
			/>
			<path
				d="M8 8H16V16H8V8Z"
				fill="#8B5CF6"
				stroke="#C4B5FD"
				strokeWidth="2"
			/>
		</svg>
	);
}

function ArchiveInactiveIcon(props: any) {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="5"
				y="8"
				width="10"
				height="8"
				fill="#EDE9FE"
				stroke="#A78BFA"
				strokeWidth="2"
			/>
			<rect
				x="4"
				y="4"
				width="12"
				height="4"
				fill="#EDE9FE"
				stroke="#A78BFA"
				strokeWidth="2"
			/>
			<path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
		</svg>
	);
}

function ArchiveActiveIcon(props: any) {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="5"
				y="8"
				width="10"
				height="8"
				fill="#8B5CF6"
				stroke="#C4B5FD"
				strokeWidth="2"
			/>
			<rect
				x="4"
				y="4"
				width="12"
				height="4"
				fill="#8B5CF6"
				stroke="#C4B5FD"
				strokeWidth="2"
			/>
			<path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
		</svg>
	);
}

function MoveInactiveIcon(props: any) {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
			<path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
			<path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
		</svg>
	);
}

function MoveActiveIcon(props: any) {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
			<path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
			<path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
		</svg>
	);
}

function DeleteInactiveIcon(props: any) {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="5"
				y="6"
				width="10"
				height="10"
				fill="#EDE9FE"
				stroke="#A78BFA"
				strokeWidth="2"
			/>
			<path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
			<path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
		</svg>
	);
}

function DeleteActiveIcon(props: any) {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="5"
				y="6"
				width="10"
				height="10"
				fill="#8B5CF6"
				stroke="#C4B5FD"
				strokeWidth="2"
			/>
			<path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
			<path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
		</svg>
	);
}

const PatientList: FC<PatientListProps> = ({ patients }) => {
	const handleOnClickEdit = () => {};

	const handleOnClickDelete = () => {};

	return (
		<table className="min-w-full divide-y divide-gray-200">
			<thead className="bg-white">
				<tr>
					{/* <th scope="col" className="py-3 px-4 pr-0">
						<div className="flex items-center h-5">
							<input
								id="hs-table-pagination-checkbox-all"
								type="checkbox"
								className="border-gray-200 rounded text-blue-600 focus:ring-blue-500"
							/>
							<label
								htmlFor="hs-table-pagination-checkbox-all"
								className="sr-only"
							>
								Checkbox
							</label>
						</div>
					</th> */}
					<th
						scope="col"
						className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
					>
						Nombre(s)
					</th>
					<th
						scope="col"
						className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
					>
						Apellidos
					</th>
					<th
						scope="col"
						className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
					>
						Teléfono
					</th>
					<th
						scope="col"
						className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
					>
						Correo
					</th>
					<th scope="col"></th>
				</tr>
			</thead>
			<tbody className="divide-y divide-gray-200">
				{patients.map(patient => (
					<tr key={patient.id}>
						<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
							{patient.name}
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
							{patient.lastname}
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
							{patient.phoneNumber}
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
							{patient.email}
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex justify-center gap-4">
							<div className="flex gap-1">
								<PencilSquareIcon
									className="h-5 w-5 text-gray-500 cursor-pointer"
									onClick={handleOnClickEdit}
								/>
								<span className='hidden lg:inline-block'>Editar</span>
							</div>

							<div className="flex gap-1">
								<TrashIcon
									className="h-5 w-5 text-gray-500 cursor-pointer"
									onClick={handleOnClickDelete}
								/>
								<span className='hidden lg:inline-block'>Eliminar</span>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default PatientList;
