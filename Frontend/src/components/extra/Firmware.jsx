import React from "react";
import { IoClose } from "react-icons/io5";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

const X2 = [
  { Model: "JHSD", Version: "11.2.4818-D", percentage: "69.14%" },
  { Model: "JHSC", Version: "11.2.4817-D", percentage: "6.86%" },
  { Model: "JHSB", Version: "11.2.4818", percentage: "24%" },
];

const X4 = [
  { Model: "JMSD", Version: "24.1.01", percentage: "66.67%" },
  { Model: "JMSC", Version: "24.1.01", percentage: "3.33%" },
  { Model: "JMSK", Version: "24.1.13", percentage: "30%" },
];

const Firmware = ({ open, setOpen }) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-sm" />

      <div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen p-4">
          <DialogPanel className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-white text-left shadow-2xl">
            {/* Header */}
            <div className="sticky top-0 left-0 w-full bg-blue-800 text-white z-20 p-4 rounded-t-2xl flex justify-between items-center">
              <h2 className="font-bold text-2xl text-center w-full">
                Firmware Checklist
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
                  The team tested the different versions of firmwares across
                  multiple hardware devices provided by the product team. This
                  includes key functionality tests and checklist execution which
                  focues on camera-mic and USB support testing.
                </p>
              </Section>

              {/* Firmware List */}
              <Section
                title="Device List along with updated Firmware:"
                className="bg-white p-6 rounded-lg shadow"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">X2</h3>
                    <table className="w-full border text-sm text-left">
                      <thead className="bg-gray-200 text-gray-800">
                        <tr>
                          <th className="p-2">Model</th>
                          <th className="p-2">Version</th>
                          {/* <th className="p-2">Percentage</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {X2.map((row, index) => (
                          <tr key={index} className="border-t">
                            <td className="p-2">{row.Model}</td>
                            <td className="p-2">{row.Version}</td>
                            {/* <td className="p-2">{row.percentage}</td> */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">X4</h3>
                    <table className="w-full border text-sm text-left">
                      <thead className="bg-gray-200 text-gray-800">
                        <tr>
                          <th className="p-2">Model</th>
                          <th className="p-2">Version</th>
                          {/* <th className="p-2">Percentage</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {X4.map((row, index) => (
                          <tr key={index} className="border-t">
                            <td className="p-2">{row.Model}</td>
                            <td className="p-2">{row.Version}</td>
                            {/* <td className="p-2">{row.percentage}</td> */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Section>

              {/* summary */}
              <Section title="Summary">
                <p>
                  The team manually updated the firmware of various hardware
                  devices whenever a new version was provided by the product
                  team. After each update, detailed verification was performed,
                  which included testing all keys and shortcuts on the keyboard,
                  and executing checklists curated by both the team and the
                  product team.
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

export default Firmware;
