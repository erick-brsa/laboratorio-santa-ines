import { getCatalogue } from '@/database/dbAnalyses';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	try {
		const catalogue = await getCatalogue()
		return NextResponse.json(catalogue)
	} catch (error) {
		console.log(error);
		return null;
	}
}
