'use client';

import { useSession } from 'next-auth/react';

export default function Profile() {

  const { data, status } = useSession();

	return (
		<div className="bg-white p-6 shadow rounded">
			<h1 className="text-xl font-bold text-gray-900 md:text-2xl">
				Perfil
			</h1>
      {data?.user && (
        <div className="mt-4 md:mt-6">
          <p>{data.user.name}</p>
        </div>
      )}
		</div>
	);
}
