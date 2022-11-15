export default function MaxWidthWrapper({ children }: { children: string | JSX.Element | JSX.Element[] }) {
	return <div className='relative max-w-wrapperWidth mx-auto px-auto md:px-5'>{children}</div>;
}
