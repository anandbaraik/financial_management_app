import { useState } from "react";
import { useDispatch } from "react-redux";
import { addIncome } from "../../redux";

export const IncomeForm = ({ setToggle }) => {
	const [newIncome, setNewIncome] = useState({
		amount: 0,
		description: "",
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
						value={newIncome.description}
						onChange={(e) =>
							setNewIncome({ ...newIncome, description: e.target.value })
						}
					/>
				</label>

				<label htmlFor="" className="flex flex-col gap-1 ">
					amount
					<input
						type="number"
						placeholder="amount"
						className="p-2 px-4 rounded"
						value={newIncome.amount}
						onChange={(e) =>
							setNewIncome({ ...newIncome, amount: e.target.value })
						}
					/>
				</label>

				<div className="flex justify-between my-4">
					<button
						disabled={!newIncome.description || !newIncome.amount}
						className={`${
							!newIncome.amount || !newIncome.description
								? "cursor-not-allowed disabled"
								: "cursor-pointer"
						}`}
						onClick={() => {
							// if (isEditing) {
							// 	dispatch(editItem(editingData._id, newIncome));
							// 	setIsEditing(false);
							// } else {
							dispatch(addIncome(newIncome));
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
