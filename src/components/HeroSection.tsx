import heroMobileImg from "../assets/images/hero_mobile.png";
import heroDesktopImg from "../assets/images/hero_desktop.png";

const HeroSection = () => {
  return (
    <section
      className="relative flex items-center justify-center sm:justify-start sm:pl-[10rem]  max-sm:bg-gradient-to-b max-sm:from-[#181818DE] max-sm:to-[#2222227A] 
      min-h-[54rem] sm:min-h-[63.9rem] [background-image:linear-gradient(to_right,#221414_40%,#281312_54%,#01010100)]"
    >
      <div className="flex flex-col gap-[1.6rem] justify-center  max-w-[31rem] sm:max-w-[90.4rem]  relative z-10">
        <h1 className="[font-family:NexaLight] text-[#FFF7E2] sm:text-[2.8rem]">
          Namaste, Welcome to Amrutam{" "}
        </h1>
        <h1 className="font-bold text-[2.4rem] text-white sm:text-[4.8rem] sm:leading-[6.7rem]">
          Step into Holistic Healing with{" "}
          <span className="underline">Ayurveda</span> Book Consultation with
          certified Experts.
        </h1>
        <p className="text-[1.4rem]  leading-[1.9rem] sm:leading-[2.8rem] font-medium text-[#C9C9C9] sm:text-[2rem]">
          Dive into the world of ayurveda and Experience Personalized Health
          Solutions and Holistic Guidance from Trusted Ayurvedic Doctors
          Anytime, anywhere.
        </p>

        <button className="mt-[4.8rem] sm:text-[2rem] sm:max-w-[30.5rem] cursor-pointer [font-family:Din] text-white bg-[#3A643B] text-[1.4rem] max-w-[21.4rem] py-[1.5rem] px-[2.8rem] rounded-[1rem]">
          Book an Appointment
        </button>
      </div>
      <img
        src={heroMobileImg}
        alt="hero image"
        className="absolute inset-0 z-[-1] w-full h-full sm:hidden"
      />
      <img
        src={heroDesktopImg}
        alt="hero image"
        className="absolute z-[-1]   right-0  h-full max-sm:hidden"
      />
    </section>
  );
};

export default HeroSection;
