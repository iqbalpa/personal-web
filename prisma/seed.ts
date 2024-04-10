import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const postData: Prisma.PostCreateInput[] = [
	{
        title: "First post",
        content: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed turpis vitae purus mattis euismod in vitae justo. Integer venenatis purus id consequat pharetra. Quisque egestas, elit in consectetur ornare, arcu magna porta quam, nec bibendum justo mi et enim. Duis quam lectus, auctor quis leo at, condimentum congue orci. Aliquam volutpat, nunc sit amet cursus lobortis, velit nisi finibus velit, ac malesuada turpis arcu sed mi. Cras porttitor mi scelerisque, faucibus elit eget, consequat magna. Nullam fringilla mi eget justo tincidunt tempor.",
            "Vivamus molestie, velit at vulputate tempor, tortor felis vulputate ex, et molestie tellus dolor eu nisi. Cras sollicitudin aliquet ex, at porttitor ante suscipit tempor. Proin mattis euismod viverra. Morbi porttitor leo nisl, vel luctus neque mollis vel. In quis maximus nunc. Quisque pharetra nulla sed lectus tempus aliquet. Sed sed purus nunc. Ut sodales bibendum quam eu porta. Donec id ligula consectetur, molestie nisl in, aliquet neque. Praesent sit amet sem sed leo tempor tempus non et magna."
        ],
        references: ["Reference 1", "Reference 2"],
    },
    {
        title: "Second post",
        content: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed turpis vitae purus mattis euismod in vitae justo. Integer venenatis purus id consequat pharetra. Quisque egestas, elit in consectetur ornare, arcu magna porta quam, nec bibendum justo mi et enim. Duis quam lectus, auctor quis leo at, condimentum congue orci. Aliquam volutpat, nunc sit amet cursus lobortis, velit nisi finibus velit, ac malesuada turpis arcu sed mi. Cras porttitor mi scelerisque, faucibus elit eget, consequat magna. Nullam fringilla mi eget justo tincidunt tempor.",
            "Vivamus molestie, velit at vulputate tempor, tortor felis vulputate ex, et molestie tellus dolor eu nisi. Cras sollicitudin aliquet ex, at porttitor ante suscipit tempor. Proin mattis euismod viverra. Morbi porttitor leo nisl, vel luctus neque mollis vel. In quis maximus nunc. Quisque pharetra nulla sed lectus tempus aliquet. Sed sed purus nunc. Ut sodales bibendum quam eu porta. Donec id ligula consectetur, molestie nisl in, aliquet neque. Praesent sit amet sem sed leo tempor tempus non et magna."
        ],
        references: ["Reference 1", "Reference 2"],
    },
    {
        title: "Third post",
        content: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed turpis vitae purus mattis euismod in vitae justo. Integer venenatis purus id consequat pharetra. Quisque egestas, elit in consectetur ornare, arcu magna porta quam, nec bibendum justo mi et enim. Duis quam lectus, auctor quis leo at, condimentum congue orci. Aliquam volutpat, nunc sit amet cursus lobortis, velit nisi finibus velit, ac malesuada turpis arcu sed mi. Cras porttitor mi scelerisque, faucibus elit eget, consequat magna. Nullam fringilla mi eget justo tincidunt tempor.",
            "Vivamus molestie, velit at vulputate tempor, tortor felis vulputate ex, et molestie tellus dolor eu nisi. Cras sollicitudin aliquet ex, at porttitor ante suscipit tempor. Proin mattis euismod viverra. Morbi porttitor leo nisl, vel luctus neque mollis vel. In quis maximus nunc. Quisque pharetra nulla sed lectus tempus aliquet. Sed sed purus nunc. Ut sodales bibendum quam eu porta. Donec id ligula consectetur, molestie nisl in, aliquet neque. Praesent sit amet sem sed leo tempor tempus non et magna."
        ],
        references: ["Reference 1", "Reference 2"],
    }
];

async function main() {
	console.log(`Start seeding ...`);
	for (const p of postData) {
        const post = await prisma.post.create({
            data: p,
        });
		console.log(`Created post with id: ${post.id}`);
	}
	console.log(`Seeding finished.`);
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
