'use client'

import { Configure, InstantSearch } from 'react-instantsearch-dom';
import CustomSearchBox from './components/search/CustomSearchBox';
import CustomHits from './components/search/CustomHits';
import algoliasearch from 'algoliasearch';

const searchClient = algoliasearch(
	process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
	process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || ''
);

export const metadata = {
	title: 'SILAC - Catálogo'
};

export default function Catalogo() {

	return (
		<div className="bg-white p-6 shadow rounded">
			<h1 className="text-xl font-bold text-gray-900 md:text-2xl">
				Catalogo
			</h1>
			<div className="mt-4 md:mt-6">
				<InstantSearch
					searchClient={searchClient}
					indexName="dev_silac"
				>
					<Configure
						hitsPerPage={12}
						attributesToSnippet={['summary:20']}
						snippetEllipsisText="…"
					/>
					<CustomSearchBox />
					<CustomHits />
				</InstantSearch>
			</div>
		</div>
	);
}
