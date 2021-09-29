import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Main from "../src/components/main";
import SmallBanner from "../src/components/smallBanner";
import Section from "../src/components/section";
import Button from "../src/components/button";

//queries
import { useQuery, gql } from "@apollo/client";;

// assets
import welcomePic from "../public/images/welcome.jpeg";

const GET_TAGS = gql`
	query GetTags {
		tags {
			id
			Name
		}
	}
`;

const Blog = () => {

	 const { data, loading, error } = useQuery(GET_TAGS);
	 console.log(error);
	 console.log(loading);
	 console.log(data);

    return (
		<Main>
			<SmallBanner title="Blog" />
			<Section className="mt-0">
				<div className="object-cover w-full bg-cover bg-no-repeat h-2712px">
					<div className="container m-auto px-6 ">
						<div className="lg:flex justify-between items-center">
							<div className="lg:w-11/12 lg:p-0 p-4 mt-24 ml-14">
								<div className=" bg-white shadow-lg hover:shadow-xl transition duration-200 w-840px">
									<Image
										src="https://source.unsplash.com/qDY9ahp0Mto"
										alt="Welcome to the Church"
										layout="responsive"
										height={300}
										width={500}
									/>
									<div className="py-4 px-8  h-96 bg-orange">
										<div className="bg-white rounded-full h-24 w-24 flex items-center justify-center absolute -mt-16 float-left text-center">
											<h3 className="text-orange font-light font-yeseva tracking-wide text-xl text-center">
												19 Sept
											</h3>
										</div>
										<h3 className="text-left text-white font-light font-yeseva tracking-wide text-4xl ml-10 mt-20 mb-5">
											Why we think praying is good for any
											person out there.
										</h3>

										<p className="hover:cursor-pointer my-8 ml-10 text-left text-white font-extralight leading-relaxed text-md  tracking-wide">
											Lorem ipsum dolor, sit amet
											consectetur adipisicing elit.
											Tempora neque eum autem repellat
											iure perferendis, possimus
											blanditiis temporibus doloribus
											corrupti.Tempora neque eum autem
											repellat iure perferendis, possimus
											blanditiis temporibus doloribus
											corrupti.
										</p>
										{/* <a className="hover:cursor-pointer my-8 ml-10 mt-6 text-left text-white font-medium leading-relaxed text-md  tracking-wide"> */}
										<Link
											href="/"
											className="hover:cursor-pointer my-8 ml-10 mt-6 text-left text-white font-medium leading-relaxed text-md  tracking-wide"
										>
											Read More
										</Link>
										{/* </a> */}
									</div>
								</div>
							</div>
							<div className="lg:w-5/12  ml-28">
								<div className="my-20">
									<h3 className="text-left text-black font-light font-yeseva tracking-wide text-3xl my-6">
										Categories
									</h3>
									<ul className="list-disc md:list-disc ml-5 space-y-4">
										<li className="font-bold leading-relaxed text-md  tracking-wide text-red-500">
											<Link
												className="text-black hover:text-yellow-400"
												href="/"
											>
												Mission
											</Link>
										</li>
										<li className="font-bold leading-relaxed text-md  tracking-wide text-red-500">
											<Link
												className="text-black hover:text-yellow-400"
												href="/"
											>
												For the Youth
											</Link>
										</li>
										<li className="font-bold leading-relaxed text-md  tracking-wide text-red-500">
											<Link
												className="text-black hover:text-yellow-400"
												href="/"
											>
												News & Updates
											</Link>
										</li>
										<li className="font-bold leading-relaxed text-md  tracking-wide text-red-500">
											<Link
												className="text-black hover:text-yellow-400"
												href="/"
											>
												Programs
											</Link>
										</li>
									</ul>
								</div>
								<div className="my-24">
									<h3 className="text-left text-black font-light font-yeseva tracking-wide text-3xl my-6">
										Tags
									</h3>
									<div className="my-3 flex flex-wrap -m-1">
										<span className="m-1 bg-yellow-400 hover:bg-orange rounded-full px-5 font-bold text-sm leading-loose cursor-pointer">
											#winter
										</span>
										<span className="m-1 bg-yellow-400 hover:bg-orange rounded-full px-5 font-bold text-sm leading-loose cursor-pointer">
											#stark
										</span>
										<span className="m-1 bg-yellow-400 hover:bg-orange rounded-full px-5 font-bold text-sm leading-loose cursor-pointer">
											#gameofthrones
										</span>
										<span className="m-1 bg-yellow-400 hover:bg-orange rounded-full px-5 font-bold text-sm leading-loose cursor-pointer">
											#battle
										</span>
										<span className="m-1 bg-yellow-400 hover:bg-orange rounded-full px-5 font-bold text-sm leading-loose cursor-pointer">
											#jhonsnow
										</span>
										<span className="m-1 bg-yellow-400 hover:bg-orange rounded-full px-5 font-bold text-sm leading-loose cursor-pointer">
											#kinglandings
										</span>
									</div>
								</div>
								<div className="my-24">
									<h3 className="text-left text-black font-light font-yeseva tracking-wide text-3xl my-8">
										Recent Posts
									</h3>
									<div className=" flex space-x-6">
										<Image
											src={welcomePic}
											alt="Welcome to the Church"
											// layout="responsive"
											height={100}
											width={100}
											className="rounded"
										/>
										<div>
											<h3 className="text-orange font-medium text-sm tracking-tighter">
												19 Sept
											</h3>
											<h1 className="text-left text-black font-medium text-md mt-2 leading-tight">
												Why we think praying is good for
												any person out there.
											</h1>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Section>
		</Main>
	);
}

export default Blog
