import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import {
	Aperture,
	Minimize,
	ChevronDown,
	ArrowRight,
	Facebook,
	Twitch,
	Twitter,
	Youtube,
	Instagram,
} from "react-feather";
function App() {
	return (
		<div className='App font-sans'>
			<div className='Landing h-screen'>
				<div className='Header flex gap-6  pt-6 items-center mb-4'>
					<div className='logo flex font-extrabold ml-6'>
						<Aperture size={36} />
						<Minimize size={36} />
					</div>
					<div className='MenuNav self-end text-lg flex items-end gap-2'>
						Menu <ChevronDown size={16} className='mb-1' />
					</div>
				</div>
				<div className='subHeader p-6 flex gap-4'>
					<div className='navItem text-sm text-orange-600'>About</div>
					<div className='navItem text-sm'>Jobs</div>
					<div className='navItem text-sm'>Apprenticeships</div>
				</div>
				<MaxWidthWrapper>
					<div className='LandingImage min-h-landingImage mx-landing h-auto relative mb-landing'>
						<div className="min-h-landingImage bg-cover bg-center bg-[url('/public/ableton.avif')] relative">
							<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl  text-orange-600 font-medium'>
								Ableton
							</div>
						</div>
					</div>
				</MaxWidthWrapper>
			</div>
			<div className='RestOfLanding mx-landing mt-landing'>
				<MaxWidthWrapper>
					<div className='section mb-sectionMargin'>
						<div className='text-lg font-bold leading-8 mb-textSection'>
							We make{" "}
							<a href='#' className='text-blue-700'>
								Live
							</a>
							,{" "}
							<a href='#' className='text-blue-700'>
								Push
							</a>{" "}
							and{" "}
							<a href='#' className='text-blue-700'>
								Link
							</a>{" "}
							— unique software and hardware for music creation and performance. With these products, our
							community of users creates amazing things.
						</div>
						<p className='text-sm leading-6'>
							Ableton was founded in 1999 and released the first version of Live in 2001. Our products are
							used by a community of dedicated musicians, sound designers, and artists from across the
							world.
						</p>
					</div>
					<div className='section mb-sectionMargin relative py-10'>
						<div className='collage-1 flex gap-7 align-center justify-center isolate'>
							<div className='image1-wrapper z-10'>
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
							<div className='backgroundYellow absolute h-[58.88vw] w-[58.88vw] left-[32.88vw] top-0 bg-amber-200 z-1'></div>
						</div>
					</div>

					<div className='section mb-sectionMargin relative'>
						<div className='text-lg font-bold leading-8 mb-textMargin '>
							Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow,
							it’s incredibly rewarding.
						</div>
						<p>
							We feel the same way about making Ableton products. The driving force behind Ableton is our
							passion for what we make, and the people we make it for.
						</p>
					</div>
					<div className='section mb-sectionMargin relative'>
						<div className='text-lg font-bold leading-8 mb-textMargin '>
							We are more than 350 people from 30 different countries divided between our headquarters in
							Berlin and our offices in Los Angeles and Tokyo.
						</div>
						<p>
							Most of us are active musicians, producers, and DJs, and many of us use Live and Push every
							day. We come from a wide range of cultural and professional backgrounds. Some of us have
							PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the
							shared belief that each of us has the skills and knowledge to contribute to something big:
							helping to shape the future of music culture.
						</p>
					</div>
					<div className='collage2 flex relative py-10 gap-7 isolate mb-sectionMargin'>
						<div className='leftImages flex flex-col gap-5 z-10'>
							<div className='image'>
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
						<div className='background absolute bg-green-200 w-halfPlusMargin h-full top-0 left-[-8.33vw] z-0'></div>
					</div>
					<div className='section mb-sectionMargin relative'>
						<div className='text-lg font-bold leading-8 mb-textMargin '>
							We believe it takes focus to create truly outstanding instruments. We only work on a few
							products and we strive to make them great.
						</div>
						<p>
							Rather than having a one-size-fits-all process, we try to give our people what they need to
							work their magic and grow. We’ve learned that achieving the best results comes from building
							teams that are richly diverse, and thus able to explore problems from a wider set of
							perspectives. We don’t always agree with each other, but opinion and debate are valued and
							openly encouraged.
						</p>
					</div>
					<div className='section poster-wrapper mb-sectionMargin'>
						<img src={`${process.env.PUBLIC_URL}/poster.avif`} alt='a screen showing music software.' />
					</div>
					<div className='section mb-sectionMargin relative'>
						<div className='text-lg font-bold leading-8 mb-textMargin '>
							We’re passionate about what we do, but we’re equally passionate about improving who we are.
						</div>
						<p className='mb-textMargin '>
							We work hard to foster an environment where people can grow both personally and
							professionally, and we strive to create a wealth of opportunities to learn from and with
							each other.
						</p>
						<p>
							Alongside an internal training program, employees are actively supported in acquiring new
							knowledge and skills, and coached on applying these in their daily work. In addition,
							staff-organized development and music salons are a chance to discuss new technologies,
							production techniques and best practices.
						</p>
					</div>
					<div className='collage3 flex relative py-10 gap-16 isolate mb-sectionMargin'>
						<div className='leftImages flex flex-col gap-5 z-10 my-auto'>
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
						<div className='background absolute bg-purple-300 w-[66.66vw] h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-0'></div>
					</div>
					<div className='section mb-sectionMargin relative'>
						<div className='text-lg font-bold leading-8 mb-textMargin '>
							We want our employees to love it here. Since we’re looking for exceptional talent from
							around the world, we will do everything we can to make your transition as easy as possible.
						</div>
						<p className='mb-textMargin '>
							If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide
							you with free German or English lessons. Plus, working in Germany means you can expect
							comprehensive health insurance for you and your family, as well as generous maternity and
							paternity leave. Office hours are flexible, but it’s not all work; we have several company
							and team outings throughout the year as well as a variety of fun, informal small-group
							activities.
						</p>
					</div>
					<div className='aboutus-card mb-sectionMargin text-xl'>
						<img src={`${process.env.PUBLIC_URL}/photo-8.jpg`} alt='people sitting in a cafe' />
						<div className='work-with-us-card p-sectionCardPadding bg-cardBackground font-normal'>
							<h1 className='mb-10'>
								We’re really proud of the work we’ve done so far. But there’s so much more to come. If
								you’d like to be a part of it, please join us.
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
					<div className='footer my-sectionMargin'>
						<div className='logo text-4xl font-semibold mb-sectionMargin'>Ableton</div>
						<div className='newsletter'>
							<h3 className='title font-bold'>Sign up to our newsletter</h3>
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
						<div className='misc-links my-sectionMargin'>
							<ul>
								<li className='flex'>
									<a href='https://www.gosomewhere.com' className='mt-4 flex align-middle gap-3'>
										Register Live or Push{" "}
										<span className='icon self-end'>
											<ArrowRight size={16} />
										</span>
									</a>
								</li>
								<li className='flex'>
									<a href='https://www.gosomewhere.com' className='flex align-middle gap-3'>
										About Ableton{" "}
										<span className='icon self-end'>
											<ArrowRight size={16} />
										</span>
									</a>
								</li>
								<li className='flex'>
									<a href='https://www.gosomewhere.com' className='flex align-middle gap-3'>
										Jobs{" "}
										<span className='icon self-end'>
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
						<div className='education-links mb-sectionMargin'>
							<h3 className='title font-bold'>Education</h3>
							<ul>
								<li className='flex'>
									<a href='https://www.gosomewhere.com' className='flex align-middle gap-3'>
										Offers for Students and Teachers{" "}
										<span className='icon self-end'>
											<ArrowRight size={16} />
										</span>
									</a>
								</li>
								<li className='flex'>
									<a href='https://www.gosomewhere.com' className='flex align-middle gap-3'>
										Ableton for the Classroom{" "}
										<span className='icon self-end'>
											<ArrowRight size={16} />
										</span>
									</a>
								</li>
								<li className='flex'>
									<a href='https://www.gosomewhere.com' className='flex align-middle gap-3'>
										Ableton for Colleges and Universities{" "}
										<span className='icon self-end'>
											<ArrowRight size={16} />
										</span>
									</a>
								</li>
							</ul>
						</div>
						<div className='community-links mb-sectionMargin'>
							<h3 className='title font-bold'>Community</h3>
							<ul>
								<li className='flex'>
									<a href='https://www.gosomewhere.com' className='flex align-middle gap-3'>
										Find Ableton User Groups{" "}
										<span className='icon self-end'>
											<ArrowRight size={16} />
										</span>
									</a>
								</li>
								<li className='flex'>
									<a href='https://www.gosomewhere.com' className='flex align-middle gap-3'>
										Find Certified Training{" "}
										<span className='icon self-end'>
											<ArrowRight size={16} />
										</span>
									</a>
								</li>
								<li className='flex'>
									<a href='https://www.gosomewhere.com' className='flex align-middle gap-3'>
										Become a Certified Teainer{" "}
										<span className='icon self-end'>
											<ArrowRight size={16} />
										</span>
									</a>
								</li>
							</ul>
						</div>
						<div className='community-links mb-sectionMargin'>
							<h3 className='title font-bold'>Distributors</h3>
							<ul>
								<li className='flex'>
									<a href='https://www.gosomewhere.com' className='flex align-middle gap-3'>
										Find Distributors{" "}
										<span className='icon self-end'>
											<ArrowRight size={16} />
										</span>
									</a>
								</li>
								<li className='flex'>
									<a href='https://www.gosomewhere.com' className='flex align-middle gap-3'>
										Try Push in-store{" "}
										<span className='icon self-end'>
											<ArrowRight size={16} />
										</span>
									</a>
								</li>
							</ul>
						</div>
						<div className='languages-title mb-sectionMargin'>
							<h3 className='font-bold mb-2'>Languages and Location</h3>
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
						<div className='contact-links mb-sectionMargin'>
							<h3 className='title font-bold mb-3'>Contact Us</h3>
							<ul>
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
						<div className='footer-end-logo mt-sectionMargin flex items-center gap-3'>
							<div className='logo flex font-extrabold'>
								<Aperture size={36} />
								<Minimize size={36} />
							</div>
							<span className='text-sm'>Made in Berlin</span>
						</div>
					</div>
				</MaxWidthWrapper>
			</div>
		</div>
	);
}

export default App;
