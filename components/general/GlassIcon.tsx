import Image from "next/image";
import glassImg from "/public/glass-svgrepo-com.svg";

const GlassIcon = () => {
  return (
    <div className="absolute z-10 top-[380px] left-[200px]">
      <div className="flex justify-center">
        <div className="p-2 bg-gray-100 border-[#DBDBD1] rounded-full border-1">
          <Image
            src={glassImg}
            alt="clipboard-icon"
            className="w-7 h-7"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default GlassIcon;
