import { connectHits } from 'react-instantsearch-dom';
import CustomHighlight from './CustomHighLight';
import { Dispatch, FC, SetStateAction } from 'react';

interface Analysis {
	id: string;
	name: string;
	price: number;
}

interface HitsProps {
	setAnalysis: Dispatch<SetStateAction<Analysis[]>>;
	hits: any;
	analysis: Analysis[];
}

const Hits: FC<HitsProps> = ({ hits, setAnalysis, analysis }) => {
	const handleClick = (hit: any) => {
		if (analysis.map(e => e.id === hit.id).includes(true)) return 
		setAnalysis([
			...analysis,
			{
				id: hit.id,
				name: hit.name,
				price: hit.price
			}
		]);
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4 my-4 md:my-6">
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
