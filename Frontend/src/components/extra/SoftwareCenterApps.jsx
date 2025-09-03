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
  <ul className="list-disc ml-6 space-y-1">
    {items.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </ul>
);

const SoftwareCenterApps = ({ open, setOpen }) => {
  const apps = [
    "GCompris",
    "Tux Paint",
    "LibreCAD",
    "VLC",
    "Lollypop",
    "Rhythmbox",
    "Audacious",
    "OBS Studio",
    "HandBrake",
    "GPodder",
    "ONLYOFFICE",
    "Zotero",
    "BleachBit",
    "Flatseal",
    "DBeaver",
    "ScummVM",
    "melonDS",
    "GnuCash",
    "Health",
    "Todoist: To-Do List & Tasks",
    "FileZilla",
    "KDiskMark",
    "MongoDB Compass",
    "Gitg",
    "Snes9x",
    "Heroic Games Launcher",
    "MyGNUHealth",
    "Inner Breeze",
    "Blanket",
    "Eye of GNOME",
    "Gwenview",
    "Krita",
    "Okular",
    "Evince",
    "MPV",
    "Bluefish",
    "GNU Emacs",
    "Kate",
    "Komikku",
    "Crosswords",
    "Papers",
    "Dialect",
    "Firefox",
    "Photocrea",
    "Timer",
    "Insomnia",
    "Upscaler",
  ];

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
            <div className="sticky top-0 left-0 w-full bg-blue-800 text-white z-20 p-4 rounded-t-2xl flex ">
              <h2 className="font-bold text-2xl text-center w-full">
                Additional Apps
              </h2>
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
                  The team tested over 400 internal apps in the SIT environment
                  to evaluate stability and usability. Key focus areas included
                  crashes, UI performance, resource usage, and core
                  functionalities. Test outcomes guided the product team's
                  decisions on moving apps to production.
                </p>
              </Section>

              {/* Sections */}
              <Section title="Testing Focus Area">
                <List
                  items={[
                    "Application Stability - ( Crashes and Freeze Issue )",
                    "UI Performance - ( Lag & Graphical Glitches )",
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

export default SoftwareCenterApps;
