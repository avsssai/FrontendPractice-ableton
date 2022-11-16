export default function MaxWidthWrapper({ children }: { children: string | JSX.Element | JSX.Element[] }) {
	return <div className='relative mx-sectionMargin xl:mx-[133.33px]'>{children}</div>;
}
