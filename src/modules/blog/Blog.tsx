import React from "react";
import Link from "next/link";

const blogItemCards: BlogItemCardProps[] = [
	{
		id: "1",
		title: "Blog Item 1",
		content: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed turpis vitae purus mattis euismod in vitae justo. Integer venenatis purus id consequat pharetra. Quisque egestas, elit in consectetur ornare, arcu magna porta quam, nec bibendum justo mi et enim. Duis quam lectus, auctor quis leo at, condimentum congue orci. Aliquam volutpat, nunc sit amet cursus lobortis, velit nisi finibus velit, ac malesuada turpis arcu sed mi. Cras porttitor mi scelerisque, faucibus elit eget, consequat magna. Nullam fringilla mi eget justo tincidunt tempor.",
			"Vivamus molestie, velit at vulputate tempor, tortor felis vulputate ex, et molestie tellus dolor eu nisi. Cras sollicitudin aliquet ex, at porttitor ante suscipit tempor. Proin mattis euismod viverra. Morbi porttitor leo nisl, vel luctus neque mollis vel. In quis maximus nunc. Quisque pharetra nulla sed lectus tempus aliquet. Sed sed purus nunc. Ut sodales bibendum quam eu porta. Donec id ligula consectetur, molestie nisl in, aliquet neque. Praesent sit amet sem sed leo tempor tempus non et magna.",
		],
		references: ["Reference 1", "Reference 2"],
	},
	{
		id: "2",
		title: "Blog Item 2",
		content: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed turpis vitae purus mattis euismod in vitae justo. Integer venenatis purus id consequat pharetra. Quisque egestas, elit in consectetur ornare, arcu magna porta quam, nec bibendum justo mi et enim. Duis quam lectus, auctor quis leo at, condimentum congue orci. Aliquam volutpat, nunc sit amet cursus lobortis, velit nisi finibus velit, ac malesuada turpis arcu sed mi. Cras porttitor mi scelerisque, faucibus elit eget, consequat magna. Nullam fringilla mi eget justo tincidunt tempor.",
			"Vivamus molestie, velit at vulputate tempor, tortor felis vulputate ex, et molestie tellus dolor eu nisi. Cras sollicitudin aliquet ex, at porttitor ante suscipit tempor. Proin mattis euismod viverra. Morbi porttitor leo nisl, vel luctus neque mollis vel. In quis maximus nunc. Quisque pharetra nulla sed lectus tempus aliquet. Sed sed purus nunc. Ut sodales bibendum quam eu porta. Donec id ligula consectetur, molestie nisl in, aliquet neque. Praesent sit amet sem sed leo tempor tempus non et magna.",
		],
		references: ["Reference 1", "Reference 2"],
	},
];

const BlogModule: React.FC = () => {
	return (
		<div className="flex flex-col justify-center items-center px-6 pb-10 lg:px-20 lg:py-10">
			<h1 className="text-2xl font-bold">Blog</h1>
			<div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 mt-4">
				{blogItemCards.map((item, index) => (
					<BlogItemCard key={index} {...item} />
				))}
			</div>
		</div>
	);
};

// refactor to its own component

type BlogItemCardProps = {
	id: string;
	title: string;
	content: string[];
	references: string[];
};

const BlogItemCard: React.FC<BlogItemCardProps> = ({ id, title, content, references }) => {
	return (
		<div className="bg-white p-4 shadow-lg rounded-lg">
			<h2 className="text-lg font-semibold">{title}</h2>
			<p>{content[0]}</p>
			<Link href={`/blog/${id}`} as={`/blog/${title}`}>
				<p className="text-blue-500 hover:text-blue-300 duration-100">Read more</p>
			</Link>
		</div>
	);
};

export default BlogModule;
