import { Header } from "../header";

export const Layout = ({ children }) => {
	return (
		<div className="flex flex-col w-full h-screen">
			<Header />
			<div className="flex w-full h-screen">
				{children}
			</div>
		</div>
	);
};
