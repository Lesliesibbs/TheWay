import React from "react";
import Image from "next/image";
import { gql } from "@apollo/client";
import client from "../lib/apollo-client";


//components
import Main from "../src/components/main";
import Section from "../src/components/section";
import Banner from "../src/components/banner";
import Button from "../src/components/button";
import AudioPlayer from "../src/components/audio";

function Home({ podcasts }) {
	console.log(podcasts);
	return (
		<Main>
			<Banner />
			<Section>
				<div
					className="bg-cover object-cover w-full bg-no-repeat h-full"
					style={{
						backgroundImage: `url(/images/background.png)`,
					}}
				>
					<div className="container m-auto transform scale-90">
						<div className="lg:flex justify-between items-centers">
							<div className="mt-10">
								<Image
									src="https://source.unsplash.com/_6HzPU9Hyfg"
									alt="Welcome to the Church"
									layout="fixed"
									objectFit="cover"
									objectPosition="50% 50%"
									width={900}
									height={700}
									priority="true"
									quality={100}
									className=",t36s"
								/>
							</div>
							<div className="lg:w-6/12 lg:p-0 p-4 order-2 mt-48 ml-20">
								<h3 className="font-extralight text-left font-reenie text-4xl text-red-400 m-4 ">
									Sermon Video
								</h3>
								<h1 className="text-left text-black font-extrabold font-yeseva text-4xl xs:text-4xl md:text-6xl m-2">
									Welcome to our Website
								</h1>
								<p className="text-left text-gray-600 font-extralight leading-relaxed text-xl tracking-wide  mt-8 m-2 mt-12">
									We want to welcome you at the church where
									you find people who worship Jesus and are
									passionate about spreading His Word.
									Salvation is a gift that you can find in
									Jesus by following the mission that is
									established in our church: it’s simple and
									wonderful, and brings His Kingdom all over
									the world.
								</p>
							</div>
						</div>
						<div className="w-full h-96 flex flex-col items-center justify-center transform scale-75 xl:scale-100 mt-18">
							<h3 className="font-extralight text-left font-reenie text-4xl text-red-400 mt-32 xl:mt-24  items-center">
								Sermon Podcasts
							</h3>
							<h1 className="text-left text-black font-light font-yeseva text-4xl xs:text-4xl md:text-6xl m-2">
								Listen to the
							</h1>
							<h1 className="text-left text-black font-light font-yeseva text-4xl xs:text-4xl md:text-6xl tracking-wide">
								Latest Podcasts
							</h1>
						</div>
						<div className="transform scale-75 2xl:scale-95">
							{podcasts.map((pod) => (
								<div
									key={pod.id}
									className="flex items-center justify-center mt-10"
								>
									{console.log(pod.Audio[0].url)}
									{console.log(process.env.GRAPHQL_URL)}
									<AudioPlayer
										streamUrl={`http://localhost:1337${pod.Audio[0].url}`}
										trackTitle={pod.Title}
										author={
											pod.users_permissions_user.username
										}
										preloadType="auto"
										dclass="flex flex-col"
									/>
								</div>
							))}
							<div className="flex items-center justify-center mt-10">
								<Button
									href="/"
									className="bg-orange hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full w-52 h-16 mt-5"
									type="button"
								>
									More Podcasts
								</Button>
							</div>
						</div>
					</div>
					<div className="bg-red-400 w-full h-56 flex items-center justify-center mt-28">
						<h1 className="text-center text-white font-light font-yeseva text-3xl m-2">
							&quot;I am the way, and the truth, and the life. No
							one comes to the Father except through me.&quot;
						</h1>
					</div>
				</div>
			</Section>
			<Section className="mt-0">
				<div
					className="object-cover w-full h-1700px"
					style={{
						backgroundImage: `url(/images/background.png)`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
					}}
				>
					<div className="container m-auto px-6 ">
						<div className="lg:flex justify-between items-center ">
							<div className="lg:w-6/12 lg:p-0 p-4 order-2 mt-48 ml-14">
								<h3 className="font-extralight text-left font-reenie text-4xl text-red-400 m-3 ">
									Beliefs
								</h3>
								<h1 className="text-left text-black font-light font-yeseva tracking-wide text-4xl xs:text-4xl md:text-6xl m-2">
									Our Mission
								</h1>
								<p className="text-left text-gray-600 font-extralight leading-relaxed text-xl tracking-wide  mt-8 m-2 mt-12">
									We want to welcome you at the church where
									you find people who worship Jesus and are
									passionate about spreading His Word.
									Salvation is a gift that you can find in
									Jesus by following the mission that is
									established in our church: it’s simple and
									wonderful, and brings His Kingdom all over
									the world.
								</p>
								<Button
									href="/"
									className="bg-red-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full w-52 h-16 mt-12"
								>
									Learn More
								</Button>
							</div>
							<div className="lg:w-5/12 mt-48 ml-28">
								<Image
									src="https://source.unsplash.com/GTnFf_44e7o/"
									alt="Welcome to the Church"
									layout="responsive"
									objectFit="none"
									objectPosition="top"
									width={600}
									height={653}
									priority="true"
									quality={100}
								/>
							</div>
						</div>
					</div>
					<div className="container m-auto px-6 mb-20">
						<div className="lg:flex justify-between items-center ">
							<div className="lg:w-6/12 lg:p-0 p-4 mt-12 ml-28">
								<h3 className="font-extralight text-left font-reenie text-4xl text-red-400 m-3 ">
									Join Us
								</h3>
								<h1 className="text-left text-black font-light font-yeseva tracking-wide text-4xl xs:text-4xl md:text-6xl m-2">
									Community
								</h1>
								<p className="text-left text-gray-600 font-extralight leading-relaxed text-xl tracking-wide  mt-8 m-2 mt-12">
									We want to welcome you at the church where
									you find people who worship Jesus and are
									passionate about spreading His Word.
									Salvation is a gift that you can find in
									Jesus by following the mission that is
									established in our church: it’s simple and
									wonderful, and brings His Kingdom all over
									the world.
								</p>
								<Button
									href="/"
									className="bg-red-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full w-52 h-16 mt-12"
								>
									Learn More
								</Button>
							</div>
							<div className="lg:w-5/12 mt-28 mb-28 ml-28 order-2">
								<Image
									src="https://source.unsplash.com/jG1z5o7NCq4"
									alt="Welcome to the Church"
									layout="responsive"
									objectFit="none"
									objectPosition="top"
									width={600}
									height={653}
									priority="true"
									quality={100}
								/>
							</div>
						</div>
					</div>
				</div>
			</Section>
		</Main>
	);
}

export default Home;

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query LatestPodcasts {
				podcasts(limit: 2, sort: "published_at:desc") {
					id
					Title
					users_permissions_user {
						username
					}
					Audio {
						url
					}
					published_at
				}
			}
		`,
	});

	return {
		props: {
			podcasts: data.podcasts,
		},
	};
}
