import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	console.log(`fetching from database ...`);
	const posts = await prisma.post.findMany();
	console.log(posts);
	console.log(`Finished fetching from database.`);
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
