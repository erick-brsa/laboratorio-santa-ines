import prisma from '@/lib/db';

export const getCatalogue = async () => {
	const catalogue = prisma.analysis.findMany();
	return catalogue;
};
