import Head from "next/head"
import { FaShoppingBag } from "react-icons/fa";
import Link from "next/link";

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Building new project</title>
				<meta name="title" content="Type safe schema design with Prisma" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<div className="min-h-screen flex flex-col">
					<header className="h-16 w-full shadow-md">
						<div className="h-full container mx-auto">
							<div className="h-full px-4 flex justify-between items-center space-x-4">
								<Link href="/" legacyBehavior>
									<a className="flex items-center space-x-1">
										<FaShoppingBag className="shrink-0 w-8 h-8 text-slate-900" />
										<span className="text-xl font-semibold tracking-wide">
											Grocery<span className="text-slate-700">store</span>
										</span>
									</a>
								</Link>
								<div className="flex items-center space-x-4">
									<Link href="/create" legacyBehavior>
										<a className="hidden sm:block hover:bg-gray-200 transition px-3 py-1 rounded-md">
											Add new stuff
										</a>
									</Link>
								</div>
							</div>
						</div>
					</header>
				</div>
				<>
				{children}
				</>
			</div>
		</>
	);
};

export default Layout;