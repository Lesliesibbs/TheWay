import React from 'react'
import Image from "next/image";
import { gql } from "@apollo/client";
import client from "../lib/apollo-client";
// assets
import Main from "../src/components/main";
import SmallBanner from "../src/components/smallBanner";
import Section from "../src/components/section";
import AudioPlayer from "../src/components/audio";
import Button from "../src/components/button";
import welcomePic from "../public/images/welcome.jpeg";
import Hands from '../src/svg/hands';
import Church from '../src/svg/church';
import Users from '../src/svg/users';

const Connect = ({ podcasts }) => {
	console.log(podcasts);
    return (
		<Main>
			<SmallBanner title="Connect" />
			<Section className="mt-0">
				<div
					className="object-cover w-full bg-cover bg-no-repeat h-2712px"
					style={{
						backgroundImage: `url(/images/background.png)`,
					}}
				>
					<div className="container m-auto mb-36">
						<div className="lg:flex justify-between items-center ">
							<div className="lg:w-5/12 mt-32 ml-36">
								<Image
									src="https://source.unsplash.com/YtYNavix3pw"
									alt="Welcome to the Church"
									// layout="responsive"
									width={640}
									height={697}
									// layout="fixed"
									objectFit="none"
									objectPosition="top"
									priority="true"
									quality={100}
								/>
							</div>
							<div className="lg:w-6/12 lg:p-0 p-4 order-2 mt-12 ml-20">
								<h3 className="font-extralight text-left font-reenie text-4xl text-red-400 m-4 ">
									Get Connected
								</h3>
								<h1 className="text-left text-black font-extrabold font-yeseva text-4xl xs:text-4xl md:text-6xl m-2">
									Become a Family Member Through The Way
								</h1>
								<p className="text-left text-gray-500 font-extralight leading-relaxed text-md  tracking-wide mt-10">
									No matter what stage, age, or season you
									find yourself in, Nazareth Church is for
									you! We invite you to come just as you are
									and be part of this community of people who
									are striving together to discover God’s
									purpose and plan for their lives!s
								</p>
								<p className="text-left text-gray-500 font-extralight leading-relaxed text-md  tracking-wide mt-10">
									No matter what stage, age, or season you
									find yourself in, Nazareth Church is for
									you! We invite you to come just as you are
									and be part of this community of people who
									are striving together to discover God’s
									purpose and plan for their lives!s
								</p>
							</div>
						</div>
						<div className="w-full h-96 mx-28 flex flex-col items-center transform scale-90">
							<h3 className="font-extralight text-left font-reenie text-4xl text-red-400 mt-32  items-center">
								Get Involved
							</h3>
							<h1 className="text-left text-black font-light font-yeseva text-4xl xs:text-4xl md:text-6xl m-2">
								How to Connect
							</h1>
							<div className="flex flex-wrap m-10 mt-5">
								<div className="xl:w-1/3 md:w-1/4 p-4">
									<div className="p-2 sm:p-10 text-center cursor-pointer text-white">
										<div className="group py-10 max-w-sm rounded ring-0 shadow-xl hover:shadow-2xl overflow-hidden bg-white hover:bg-yellow-400 transition duration-500">
											<div className="space-y-10 ">
												<Church className="svg-inline--fa fa-church fa-w-20 fill-current text-yellow-400 group-hover:text-white w-20 h-20 " />
												<div className="px-6 ">
													<div className="space-y-5">
														<div className="text-black group-hover:text-white font-bold text-xl mb-2">
															Come & Join Us
														</div>
														<p className="text-gray-500 font-extralight leading-relaxed text-md  tracking-wide mt-10">
															Come & Join Us
															Suspendisse
															ullamcorper
															tincidunt ipsum, at
															eleifend sem
															facilisis eget.
															Suspendisse ut
															congue risus, ac
															molestie enim.
															Mauris interdum
															lacus tellus mollis.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="xl:w-1/3 md:w-1/4 p-4">
									<div className="p-2 sm:p-10 text-center cursor-pointer text-white">
										<div className="group py-10 max-w-sm rounded overflow-hidden ring-0 shadow-xl hover:shadow-2xl bg-white hover:bg-yellow-400 transition duration-500">
											<div className="space-y-10 ">
												<Hands className="svg-inline--fa fa-hand-holding-heart fa-w-18 fill-current text-red-500 group-hover:text-white w-20 h-20 " />
												<div className="px-6 ">
													<div className="space-y-5">
														<div className="text-black group-hover:text-white font-bold text-xl mb-2">
															Share the Love
														</div>
														<p className="text-gray-500 font-extralight leading-relaxed text-md  tracking-wide mt-10">
															Come & Join Us
															Suspendisse
															ullamcorper
															tincidunt ipsum, at
															eleifend sem
															facilisis eget.
															Suspendisse ut
															congue risus, ac
															molestie enim.
															Mauris interdum
															lacus tellus mollis.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="xl:w-1/3 md:w-1/4 p-4">
									<div className="p-2 sm:p-10 text-center cursor-pointer text-white">
										<div className="group py-10 max-w-sm rounded overflow-hidden ring-0 shadow-xl hover:shadow-2xl bg-white hover:bg-yellow-400 transition duration-500">
											<div className="space-y-10 ">
												<Users className="svg-inline--fa fa-users fa-w-20 fill-current text-blue-400 group-hover:text-white w-20 h-20 " />
												<div className="px-6 ">
													<div className="space-y-5">
														<div className="text-black group-hover:text-white font-bold text-xl mb-2">
															Engage
														</div>
														<p className="text-gray-500 font-extralight leading-relaxed text-md  tracking-wide mt-10">
															Come & Join Us
															Suspendisse
															ullamcorper
															tincidunt ipsum, at
															eleifend sem
															facilisis eget.
															Suspendisse ut
															congue risus, ac
															molestie enim.
															Mauris interdum
															lacus tellus mollis.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-red-400 w-full h-56  flex items-center justify-center mt-96">
						<h1 className="text-center text-white font-light font-yeseva text-3xl m-2">
							&quot;I am the way, and the truth, and the life. No
							one comes to the Father except through me.&quot;
						</h1>
					</div>
					<div className="">
						<div className="w-full h-96 flex flex-col items-center justify-center transform scale-75 xl:scale-100">
							<h3 className="font-extralight text-left font-reenie text-4xl text-red-400 mt-32 xl:mt-24  items-center">
								Podcasts
							</h3>
							<h1 className="text-left text-black font-light font-yeseva text-4xl xs:text-4xl md:text-6xl tracking-wide">
								Latest Podcasts
							</h1>
							<p className="text-center text-gray-500 font-extralight leading-relaxed text-md mt-10 mx-96">
								Enjoy more of our amazing podcasts & scroll
								through to previous episodes..
							</p>
						</div>
						<div className="transform scale-75 2xl:scale-100 overflow-auto h-96 mx-96">
							{podcasts.map((pod) => (
								<div key={pod.id} className="flex items-center justify-center mt-14"
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
						</div>
					</div>
				</div>
			</Section>
		</Main>
	);
}

export default Connect

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query LatestPodcasts {
				podcasts(sort: "published_at:desc") {
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
