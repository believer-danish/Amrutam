import star from "../assets/images/star.png";
import s8 from "../assets/images/s8.png";
import hat from "../assets/images/hat.png";
import capsule from "../assets/images/capsule.png";

const Section8 = () => {
  return (
    <section className="pt-[9.5rem] pb-[5rem] bg-white">
      {/* header */}
      <header className="flex flex-col justify-center  gap-[1.6rem] leading[2.1rem] items-center text-center mb-[4.1rem]">
        <h1 className="text-[#3A643B] text-[3.2rem] w-[80%] leading-[3.6rem] font-bold capitalize   sm:text-[4.8rem] sm:leading-[5.4rem]">
          Meet our Ayurveda experts
        </h1>
      </header>
      {/* Content */}
      <div className="overflow-x-scroll [scrollbar-width:none] ">
        <div className="flex gap-[4.8rem] mx-auto w-max px-[3rem] ">
          {[1, 2, 3].map(() => (
            <div className="flex flex-col items-center bg-light-pink pt-[4.3rem]  overflow-hidden rounded-[4rem] cursor-pointer w-[29.5rem] ">
              <div className="w-[15rem] h-[15rem] relative">
                <img src={s8} alt="lady" />
                <div
                  className="flex gap-2 items-center justify-center absolute bg-black text-white font-bold px-4 py-1 rounded-full
               bottom-0  left-1/2 -translate-x-1/2 "
                >
                  <span>4.5</span>
                  <img src={star} alt="star" />
                </div>
              </div>
              <h1 className="mt-[2.4rem] mb-[.7rem] text-[2rem] text-black font-bold">
                Dr. Vaishali sharma
              </h1>
              <h2 className="font-medium text-[1.5rem]  text-[#838383]">
                Ayurveda Practitioner (BAMS, MD)
              </h2>
              <h3 className="mt-[1.2rem] mb-[1.9rem] flex gap-3">
                <img src={hat} alt="hat" />
                <span className="">25 years of experience</span>
              </h3>
              <h3 className="flex justify-center items-center gap-3 bg-[#3A643B1F] rounded-full  px-6 py-2 text-light-green font-semibold">
                <img
                  src={capsule}
                  alt="capsule"
                  className="w-[1.6rem]  aspect-square"
                />
                <span>Skin Specialist</span>
              </h3>

              <span className="bg-light-green text-white text-[2rem] w-full text-center py-[2.4rem] mt-[3rem] [font-family:'Nunito']">
                Book a session
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* scroll */}
      <div className=" flex justify-center gap-6 mt-[4rem]">
        <span className="p-3 rounded-full bg-light-green"></span>
        <span className="p-3 rounded-full bg-slate-300"></span>
        <span className="p-3 rounded-full bg-slate-300"></span>
      </div>

      <button
        className="cursor-pointer font-medium text-[2.4rem] leading-[5.8rem] mx-auto block text-[#3A643B]
       bg-[#DBE3DC63] px-[2.5rem] mt-[4rem]  rounded-[.7rem] border-light-green border-[1px] "
      >
        Find more experts &gt;
      </button>
    </section>
  );
};

export default Section8;
