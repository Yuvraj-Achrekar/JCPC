import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { IoClose } from "react-icons/io5";

const AppCard = ({ name }) => {
  return (
    <div className="bg-blue-400 border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 rounded-xl px-4 py-6 flex items-center justify-center text-center text-sm font-medium text-black shadow-sm">
      {name}
    </div>
  );
};

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
            <div className="sticky top-0 left-0 w-full bg-blue-800 text-white z-20 rounded-t-2xl px-6 py-4 shadow-md flex items-center justify-between">
              <h2 className="font-bold text-3xl">Additional Apps</h2>
              <IoClose
                onClick={() => setOpen(false)}
                size={28}
                className="hover:bg-red-500 hover:rounded-full p-1 cursor-pointer transition"
              />
            </div>

            {/* Content */}
            <div className="bg-gray-50 px-8 py-6 overflow-y-auto h-[calc(90vh-80px)]">
              {/* Overview Section */}
              <section className="bg-white p-6 rounded-xl shadow mb-8 border border-gray-200">
                <h2 className="text-xl font-semibold mb-4 text-blue-900">
                  Task Overview
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Conducted research to identify and evaluate additional
                  applications from 8 different categories available on{" "}
                  <a
                    href="https://flathub.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    www.flathub.org
                  </a>{" "}
                  that are compatible with JioPC, and provided insights and
                  recommendations for the same.
                </p>
              </section>

              {/* Applications Section */}
              <section className="bg-white p-6 rounded-xl shadow border border-gray-200">
                <h2 className="text-xl font-semibold mb-6 text-blue-900">
                  Applications Tested
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {apps.map((app, index) => (
                    <AppCard key={index} name={app} />
                  ))}
                </div>
              </section>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default SoftwareCenterApps;
