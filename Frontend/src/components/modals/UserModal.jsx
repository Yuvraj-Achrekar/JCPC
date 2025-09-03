import { Dialog, DialogPanel } from "@headlessui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IoClose } from "react-icons/io5";
import { useCarousel } from "../../hooks/useCarousel";
import { useEffect, useState } from "react";
import BarGraph from "../charts/BarGraph";

export default function UserModal({ open, setOpen, initialUser, users }) {
  const [barGraph, setBarGraph] = useState(false);

  const initialIndex = users.findIndex(
    (user) => user.name === initialUser.name
  );
  const {
    currentItem: user,
    prev,
    next,
    hasNext,
    hasPrev,
    currentIndex,
    goTo,
  } = useCarousel(users, initialIndex);

  const compareGraph = [
    {
      name: "score",
      Previous: user.score.previous,
      Current: user.score.current,
    },
  ];

  const issue = [
    { value: user.issues.blocker, label: "Blocker" },
    { value: user.issues.critical, label: "Critical" },
    { value: user.issues.major, label: "Major" },
    { value: user.issues.normal, label: "Normal" },
    { value: user.issues.minor, label: "Minor" },
  ];

  const maxValue = Math.max(...issue.map((item) => item.value));

  // Reset carousel position when modal opens with a new initial user
  useEffect(() => {
    if (open && initialUser) {
      const newIndex = users.findIndex(
        (user) => user.name === initialUser.name
      );
      goTo(newIndex);
    }
  }, [open, initialUser, users]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!open) return;

      switch (event.key) {
        case "ArrowLeft":
          if (hasPrev) {
            event.preventDefault();
            prev();
          }
          break;
        case "ArrowRight":
          if (hasNext) {
            event.preventDefault();
            next();
          }
          break;
        case "Escape":
          setOpen(false);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, hasPrev, hasNext, prev, next, setOpen]);

  if (!user) return null;
  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      className="relative z-10"
    >
      <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

      <div className="fixed inset-0 flex z-10 w-full ">
        <div className="flex w-full max-w-4xl mx-auto items-center justify-center p-4">
          <DialogPanel className="w-full rounded-lg bg-white shadow-xl overflow-hidden h-fit ">
            {hasPrev && (
              <button
                type="button"
                className="absolute left-20 top-[40%] text-white hover:text-gray-400"
                onClick={prev}
              >
                <ChevronLeft size={"100"} strokeWidth={"3"} />
              </button>
            )}
            <div className="relative px-4">
              <span
                className="absolute right-2 z-10"
                onClick={() => setOpen(false)}
              >
                <IoClose
                  color="black"
                  size={26}
                  className=" hover:bg-red-500 hover:rounded-full cursor-pointer"
                />
              </span>
              <div className="relative px-4 pb-4">
                <div className="flex mt-2 pt-2">
                  <img
                    className="w-32 h-32 rounded-full border-4 border-blue-800 object-cover bg-white"
                    src={user.image}
                    onError={(e) => {
                      e.target.src = "/images/profile/default.png";
                    }}
                    alt="Profile picture"
                  />
                  <div className="flex justify-between items-center flex-grow pl-4">
                    <div>
                      <h1 className="text-4xl font-bold mb-2">{user.name}</h1>
                      <p className="text-blue-800 font-bold text-xl">
                        {user.tag}
                      </p>
                    </div>
                    <div className="text-center rounded-lg overflow-hidden border-2 h-fit border-blue-800">
                      <p className="font-bold text-xl ">
                        {issue.reduce((acc, item) => acc + item.value, 0)}
                      </p>
                      <p className="bg-blue-800 text-white px-2">
                        Issues Count
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <div className="pr-4 border-r border-blue-800 flex-1">
                    <p className="text-lg text-gray-950 font-normal">
                      {user["bio"]}
                    </p>
                    <div>
                      {user["courses"] !== "" && (
                        <>
                          <h2 className="text-lg font-bold mt-4 text-blue-800">
                            Courses :
                          </h2>
                          <ol className="text-gray-900 font-semibold list-inside list-decimal">
                            {user["courses"].split(";").map((text, index) => (
                              <li key={index}>{text}</li>
                            ))}
                          </ol>
                        </>
                      )}

                      {user["extraActivites"] !== "" && (
                        <>
                          <h2 className="text-lg font-bold mt-4 text-blue-800">
                            Extra Activities:
                          </h2>
                          <ol className="text-gray-900 font-semibold list-inside list-decimal">
                            {user["extraActivites"]
                              .split(";")
                              .map((text, index) => (
                                <li key={index}>{text}</li>
                              ))}
                          </ol>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex-1 space-y-4 h-full">
                    {/* <CustomPieChart data={issue} radiusValue={30} /> */}
                    <div className="flex justify-between mb-6">
                      <h3 className="text-lg font-bold text-blue-800 ">
                        Issues Severity Distribution
                      </h3>
                      <div className="text-blue-800 overflow-hidden rounded-md border border-blue-800 flex">
                        <button
                          type="button"
                          onClick={() => setBarGraph(false)}
                          className={`px-2 ${
                            barGraph ? "" : "bg-blue-800 text-white"
                          }`}
                        >
                          Issues
                        </button>
                        <div className="bg-blue-800 w-0.5" />
                        <button
                          type="button"
                          onClick={() => setBarGraph(true)}
                          className={`px-2 ${
                            barGraph ? "bg-blue-800 text-white" : ""
                          }`}
                        >
                          Graph
                        </button>
                      </div>
                    </div>
                    {barGraph ? (
                      <BarGraph barData={compareGraph} />
                    ) : (
                      issue.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center group transition-all duration-300 ease-in-out hover:scale-105"
                        >
                          <div className="w-24 text-sm font-semibold group-hover:font-bold">
                            {item.label}
                          </div>
                          <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden transition-all duration-300 ease-in-out">
                            <div
                              className="h-full bg-blue-800"
                              style={{
                                width:
                                  item.value === 0
                                    ? "0%"
                                    : `${(item.value / maxValue) * 100}%`,
                              }}
                            />
                          </div>
                          <div className="w-12 text-right font-bold text-lg group-hover:text-lg transition-all duration-300 ease-in-out">
                            {item.value}
                          </div>
                        </div>
                      ))
                    )}

                    <div className="space-x-3 text-center">
                      <p className="text-lg py-1 bg-gray-300 inline-block rounded-full text-gray-800 font-bold px-2">
                        Previous Score: {user.score.previous}
                      </p>
                      <p className="text-lg py-1 bg-gray-300 inline-block rounded-full text-gray-800 font-bold px-2">
                        Current Score: {user.score.current}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center text-sm text-gray-500 mt-2">
                  {currentIndex + 1} of {users.length}
                </div>
              </div>
            </div>
            {hasNext && (
              <button
                type="button"
                className="absolute right-20 top-[40%] text-white hover:text-gray-400 "
                onClick={next}
              >
                <ChevronRight size={"100"} strokeWidth={"3"} />
              </button>
            )}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
