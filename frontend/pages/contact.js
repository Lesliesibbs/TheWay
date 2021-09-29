import React from 'react'
import Image from "next/image";
import Main from "../src/components/main";
import SmallBanner from "../src/components/smallBanner";
import Section from "../src/components/section";
import Button from "../src/components/button";

//assets
import mainPic from "../public/images/preach.jpg";
import welcomePic from "../public/images/welcome.jpeg";
import Mark from "../src/svg/mark.js";
import Mail from "../src/svg/mail.js";

const Contact = () => {
    return (
		<Main>
			<SmallBanner title="Contacts" />
			<Section className="mt-0">
				<div
					className="object-cover w-full bg-cover bg-no-repeat h-1100px"
					style={{
						backgroundImage: `url(/images/background-flipped.png)`,
					}}
				>
					<Section className="container m-auto mt-0 ">
						<div className="w-full h-96 flex flex-col items-center">
							<div className="flex justify-center ">
								<div className="lg:w-4/12 lg:p-0 mt-24">
									<p className="text-left text-gray-500 font-extralight leading-relaxed text-md mt-8 tracking-wide">
										No matter what stage, age, or season you
										find yourself in, Nazareth Church is for
										you! We invite you to come just as you
										are and be part of this community of
										people who are striving together to
										discover God’s purpose and plan for
										their lives!s
									</p>
									<div className="flex space-x-4 mt-16">
										<Mark className="svg-inline--fa fa-clock fa-w-16 fill-current text-red-500 w-10 h-10" />
										<div>
											<h4>Address:</h4>
											<p className="text-left text-gray-500 font-extralight leading-relaxed text-md tracking-wide">
												495 Hanover Street,
											</p>
											<p className="text-left text-gray-500 font-extralight leading-relaxed text-md tracking-wide">
												New York, NY 10013
											</p>
										</div>
									</div>
									<div className="flex space-x-4 mt-16">
										<Mail className="svg-inline--fa fa-envelope fa-w-16 fill-current text-red-500 w-10 h-10" />
										<div>
											<h4>Address:</h4>
											<p className="text-left text-gray-500 font-extralight leading-relaxed text-md tracking-wide">
												495 Hanover Street,
											</p>
											<p className="text-left text-gray-500 font-extralight leading-relaxed text-md tracking-wide">
												New York, NY 10013
											</p>
										</div>
									</div>
								</div>
								<div className=" ml-28 w-640px">
									<div className="bg-white px-10 py-8 mt-24 shadow-lg hover:shadow-2xl transition duration-500 w-640px">
										<form>
											<h1 className="text-left text-black font-light font-yeseva text-5xl  m-2">
												Contact Us
											</h1>
											<div className="mb-6 mt-14">
												<input
													className="shadow appearance-none border rounded w-full h-16 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
													id="username"
													type="text"
													placeholder="Username"
												/>
											</div>
											<div className="mb-6 flex">
												<input
													className="shadow appearance-none border rounded w-full h-16 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
													id="password"
													type="text"
													placeholder="Email"
												/>
											</div>
											<div className="mb-6 flex">
												<textarea
													className="shadow appearance-none border rounded w-full h-72 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
													id="password"
													placeholder="Message"
												/>
											</div>
											<div className="mb-6 flex items-center">
												<input
													type="checkbox"
													id="scales"
													name="scales"
												/>
												<span className="ml-5 text-gray-500">
													By using this form you agree
													with the storage and
													handling of your data by
													this website.
												</span>
											</div>
											<div className="mb-6 flex items-center">
												<Button
													href="/"
													className="bg-red-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full w-52 h-16 mt-5"
													type="button"
												>
													Send
												</Button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</Section>
				</div>
			</Section>
		</Main>
	);
}

export default Contact
