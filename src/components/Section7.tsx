import stars from "../assets/images/stars.png";

const Section7 = () => {
  return (
    <section className="pt-[9.5rem] pb-[5rem] bg-light-pink">
      {/* header */}
      <header className="flex flex-col justify-center  gap-[1.6rem] leading[2.1rem] items-center text-center mb-[4.1rem]">
        <h1 className="text-[#3A643B] text-[3.2rem] w-[80%] leading-[3.6rem] font-bold capitalize   sm:text-[4.8rem] sm:leading-[5.4rem]">
          Stories From Our Valued Customers!
        </h1>
      </header>
      {/* Content */}
      <div className="overflow-x-scroll [scrollbar-width:none] ">
        <div className="flex gap-[2.4rem] mx-auto w-max px-10 ">
          {/* first */}
          <div
            className="flex flex-col items-start justify-start text-start  min-h-[29rem]  w-full max-w-[30.4rem] sm:max-w-[38.8rem]
             bg-white rounded-[2rem]  [box-shadow:0px_4px_9px_#0000001C] overflow-hidden pb-[4.5rem]"
          >
            <h1 className="font-bold  [font-family:Nunito] text-[1.6rem] sm:text-[1.8rem] bg-[#ECE7FF] py-[1.7rem]  px-[2.4rem] w-full text-start ">
              Consulted for Skin
            </h1>
            {/* middle */}
            <div className="pt-[3rem] pb-[2rem] flex items-start justify-between  w-full px-[2.4rem] ">
              <div className="flex gap-4 items-start justify-center ">
                <span className="w-[6rem] h-[6rem] block aspect-square bg-[#515151] rounded-full"></span>
                <h1 className="flex flex-col">
                  <span className="font-medium sm:text-[2rem] text-[1.6rem] text-[#414141]">
                    Sophie Moore
                  </span>
                  <span className=" sm:text-[1.8rem] text-[1.5rem] font-normal [font-family:NexaLight]">
                    Chennai
                  </span>
                </h1>
              </div>

              <span>17/02/24</span>
            </div>

            <div className="px-[2.4rem] ">
              <img src={stars} alt="stars" />
              <h1 className="sm:text-[2.2rem] text-[2rem]  [font-family:'DM_Sans']  capitalize font-bold leading-[2.2rem] text-black sm:leading-[5.1rem] py-[1rem]">
                “One of a kind service”
              </h1>
              <p className="sm:text-[1.8rem] text-[1.6rem] [font-family:'DM_Sans'] text-[#555555] leading-[1.9rem] sm:leading-[2.3rem]">
                Ultrices eros in cursus turpis massa tincidunt sem nulla
                pharetra diam sit amet nisl suscipit adipis.
              </p>
            </div>
          </div>

          {/* second */}
          <div
            className="flex flex-col items-start justify-start text-start  min-h-[29rem]  w-full max-w-[30.4rem] sm:max-w-[38.8rem]
             bg-white rounded-[2rem]  [box-shadow:0px_4px_9px_#0000001C] overflow-hidden pb-[4.5rem]"
          >
            <h1 className="font-bold  [font-family:Nunito] text-[1.6rem] sm:text-[1.8rem] bg-[#ECFEE7] py-[1.7rem]  px-[2.4rem] w-full text-start ">
              Consulted for Hair
            </h1>
            {/* middle */}
            <div className="pt-[3rem] pb-[2rem] flex items-start justify-between  w-full px-[2.4rem] ">
              <div className="flex gap-4 items-start justify-center ">
                <span className="w-[6rem] h-[6rem] block aspect-square bg-[#515151] rounded-full"></span>
                <h1 className="flex flex-col">
                  <span className="font-medium sm:text-[2rem] text-[1.6rem] text-[#414141]">
                    Sophie Moore
                  </span>
                  <span className=" sm:text-[1.8rem] text-[1.5rem] font-normal [font-family:NexaLight]">
                    Chennai
                  </span>
                </h1>
              </div>

              <span>17/02/24</span>
            </div>

            <div className="px-[2.4rem] ">
              <img src={stars} alt="stars" />
              <h1 className="sm:text-[2.2rem] text-[2rem]  [font-family:'DM_Sans']  capitalize font-bold leading-[2.2rem] text-black sm:leading-[5.1rem] py-[1rem]">
                “One of a kind service”
              </h1>
              <p className="sm:text-[1.8rem] text-[1.6rem] [font-family:'DM_Sans'] text-[#555555] leading-[1.9rem] sm:leading-[2.3rem]">
                Ultrices eros in cursus turpis massa tincidunt sem nulla
                pharetra diam sit amet nisl suscipit adipis.
              </p>
            </div>
          </div>

          {/* Third */}
          <div
            className="flex flex-col items-start justify-start text-start  min-h-[29rem]  w-full max-w-[30.4rem] sm:max-w-[38.8rem]
             bg-white rounded-[2rem]  [box-shadow:0px_4px_9px_#0000001C] overflow-hidden pb-[4.5rem]"
          >
            <h1 className="font-bold  [font-family:Nunito] text-[1.6rem] sm:text-[1.8rem] bg-[#ECFEE7] py-[1.7rem]  px-[2.4rem] w-full text-start ">
              Consulted for Hair
            </h1>
            {/* middle */}
            <div className="pt-[3rem] pb-[2rem] flex items-start justify-between  w-full px-[2.4rem] ">
              <div className="flex gap-4 items-start justify-center ">
                <span className="w-[6rem] h-[6rem] block aspect-square bg-[#515151] rounded-full"></span>
                <h1 className="flex flex-col">
                  <span className="font-medium sm:text-[2rem] text-[1.6rem] text-[#414141]">
                    Sophie Moore
                  </span>
                  <span className=" sm:text-[1.8rem] text-[1.5rem] font-normal [font-family:NexaLight]">
                    Chennai
                  </span>
                </h1>
              </div>

              <span>17/02/24</span>
            </div>

            <div className="px-[2.4rem] ">
              <img src={stars} alt="stars" />
              <h1 className="sm:text-[2.2rem] text-[2rem]  [font-family:'DM_Sans']  capitalize font-bold leading-[2.2rem] text-black sm:leading-[5.1rem] py-[1rem]">
                “One of a kind service”
              </h1>
              <p className="sm:text-[1.8rem] text-[1.6rem] [font-family:'DM_Sans'] text-[#555555] leading-[1.9rem] sm:leading-[2.3rem]">
                Ultrices eros in cursus turpis massa tincidunt sem nulla
                pharetra diam sit amet nisl suscipit adipis.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* scroll */}
      <div className=" flex justify-center gap-6 mt-[4rem]">
        <span className="p-3 rounded-full bg-light-green"></span>
        <span className="p-3 rounded-full bg-slate-300"></span>
        <span className="p-3 rounded-full bg-slate-300"></span>
      </div>
    </section>
  );
};

export default Section7;
