import Image from "next/image";
import bImg from "/public/bottle.jpeg";

const SquaredBottle = () => {
  return (
    <div className="bg-gray-100 border-1 h-[129px] w-[129px] overflow-hidden">
      <Image
        src={bImg}
        alt="clipboard-icon"
        className="object-cover h-[130px]"
      ></Image>
    </div>
  );
};

export default SquaredBottle;
