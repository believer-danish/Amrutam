import s41 from "../assets/images/s41.png";
import s42 from "../assets/images/s42.png";
import s43 from "../assets/images/s43.png";

const Section4 = () => {
  return (
    <section className="bg-light-pink px-[1.6rem] pb-[10rem]">
      <h1
        className="font-bold pt-[6rem] sm:pt-[8rem] pb-[4.4rem] sm:pb-[5.6rem] text-[3.2rem] leading-[4.2rem] sm:text-[4.8rem] sm:leading-[6.2rem] text-center  text-light-green
      "
      >
        What sets Ayurvedic consultations apart?
      </h1>

      {/* Cards*/}
      <div className="w-full max-w-[124rem] mx-auto  text-light-green flex  justify-center items-center flex-wrap  gap-[1.6rem]">
        {/* 1st */}
        <div className=" hover:motion-preset-shake   cursor-pointer  w-full sm:max-w-[52.2rem] text-center  py-[4.8rem] sm:px-[3.2rem] px-[2rem] bg-white rounded-[2rem] border-t-[.5rem] border-light-green">
          <h1 className="pb-[1.9rem] [font-family:'Inknut_Antiqua'] text-[2.4rem] sm:text-[3.2rem] leading-[3.9rem] sm:leading-[5.1rem]">
            स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।"
          </h1>
          <p className="text-[1.5rem] sm:text-[1.8rem] leading-[1.9rem] sm:leading-[2.3rem]">
            [ Meaning: The Goal of Ayurveda is to maintain the health of a
            healthy person and to cure the disease of a diseased person. ]
          </p>
        </div>

        {/* 2nd */}
        <img
          src={s41}
          alt="two lady"
          className="w-full  sm:max-w-[37.1rem] hover:motion-preset-shake   cursor-pointer"
        />

        {/* 3rd */}
        <div className=" hover:motion-preset-shake   cursor-pointer  min-h-[29rem] w-full sm:max-w-[30rem] py-[4.8rem] px-[3.2rem] bg-white rounded-[2rem] border-t-[.5rem] border-light-green">
          <h1 className="text-[2.4rem]  capitalize font-bold leading-[3.9rem] sm:leading-[5.1rem] pb-[1.6rem]">
            precise diagnosis
          </h1>
          <p className="text-[2rem] text-black leading-[1.9rem] sm:leading-[2.3rem]">
            Ayurveda's core principles revolve around Vata, Pitta, and Kapha
            doshas, guiding you with precise diagnosis and treatment.
          </p>
        </div>

        {/* 4th*/}
        <img
          src={s42}
          alt="lady"
          className="w-full  sm:max-w-[29.3rem] hover:motion-preset-shake   cursor-pointer"
        />

        {/* 5th */}
        <div className=" hover:motion-preset-shake   cursor-pointer  min-h-[29rem] w-full sm:max-w-[29rem] py-[4.8rem] px-[3.2rem] bg-white rounded-[2rem] border-t-[.5rem] border-light-green">
          <h1 className="text-[2.4rem]  capitalize font-bold leading-[3.9rem] sm:leading-[5.1rem] pb-[1.6rem]">
            Zero side-effects
          </h1>
          <p className="text-[2rem] text-black leading-[1.9rem] sm:leading-[2.3rem]">
            Ayurvedic treatments are devoid of chemicals, and are based
            completely on natural herbs 
          </p>
        </div>

        {/* 6th */}
        <img
          src={s43}
          alt="lady"
          className="w-full sm:max-w-[29.3rem] hover:motion-preset-shake   cursor-pointer"
        />

        {/* 7th */}
        <div className=" hover:motion-preset-shake   cursor-pointer min-h-[28rem]  w-full sm:max-w-[30rem] py-[4.8rem] px-[3.2rem] bg-white rounded-[2rem] border-t-[.5rem] border-light-green">
          <h1 className="text-[2.4rem]  capitalize font-bold leading-[3.9rem] sm:leading-[5.1rem] pb-[1.6rem]">
            Individual Treatment
          </h1>
          <p className="text-[2rem] text-black leading-[1.9rem] sm:leading-[2.3rem]">
            all Treatments are personalized based on a person's unique
            constitution and health concerns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section4;
