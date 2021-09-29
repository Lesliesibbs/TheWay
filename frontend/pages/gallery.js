/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from "next/image";
import { gql } from "@apollo/client";
import client from "../lib/apollo-client";
//assets
import Main from "../src/components/main";
import SmallBanner from "../src/components/smallBanner";
import Section from "../src/components/section";

import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const elements = [
	{
		src: "https://source.unsplash.com/AeABkasP-24/500x500",
		main: "https://source.unsplash.com/AeABkasP-24",
		alt: "Country Side Church",
	},
	{
		src: "https://source.unsplash.com/qDY9ahp0Mto/500x500",
		main: "https://source.unsplash.com/qDY9ahp0Mto",
		alt: "Young Worshiper",
	},
	{
		src: "https://source.unsplash.com/09AhDCedXF8/500x500",
		main: "https://source.unsplash.com/09AhDCedXF8",
		alt: "Cross",
	},
	{
		src: "https://source.unsplash.com/RAZQiZOX3mU/500x650",
		main: "https://source.unsplash.com/RAZQiZOX3mU",
		alt: "Concert",
	},
	{
		src: "https://source.unsplash.com/535Npq1wFG8/500x650",
		main: "https://source.unsplash.com/535Npq1wFG8",
		alt: "Bible",
	},
];

const options = {
	buttons: {
		showDownloadButton: false,
		showFullscreenButton: false,
		showAutoplayButton: false,
	},
	thumbnails: {
		showThumbnails: false,
	},
	progressBar: {
		showProgressBar: true,
	},
};

const Gallery = ({ gallery }) => {
	console.log(gallery);
	console.log(process.env.GRAPHQL_URL);
    return (
		<Main>
			<SmallBanner title="Gallery" />
			<Section className="mt-0">
				<SimpleReactLightbox>
					<div className="mt-20 mx-40">
						<SRLWrapper options={options}>
							<div className="grid grid-cols-3 gap-5 ">
								{gallery[0].image.map((img) => (
									<a
										href={`http://localhost:1337${img.url}`}
										key={img.id}
										className="mt-5 h24"
									>
										{console.log(
											`http://localhost:1337${img.url}`
										)}
										<img
											src={`http://localhost:1337${img.url}`}
											alt={img.alternativeText}
											className="h-96 w-full object-cover"
										/>
									</a>
								))}
							</div>
						</SRLWrapper>
					</div>
				</SimpleReactLightbox>
				<div className="flex items-center justify-center mt-10">
					<div className="bg-orange rounded-full h-20 w-20 flex items-center justify-center ">
						<h3 className="text-white font-light tracking-wide text-normal text-center">
							1
						</h3>
					</div>
					<div className="bg-white rounded-full h-20 w-20 flex items-center justify-center ">
						<h3 className="text-black font-light tracking-wide text-normal text-center">
							2
						</h3>
					</div>
				</div>
			</Section>
		</Main>
	);
}

export default Gallery

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query LatestPodcasts {
				galleries {
					id
					name
					image {
						id
						url
						alternativeText
					}
				}
			}
		`,
	});

	return {
		props: {
			gallery: data.galleries,
		},
	};
}

