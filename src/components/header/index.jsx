import { NavLink } from "react-router-dom";
const MENUS = [
	{
		id: 1,
		name: "Financial ",
		route: "/",
	},
	{
		id: 2,
		name: "Expense ",
		route: "/expenses",
	},
	{
		id: 3,
		name: "Saving",
		route: "/saving",
	},
	{
		id: 4,
		name: "Reporting",
		route: "/reports",
	},
];
export const Header = () => {
	const ActiveStyle = ({ isActive }) => ({
        background: isActive ? "#334155" : "",
    });
	return (
		<nav className="w-full flex flex-col lg:flex-row justify-center items-center lg:justify-between h-25 bg-[#3b82f6]">
        <h1 className="font-bold text-2xl text-[#fff]">
            <NavLink to={'/'}>
				FinMan
            </NavLink>
        </h1>
      <div className="flex justify-between items-center mr-5 ml-5">
        <ul className="font-bold text-xl text-[#fff] flex items-center justify-between">
            {MENUS.map((menu) => (
                <li
                    className="h-10 justify-center items-center flex"
                    key={menu.id}
                >
                    <NavLink
                        className="h-full rounded pt-2 p-2"
                        style={ActiveStyle}
                        to={menu.route}
                    >
                        {menu.name}
                    </NavLink>
                </li>
            ))}
        </ul>
        </div>
    </nav>
	);
};
