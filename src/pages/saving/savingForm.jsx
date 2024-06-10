import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSaving } from "../../redux";
const categories = [
	{
		id: 1,
		name: "For Bike",
		value: "For Bike",
	},
];
export const SavingForm = ({ setToggle }) => {
	const [switchCat, setSwitchCat] = useState(false);
	const [newSaving, setNewSaving] = useState({
		amount: 0,
		description: "",
		category: "",
	});
	const dispatch = useDispatch();
	return (
		<div className="flex flex-col fixed w-full top-0 bottom-0 left-0 right-0 bg-[#f6f6f64c] justify-center items-center">
			<form
				onSubmit={(e) => e.preventDefault()}
				className="flex flex-col w-80 justify-center gap-3  bg-slate-100 shadow-md rounded-md px-6 p-4">
				<h1 className="flex justify-center items-center text-md font-semibold">
					Add new Income
				</h1>

				<label htmlFor="" className="flex flex-col  gap-1">
					Description
					<input
						type="text"
						placeholder="Description"
						className="p-2 px-4 rounded"
						value={newSaving.description}
						onChange={(e) =>
							setNewSaving({ ...newSaving, description: e.target.value })
						}
					/>
				</label>

				<label htmlFor="" className="flex flex-col gap-1 ">
					amount
					<input
						type="number"
						placeholder="amount"
						className="p-2 px-4 rounded"
						value={newSaving.amount}
						onChange={(e) =>
							setNewSaving({ ...newSaving, amount: e.target.value })
						}
					/>
				</label>
				<label htmlFor="" className="flex flex-col gap-1 ">
					Category
					{switchCat ? (
						<input
							type="text"
							placeholder="Category"
							className="p-2 px-4 rounded"
							// value={newSaving.category}
							onChange={(e) =>
								setNewSaving({ ...newSaving, category: e.target.value })
							}
						/>
					) : (
						<select
							onChange={(e) =>
								e.target.value === "Other"
									? setSwitchCat(true)
									: setNewSaving({ ...newSaving, category: e.target.value })
							}>
							<option value="">Select Category</option>
							{categories.map((elms) => (
								<option value={elms.value}>{elms.name}</option>
							))}
							<option value="Other">Add other category</option>
						</select>
					)}
				</label>

				<div className="flex justify-between my-4">
					<button
						disabled={!newSaving.description || !newSaving.amount}
						className={`${
							!newSaving.amount || !newSaving.description
								? "cursor-not-allowed disabled"
								: "cursor-pointer"
						}`}
						onClick={() => {
							// if (isEditing) {
							// 	dispatch(editItem(editingData._id, newSaving));
							// 	setIsEditing(false);
							// } else {
							dispatch(addSaving(newSaving));
							setToggle(false);
							// }
						}}>
						Add
					</button>
					<button
						onClick={() => {
							setToggle(false);
						}}>
						Discard
					</button>
				</div>
			</form>
		</div>
	);
};
