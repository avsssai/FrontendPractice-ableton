import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Aperture, Minimize, ChevronDown, ArrowRight, Facebook, Twitter, Youtube, Instagram } from "react-feather";
function App() {
	return (
		<div className='App font-sans lg:max-w-[100rem] relative lg:m-auto'>
			<div className='Landing h-screen'>
				<div className='Header flex justify-between items-center mx-6'>
					<div className='leftContent flex gap-6 md:gap-4 pt-4 items-center mb-4'>
						<div className='logo flex font-extrabold xl:mr-6'>
							<Aperture size={36} />
							<Minimize size={36} />
						</div>
						<div className='MenuNav self-end text-lg md:hidden flex items-center gap-2 '>
							Menu <ChevronDown size={16} className='mb-1' />
						</div>
						<div className='menuNav hidden md:flex'>
							<ul className='flex gap-5 xl:gap-10 text-sm font-medium xl:text-xl'>
								<li>
									<a href='https://gosomehere.com'>Live</a>
								</li>
								<li>
									<a href='https://gosomehere.com'>Push</a>
								</li>
								<li>
									<a href='https://gosomehere.com'>Note</a>
								</li>
								<li>
									<a href='https://gosomehere.com'>Link</a>
								</li>
								<li>
									<a href='https://gosomehere.com'>Shop</a>
								</li>
								<li>
									<a href='https://gosomehere.com'>Packs</a>
								</li>
								<li>
									<a href='https://gosomehere.com'>Help</a>
								</li>
								<li>
									<a href='https://gosomehere.com' className='text-orange-400'>
										More+
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className='rightContent hidden md:flex'>
						<ul className='gap-4 text-sm sm:hidden md:flex '>
							<li>
								<a href='https://gosomehere.com' className='text-blue-600'>
									Try Live for free
								</a>
							</li>
							<li>
								<a href='https://gosomehere.com'>Log in or register</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='subHeader p-6 flex gap-4 text-sm md:text-xs xl:text-base'>
					<div className='navItem  text-orange-600'>About</div>
					<div className='navItem'>Jobs</div>
					<div className='navItem'>Apprenticeships</div>
				</div>
				<MaxWidthWrapper>
					<div className='LandingImage min-h-landingImage h-auto relative mb-landing'>
						<div className="min-h-landingImage bg-cover bg-center bg-[url('/public/ableton.avif')] relative">
							<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl md:text-9xl  text-orange-600 font-medium'>
								Ableton
							</div>
						</div>
					</div>
				</MaxWidthWrapper>
			</div>
			<div className='RestOfLanding mt-landing'>
				<MaxWidthWrapper>
					<div className='section mb-sectionMargin xl:mb-sectionMarginXL'>
						<div className='text-content w-full '>
							<div className='text-heading'>
								We make{" "}
								<a href='https://goessomewhere.com' className='text-blue-700'>
									Live
								</a>
								,{" "}
								<a href='https://goessomewhere.com' className='text-blue-700'>
									Push
								</a>{" "}
								and{" "}
								<a href='https://goessomewhere.com' className='text-blue-700'>
									Link
								</a>{" "}
								— unique software and hardware for music creation and performance. With these products,
								our community of users creates amazing things.
							</div>
							<p className='text-paragraph'>
								Ableton was founded in 1999 and released the first version of Live in 2001. Our products
								are used by a community of dedicated musicians, sound designers, and artists from across
								the world.
							</p>
						</div>
					</div>
					<div className='section mb-sectionMargin xl:mb-sectionMarginXL relative py-10'>
						<div className='collage-1 flex gap-7 align-center justify-center isolate items-center xl:mt-24'>
							<div className='image1-wrapper z-10 xl:mr-24'>
								<img
									src={`${process.env.PUBLIC_URL}/photo-1.jpg`}
									alt='A woman working on music software'
									className='w-full block'
								/>
							</div>
							<div className='image2-wrapper flex z-10'>
								<img
									src={`${process.env.PUBLIC_URL}/photo-2.jpg`}
									alt='A woman working on music software'
									className='w-full block my-auto'
								/>
							</div>
							<div className='backgroundYellow absolute h-[58.88vw] w-[58.88vw] left-[32.88vw] xl:left-[555.55px] xl:w-[933.33px] xl:h-[933.33px] top-0 bg-amber-200 z-1'></div>
						</div>
					</div>

					<div className='section mb-sectionMargin xl:mb-sectionMarginXL relative pt-1'>
						<div className='text-heading '>
							Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow,
							it’s incredibly rewarding.
						</div>
						<p className='text-paragraph'>
							We feel the same way about making Ableton products. The driving force behind Ableton is our
							passion for what we make, and the people we make it for.
						</p>
					</div>
					<div className='section mb-sectionMargin xl:mb-sectionMarginXL relative'>
						<div className='text-heading '>
							We are more than 350 people from 30 different countries divided between our headquarters in
							Berlin and our offices in Los Angeles and Tokyo.
						</div>
						<p className='text-paragraph'>
							Most of us are active musicians, producers, and DJs, and many of us use Live and Push every
							day. We come from a wide range of cultural and professional backgrounds. Some of us have
							PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the
							shared belief that each of us has the skills and knowledge to contribute to something big:
							helping to shape the future of music culture.
						</p>
					</div>
					<div className='collage2 flex relative py-10 xl:py-3  gap-7 isolate mb-sectionMargin  xl:mb-0 xl:h-[1200px] '>
						<div className='leftImages flex flex-col gap-5 z-10 xl:mt-24 xl:mr-24'>
							<div className='image xl:mb-24'>
								<img src={`${process.env.PUBLIC_URL}/left1.jpg`} alt='Man writing on white board.' />
							</div>
							<div className='image'>
								<img src={`${process.env.PUBLIC_URL}/left2.jpg`} alt='Man writing on white board.' />
							</div>
						</div>
						<div className='rightImages flex flex-col gap-5 justify-center z-10'>
							<img
								src={`${process.env.PUBLIC_URL}/right1.jpg`}
								alt='two people working in an office on some music software.'
							/>
						</div>
						<div className='background absolute bg-green-200 w-halfPlusMargin h-full xl:h-[1200px] xl:w-[933.33px] top-0 left-[-8.33vw] z-0'></div>
					</div>
					<div className='section mb-sectionMargin xl:mb-sectionMarginXL relative p-1'>
						<div className='text-heading'>
							We believe it takes focus to create truly outstanding instruments. We only work on a few
							products and we strive to make them great.
						</div>
						<p className='text-paragraph'>
							Rather than having a one-size-fits-all process, we try to give our people what they need to
							work their magic and grow. We’ve learned that achieving the best results comes from building
							teams that are richly diverse, and thus able to explore problems from a wider set of
							perspectives. We don’t always agree with each other, but opinion and debate are valued and
							openly encouraged.
						</p>
					</div>
					<div className='section poster-wrapper mb-sectionMargin xl:mb-sectionMarginXL'>
						<img src={`${process.env.PUBLIC_URL}/poster.avif`} alt='a screen showing music software.' />
					</div>
					<div className='section mb-sectionMargin xl:mb-sectionMarginXL relative'>
						<div className='text-heading'>
							We’re passionate about what we do, but we’re equally passionate about improving who we are.
						</div>
						<p className='mb-textMargin text-paragraph '>
							We work hard to foster an environment where people can grow both personally and
							professionally, and we strive to create a wealth of opportunities to learn from and with
							each other.
						</p>
						<p className='text-paragraph'>
							Alongside an internal training program, employees are actively supported in acquiring new
							knowledge and skills, and coached on applying these in their daily work. In addition,
							staff-organized development and music salons are a chance to discuss new technologies,
							production techniques and best practices.
						</p>
					</div>
					<div className='collage3 flex relative py-10 gap-16 isolate mb-sectionMargin xl:mb-sectionMarginXL'>
						<div className='leftImages flex flex-col gap-5 z-10 my-auto xl:mr-32'>
							<div className='image'>
								<img src={`${process.env.PUBLIC_URL}/left-2-1.jpg`} alt='Man writing on white board.' />
							</div>
						</div>
						<div className='rightImages flex flex-col gap-5 justify-center z-10 mr-[-8.33vw]'>
							<img
								src={`${process.env.PUBLIC_URL}/left-2-2.jpg`}
								alt='two people working in an office on some music software.'
							/>
						</div>
						<div className='background absolute bg-purple-300 w-[66.66vw] xl:w-[1066.66px] h-full xl:h-[933.33px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-0'></div>
					</div>
					<div className='section mb-sectionMargin xl:mb-sectionMarginXL relative'>
						<div className='text-heading'>
							We want our employees to love it here. Since we’re looking for exceptional talent from
							around the world, we will do everything we can to make your transition as easy as possible.
						</div>
						<p className='mb-textMargin text-paragraph'>
							If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide
							you with free German or English lessons. Plus, working in Germany means you can expect
							comprehensive health insurance for you and your family, as well as generous maternity and
							paternity leave. Office hours are flexible, but it’s not all work; we have several company
							and team outings throughout the year as well as a variety of fun, informal small-group
							activities.
						</p>
					</div>
					<div className='aboutus-card mb-sectionMargin lg:mb-sectionMarginXL text-xl xl:flex xl:h-[666.66px]'>
						<div className='xl:flex-1'>
							<img
								src={`${process.env.PUBLIC_URL}/photo-8.jpg`}
								alt='people sitting in a cafe'
								className='xl:w-[666.67px]  h-full object-cover object-right'
							/>
						</div>
						<div className='work-with-us-card p-sectionCardPadding xl:p-[133.33px] xl:w-[666.67px] bg-cardBackground font-normal lg:text-3xl xl:flex xl:items-center'>
							<div className='textContent'>
								<h1 className='mb-10 leading-10 '>
									We’re really proud of the work we’ve done so far. But there’s so much more to come.
									If you’d like to be a part of it, please join us.
								</h1>
								<a
									href='https://www.gosomewhere.com'
									className='mt-4 flex align-middle font-bold text-blue-600 gap-3'>
									See latest jobs{" "}
									<span className='icon self-end'>
										<ArrowRight />
									</span>
								</a>
							</div>
						</div>
					</div>
					<div className='footer my-sectionMargin lg:my-sectionMarginXL'>
						<div className='logo text-4xl lg:text-6xl font-semibold mb-sectionMargin lg:mb-[66.67px] '>
							Ableton
						</div>
						<div className='row-wrapper flex flex-col lg:flex-row lg:gap-24 lg:mb-[66.67px] md:text-sm xl:text-lg'>
							<div className='newsletter flex-1'>
								<h3 className='title font-semibold lg:text-sm xl:text-lg'>Sign up to our newsletter</h3>
								<div className='text mb-textMargin'>
									Enter your email address to stay up to date with the latest offers, tutorials,
									downloads, surveys and more.
								</div>
								<div className='inputWrapper flex'>
									<input
										type='text'
										placeholder='Email Address'
										className='flex-1 py-1 px-1 bg-stone-200'
									/>
									<button className='signup button bg-blue-600 text-white px-6'>Sign up</button>
								</div>
							</div>
							<div className='misc-links my-sectionMargin flex-1 lg:my-0'>
								<div className='my-auto flex justify-center flex-col gap-2'>
									<ul className='flex flex-col gap-1'>
										<li className='flex'>
											<a
												href='https://www.gosomewhere.com'
												className='mt-4 lg:mt-0 flex align-middle '>
												Register Live or Push{" "}
												<span className='icon self-end mb-1'>
													<ArrowRight size={16} />
												</span>
											</a>
										</li>
										<li className='flex'>
											<a href='https://www.gosomewhere.com' className='flex align-middle '>
												About Ableton{" "}
												<span className='icon self-end mb-1'>
													<ArrowRight size={16} />
												</span>
											</a>
										</li>
										<li className='flex'>
											<a href='https://www.gosomewhere.com' className='flex align-middle '>
												Jobs{" "}
												<span className='icon self-end mb-1'>
													<ArrowRight size={16} />
												</span>
											</a>
										</li>
									</ul>
									<div className='socialLinks flex gap-4 first-of-type:ml-[-4px] mt-2'>
										<Facebook />
										<Twitter />
										<Youtube />
										<Instagram />
									</div>
								</div>
							</div>
							<div className='education-links mb-sectionMargin xl:mb-sectionMarginXL lg:mb-0 flex-1'>
								<h3 className='title font-semibold text-sm xl:text-lg'>Education</h3>
								<ul className='flex flex-col gap-1'>
									<li className='flex'>
										<a href='https://www.gosomewhere.com' className='flex align-middle'>
											Offers for Students and Teachers{" "}
											<span className='icon self-end mb-1'>
												<ArrowRight size={16} />
											</span>
										</a>
									</li>
									<li className='flex'>
										<a href='https://www.gosomewhere.com' className='flex align-middle'>
											Ableton for the Classroom{" "}
											<span className='icon self-end mb-1'>
												<ArrowRight size={16} />
											</span>
										</a>
									</li>
									<li className='flex'>
										<a href='https://www.gosomewhere.com' className='flex align-middle'>
											Ableton for Colleges and Universities{" "}
											<span className='icon self-end mb-1'>
												<ArrowRight size={16} />
											</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className='row-wrapper flex flex-col lg:flex-row lg:gap-24 lg:mb-[66.67px] justify-center lg:text-sm xl:text-lg'>
							<div className='community-links mb-sectionMargin xl:mb-sectionMarginXL lg:mb-0 flex-1'>
								<h3 className='title font-semibold text-sm xl:text-lg'>Community</h3>
								<ul className='flex flex-col gap-1'>
									<li className='flex'>
										<a href='https://www.gosomewhere.com' className='flex align-middle'>
											Find Ableton User Groups{" "}
											<span className='icon self-end mb-1'>
												<ArrowRight size={16} />
											</span>
										</a>
									</li>
									<li className='flex'>
										<a href='https://www.gosomewhere.com' className='flex align-middle'>
											Find Certified Training{" "}
											<span className='icon self-end mb-1'>
												<ArrowRight size={16} />
											</span>
										</a>
									</li>
									<li className='flex'>
										<a href='https://www.gosomewhere.com' className='flex align-middle'>
											Become a Certified Teainer{" "}
											<span className='icon self-end mb-1'>
												<ArrowRight size={16} />
											</span>
										</a>
									</li>
								</ul>
							</div>
							<div className='community-links mb-sectionMargin lg:mb-[66.66px] flex-1'>
								<h3 className='title font-semibold text-sm xl:text-lg'>Distributors</h3>
								<ul className='flex flex-col gap-1'>
									<li className='flex'>
										<a href='https://www.gosomewhere.com' className='flex align-middle'>
											Find Distributors{" "}
											<span className='icon self-end mb-1'>
												<ArrowRight size={16} />
											</span>
										</a>
									</li>
									<li className='flex'>
										<a href='https://www.gosomewhere.com' className='flex align-middle'>
											Try Push in-store{" "}
											<span className='icon self-end mb-1'>
												<ArrowRight size={16} />
											</span>
										</a>
									</li>
								</ul>
							</div>
							<div className='languages-title mb-sectionMargin xl:mb-sectionMarginXL lg:mb-0 flex-1'>
								<h3 className='font-bold mb-2 lg:text-sm xl:text-lg'>Languages and Location</h3>
								<div className='dropdownsWrapper flex gap-3'>
									<select
										name='language'
										id='language-dropdown'
										className='bg-stone-200 text-xs px-1 py-2'>
										<option value='English' className='text-xs'>
											English
										</option>
										<option value='French' className='text-xs'>
											French
										</option>
										<option value='Spanish' className='text-xs'>
											Spanish
										</option>
									</select>
									<select
										name='location'
										id='location-dropdown'
										className='flex-1 bg-stone-200 text-xs px-1 py-2'>
										<option value='India' className='text-xs'>
											India
										</option>
										<option value='France' className='text-xs'>
											France
										</option>
										<option value='USA' className='text-xs'>
											USA
										</option>
									</select>
								</div>
							</div>
						</div>
						<div className='flex flex-col lg:flex-row justify-between lg:items-start'>
							<div className='contact-links mb-sectionMargin xl:self-end lg:mb-0 flex flex-col lg:flex-row gap-3  lg:text-sm'>
								<h3 className='title text-sm mb-3 lg:mb-0'>Contact Us</h3>
								<ul className='links flex flex-col lg:flex-row gap-3'>
									<li className='flex mb-3'>
										<a href='https://www.gosomewhere.com' className='flex align-middle gap-3'>
											Press Resources{" "}
										</a>
									</li>
									<li className='flex mb-3'>
										<a href='https://www.gosomewhere.com' className='flex align-middle gap-3'>
											Legal Info{" "}
										</a>
									</li>
									<li className='flex mb-3'>
										<a href='https://www.gosomewhere.com' className='flex align-middle gap-3'>
											Privacy Policy{" "}
										</a>
									</li>
									<li className='flex mb-3'>
										<a href='https://www.gosomewhere.com' className='flex align-middle gap-3'>
											Cookie Settings{" "}
										</a>
									</li>
									<li className='flex mb-3'>
										<a href='https://www.gosomewhere.com' className='flex align-middle gap-3'>
											Imprint{" "}
										</a>
									</li>
								</ul>
							</div>
							<div className='footer-end-logo mt-sectionMargin lg:mt-0 flex items-center gap-3'>
								<div className='logo flex font-extrabold'>
									<Aperture size={36} />
									<Minimize size={36} />
								</div>
								<span className='text-sm'>Made in Berlin</span>
							</div>
						</div>
					</div>
				</MaxWidthWrapper>
			</div>
		</div>
	);
}

export default App;
