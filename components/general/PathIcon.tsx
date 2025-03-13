import Image from "next/image";
import glassImg from "/public/glass-svgrepo-com.svg";
import dropImg from "/public/water-drop-drop-svgrepo-com.svg";
import boxImg from "/public/box-minimalistic-svgrepo-com.svg";
import leafImg from "/public/leaf-double.svg";

const PathIcon = () => {
  return (
    <div>
      <div className="absolute z-10  top-[400px] left-[-50px]">
        <div className="flex justify-center">
          <div className="p-2 bg-gray-100 rounded-full border-1">
            <Image
              src={glassImg}
              alt="clipboard-icon"
              className="w-7 h-7"
            ></Image>
          </div>
        </div>
      </div>
      <div className="absolute z-10  top-[220px] left-[20px]">
        <div className="flex justify-center">
          <div className="p-2 bg-gray-100 rounded-full border-1">
            <Image
              src={leafImg}
              alt="clipboard-icon"
              className="w-7 h-7"
            ></Image>
          </div>
        </div>
      </div>
      <div className="absolute z-10  top-[220px] left-[-50px]">
        <div className="flex justify-center">
          <div className="p-2 bg-gray-100 rounded-full border-1">
            <Image
              src={boxImg}
              alt="clipboard-icon"
              className="w-7 h-7"
            ></Image>
          </div>
        </div>
      </div>
      <div className="absolute z-10  top-[400px] left-[50px]">
        <div className="flex justify-center">
          <div className="p-2 bg-gray-100 rounded-full border-1">
            <Image
              src={dropImg}
              alt="clipboard-icon"
              className="w-7 h-7"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PathIcon;
