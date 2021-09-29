import React from "react";

import Section from "./section";

const SmallBanner = (props) => {
	return (
		<Section>
			<div
				className="object-cover w-full h-431.63px"
				style={{
					backgroundImage: `url("https://source.unsplash.com/1600x900/?church,")`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			>
				<div className="h-431.63px bg-opacity-40 flex items-center justify-center text-white bg-gray-900 bg-cover">
					<div className="mx-2 text-center mt-10">
						<h3 className="text-gray-100 font-thin font-yeseva text-6xl">
							{props.title}
						</h3>
						<p className="font-thin text-center font-reenie text-4xl text-yellow-400 mt-2">
							Home / {props.title}
						</p>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default SmallBanner;
