import React from "react";
import { IoClose } from "react-icons/io5";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { FaHome } from "react-icons/fa";

const EmbibeSectionReport = ({ open, setOpen }) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-sm" />

      <div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen p-4">
          <DialogPanel className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-2xl bg-white text-left shadow-2xl">
            {/* Header */}
            <div className="sticky top-0 left-0 w-full bg-blue-800 text-white z-20 p-4 rounded-t-2xl flex justify-between items-center">
              <h2 className="font-bold text-2xl text-center w-full">
                Embibe Website Testing
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
              {/* Overview */}
              <Section title="Overview">
                <p>
                  The team tasted the Embibe LeanLits application, which was
                  being considered for integration with the product. The Android
                  TV application was manually installed and tested.
                </p>
              </Section>

              {/* Sections */}
              <Section title="Testing Focus Area">
                <List
                  items={[
                    "User interface and navigation",
                    "Contant variety and quality (e.g., quizzes, video lessons, 30 simulations, books)",
                    "App performance (lagg, crashes)",
                    "Coverage across academic and competitive domaina like school curriculum",
                    "UPSC, MBA, Medical, and Engineering Exams",
                  ]}
                />
              </Section>

              <Section title="Summary">
                <p>
                  The team tested the Embibe LeanLits app for potential product
                  integration, While focusing was on key aspects of app like
                  UI/navigation, content quality, app performance, and domain
                  coverage. The app was evaluated across school and competitive
                  exams like UPSC, MBA, Medical, and Engineering.
                </p>
              </Section>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

// Helper components
const Section = ({ title, icon, children }) => (
  <section className="bg-white p-5 rounded-xl shadow-md">
    <h3 className="text-xl font-semibold flex items-center gap-2 mb-3 text-blue-700">
      {icon} {title}
    </h3>
    {children}
  </section>
);

const List = ({ items }) => (
  <ul className="list-disc ml-6 space-y-1">
    {items.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </ul>
);

export default EmbibeSectionReport;
