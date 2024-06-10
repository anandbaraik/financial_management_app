import { useEffect, useState } from "react";
import { Layout, Loader } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_SAVING, SORT_SAVING, getSaving } from "../../redux";
import moment from "moment/moment";
import { SavingForm } from "./savingForm";
import { formatNumber } from "../../redux";
export const Saving = () => {
	const [toggle, setToggle] = useState(false);

	const savingData = useSelector((state) => state.savingData);
	const loading = useSelector((state) => state.isLoading);

	const dispatch = useDispatch();

	const totalAmount = savingData?.reduce((acc, curr) => acc + curr.amount, 0);
	useEffect(() => {
		dispatch(getSaving());
	}, []);
	return (
		<Layout>
			<div className=" flex flex-col w-full p-4">
				<div className="flex justify-between">
					<h1 className="flex items-center text-xl font-semibold">
						Savings History
					</h1>
					<input
						type="text"
						placeholder="Search saving by category"
						className="p-2 border rounded-md "
						onChange={(e) =>
							dispatch({ type: FILTER_SAVING, payload: e.target.value })
						}
					/>
					<select
						onChange={(e) =>
							dispatch({ type: SORT_SAVING, payload: e.target.value })
						}
						className="p-3">
						<option value="All">Sort by Amount</option>
						<option value="LowToHigh">Low to High</option>
						<option value="HighToLow">High to Low</option>
					</select>

					<button
						onClick={() => setToggle(true)}
						className="bg-blue-700 p-1 rounded-sm text-[#fff] px-2 mr-4">
						ADD SAVING
					</button>
				</div>
				<div className="flex flex-col mt-8">
					{toggle && <SavingForm setToggle={setToggle} />}
					{loading ? (
						<Loader />
					) : (
						<>
							{savingData.length < 1 ? (
								<p className="flex w-full justify-center items-center text-2xl text-red-400">
									You Don't have any data
								</p>
							) : (
								<table className="w-full  flex flex-col items-center bg-slate-50">
									<tr className="flex justify-between w-full border-b px-3 items-center h-8">
										<th className="w-[40%] flex">Description</th>
										<th className="w-[25%]  ">Amount (in Rs)</th>
										<th className="w-[20%]  ">Category</th>
										<th className="w-[15%]  ">Date</th>
									</tr>

									{savingData?.map((item) => (
										<tr
											key={item._id}
											className="flex justify-between w-full items-center px-3 border-b ">
											<td className="w-[40%] items-center flex">
												{item.description}
											</td>
											<td className="w-[25%] items-center flex justify-center">
												{formatNumber(item.amount)}
											</td>
											<td className="w-[20%] items-center flex justify-center">
												{item.category}
											</td>
											<td className="w-[15%] items-center flex justify-center">
												{moment(item.createdAt).format("L")}
											</td>
										</tr>
									))}
									<tr className="flex w-full items-center px-3 border-b h-12">
										{" "}
										<td className="w-[40%] items-center flex  font-bold">
											Total Amount
										</td>
										<td className="w-[25%] items-center flex justify-center font-semibold">
											{formatNumber(totalAmount)}
										</td>
									</tr>
								</table>
							)}
						</>
					)}
				</div>
			</div>
		</Layout>
	);
};
