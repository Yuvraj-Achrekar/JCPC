import { IoClose } from "react-icons/io5";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { FaHome } from "react-icons/fa";

const CameraAndMicrophoneTesting = ({ open, setOpen }) => {
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
                Camera and Mic Testing
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
                 The team performed detailed testing of the camera and microphone functionality on JioPC inside the VDI environment. Multiple video conferencing platforms were evaluated, including Google Meet, Microsoft Teams, and Zoom.
                </p>
              </Section>

              {/* Sections */}
              <Section title="Scenarios Covered:">
                <List
                  items={[
                    "One participant on VDI and another on laptop",
                    "Multiple users joining from VDI",
                    "Multiple participants joining simultaneously",
                    "Testing across different environments, including home setups and TV displays"
                  ]}
                />
              </Section>

              <Section title="Summary">
                <p>
                  During these tests, echo issues were observed during video calls. To address this, the team performed additional testing on builds containing echo cancellation improvements.
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

export default CameraAndMicrophoneTesting;
