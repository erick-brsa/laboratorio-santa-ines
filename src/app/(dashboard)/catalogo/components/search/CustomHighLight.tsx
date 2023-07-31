import { connectHighlight } from 'react-instantsearch-dom';

const Highlight = ({
	highlight,
	attribute,
	hit
}: {
	highlight: any;
	attribute: any;
	hit: any;
}) => {
	const parsedHit = highlight({
		highlightProperty: '_highlightResult',
		attribute,
		hit
	});

	return (
		<span>
			{parsedHit.map((part: any, index: number) =>
				part.isHighlighted ? (
					<mark key={index}>{part.value}</mark>
				) : (
					<span key={index}>{part.value}</span>
				)
			)}
		</span>
	);
};

export default connectHighlight(Highlight);
