import React from "react";
import { IoClose } from "react-icons/io5";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

const EmbibeSectionReport = ({ open, setOpen }) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

      <div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto">
        <div className="flex items-center justify-center text-center h-screen w-screen">
          <DialogPanel className="relative w-[60%] h-fit max-h-[85%] overflow-scroll rounded-lg bg-white text-left shadow-xl transition-all mb-6">
            <div className="sticky top-0 left-0 w-full bg-blue-800 text-white z-20">
              <IoClose
                onClick={() => setOpen(false)}
                color="white"
                size={26}
                className="absolute top-2 right-3 hover:bg-red-500 hover:rounded-full p-1 cursor-pointer"
              />
              <h2 className="font-bold text-3xl text-center py-2">
                Embibe Website Section-wise Report
              </h2>
            </div>

            <div className="bg-gray-100 p-8 mt-2 mb-2 rounded-md shadow-md max-w-4xl mx-auto">
              <section className="bg-white p-6 rounded-lg shadow mb-8">
                <h2 className="text-lg font-semibold mb-4">Overview</h2>
                <p>
                  We checked the Embibe website across various sections,
                  including Home, Learn, Practice, Test, Achieve, and Side Menu.
                  Below is a section-wise summary of the findings.
                </p>
              </section>

              {/* Home Section */}
              <section className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-lg font-semibold mb-3">Home Section</h2>
                <ul className="list-disc ml-4 space-y-2">
                  <li>Initial graphics load properly</li>
                  <li>Carousel images lag while navigating</li>
                  <li>
                    Chatbot is functional but provides inaccurate/unhelpful
                    responses
                  </li>
                  <li>
                    Video in "Most Powerful Education Platform Ever Invented"
                    section is cropped
                  </li>
                  <li>
                    White screen appears briefly before animation banner loads
                  </li>
                </ul>
              </section>

              {/* Learn Section */}
              <section className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-lg font-semibold mb-3">Learn Section</h2>
                <ul className="list-disc ml-4 space-y-2">
                  <li>Videos take time to load and playback is laggy</li>
                  <li>
                    Infinite loading occurs when clicking cards under "About
                    this Chapter"
                  </li>
                  <li>Session summary feature works as expected</li>
                </ul>
              </section>

              {/* Practice Section */}
              <section className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-lg font-semibold mb-3">Practice Section</h2>
                <ul className="list-disc ml-4 space-y-2">
                  <li>Microphone-based voice input does not work properly</li>
                </ul>
              </section>

              {/* Test Section */}
              <section className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-lg font-semibold mb-3">Test Section</h2>
                <ul className="list-disc ml-4 space-y-2">
                  <li>User is able to give tests successfully</li>
                  <li>Test feedback works properly</li>
                </ul>
              </section>

              {/* Achieve Section */}
              <section className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-lg font-semibold mb-3">Achieve Section</h2>
                <ul className="list-disc ml-4 space-y-2">
                  <li>Loader graphics display correctly</li>
                </ul>
              </section>

              {/* Side Menu */}
              <section className="bg-white p-6 rounded-lg shadow mb-8">
                <h2 className="text-lg font-semibold mb-3">Side Menu</h2>
                <ul className="list-disc ml-4 space-y-2">
                  <li>Subscription & Payments page appears empty</li>
                </ul>
              </section>

              {/* Issue Sheet Link */}
              <section className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-lg font-semibold mb-3">Issue Sheet</h2>
                <p>
                  Please refer to the issue sheet for detailed logs:{" "}
                  <span className="text-blue-600 underline cursor-pointer">
                    Embibe Issue Sheet.xlsx
                  </span>{" "}
                  {/* You can replace this with an actual downloadable link if available */}
                </p>
              </section>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default EmbibeSectionReport;
