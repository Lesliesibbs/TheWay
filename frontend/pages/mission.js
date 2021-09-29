import React from "react";
import Image from "next/image";
import Main from "../src/components/main";
import SmallBanner from "../src/components/smallBanner";
import Button from "../src/components/button";
import Section from "../src/components/section";

//assets
import mainPic from "../public/images/preach.jpg"
import welcomePic from "../public/images/welcome.jpeg";

const Mission = () => {
	return (
		<Main>
			<Main>
				<SmallBanner title="Our Mission" />
				<Section className="mt-0">
					<div
						className="object-cover w-full bg-cover bg-no-repeat h-3088px"
						style={{
							backgroundImage: `url(/images/background-flipped.png)`,
						}}
					>
						<div className="container m-auto mb-36">
							<div className="w-full flex flex-col items-center">
								<h3 className="font-extralight text-left font-reenie text-4xl text-red-400 mt-24  items-center">
									Welcome!
								</h3>
								<h1 className="text-left text-black font-light font-yeseva text-6xl  m-2">
									We exist to connect people
								</h1>
								<h2 className="text-left text-black font-light font-yeseva text-6xl ">
									to Jesus and each other
								</h2>
								<div className="mt-24 ">
									<Image
										src="https://source.unsplash.com/GVRRtaLj3LU"
										alt="Welcome to the Church"
										// layout="responsive"
										width={878}
										height={544}
										layout="fixed"
										objectFit="cover"
										objectPosition="50% 50%"
										priority="true"
										quality={100}
									/>
								</div>
								<p className="text-center text-gray-600 font-extralight leading-relaxed text-base tracking-wide  mt-14 mx-80 px-10">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Aliquam fringilla, turpis
									et tempor molestie, urna nunc commodo ex,
									finibus diam magna a metus. Proin ut tempus
									odio. In dictum tincidunt egestas. Quisque
									egestas enim elit, in commodo sem pretium
									eu. Nullam vestibulum finibus ligula eget
									feugiat. Phasellus sit amet mi tristique,
									imperdiet ex eu, commodo neque. Phasellus ex
									felis, laoreet vitae ex ullamcorper.
								</p>
							</div>
						</div>
						<div className="flex items-center justify-center mt-32">
							<div className="lg:w-4/12 lg:p-0 order-2 mt-20 ml-36">
								<h3 className="font-extralight text-left font-reenie text-3xl text-red-400 m-3 ">
									Beliefs
								</h3>
								<h1 className="text-left text-black font-light font-yeseva tracking-wide text-4xl xs:text-4xl md:text-6xl m-2">
									Our Vision
								</h1>
								<p className="text-left text-gray-600 font-extralight leading-relaxed text-md  tracking-wide mt-8 m-2 ">
									We want to welcome you at the church where
									you find people who worship Jesus and are
									passionate about spreading His Word.
									Salvation is a gift that you can find in
									Jesus by following the mission that is
									established in our church: it’s simple and
									wonderful.
								</p>
								<Button
									href="/"
									className="bg-red-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full w-52 h-16 mt-12"
								>
									Learn More
								</Button>
							</div>
							<div className="mt-20 ml-28">
								<Image
									src="https://source.unsplash.com/BpTMNN9JSmQ"
									alt="Welcome to the Church"
									// layout="responsive"
									width={700}
									height={475}
									layout="fixed"
									objectFit="cover"
									objectPosition="50% 50%"
									priority="true"
									quality={100}
								/>
							</div>
						</div>
						<div className="lg:flex mt-16 flex items-center justify-center">
							<div className="lg:w-4/12 lg:p-0 mt-20 ml-36">
								<h3 className="font-extralight text-left font-reenie text-3xl text-red-400 m-3 ">
									Beliefs
								</h3>
								<h1 className="text-left text-black font-light font-yeseva tracking-wide text-4xl xs:text-4xl md:text-6xl m-2">
									Our Goals
								</h1>
								<p className="text-left text-gray-600 font-extralight leading-relaxed text-md tracking-wide  mt-8 m-2">
									We want to welcome you at the church where
									you find people who worship Jesus and are
									passionate about spreading His Word.
									Salvation is a gift that you can find in
									Jesus by following the mission that is
									established in our church: it’s simple and
									wonderful.
								</p>
								<Button
									href="/"
									className="bg-red-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full w-52 h-16 mt-12"
								>
									Learn More
								</Button>
							</div>
							<div className="mt-28 ml-28">
								<Image
									src="https://source.unsplash.com/LNzuOK1GxRU"
									alt="Welcome to the Church"
									// layout="responsive"
									width={700}
									height={475}
									layout="fixed"
									objectFit="cover"
									objectPosition="50% 50%"
									priority="true"
									quality={100}
								/>
							</div>
						</div>
						<div className="lg:flex mt-20 flex items-center justify-center">
							<div className="mt-28 ml-28">
								<Image
									src="https://source.unsplash.com/d0peGya6R5Y"
									alt="Welcome to the Church"
									// layout="responsive"
									width={350}
									height={400}
									layout="fixed"
									objectFit="cover"
									objectPosition="50% 50%"
									priority="true"
									quality={100}
								/>
							</div>
							<div className="mt-28 ml-28">
								<Image
									src="https://source.unsplash.com/UzSPiVmnkAA"
									alt="Welcome to the Church"
									// layout="responsive"
									width={350}
									height={400}
									layout="fixed"
									objectFit="cover"
									objectPosition="50% 50%"
									priority="true"
									quality={100}
								/>
							</div>
							<div className="lg:w-4/12 lg:p-0 mt-20 ml-36">
								<h3 className="font-extralight text-left font-reenie text-3xl text-red-400 m-3 ">
									Our Team
								</h3>
								<h1 className="text-left text-black font-light font-yeseva tracking-wide text-4xl xs:text-4xl md:text-6xl m-2">
									Leadership
								</h1>
								<p className="text-left text-gray-600 font-extralight leading-relaxed text-md tracking-wide  mt-8 m-2">
									We want to welcome you at the church where
									you find people who worship Jesus and are
									passionate about spreading His Word.
									Salvation is a gift that you can find in
									Jesus by following the mission that is
									established in our church: it’s simple and
									wonderful.
								</p>
								<Button
									href="/"
									className="bg-red-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full w-52 h-16 mt-12"
								>
									Contact Us
								</Button>
							</div>
						</div>
					</div>
				</Section>
			</Main>
		</Main>
	);
};

export default Mission;
