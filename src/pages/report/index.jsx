import { useSelector } from "react-redux";
import { Layout } from "../../components";
import { useState } from "react";
import { formatNumber } from "../../redux";
export const Reports = () => {
	const [selecetCategory, setSelectCategory] = useState("All");
	const [generateReport, setGenerateReport] = useState(false);
	const [showReport, setShoreport] = useState({
		totalIncome: 0,
		totalExpense: 0,
		totalSaving: 0,
	});
	const expenseData = useSelector((state) => state.expenseData);
	const savingData = useSelector((state) => state.savingData);
	const incomeData = useSelector((state) => state.incomeData);

	const totalAmountExpesne = expenseData?.reduce(
		(acc, curr) => acc + curr.amount,
		0
	);
	const totalIncome = incomeData?.reduce((acc, curr) => acc + curr.amount, 0);
	const totalSaving = savingData?.reduce((acc, curr) => acc + curr.amount, 0);

	const handleGenerateReport = () => {
		if (selecetCategory === "Income vs. Expenses") {
			setShoreport({
				...showReport,
				totalIncome: totalIncome,
				totalSaving: totalSaving,
				totalExpense: totalAmountExpesne,
			});
		}
	};
	return (
		<Layout>
			<div className="flex flex-col w-full p-4">
				<div className="flex justify-between">
					<h1 className="flex items-center text-xl font-semibold">Reports</h1>

					<select
						onChange={(e) => {
							setSelectCategory(e.target.value);
							setGenerateReport(false);
						}}
						className="p-3 border rounded-md">
						<option value="All">Select to Generate Report</option>
						<option value="Income vs. Expenses">Income vs. Expenses</option>
						<option value="Expense Breakdown">Expense Breakdown</option>
					</select>
					<button
						onClick={() => {
							setGenerateReport(!generateReport);
							handleGenerateReport();
						}}
						className="bg-blue-700 p-1 rounded-sm text-[#fff] px-2 mr-4">
						GENERATE REPORT
					</button>
				</div>
				{generateReport && selecetCategory !== "All" && (
					<div className="border p-2 mt-8">
						<tr className="flex justify-center w-full items-center px-3 border-b ">
							<th>REPORT</th>
						</tr>
						<tr className="flex justify-between w-full items-center px-3 border-b ">
							<td className="w-[40%] items-center flex">Total Income</td>
							<td className="w-[25%] items-center flex justify-center">
								{formatNumber(showReport.totalIncome)}
							</td>
						</tr>
						<tr className="flex justify-between w-full items-center px-3 border-b ">
							<td className="w-[40%] items-center flex">Total Expenses</td>
							<td className="w-[25%] items-center flex justify-center">
								{formatNumber(showReport.totalExpense)}
							</td>
						</tr>
						<tr className="flex justify-between w-full items-center px-3 border-b ">
							<td className="w-[40%] items-center flex">Total Savings</td>
							<td className="w-[25%] items-center flex justify-center">
								{formatNumber(showReport.totalSaving)}
							</td>
						</tr>
					</div>
				)}
			</div>
		</Layout>
	);
};
