import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function POST(request: Request) {
	const { user, clinic, status, analyses } = await request.json();

	try {
		const newUser = await prisma.user.create({
			data: user
		});

		const prescription = await prisma.prescription.create({
			data: {
				userId: newUser.id,
				status,
				clinic
			}
		});

		const tests = await prisma.test.createMany({
			data: analyses.map((analysis: any) => ({
				analysisId: analysis.id,
				prescriptionId: prescription.id
			}))
		});

		return NextResponse.json({
            newUser,
            prescription,
            tests
        });
	} catch (error) {
		console.log(error);
		return new NextResponse('INTERNAL ERROR', { status: 500 });
	}
}
