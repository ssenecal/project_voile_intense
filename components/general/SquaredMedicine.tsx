import Image from "next/image";
import mImg from "/public/medicine.jpeg";

const SquaredMedicine = () => {
  return (
    <div className="absolute z-10  top-[20px] left-[-200px]">
      <div className="flex justify-center p-1">
        <div className=" relative bg-gray-100 border-1 w-20 h-20 overflow-hidden">
          <Image
            src={mImg}
            alt="clipboard-icon"
            className="object-cover w-full h-20"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default SquaredMedicine;
