import Link from "next/link";
import Image from "next/legacy/image";

const Card = ({
	id = "",
	image = "",
	title = "",
	description = "",
	price = 0,
	bags = 0,
}) => {
	return (
		<Link href={`/grocery/${id}`} legacyBehavior>
			<a className="block w-full">
				<div className="relative">
					<div className="bg-black-200 rounded-lg shadow overflow-hidden aspect-w-16 aspect-h-9">
						{/* {image ? (
							<Image
								src={image}
								alt={title}
								layout="fill"
                                objectFit="cover"
								className="hover:opacity-80 transition"
							/>
						) : null} */}
					</div>
					<button
						type="button"
						onClick={(e) => {
							e.preventDefault();
							if (typeof onClickFavorite === "function") {
								onClickFavorite(id);
							}
						}}
						className="absolute top-2 right-2"
					></button>
				</div>
				<div className="mt-2 w-full text-gray-700 font-semibold leading-tight">
					{title ?? ""}
				</div>
				<ol className="mt-1 inline-flex items-center space-x-1 text-gray-500">
					<li>
						<span>{price ?? 0} price</span>
						<span aria-hidden="true"> · </span>
					</li>
					<li>
						<span>{bags ?? 0} bags</span>
						<span aria-hidden="true"> · </span>
					</li>
				</ol>
				<p className="mt-2">
					{new Intl.NumberFormat("en-US", {
						style: "currency",
						currency: "USD",
					}).format(price ?? 0)}{" "}
					<span className="text-gray-500">/item</span>
				</p>
			</a>
		</Link>
	);
};

export default Card;