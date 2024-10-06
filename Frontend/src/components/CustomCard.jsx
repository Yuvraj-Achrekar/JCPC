import { CardContainer, CardItem } from "../components/ui/3d-card";
import { useState } from "react";
import UserModal from "./UserModal";

export default function CustomCard({ user, shouldOpenModal = false }) {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    console.log(open);
    if (!shouldOpenModal) {
      setOpen(true);
    }
  };

  return (
    <div
      onClick={handleOpenModal}
      //add scrollAnimation inside classname laggy scroll
      className=" group bg-[#F8F9FA] rounded-lg border shadow-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
    >
      <UserModal open={open} setOpen={setOpen} user={user} />

      <CardContainer className="flex flex-col mx-auto w-full justify-center m-4 text-center  ">
        <CardItem
          translateZ="60"
          className="flex flex-col justify-center items-center w-full"
        >
          <img
            alt={user.Name}
            className="w-24 h-24 mb-4 object-contain rounded-full ring-2 ring-black ring-offset-2 transition-all duration-300 group-hover:ring-4"
            src={`/images/members/${user.Domain}.jpg`}
            onError={(e) => {
              e.target.src = "/images/profile/default.png";
            }}
          />

          <span className="text-lg flex flex-col font-semibold leading-tight">
            {user && user.Name}
          </span>
          <span className="text-sm font-normal text-gray-600">Tester</span>
          <div className="mt-4 bg-black text-white rounded-full px-3 py-1 text-sm font-medium w-fit self-center">
            Score: {user.Total_score}
          </div>
        </CardItem>
      </CardContainer>
    </div>
  );
}
