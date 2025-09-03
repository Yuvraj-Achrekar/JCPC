import { CardContainer, CardItem } from "../components/ui/3d-card";
import { useState } from "react";
import UserModal from "./modals/UserModal";
import UserProfile from "./UserProfile";

export default function CustomCard({ user, allUsers }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = (e) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        onClick={handleOpenModal}
        className={`group rounded-lg border cursor-pointer shadow-lg transition-all duration-300  hover:-translate-y-2 hover:bg-blue-300 ${
          user.tag === "Released" ? "bg-gray-300" : "bg-[#F8F9FA]"
        }`}
      >
        <CardContainer className="flex flex-col w-full justify-center mx-2 my-4 text-center  ">
          <CardItem
            translateZ="60"
            className="flex flex-col justify-center items-center w-full relative"
          >
            <UserProfile
              src={user.image}
              domainId={user.domainId}
              className="h-24 mb-4 rounded-full ring-2 ring-blue-800 ring-offset-2 transition-all duration-300 group-hover:ring-4"
            />
            {user.tag === "Released" && (
              <p className="absolute top-0 right-4 bg-green-600 text-white rounded-full text-sm px-2 font-semibold ">
                Released
              </p>
            )}
            <span className="text-lg flex flex-col font-semibold leading-tight">
              {user &&
                (() => {
                  const [firstName, lastName] = user.name.split(" ");
                  return user.name.length > 15
                    ? `${firstName} ${lastName ? lastName[0] : ""}`
                    : user.name;
                })()}
            </span>
            <span
              className={` text-sm font-semibold ${
                user.tag === "Released" ? "text-gray-500" : "text-blue-800"
              } `}
            >
              {user.role}
            </span>
            <div className="mt-4 bg-blue-800 text-white rounded-full px-3 py-1 text-sm font-medium w-fit self-center duration-700">
              Score: {user.score.current}
            </div>
          </CardItem>
        </CardContainer>
      </div>
      {isOpen && (
        <UserModal
          open={isOpen}
          setOpen={handleCloseModal}
          initialUser={user}
          users={allUsers}
        />
      )}
    </>
  );
}
