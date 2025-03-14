import Image from "next/image";
import fImg from "/public/forest.png";

const SquaredForest = () => {
  return (
    <div className="bg-gray-100 border-1 h-[129px] w-[129px] overflow-hidden">
      <Image
        src={fImg}
        alt="clipboard-icon"
        className="object-cover h-[130px]"
      ></Image>
    </div>
  );
};

export default SquaredForest;
