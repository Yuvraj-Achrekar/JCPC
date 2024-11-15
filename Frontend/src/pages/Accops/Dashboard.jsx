import CustomPieChart from "../../components/charts/CustomPieChart";
import StatCard from "../../components/StatCard";
import { AiOutlineIssuesClose } from "react-icons/ai";
import TeamData from "../../db/TeamData.json";
import { Bug } from "lucide-react";
import JioPcObservation from "./JioPcObservation";
import AreaChart from "../../components/charts/AreaGraph";
import Typewriter from "typewriter-effect";
import {
	issuePieChart,
	totalIssuePieChart,
	jioPcWorkItems,
	hpWorkItems,
	jioPcAreaChartData,
	hpAreaChartData,
	hpOpenIssuePieChart,
	jioPcOpenIssuePieChart,
} from "../../db/data";
import JCPCProduct from "../../components/JCPCProduct";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllProfiles } from "../../store/profilesSlice";
import { clearUser } from "../../store/userSlice";
import { Navigate } from "react-router-dom";
import { getUsers, logoutUser } from "../../lib/api";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
	const profiles = useSelector((state) => state.profile.profiles);
	// const user = useSelector((state) => state.user.user);
	const { isAuthenticated, user, logout } = useAuth();
	// const dispatch = useDispatch();

	useEffect(() => {
		// getUsers().then((res) => {
		// 	console.log(res.data);
		// 	dispatch(setAllProfiles(res.data));
		// });
	}, []);

	const logoutHandler = () => {
		logout();
	};

	return (
		<main className="flex-1 p-6 pt-12 overflow-y-auto mb-8">
			{/* Header */}
			<header className="mb-4 px-6 flex justify-between">
				<h1 className="text-4xl font-bold text-black">
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString(`Welcome, ${user.domainID}`)
								.pauseFor(2500)
								.start();
						}}
					/>
				</h1>
				<span className="cursor-pointer" onClick={logoutHandler}>
					Logout
				</span>
			</header>

			{/* Project Overview Section */}
			<div className=" mb-4 p-6 rounded-md flex gap-10 ">
				<div className="grid grid-cols-2 md:grid-cols-2 gap-6 w-[64%]">
					<JCPCProduct />
					<StatCard
						title="Total Bugs and Enhancements"
						value={totalIssuePieChart.reduce(
							(acc, item) => acc + item.value,
							0
						)}
						color="bg-sky-200"
						textColor="text-sky-800"
						icon={AiOutlineIssuesClose}
						pieData={totalIssuePieChart}
						shouldOpenModal={true}
					/>
					<StatCard
						title="JioPC Open Issues"
						value={jioPcOpenIssuePieChart.reduce(
							(acc, item) => acc + item.value,
							0
						)}
						color="bg-amber-200"
						textColor="text-amber-800"
						icon={Bug}
						pieData={jioPcOpenIssuePieChart}
						shouldOpenModal={true}
					/>
					<StatCard
						title="HP Chromebook Open Issues"
						value={hpOpenIssuePieChart.reduce(
							(acc, item) => acc + item.value,
							0
						)}
						color="bg-purple-200"
						textColor="text-purple-800"
						icon={Bug}
						pieData={hpOpenIssuePieChart}
						shouldOpenModal={true}
					/>
					{/* <StatCard
							title="Total Members"
							value={TeamData.length}
							color="bg-purple-200"
							textColor="text-purple-800"
							icon={Users}
							/> */}

					{/* JCPC productss */}
				</div>
				<div className="md:row-span-2 w-[36%]">
					<div className="mb-4 font-semibold text-xl flex items-center justify-center text-black ">
						Total Issues Raised (23rd Aug - 15th Oct)
					</div>
					<div className="w-full flex items-center justify-center">
						<CustomPieChart
							data={issuePieChart}
							radiusValue={30}
							label={"true"}
						/>
					</div>
				</div>
			</div>

			{/* Tasks Activity Table */}

			<section className=" text-black mb-4 p-6 rounded-lg flex gap-10 ">
				<JioPcObservation title="JioPC" workItems={jioPcWorkItems} />
				<AreaChart
					title="Issues Raised (23rd Aug - 15th Oct)"
					areaChartData={jioPcAreaChartData}
				/>
			</section>
			<section className=" text-black mb-4 p-6 rounded-lg flex gap-10 ">
				<JioPcObservation title="HP Chromebook" workItems={hpWorkItems} />
				<AreaChart
					title="Issues Raised (23rd Aug - 15th Oct)"
					areaChartData={hpAreaChartData}
				/>
			</section>
		</main>
	);
};

export default Dashboard;
