import React, { Fragment } from "react";
import Head from "next/head";
import Nav from "./nav";
import Banner from "./banner";

const Main = (props) => {
	return (
		<Fragment>
			<Head>
				<title>The Way, Church without Walls</title>
			</Head>
			<Nav
				hstyle="fixed inset-x-0 top-0 flex flex-row justify-between z-100 text-white bg-transparent"
				style="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-opacity-0 mt-3"
				nstyle="md:ml-auto md:mr-0 flex flex-wrap items-center text-base justify-center hidden md:block mr-0 bg-opacity-0 "
				astyle="mr-12 active:text-yellow-500 hover:text-yellow-300 font-semibold bg-opacity-0 text-base"
			/>
			<main>{props.children}</main>
			<footer>
				{props.footer}
			</footer>
		</Fragment>
	);
}

export default Main;
