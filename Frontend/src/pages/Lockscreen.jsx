import { useState, useCallback } from "react";

import Login from "./Login";
import Slider from "./Slider";

function Lockscreen() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  // Use useCallback to memoize the function and avoid unnecessary re-renders
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div
        className="absolute bg-black h-screen w-full blur-sm"
        style={{
          background:
            "url(https://images8.alphacoders.com/134/1346089.png) no-repeat center center",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="absolute left-0 top-0 h-screen w-full flex flex-col items-center z-10">
        <Login />
      </div>

      <Slider
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        toggleMenu={toggleMenu}
      />
    </>
  );
}

export default Lockscreen;
