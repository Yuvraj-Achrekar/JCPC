import React from "react";
import { IoClose } from "react-icons/io5";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Card, CardContent } from "@mui/material";

const mouseCards = [
	{
		title: "HP KM200",
		desc: "Durable, stable wireless connection, and 800-1000 DPI. Ideal for reliability.",
	},
	{
		title: "Logitech Media K400 Plus",
		desc: "Durable build with built-in touchpad and smooth wireless performance, ideal for multimedia use.",
	},
	{
		title: "ANT Value FKBRI05",
		desc: "Slim, basic design with smooth scroll and 1000 DPI, good for standard tasks at a budget.",
	},
	{
		title: "ANT ESPORTS WK100",
		desc: "Budget-friendly combo with built-in touchpad and stable wireless connectivity for everyday use.",
	},
	{
		title: "CK234",
		desc: "Durable, slim wireless combo with standard features suited for casual and office use.",
	},
	{
		title: "CK420",
		desc: "Affordable, lightweight option with 2.4GHz wireless and basic functionality for general use.",
	},
	{
		title: "CK801",
		desc: "Smooth 1200 DPI precision and slim design, though may face occasional wireless mouse detection issues.",
	},
];

const keyboardCards = [
	{
		title: "HP KM200",
		desc: "Full-size with a numpad, responsive keys, and minimal typing sound.",
	},
	{
		title: "Logitech Media K400 Plus",
		desc: "Compact and portable with built-in touchpad, volume control, minimal latency, and premium build—ideal for media and smart TV use.",
	},
	{
		title: "ANT Value FKBRI05",
		desc: "Basic full-size keyboard with stable wireless, moderate durability, and battery indicator—good for simple day-to-day tasks.",
	},
	{
		title: "ANT ESPORTS WK100",
		desc: "Sleek, portable combo with touchpad, responsive typing, and volume controls—great value for compact wireless use.",
	},
	{
		title: "CK234",
		desc: "Durable and compact keyboard with quiet keys, plug-and-play setup, and basic functionality—suits standard office tasks.",
	},
	{
		title: "CK420",
		desc: "Full-sized keyboard with decent durability and low latency; includes battery indicator but lacks advanced features.",
	},
	{
		title: "CK801",
		desc: "Reliable wireless combo with minimal latency, battery indicator, and quiet typing—offers balanced performance for daily use.",
	},
];

const PeripheralsComparison = ({ open, setOpen }) => {
	return (
		<Dialog
			open={open}
			onClose={() => setOpen(false)}
			className="relative z-10">
			<DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-sm" />

			<div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto ">
				<div className="flex items-center justify-center text-center h-screen w-screen">
					<DialogPanel className="relative w-[60%] h-fit max-h-[85%] overflow-scroll rounded-lg bg-white text-left shadow-xl transition-all mb-6">
						{/* Heading div */}
						<div className="sticky top-0 left-0 w-full bg-blue-800 text-white z-20">
							<IoClose
								onClick={() => setOpen(false)}
								color="white"
								size={26}
								className="absolute top-2 right-3 hover:bg-red-500 hover:rounded-full p-1 cursor-pointer"
							/>
							<h2 className="font-bold text-4xl text-center py-2">
								Peripherals Comparison
							</h2>
						</div>
						<div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-2">
							{/* Mouse Highlights */}
							<section className="mb-8">
								<h2 className="text-xl font-bold mb-4">Mouse Comparison </h2>

								<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
									{mouseCards.map((mouse) => (
										<div className="p-4 bg-white rounded-lg shadow hover:shadow-lg">
											<h3 className="font-semibold">{mouse.title}</h3>
											<p className="text-sm mt-1">{mouse.desc}</p>
										</div>
									))}
								</div>
							</section>

							{/* Keyboard Highlights */}
							<section className="mb-8">
								<h2 className="text-xl font-bold mb-4">Keyboard Comparison</h2>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
									{keyboardCards.map((keyboard) => (
										<div className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
											<h3 className="font-semibold">{keyboard.title}</h3>
											<p className="text-sm mt-1">{keyboard.desc}</p>
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

export default PeripheralsComparison;
