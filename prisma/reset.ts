import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	console.log(`Deleting all posts ...`);
	await prisma.post.deleteMany();
	console.log(`All posts deleted.`);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
