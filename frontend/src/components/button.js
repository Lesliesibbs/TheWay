import React from "react";
import Link from "next/dist/client/link";

const Button = (props) => {
    return (
		<Link href={props.href}>
			<button className={props.className}>{props.children}</button>
		</Link>
	);
};

export default Button;
