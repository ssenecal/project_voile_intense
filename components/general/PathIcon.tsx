import Image from "next/image";
import glassImg from "/public/glass-svgrepo-com.svg";
import dropImg from "/public/water-drop-drop-svgrepo-com.svg";
import boxImg from "/public/box-minimalistic-svgrepo-com.svg";
import leafImg from "/public/leaf-double.svg";

const PathIcon = () => {
  return (
    <div>
      <div className="absolute z-10  top-[420px] left-[330px]">
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
      <div className="absolute z-10  top-[440px] left-[290px]">
        <div className="flex justify-center">
          <div className="p-2 bg-gray-100 border-[#DBDBD1] rounded-full border-1">
            <Image
              src={leafImg}
              alt="clipboard-icon"
              className="w-7 h-7"
            ></Image>
          </div>
        </div>
      </div>
      <div className="absolute z-10  top-[290px] left-[100px]">
        <div className="flex justify-center">
          <div className="p-2 bg-gray-100 border-[#DBDBD1] rounded-full border-1">
            <Image
              src={boxImg}
              alt="clipboard-icon"
              className="w-7 h-7"
            ></Image>
          </div>
        </div>
      </div>
      <div className="absolute z-10  top-[270px] left-[50px]">
        <div className="flex justify-center">
          <div className="p-2 bg-gray-100 border-[#DBDBD1] rounded-full border-1">
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
