import { IoClose } from "react-icons/io5";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Monitor, Clock, Download, File, Layout, Image } from "lucide-react";

const OsComparison = ({ open, setOpen }) => {
	const categories = [
		{ name: "Boot Time", unit: "seconds" },
		{ name: "Download Speed", unit: "mbps" },
		{ name: "File Extraction", unit: "seconds" },
	];

	const systems = [
		{ name: "Cinnamon 445RG7", type: "cinnamon" },
		{ name: "Cinnamon X2", type: "cinnamon" },
		{ name: "Cinnamon X4", type: "cinnamon" },
		{ name: "Windows 445RG6", type: "windows" },
		{ name: "Windows X2", type: "windows" },
		{ name: "Windows X4", type: "windows" },
	];

	const getPerformanceColor = (value, metric) => {
		if (metric === "Download Speed") {
			return value > 1000
				? "bg-green-100"
				: value > 500
				? "bg-yellow-100"
				: "bg-red-100";
		}
		// For time-based metrics, lower is better
		return value < 5
			? "bg-green-100"
			: value < 10
			? "bg-yellow-100"
			: "bg-red-100";
	};

	const performanceData = {
		"Boot Time": {
			"Cinnamon 445RG7": 22,
			"Cinnamon X2": 1,
			"Cinnamon X4": 1,
			"Windows 445RG6": 16.4,
			"Windows X2": 15.66,
			"Windows X4": 7.4,
		},
		"Download Speed": {
			"Cinnamon 445RG7": 75,
			"Cinnamon X2": 789,
			"Cinnamon X4": 707,
			"Windows 445RG6": 120,
			"Windows X2": 1412,
			"Windows X4": 1192,
		},
		"File Extraction": {
			"Cinnamon 445RG7": 2.0,
			"Cinnamon X2": 1.34,
			"Cinnamon X4": 2.12,
			"Windows 445RG6": 11.26,
			"Windows X2": 11.26,
			"Windows X4": 18.18,
		},
	};

	return (
		<Dialog
			open={open}
			onClose={() => setOpen(false)}
			className="relative z-10">
			<DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

			<div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto ">
				<div className="flex items-center justify-center text-center h-screen w-screen">
					<DialogPanel className="relative w-[60%] h-[85%] overflow-scroll rounded-lg bg-white text-left shadow-xl transition-all mb-6">
						<div className="sticky top-0 left-0 w-full bg-blue-800 text-white z-20">
							<IoClose
								onClick={() => setOpen(false)}
								color="white"
								size={26}
								className="absolute top-2 right-3 hover:bg-red-500 hover:rounded-full p-1 cursor-pointer"
							/>
							<h2 className="font-bold text-4xl text-center py-2">
								OS Comparison
							</h2>
						</div>

						<div className="bg-gray-100 flex flex-col gap-6 p-8">
							<div className="bg-white rounded-md mt-2 p-2 ">
								<h4 className="ml-2 text-2xl mb-4">Task Overview</h4>
								<p className="ml-1">
									We conducted a comprehensive performance comparison across
									multiple systems and operating environments. The evaluation
									focused on download speeds, video processing, application
									performance, multimedia playback, and overall system
									stability.
								</p>
							</div>
							<div className="mt-4 text-center">
								<div className="items-center text-center space-x-4 mt-2">
									<span className="border-l-4 border-green-500 rounded-md px-2 border">
										Cinnamon
									</span>
									<span>VS</span>
									<span className="border-l-4 border-blue-500 rounded-md px-2 border">
										Windows
									</span>
								</div>
							</div>
							<div className="bg-white rounded-md">
								{categories.map((category) => (
									<div className="p-4 m-2 rounded-md ">
										<h3 className="mb-4 text-lg font-semibold">
											{category.name}
										</h3>
										<div className="grid md:grid-cols-3 grid-cols-2 gap-4">
											{systems.map((system) => (
												<div
													className={`p-4 rounded-lg ${getPerformanceColor(
														performanceData[category.name]?.[system.name],
														category.name
													)} border ${
														system.type === "cinnamon"
															? "border-l-4 border-green-500"
															: "border-l-4 border-blue-500"
													}`}>
													<div className="text-sm font-medium mb-2">
														{system.name}
													</div>
													<div className="text-lg font-bold">
														{performanceData[category.name]?.[system.name]}{" "}
														{category.unit}
													</div>
												</div>
											))}
										</div>
									</div>
								))}
							</div>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
};

export default OsComparison;
