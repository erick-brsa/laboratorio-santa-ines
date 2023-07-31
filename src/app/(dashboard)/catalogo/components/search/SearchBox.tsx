import algoliasearch from 'algoliasearch/lite';
import { Configure, InstantSearch } from 'react-instantsearch-dom';
import CustomSearchBox from './CustomSearchBox';
import CustomHits from './CustomHits';

const searchClient = algoliasearch(
	process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
	process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || ''
);

export default function SearchBoxAlGolia() {
	return (
		<InstantSearch searchClient={searchClient} indexName="dev_silac">
			<Configure
				hitsPerPage={14}
				attributesToSnippet={['summary:20']}
				snippetEllipsisText="…"
			/>
			<CustomSearchBox />
			<CustomHits />
		</InstantSearch>
	);
}
