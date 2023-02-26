import Card from "@/components/Card";

const Grid = ({ grocerys = [] }) => {
	const isEmpty = grocerys.length === 0;

	const toggleFavorite = async id => {
		// TODO: Add/remove home from the authenticated user's favorites
	};

	return isEmpty ? (
		<p className="text-amber-700 bg-amber-100 px-4 rounded-md py-2 max-w-max inline-flex items-center space-x-1">
			<span>Unfortunately, there is nothing to display yet.</span>
		</p>
	) : (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{grocerys.map(grocery => (
				<Card key={grocery.id} {...grocery} onClickFavorite={toggleFavorite} />
			))}
		</div>
	);
};


export default Grid;
