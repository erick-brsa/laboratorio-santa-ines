import { Configure, InstantSearch } from 'react-instantsearch-dom';
import { TrashIcon } from '@heroicons/react/24/outline';
import { Dispatch, FC, SetStateAction } from 'react';
import CustomSearchBox from './search/CustomSearchBox';
import CustomHits from './search/CustomHits';
import algoliasearch from 'algoliasearch';

interface Analysis {
	id: string;
	name: string;
	price: number;
}

interface SecondStepProps {
	setStep: (step: number) => void;
	analysis: Analysis[];
	setAnalysis: Dispatch<SetStateAction<Analysis[]>>;
}

const searchClient = algoliasearch(
	process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
	process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || ''
);

const SecondStep: FC<SecondStepProps> = ({
	setStep,
	analysis,
	setAnalysis
}) => {
	return (
		<div className="mt-4 md:mt-6">
			<h2 className="my-4 font-semibold">Seleccionar estudio(s) a realizar</h2>
			<InstantSearch searchClient={searchClient} indexName="dev_silac">
				<Configure
					hitsPerPage={12}
					attributesToSnippet={['summary:20']}
					snippetEllipsisText="…"
				/>
				<CustomSearchBox />
				<CustomHits analysis={analysis} setAnalysis={setAnalysis} />
			</InstantSearch>
			<div className="my-10">
				{analysis.length > 0 && (
					<div className="">
						<h3 className="font-semibold">
							Análisis seleccionados
						</h3>
						<div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4 my-4 md:my-6">
							{analysis.map(a => (
								<article
									key={a.id}
									className="flex justify-between items-center bg-gray-100 p-4 shadow rounded cursor-pointer hover:ring-2"
								>
									<div>
										<h4 className="font-semibold">
											{a.name}
										</h4>
										<p>${a.price}</p>
									</div>
									<div
										className="h-fit bg-gray-200 hover:bg-gray-300 rounded-full p-2"
										onClick={() => setAnalysis(analysis.filter(e => e.id !== a.id))}
									>
										<TrashIcon className="h-6 w-6 text-gray-500" />
									</div>
								</article>
							))}
						</div>
					</div>
				)}
			</div>
			<div className="flex gap-4">
				<button
					onClick={() => setStep(0)}
					type="button"
					className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Anterior
				</button>
				<button
					onClick={() => setStep(2)}
					type="button"
					className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Siguiente
				</button>
			</div>
		</div>
	);
};

export default SecondStep;
