import { IoClose } from "react-icons/io5";
import "../../styles/activities.css";

const OsResearch = ({ close }) => {
	return (
		<div className="card-details relative max-h-screen">
			{/* <p
				className="close-btn absolute bg-black text-white z-50 p-2"
				onClick={close}>
				&times;
			</p> */}
			<div>
				<h2 className="font-bold text-4xl text-center mb-4">OS Research</h2>
				<IoClose
					onClick={close}
					color="black"
					size={26}
					className="fixed right-3 top-2 hover:bg-red-500 hover:rounded-full p-1"
				/>
			</div>
			<div className=" overflow-y-scroll">
				<img
					src="/images/extra/OS_Image.png"
					alt="OS Research Image"
					className="object-contain w-full"
					loading="lazy"
				/>
			</div>
		</div>
	);
};

export default OsResearch;