import Link from "next/link";

const PlotCard = ({ slide, plot, onPrev, onNext,currentSlide }) => {
    if(slide == 1){
    return (
      //<div className="bg-white border rounded-lg p-6 shadow-md w-96 transition-transform duration-300">
      <div className="bg-white border p-6 shadow-md transition-transform duration-300 mx-2 h-[244px] w-[353px] object-cover">
        {/* Location Heading */}
        <div className="text-sm text-[#BA9B53] weight-[500]">
          <span className="text-[#BA9B53]">{slide.toString().padStart(2, "0")}</span> | AL JADID, SAUDI ARABIA
        </div>
  
        {/* Title */}
        <h2 className="text-[20px] font-bold mt-2">SEED</h2>
  
        {/* Details */}
        <div className="flex justify-between items-center border-t border-gray-300 mt-4 pt-4 text-gray-600 text-sm">
          <div>
            <p className="font-semibold text-left text-[12px]">N° PLOT</p>
            <p className="text-black text-[12px]">VOILE-P01</p>
          </div>
          <div>
            <p className="font-semibold">LOCALISATION</p>
            <p className="text-lg text-black text-[12px]">26°27'14"N 37°46'34"E</p>
          </div>
        </div>
  
        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            className={`mr-2 px-4 py-2 grow text-gray-400 bg-gray-200 ${currentSlide === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"}`}
            onClick={onPrev}
            disabled={currentSlide === 1}
          >
            PREV
          </button>
          <button
            className={`ml-2 px-4 py-2 bg-black text-white grow ${currentSlide === 5 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"}`}
            onClick={onNext}
            disabled={currentSlide === 5}
          >
            NEXT
          </button>
        </div>
      </div>
    );
}
if(slide == 2){
    return (
      //<div className="bg-white border rounded-lg p-6 shadow-md w-96 transition-transform duration-300">
      <div className="bg-white border p-6 shadow-md transition-transform duration-300 mx-2 h-[244px] w-[353px] object-cover">
        {/* Location Heading */}
        <div className="text-sm text-[#BA9B53] weight-[500]">
          <span className="text-[#BA9B53]">{slide.toString().padStart(2, "0")}</span> | AL JADID, SAUDI ARABIA
        </div>
  
        {/* Title */}
        <h2 className="text-[20px] font-bold mt-2">PURE ESSENCE</h2>
  
        {/* Details */}
        <div className="flex items-left border-t border-gray-300 mt-4 pt-4 text-gray-600">
          <div>
            <p className="font-semibold text-left text-[12px]">ESSENCE BATCH NUMBER</p>
            <p className="text-left text-[12px]">VOILE-210630/02</p>
          </div>
        </div>
  
        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            className={`mr-2 px-4 py-2 grow text-gray-400 bg-gray-200 ${currentSlide === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"}`}
            onClick={onPrev}
            disabled={currentSlide === 1}
          >
            PREV
          </button>
          <button
            className={`ml-2 px-4 py-2 bg-black text-white grow ${currentSlide === 5 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"}`}
            onClick={onNext}
            disabled={currentSlide === 5}
          >
            NEXT
          </button>
        </div>
      </div>
    );
}
if(slide == 3){
    return (
      //<div className="bg-white border rounded-lg p-6 shadow-md w-96 transition-transform duration-300">
      <div className="bg-white border p-6 shadow-md transition-transform duration-300 mx-2 h-[244px] w-[353px] object-cover">
        {/* Location Heading */}
        <div className="text-sm text-[#BA9B53] weight-[500]">
          <span className="text-[#BA9B53]">{slide.toString().padStart(2, "0")}</span> | SAINT NAZAIRE, FRANCE
        </div>
  
        {/* Title */}
        <h2 className="text-[20px] font-bold mt-2">CLARIFICATION</h2>
  
        {/* Details */}
        <div className="flex items-left border-t border-gray-300 mt-4 pt-4 text-gray-600">
          <div>
            <p className="font-semibold text-left text-[12px]">CLARIFICATION BATCH NUMBER</p>
            <p className="text-left text-[12px]">VOILE_030922</p>
          </div>
        </div>
  
        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            className={`mr-2 px-4 py-2 grow text-gray-400 bg-gray-200 ${currentSlide === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"}`}
            onClick={onPrev}
            disabled={currentSlide === 1}
          >
            PREV
          </button>
          <button
            className={`ml-2 px-4 py-2 bg-black text-white grow ${currentSlide === 5 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"}`}
            onClick={onNext}
            disabled={currentSlide === 5}
          >
            NEXT
          </button>
        </div>
      </div>
    );
}
if(slide == 4){
    return (
      //<div className="bg-white border rounded-lg p-6 shadow-md w-96 transition-transform duration-300">
      <div className="bg-white border p-6 shadow-md transition-transform duration-300 mx-2 h-[244px] w-[353px] object-cover">
        {/* Location Heading */}
        <div className="text-sm text-[#BA9B53] weight-[500]">
          <span className="text-[#BA9B53]">{slide.toString().padStart(2, "0")}</span> | LYON, FRANCE
        </div>
  
        {/* Title */}
        <h2 className="text-[20px] font-bold mt-2">BOTTLING</h2>
  
        {/* Details */}
        <div className="flex items-left border-t border-gray-300 mt-4 pt-4 text-gray-600">
          <div>
            <p className="font-semibold text-left text-[12px]">HUMUNY BATCH NUMBER</p>
            <p className="text-left self-start text-[12px]">VOILE_CEAHA</p>
          </div>
        </div>
  
        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            className={`mr-2 px-4 py-2 grow text-gray-400 bg-gray-200 ${currentSlide === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"}`}
            onClick={onPrev}
            disabled={currentSlide === 1}
          >
            PREV
          </button>
          <button
            className={`ml-2 px-4 py-2 bg-black text-white grow ${currentSlide === 5 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"}`}
            onClick={onNext}
            disabled={currentSlide === 5}
          >
            NEXT
          </button>
        </div>
      </div>
    );
}
if(slide == 5){
    return(
//<div className="bg-white border rounded-lg p-6 shadow-md w-96 transition-transform duration-300">
<div className="bg-white border p-6 shadow-md transition-transform duration-300 mx-2 h-[244px] w-[353px]">

{/* Details */}
<div className="flex justify-center items-center text-sm">
  <div>
    <p className="font-semibold text-[16px] text-center text-gray-600">We securely recorded information relating to every stage of the product life cycle through the Vero blockchain Consortium platform, ensuring full traceability and transparency.</p>
    <h3 className="text-[16px] text-center underline underline-offset-8 text-black">Learn more</h3>
  </div>
</div>

{/* Navigation Buttons */}
<div className="flex justify-center mt-6 border-t border-gray-300 mt-4 pt-4 ">
  <Link
    className={`px-2 grow-1 py-3 text-center text-[14px] bg-black text-white ${currentSlide === 5 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"}`}
    href={"/"}
  >
    BACK TO MENU
  </Link>
</div>
</div>
    )
}
};

export default PlotCard;