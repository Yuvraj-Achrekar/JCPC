import { useState } from "react";
import { FaProductHunt } from "react-icons/fa";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import { SquareArrowOutUpRight } from "lucide-react";

const products = [
  {
    name: "X2",
    description: "Affordable and efficient PC for everyday use",
    specs: [
      "CPU : ARM Cortex A53 Quad-Core",
      "2GB RAM",
      "Internal Storage: 32GB",
      "GPU : ARM G31 MP2",
    ],
  },
  {
    name: "X4",
    description: "Affordable and efficient PC for everyday use",
    specs: [
      "CPU : ARM Cortex A55 Quad-Core",
      "2GB RAM",
      "Internal Storage: 32GB",
      "GPU : ARM G31 MP2",
    ],
  },
];

export default function JCPCProduct() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-lg p-6 text-emerald-800 bg-emerald-300 cursor-pointer"
      onClick={() => setOpen(true)}
    >
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-10"
      >
        <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel className="relative max-w-[80%] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
              <div className="sticky top-0 left-0 w-full bg-blue-800 text-white z-20">
                <IoClose
                  onClick={() => setOpen(false)}
                  color="white"
                  size={26}
                  className="absolute top-2 right-3 hover:bg-red-500 hover:rounded-full p-1 cursor-pointer"
                />
                <p className="font-bold text-4xl text-center py-2">
                  Product Variants
                </p>
              </div>
              <div className=" pb-7 pt-5">
                <div className="flex flex-wrap justify-center gap-8 p-6">
                  {products.map((product) => (
                    <div
                      key={product.name}
                      className="w-full md:w-[70%] lg:w-[45%] flex flex-col border rounded-lg p-6 shadow-md"
                    >
                      <h3 className="text-xl font-semibold mb-4">
                        {product.name}
                      </h3>
                      {/* <p className="text-medium mb-4 leading-relaxed">
                        {product.description}
                      </p> */}
                      <h4 className="text-large font-semibold mb-2">
                        Specifications:
                      </h4>
                      <ul className="list-disc pl-5 text-sm space-y-1 leading-loose">
                        {product.specs.map((spec, index) => (
                          <li key={index} className="text-gray-700">
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-normal">Product Variants</h3>
          <p className="text-4xl font-semibold mt-2"> X2 & X4</p>
        </div>
        <div className="p-2 bg-white bg-opacity-30 rounded-lg">
          <FaProductHunt size={24} />
        </div>
      </div>
      <div className="flex justify-end">
        <SquareArrowOutUpRight />
      </div>
    </div>
  );
}
