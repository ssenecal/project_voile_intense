import Image from "next/image";
import mImg from "/public/medicine.jpeg";

const SquaredMedicine = () => {
  return (
    <div className="bg-gray-100 border-1 h-[129px] w-[129px] overflow-hidden">
      <Image
        src={mImg}
        alt="clipboard-icon"
        className="object-cover h-[130px]"
      ></Image>
    </div>
  );
};

export default SquaredMedicine;
