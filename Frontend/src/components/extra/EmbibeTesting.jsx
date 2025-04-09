import React from "react";
import { IoClose } from "react-icons/io5";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

const EmbibeTesting = ({ open, setOpen }) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

      <div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto">
        <div className="flex items-center justify-center text-center h-screen w-screen">
          <DialogPanel className="relative w-[60%] h-fit max-h-[90%] overflow-scroll rounded-lg bg-white text-left shadow-xl transition-all mb-6">
            <div className="sticky top-0 left-0 w-full bg-blue-800 text-white z-20">
              <IoClose
                onClick={() => setOpen(false)}
                color="white"
                size={26}
                className="absolute top-2 right-3 hover:bg-red-500 hover:rounded-full p-1 cursor-pointer"
              />
              <h2 className="font-bold text-3xl text-center py-2">
                LearnLite Embibe VDI Report
              </h2>
            </div>

            <div className="bg-gray-100 p-8 mt-2 mb-2 rounded-md shadow-md max-w-4xl mx-auto">
              {/* Basic Info */}
              <section className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-lg font-semibold mb-4">Test Details</h2>
                <ul className="list-disc ml-4 space-y-2">
                  <li>
                    <strong>LearnLite URL:</strong>{" "}
                    <a
                      href="https://school.embibe.com/teach/learn-lite/welcome"
                      className="text-blue-600 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://school.embibe.com/teach/learn-lite/welcome
                    </a>
                  </li>
                  <li>
                    <strong>TeachLite URL:</strong>{" "}
                    <a
                      href="https://school.embibe.com/teach/lite/welcome"
                      className="text-blue-600 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://school.embibe.com/teach/lite/welcome
                    </a>
                  </li>
                  <li>
                    <strong>License Key:</strong> 321568905629
                  </li>
                </ul>
              </section>

              {/* General Findings */}
              <section className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-lg font-semibold mb-3">
                  General Observations
                </h2>
                <ul className="list-disc ml-4 space-y-2">
                  <li>Lag observed while navigating sections.</li>
                  <li>
                    All videos remain in an infinite loading state (some
                    intermittently).
                  </li>
                  <li>Course progress is not retained.</li>
                  <li>Horizontal scrolling of books is not smooth.</li>
                  <li>Language dropdown selection does not reflect.</li>
                  <li>
                    Search functionality works fine (outside interactive
                    section).
                  </li>
                  <li>The Change Goal section and questions perform well.</li>
                  <li>Audio plays clearly without distortion.</li>
                  <li>Report after session ends works correctly.</li>
                </ul>
              </section>

              {/* Section-wise Summary */}
              <section className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-lg font-semibold mb-3">
                  Section-wise Findings
                </h2>

                {/* Home */}
                <h3 className="font-semibold mb-1">Home</h3>
                <ul className="list-disc ml-6 mb-4 space-y-1">
                  <li>Initial graphics load properly</li>
                  <li>Carousel images lag</li>
                  <li>Chatbot is functional but gives unhelpful responses</li>
                  <li>Video in education banner is cropped</li>
                  <li>Brief white screen before animation banner loads</li>
                </ul>

                {/* Learn */}
                <h3 className="font-semibold mb-1">Learn</h3>
                <ul className="list-disc ml-6 mb-4 space-y-1">
                  <li>Videos load slowly and lag during playback</li>
                  <li>Infinite loading in “About this Chapter” cards</li>
                  <li>Session summary feature works fine</li>
                </ul>

                {/* Practice */}
                <h3 className="font-semibold mb-1">Practice</h3>
                <ul className="list-disc ml-6 mb-4 space-y-1">
                  <li>Voice input via microphone does not work properly</li>
                </ul>

                {/* Test */}
                <h3 className="font-semibold mb-1">Test</h3>
                <ul className="list-disc ml-6 mb-4 space-y-1">
                  <li>Test flow and feedback work as expected</li>
                </ul>

                {/* Achieve */}
                <h3 className="font-semibold mb-1">Achieve</h3>
                <ul className="list-disc ml-6 mb-4 space-y-1">
                  <li>Loader graphics display correctly</li>
                </ul>

                {/* Side Menu */}
                <h3 className="font-semibold mb-1">Side Menu</h3>
                <ul className="list-disc ml-6 mb-4 space-y-1">
                  <li>Subscription & Payments page appears empty</li>
                </ul>
              </section>

              {/* Whiteboard & Interactive */}
              <section className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-lg font-semibold mb-3">
                  Whiteboard & Interactive Tools
                </h2>
                <ul className="list-disc ml-4 space-y-2">
                  <li>Whiteboard tools experience lag in drawing/writing</li>
                  <li>3D models have frame drops and lag</li>
                  <li>
                    No option to switch back to previous content after
                    whiteboard
                  </li>
                  <li>“With Voice” and “Without Voice” restart the lesson</li>
                  <li>Recently taught classes are not saved for revisit</li>
                  <li>
                    Navigation in “Images” section (next/previous) does not work
                  </li>
                  <li>Search in “Add Interactive Elements” does not work</li>
                  <li>
                    Selection tool, shapes, board color, grid, and clear drawing
                    work properly
                  </li>
                  <li>“Add Lessons” and “Practice Lessons” work fine</li>
                  <li>
                    Quiz section works well (hint, solution, difficulty
                    selection)
                  </li>
                </ul>
              </section>

              {/* Issue Sheet */}
              <section className="bg-white p-6 rounded-lg shadow mb-8">
                <h2 className="text-lg font-semibold mb-3">Issue Sheet</h2>
                <p>
                  Please refer to the detailed issue sheet:{" "}
                  <span className="text-blue-600 underline cursor-pointer">
                    Embibe Issue Sheet.xlsx
                  </span>
                </p>
              </section>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default EmbibeTesting;
