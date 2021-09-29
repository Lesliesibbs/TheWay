import React from "react";
import Image from "next/image";
import { SRLWrapper } from "simple-react-lightbox";

const elements = [
	{
		src: "https://unsplash.com/s/photos/church",
		caption: "Commodo commodo dolore",
		width: "auto",
		height: "auto",
	},
	{
		src: "https://unsplash.com/photos/AeABkasP-24",
		caption: "Commodo commodo dolore",
		width: "auto",
		height: "auto",
	},
	{
		src: "https://unsplash.com/photos/qDY9ahp0Mto",
		caption: "Commodo commodo dolore",
		width: "auto",
		height: "auto",
	},
	{
		src: "https://unsplash.com/photos/09AhDCedXF8",
		caption: "Commodo commodo dolore",
		width: "auto",
		height: "auto",
	},
];
const Gallery = (props) => {
	return <SRLWrapper elements={elements} />;
};

export default Gallery;
