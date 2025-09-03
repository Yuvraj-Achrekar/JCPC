import React from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

const List = ({ items }) => (
  <ul className="list-disc ml-6 space-y-1">
    {items.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </ul>
);

// Helper components
const Section = ({ title, icon, children }) => (
  <section className="bg-white p-5 rounded-xl shadow-md">
    <h3 className="text-xl font-semibold flex items-center gap-2 mb-3 text-blue-700">
      {icon} {title}
    </h3>
    {children}
  </section>
);

const PeripheralsTesting = ({ open, setOpen }) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-sm" />

      <div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen w-full px-4 py-8">
          <DialogPanel className="relative w-full max-w-6xl h-fit max-h-[90vh] overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all">
            {/* Header */}
            <div className="sticky top-0 left-0 w-full bg-blue-800 text-white z-20 rounded-t-2xl px-6 py-4 shadow-md flex items-center justify-between">
              <h2 className="font-bold text-2xl text-center w-full ">
                Peripherals Testing
              </h2>
              <IoClose
                onClick={() => setOpen(false)}
                size={28}
                className="hover:bg-red-500 hover:rounded-full p-1 cursor-pointer transition"
              />
            </div>

            {/* Content */}
            <div className="bg-gray-50 overflow-y-scroll p-6 space-y-6 max-h-[80vh] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
              {/* Overview */}
              <Section title="Task Overview">
                <p>
                  The team tested 23 wireless keyboards and mice to ensure
                  compatibility and user experience before bundling with the
                  product. Testing covered key functionality, ergonomics, build
                  quality, responsiveness, and battery requirements. Input
                  latency and wireless performance were also thoroughly
                  evaluated.
                </p>
              </Section>

              {/* Sections */}
              <Section title="Testing Focus Area">
                <List
                  items={[
                    "Functionality of all keys and keyboard shortcuts",
                    "Ergonomics and handling comfort",
                    "Build durability and material quality",
                    "Sensitivity and typing responsiveness",
                    "Special features and usability",
                    "Battery type and power requirements",
                    "Input latency and wireless response",
                  ]}
                />
              </Section>

              {/* <Section>
                <div>
                  <p className="text-lg font-semibold mb-2 text-blue-900">
                    Passed
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {passedPeripherals.map((app, index) => (
                    <AppCard key={index} name={app} color="green" />
                  ))}
                </div>
                <div>
                  <p className="text-lg font-semibold mb-2 mt-2 text-blue-900">
                    Failed
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {failedPeripherals.map((app, index) => (
                    <AppCard key={index} name={app} color="red" />
                  ))}
                </div>
              </Section> */}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default PeripheralsTesting;
