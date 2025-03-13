import Image from "next/image";
import boxImg from "/public/box-minimalistic-svgrepo-com.svg";

const BoxIcon = () => {
  return (
    <div className="absolute z-10  top-[220px] left-[-50px]">
      <div className="flex justify-center">
        <div className="p-2 bg-gray-100 rounded-full border-1">
          <Image src={boxImg} alt="clipboard-icon" className="w-7 h-7"></Image>
        </div>
      </div>
    </div>
  );
};

export default BoxIcon;
