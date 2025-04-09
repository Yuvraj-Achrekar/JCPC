import React from "react";
import { IoClose } from "react-icons/io5";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { FaLink, FaChalkboardTeacher, FaListAlt } from "react-icons/fa";

const EmbibeTesting = ({ open, setOpen }) => {
	return (
		<Dialog
			open={open}
			onClose={() => setOpen(false)}
			className="relative z-10">
			<DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-sm" />

			<div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto">
				<div className="flex items-center justify-center min-h-screen p-4">
					<DialogPanel className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-white text-left shadow-2xl">
						{/* Header */}
						<div className="sticky top-0 left-0 w-full bg-blue-800 text-white z-20 p-4 rounded-t-2xl flex justify-between items-center shadow">
							<h2 className="font-bold text-2xl text-center w-full">
								LearnLite & TeachLite Report
							</h2>
							<IoClose
								onClick={() => setOpen(false)}
								color="white"
								size={26}
								className="absolute right-4 top-4 hover:bg-red-600 transition p-1 rounded-full cursor-pointer"
							/>
						</div>

						{/* Content */}
						<div className="bg-gray-50 overflow-y-scroll p-6 space-y-6 max-h-[80vh] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
							{/* Test URLs */}
							<Section icon={<FaLink />} title="Test Details">
								<ul className="list-disc ml-6 space-y-2 text-gray-700">
									<li>
										<strong>LearnLite URL:</strong>{" "}
										<a
											href="https://school.embibe.com/teach/learn-lite/welcome"
											className="text-blue-600 underline hover:text-blue-800 transition"
											target="_blank"
											rel="noopener noreferrer">
											https://school.embibe.com/teach/learn-lite/welcome
										</a>
									</li>
									<li>
										<strong>TeachLite URL:</strong>{" "}
										<a
											href="https://school.embibe.com/teach/lite/welcome"
											className="text-blue-600 underline hover:text-blue-800 transition"
											target="_blank"
											rel="noopener noreferrer">
											https://school.embibe.com/teach/lite/welcome
										</a>
									</li>
								</ul>
							</Section>

							{/* LearnLite */}
							<Section icon={<FaListAlt />} title="Learn Lite Summary">
								<List
									items={[
										"Lag observed while navigating sections.",
										"All videos remain in an infinite loading state (some intermittently).",
										"Course progress is not retained.",
										"Horizontal scrolling of books is not smooth.",
										"Language dropdown selection does not reflect.",
										"Search functionality works fine (outside interactive section).",
										"The Change Goal section and questions perform well.",
										"Audio plays clearly without distortion.",
										"Report after session ends works correctly.",
									]}
								/>
							</Section>

							{/* TeachLite */}
							<Section
								icon={<FaChalkboardTeacher />}
								title="Teach Lite Summary">
								<List
									items={[
										"Whiteboard tools experience lag in drawing/writing",
										"3D models have frame drops and lag",
										"No option to switch back to previous content after whiteboard",
										"“With Voice” and “Without Voice” restart the lesson",
										"Recently taught classes are not saved for revisit",
										"Navigation in “Images” section (next/previous) does not work",
										"Search in “Add Interactive Elements” does not work",
										"Selection tool, shapes, board color, grid, and clear drawing work properly",
										"“Add Lessons” and “Practice Lessons” work fine",
										"Quiz section works well (hint, solution, difficulty selection)",
									]}
								/>
							</Section>

							{/* Issue Sheet */}
							{/* <Section icon={<FaFileAlt />} title="Issue Sheet">
								<p>
									Please refer to the detailed issue sheet:{" "}
									<span className="text-blue-600 underline cursor-pointer hover:text-blue-800 transition">
										Embibe Issue Sheet.xlsx
									</span>
								</p>
							</Section> */}
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
};

// Reusable Components
const Section = ({ title, icon, children }) => (
	<section className="bg-white p-5 rounded-xl shadow-md">
		<h3 className="text-xl font-semibold flex items-center gap-2 mb-3 text-blue-700">
			{icon} {title}
		</h3>
		{children}
	</section>
);

const List = ({ items }) => (
	<ul className="list-disc ml-6 space-y-1 text-gray-700">
		{items.map((item, idx) => (
			<li key={idx}>{item}</li>
		))}
	</ul>
);

export default EmbibeTesting;
