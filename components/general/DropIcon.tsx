import Image from "next/image";
import dropImg from "/public/water-drop-drop-svgrepo-com.svg";

const DropIcon = () => {
  return (
    <div className="absolute z-10  top-[220px] left-[-50px]">
      <div className="flex justify-center">
        <div className="p-2 bg-gray-100 rounded-full border-1">
          <Image src={dropImg} alt="clipboard-icon" className="w-7 h-7"></Image>
        </div>
      </div>
    </div>
  );
};

export default DropIcon;
