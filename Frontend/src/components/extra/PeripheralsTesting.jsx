import React from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { IoClose } from "react-icons/io5";

const AppCard = ({ name, color }) => {
  return (
    <div
      className={`bg-${color}-400 border border-${color}-100 hover:border-${color}-400 
      hover:shadow-lg transition-all duration-300 rounded-xl px-4 py-6 flex items-center 
      justify-center text-center text-sm font-medium text-black shadow-lg`}
    >
      {name}
    </div>
  );
};

const PeripheralsTesting = ({ open, setOpen }) => {
  const passedPeripherals = [
    "Amkette Primus Neo",
    "Logitech Media K400 Plus",
    "ANT Value FKBRI05 wireless combo",
    "CK234",
    "CK420",
    "CK801",
    "ZEB Companion 2",
    "HP KM250",
    "Logitech MK220",
    "Portonics Key2 combo",
    "Portonics Key5 combo",
    "Portonics Key7 combo",
    "Portonics Key9 combo",
    "HP KM260",
    "HP KM200",
    "HP CS10",
    "HP KM290",
    "HP KM270",
    "Logitech KM235",
    "ANT Esports MKWM2023",
  ];

  const failedPeripherals = [
    "ANT Esports WK100",
    "Amkette WI-KEY MINI 2",
    "Logitech MK275",
    "Portonics Key11 combo",
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
              <h2 className="font-bold text-3xl">Peripherals Testing</h2>
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
                <h2 className="text-xl font-semibold mb-1 text-blue-900">
                  Task Overview
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Conducted research to identify and evaluate additional
                  applications from 8 different categories available on that are
                  compatible with JioPC, and provided insights and
                  recommendations for the same.
                </p>

                {/* Applications Section */}

                {/* <h2 className="text-xl font-semibold mb-6 text-blue-900">
                  Peripherals Tested
                </h2> */}
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
              </section>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default PeripheralsTesting;
