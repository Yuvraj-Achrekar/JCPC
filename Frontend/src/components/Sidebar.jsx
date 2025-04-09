import { LogOut } from "lucide-react";
import { MdSpaceDashboard } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdAdminPanelSettings } from "react-icons/md";
import { useAuth } from "../context/auth";
import { useState } from "react";

const Sidebar = () => {
	const { user, logout } = useAuth();
	const isAdmin = user?.isAdmin;

	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<aside className="w-1/7 min-w-56 bg-blue-800 text-white pt-12 pb-2 flex flex-col justify-between m-2 rounded-lg ">
			<div className="text-2xl font-bold px-3 py-2 text-center flex">
				<img
					src="/images/icons/JioCloudPc.png"
					alt="JioPC logo"
					className="w-[50px] h-[50px] rounded-lg block mx-auto mb-3"
				/>
			</div>
			<nav className="flex-grow">
				<ul className="space-y-4">
					<Li
						url="/accops/dashboard"
						title="Dashboard"
						location={location}
						Icon={<MdSpaceDashboard />}
					/>
					<Li
						url="/accops/activities"
						title="Extra Activities"
						location={location}
						Icon={<FaTasks />}
					/>
					<Li
						url="/accops/myteam"
						title="Team"
						location={location}
						Icon={<RiTeamFill />}
					/>
					<Li
						url={`/accops/profile/${user._id}`}
						title="Profile"
						location={location}
						Icon={<CgProfile />}
					/>
					{isAdmin && (
						<Li
							url="/accops/admin"
							title="Admin"
							location={location}
							Icon={<MdAdminPanelSettings />}
						/>
					)}
				</ul>
			</nav>
			<div
				className="hover:bg-blue-950 cursor-pointer rounded-xl mx-4 py-[5px] px-[12px]"
				onClick={() => {
					logout();
				}}>
				<span className="text-lg font-medium flex items-center gap-2">
					<LogOut />
					Logout
				</span>
			</div>
		</aside>
	);
};

const Li = ({ url, title, Icon, location }) => {
	const navigate = useNavigate();
	return (
		<li
			style={{
				backgroundColor: location.pathname.includes(url) ? "#f3f4f6" : "",
				padding: "5px 12px",
			}}
			className="hover:bg-blue-950 cursor-pointer rounded-xl mx-4"
			onClick={() => {
				navigate(`${url}`);
			}}>
			<span
				className="text-lg font-medium flex items-center gap-2"
				style={{
					color: location.pathname.includes(url) ? "#1e1926" : "white",
				}}>
				{Icon}
				{title}
			</span>
		</li>
	);
};

export default Sidebar;
