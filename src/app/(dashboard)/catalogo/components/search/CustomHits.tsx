import { connectHits } from 'react-instantsearch-dom';
import { FC } from 'react';
import CustomHighLight from './CustomHighLight';

interface HitsProps {
	hits: any;
}

const Hits: FC<HitsProps> = ({ hits }) => {

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 my-4 md:my-6">
			{hits.map((hit: any) => (
				<article
					key={hit.objectID}
					className="bg-gray-100 p-4 shadow rounded cursor-pointer hover:ring-2"
				>
					<h4 className="font-semibold">
						<CustomHighLight attribute="name" hit={hit} />
					</h4>
					<p>${hit.price}</p>
				</article>
			))}
		</div>
	);
};

export default connectHits(Hits);
