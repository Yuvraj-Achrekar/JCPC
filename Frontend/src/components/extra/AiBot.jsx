import React from "react";
import { IoClose } from "react-icons/io5";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

const AiBot = ({ open, setOpen }) => {
	return (
		<Dialog
			open={open}
			onClose={() => setOpen(false)}
			className="relative z-10">
			<DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

			<div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto ">
				<div className="flex items-center justify-center text-center h-screen w-screen">
					<DialogPanel className="relative w-[60%] h-[85%] overflow-scroll rounded-lg bg-white text-left shadow-xl transition-all mb-6">
						<div className="sticky top-0 left-0 w-full bg-white z-20">
							<IoClose
								onClick={() => setOpen(false)}
								color="black"
								size={26}
								className="absolute top-2 right-2 hover:bg-red-500 hover:rounded-full p-1 cursor-pointer"
							/>
							<h2 className="font-bold text-4xl text-center py-2">
								AI Bot (Managed WiFi)
							</h2>
						</div>
						<div className="px-8">
							<div className="shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-md mt-2 p-2">
								<h4 className="font-bold text-2xl mb-4">Task Overview</h4>
								<p className="text-lg font-semibold">
									Our team successfully completed the task of creating distinct
									questions related to WiFi, simulating how users would
									naturally interact with an AI bot regarding WiFi issues,
									queries, or services. We generated over 900 indents that
									reflect two user segments.
								</p>
							</div>
							<div className="flex mt-10 justify-between gap-4">
								<div className="shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-md p-2">
									<h4 className="font-bold text-center text-2xl mb-4">
										Non-Technical Users
									</h4>
									<ul className="list-disc pl-6 text-lg font-semibold leading-6">
										<li>
											These users would ask simple, basic questions about WiFi
										</li>
										<li>
											They might be confused or unsure about technical terms and
											rely on plain language
										</li>
									</ul>
								</div>
								<div className="shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-md p-2">
									<h4 className="font-bold text-center text-2xl mb-4">
										Semi-Technical users
									</h4>
									<ul className="list-disc pl-6 text-lg font-semibold leading-6">
										<li>
											These users might be slightly familiar with WiFi concepts
											but may not know advanced details
										</li>
										<li>
											They might use basic tech terms but need more guidance.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
};

export default AiBot;