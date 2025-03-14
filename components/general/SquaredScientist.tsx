import Image from "next/image";
import sImg from "/public/scientist.jpeg";

const SquaredScientist = () => {
  return (
    <div className="bg-gray-100 border-1 h-[129px] w-[129px] overflow-hidden">
      <Image
        src={sImg}
        alt="clipboard-icon"
        className="object-cover h-[130px]"
      ></Image>
    </div>
  );
};

export default SquaredScientist;
