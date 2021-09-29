import React from "react";
import Link from 'next/link'
import Logo from "./logo";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "Our Mission", href: "/mission" },
	{ name: "Connect", href: "/connect" },
	{ name: "Gallery", href: "/gallery" },
	{ name: "Blog", href: "/blog" },
	{ name: "Contact Us", href: "/contact" },
];

const Nav = (props) => {
	return (
		<header className={props.hstyle}>
			<div className={props.style}>
				<a href="#" className="logo flex title-font font-medium items-center text-black mb-4 md:mb-0">
						Logo
				</a>
				{/* <Logo /> */}
				<nav className={props.nstyle}>
					{navigation.map((item) => (
						<Link key={item.name} href={item.href}>
							<a className={props.astyle}>
								{item.name}
							</a>
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
}

export default Nav;
