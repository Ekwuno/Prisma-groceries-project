import { Inter } from '@next/font/google'
import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
import Grid from '../components/Grid'
import Layout from "@/components/Layout"

const prisma = new PrismaClient() 

export async function getStaticProps() {
	// get all groceries 
	const grocery = await prisma.grocery.findMany()
	return {
		props:{
			grocery: JSON.parse(JSON.stringify(grocery))
		}
	}
}
export default function Home({grocery= []}) {
return (
		<Layout>
			<h1 className="text-xl font-medium text-gray-800">
				Top-rated places to stay
			</h1>
			<p className="text-gray-500">
				Explore some of the best places in the world
			</p>
			<div className="mt-8">
				<Grid grocerys={grocery} />
			</div>
		</Layout>
	);
}
