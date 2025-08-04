import React from "react";
import { IoClose } from "react-icons/io5";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

const BotTestingSummary = ({ open, setOpen }) => {
  const contextBased = [
    { status: "Pass", count: 121, percentage: "69.14%" },
    { status: "Partial pass", count: 12, percentage: "6.86%" },
    { status: "Fail", count: 42, percentage: "24%" },
    { status: "Total", count: 175, percentage: "100%" },
  ];

  const openEnded = [
    { status: "Pass", count: 20, percentage: "66.67%" },
    { status: "Partial pass", count: 1, percentage: "3.33%" },
    { status: "Fail", count: 9, percentage: "30%" },
    { status: "Total", count: 30, percentage: "100%" },
  ];

  const observations = [
    "The bot is able to handle typos, casual tones and simple language.",
    "It successfully rejects and guides properly when non-English queries are inputed.",
    "The responses of the bot are instructive, friendly and non-technical.",
    "Fallback message is helpful when the input is unclear.",
  ];

  const issues = [
    "Profanity is not handled.",
    "Unusual behavior observed for ID - 7433381678: The bot responded to unrelated queries.",
    "Encountered an error while using the bot.",
    "Bot fails to answer registration flow questions (outside VDI).",
  ];

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-sm" />

      <div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto">
        <div className="flex items-center justify-center text-center h-screen w-screen">
          <DialogPanel className="relative w-[70%] h-fit max-h-[90%] overflow-y-scroll rounded-lg bg-white text-left shadow-xl transition-all mb-6">
            <div className="sticky top-0 left-0 w-full bg-blue-800 text-white z-20">
              <IoClose
                onClick={() => setOpen(false)}
                color="white"
                size={26}
                className="absolute top-2 right-3 hover:bg-red-500 hover:rounded-full p-1 cursor-pointer"
              />
              <h2 className="font-bold text-3xl text-center py-3">
                AI Assistant Testing Summary
              </h2>
            </div>

            <div className="bg-gray-100 p-8 space-y-6">
              <section className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">
                  General Observations
                </h2>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  {observations.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </section>

              <section className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">
                  Identified Issues
                </h2>
                <ul className="list-disc ml-6 space-y-2 text-red-700">
                  {issues.map((issue, index) => (
                    <li key={index}>{issue}</li>
                  ))}
                </ul>
              </section>

              <section className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">
                  Test Result Summary
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2 text-blue-800">
                      Context-Based
                    </h3>
                    <table className="w-full border text-sm text-left">
                      <thead className="bg-gray-200 text-gray-800">
                        <tr>
                          <th className="p-2">Status</th>
                          <th className="p-2">Count</th>
                          <th className="p-2">Percentage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {contextBased.map((row, index) => (
                          <tr key={index} className="border-t">
                            <td className="p-2">{row.status}</td>
                            <td className="p-2">{row.count}</td>
                            <td className="p-2">{row.percentage}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2 text-blue-800">
                      Open Ended
                    </h3>
                    <table className="w-full border text-sm text-left">
                      <thead className="bg-gray-200 text-gray-800">
                        <tr>
                          <th className="p-2">Status</th>
                          <th className="p-2">Count</th>
                          <th className="p-2">Percentage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {openEnded.map((row, index) => (
                          <tr key={index} className="border-t">
                            <td className="p-2">{row.status}</td>
                            <td className="p-2">{row.count}</td>
                            <td className="p-2">{row.percentage}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default BotTestingSummary;
