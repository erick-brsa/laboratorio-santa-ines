import { connectHits } from 'react-instantsearch-dom';

import CustomHighlight from './CustomHighLight';
import { useNewUser } from '@/hooks';

interface HitsProps {
	hits: any;
}

const Hits: React.FC<HitsProps> = ({ hits }) => {
	const { analyses, setAnalyses } = useNewUser();

	const handleClick = (hit: any) => {
		if (analyses.map(e => e.id === hit.id).includes(true)) return;
		setAnalyses([
			...analyses,
			{
				id: hit.id,
				name: hit.name,
				price: hit.price
			}
		]);
	};

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 my-4 md:my-6">
			{hits.map((hit: any) => (
				<article
					onClick={() => handleClick(hit)}
					key={hit.objectID}
					className="bg-gray-100 p-4 shadow rounded cursor-pointer hover:ring-2"
				>
					<h4 className="font-semibold">
						<CustomHighlight attribute="name" hit={hit} />
					</h4>
					<p>${hit.price}</p>
				</article>
			))}
		</div>
	);
};

export default connectHits(Hits);
