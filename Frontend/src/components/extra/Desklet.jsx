import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

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
  <ul className="list-disc ml-6 space-y-1 text-gray-700">
    {items.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </ul>
);

const Desklets = ({ open, setOpen }) => {
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
              <h2 className="font-bold text-3xl">Additional Apps</h2>
              <IoClose
                onClick={() => setOpen(false)}
                size={28}
                className="hover:bg-red-500 hover:rounded-full p-1 cursor-pointer transition"
              />
            </div>

            {/* Content */}
            <div className="bg-gray-50 overflow-y-scroll p-6 space-y-6 max-h-[80vh] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
              {/* Overview Section */}

              {/* Overview */}
              <Section title="Task Overview">
                <p>
                  The team conducted thorough testing of interactive elements
                  like desklets and applets to ensure their performance and
                  stability. A total of 65 desklets and 251 applets were
                  evaluated. This testing ensured smooth user interaction and
                  system reliability.
                </p>
              </Section>

              {/* Sections */}
              <Section icon={<FaHome />} title="Testing Focus Area">
                <List
                  items={[
                    "Application Stability - (Crashes and Freeze Issue)",
                    "UI Performance - (lag & Graphical Glitches)",
                    "CPU and Memory Utilization",
                    "Verification of essential App-specific features",
                  ]}
                />
              </Section>

              {/* summary */}
              <Section title="Summary">
                <p>
                  The internal store of the product contains over 400
                  applications in the SIT environment. The team is responsible
                  for evaluating each application for statitity and usability.
                  Based on these test results, the product team decides whether
                  an app should be moved to the production environment.
                </p>
              </Section>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Desklets;
