import React from "react";
import Link from "next/link";

type NavItem = {
	id: number;
	path: string;
	label: string;
};

const navItems: NavItem[] = [
	{ id: 1, path: "/", label: "About" },
	{ id: 2, path: "/projects", label: "Projects" },
	{ id: 3, path: "/blog", label: "Blog" },
	{ id: 4, path: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => {
	return (
		<div className="flex flex-row justify-between">
			<h1>IQBAL</h1>
			<div className="flex flex-row">
				{navItems.map((item) => (
					<Link href={item.path} key={item.id}>
						<p className="mr-2">{item.label}</p>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Navbar;
