import { SetStateAction, Dispatch } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';

const SearchBox = ({
	refine,
	currentRefinement
}: {
	refine: Dispatch<SetStateAction<string>>;
	currentRefinement: string | number | readonly string[] | undefined;
}) => {
	return (
		<form noValidate role="search" onSubmit={e => e.preventDefault()}>
			<input
				type="search"
				value={currentRefinement}
				placeholder="Busca por nombre"
				onChange={e => refine(e.currentTarget.value)}
				className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-1 focus:ring-gray-600"
			/>
		</form>
	);
};

const CustomSearchBox = connectSearchBox(SearchBox);

export default CustomSearchBox;
