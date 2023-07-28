import { NextResponse } from 'next/server';
import { getCatalogue } from '@/database/dbAnalysis';

export async function GET(request: Request) {
	try {
		const catalogue = await getCatalogue()
		return NextResponse.json(catalogue)
	} catch (error) {
		console.log(error);
		return null;
	}
}
