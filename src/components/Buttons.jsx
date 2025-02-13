

export default function Buttons() {
  return (
    <div className="transition ease-in-out duration-300">
      <button className="lg:text-lg text-sm px-3 py-2 bg-[#068F56] hover:border-2 border-2 border-[#068F56] hover:bg-transparent hover:text-white text-black font-semibold md:px-6 md:py-2 lg:px-8 lg:py-2 rounded-full mr-4 delay-300 duration-300 outline-none">
        Explore Now
      </button>
      <button className="lg:text-lg text-sm px-3 py-2 border-2 border-[#068F56] bg-transparent hover:bg-[#068F56] text-white hover:text-black font-semibold md:px-6 md:py-2 lg:px-8 lg:py-2 rounded-full transition ease-in-out delay-300 duration-300">
        Our Feedback
      </button>
    </div>
  );
}
