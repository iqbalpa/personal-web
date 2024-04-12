import prisma from "./prisma";

export async function getPost(id: number) {
	const post = await prisma.post.findUnique({
		where: {
			id,
		},
	});
	return post;
}

export async function getPosts() {
	const posts = await prisma.post.findMany();
	return posts;
}
