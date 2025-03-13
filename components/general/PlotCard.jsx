import Link from "next/link";

const PlotCard = ({ plotNumber2, location2, currentIndex2, total, onPrev, onNext, id2 }) => {
    if(id2 != 5){
    return (
      //<div className="bg-white border rounded-lg p-6 shadow-md w-96 transition-transform duration-300">
      <div className="bg-white border p-6 shadow-md transition-transform duration-300 mx-2">
        {/* Location Heading */}
        <div className="text-sm text-gray-500 font-semibold">
          <span className="text-yellow-700">{id2.toString().padStart(2, "0")}</span> | AL JADID, SAUDI ARABIA
        </div>
  
        {/* Title */}
        <h2 className="text-2xl font-bold mt-2">SEED</h2>
  
        {/* Details */}
        <div className="flex justify-between items-center border-t border-gray-300 mt-4 pt-4 text-gray-600 text-sm">
          <div>
            <p className="font-semibold">N° PLOT</p>
            <p className="text-lg text-black">{plotNumber2}</p>
          </div>
          <div>
            <p className="font-semibold">LOCALISATION</p>
            <p className="text-lg text-black">{location2}</p>
          </div>
        </div>
  
        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            className={`px-4 py-2 text-gray-400 bg-gray-200 rounded-lg ${currentIndex2 === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"}`}
            onClick={onPrev}
            disabled={currentIndex2 === 1}
          >
            PREV
          </button>
          <button
            className={`px-4 py-2 bg-black text-white rounded-lg ${currentIndex2 === total ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"}`}
            onClick={onNext}
            disabled={currentIndex2 === total}
          >
            NEXT
          </button>
        </div>
      </div>
    );
}
if(id2 == 5){
    return(
//<div className="bg-white border rounded-lg p-6 shadow-md w-96 transition-transform duration-300">
<div className="bg-white border p-6 shadow-md transition-transform duration-300 mx-2">

{/* Details */}
<div className="flex justify-center items-center text-sm">
  <div>
    <p className="font-semibold text-gray-600">We securely recorded information relating to every stage of the product life cycle through the Vero blockchain Consortium platform, ensuring full traceability and transparency.</p>
    <p className="underline text-black">Learn more</p>
  </div>
</div>

{/* Navigation Buttons */}
<div className="flex justify-center mt-6 border-t border-gray-300 mt-4 pt-4 ">
  <Link
    className={`px-23 py-2 bg-black text-white ${currentIndex2 === total ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"}`}
    href={"/"}
    disabled={currentIndex2 === total}
  >
    BACK TO MENU
  </Link>
</div>
</div>
    )
}
};

export default PlotCard;