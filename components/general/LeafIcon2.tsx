import Image from "next/image";
import leafImg from "/public/leaf-double.svg";
import leafImgW from "/public/leaf-double-white.png";
import { useState } from "react";

const LeafIcon2 = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="absolute left-[120px] top-[320px] z-10"
      cursor-pointer
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex justify-center">
        {isHovering ? (
          <div className="w-full p-2 bg-[#BA9B53] rounded-full border-[#DBDBD1] border-[#DBDBD1] border-1 z-10">
            <Image src={leafImgW} className="w-7 h-7 z-10" alt="logo" />
          </div>
        ) : (
          <div className="w-full p-2 bg-white rounded-full border-[#DBDBD1] border-1 z-10">
            <Image src={leafImg} className="w-7 h-7 z-10" alt="logo" />
          </div>
        )}
      </div>
    </div>
  );
};

export default LeafIcon2;
