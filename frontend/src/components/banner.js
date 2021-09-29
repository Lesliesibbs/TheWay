import React from "react";

import Section from "./section";

const Banner = (props) => {
	return (
		<Section>
			<div
				className="object-cover w-full h-screen"
				style={{
					backgroundImage: `url("https://source.unsplash.com/1600x900/?church,")`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			>
				<div className="h-screen bg-opacity-40 bg-black flex items-center justify-center text-white">
					<div className="mx-2 text-center">
						<h3 className="font-extrabold text-center font-reenie text-5xl text-yellow-400">
							The Way, Church Without Walls
						</h3>
						<h1 className="text-gray-100 font-thin font-yeseva text-9xl">
							Welcome traveller,
						</h1>
						<h1 className="text-gray-100 font-thin font-yeseva text-8xl  ">
							this is The Way.
						</h1>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Banner;
