import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { IoClose } from "react-icons/io5";

const SoftwareCenterApps = ({ open, setOpen }) => {
	const apps = [
		"Eye of GNOME",
		"Gwenview",
		"GIMP",
		"Krita",
		"Okular",
		"Evince",
		"MPV",
		"GNOME Videos (Totem)",
		"Bluefish",
		"Brackets",
		"GNU Emacs",
		"Kate",
		"Komikku",
		"Crosswords",
		"Papers",
		"Vipsdisp",
		"Sly",
		"Words",
		"Dialect",
		"Firefox",
		"Adobe",
		"Photocrea",
		"Timer",
		"Insomnia",
	];

	return (
		<Dialog
			open={open}
			onClose={() => setOpen(false)}
			className="relative z-10">
			<DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-sm" />

			<div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto">
				<div className="flex items-center justify-center text-center h-screen w-screen">
					<DialogPanel className="relative w-[60%] h-fit max-h-[85%] overflow-scroll rounded-lg bg-white text-left shadow-xl transition-all mb-6">
						{/* Header Section */}
						<div className="sticky top-0 left-0 w-full bg-blue-800 text-white z-20">
							<IoClose
								onClick={() => setOpen(false)}
								color="white"
								size={26}
								className="absolute top-2 right-3 hover:bg-red-500 hover:rounded-full p-1 cursor-pointer"
							/>
							<h2 className="font-bold text-4xl text-center py-2">
								Additional Apps
							</h2>
						</div>

						{/* Overview Section */}
						<div className="bg-gray-100 p-8 mt-2 mb-2 rounded-md shadow-md max-w-4xl mx-auto">
							<section className="bg-white p-6 rounded-lg shadow mb-8">
								<h2 className="text-lg font-semibold mb-4">Task Overview</h2>
								<p className="bg-white rounded-lg">
									Conducted research to identify and evaluate additional
									applications from 8 different categories which are available
									on "www.flathub.org" that are compatible with JioPC, provided
									insights and recommendations for the same.
								</p>
							</section>

							{/* Applications Section */}
							<section className="bg-white p-6 rounded-lg shadow mb-6">
								<h2 className="text-lg font-semibold mb-5">
									Applications Tested
								</h2>

								<div className="grid grid-cols-4 gap-4">
									{apps.map((app, index) => (
										<div
											key={index}
											className="bg-blue-100 hover:bg-blue-200 transition-all duration-300 rounded-lg shadow p-4 text-center text-sm font-semibold">
											{app}
										</div>
									))}
								</div>
							</section>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
};

export default SoftwareCenterApps;
