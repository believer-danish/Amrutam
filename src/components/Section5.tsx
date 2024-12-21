import s5 from "../assets/images/s5.png";
import s52 from "../assets/images/s52.png";
const Section5: React.FC = () => {
  return (
    <section className="h-[51.4rem] sm:h-[59rem] flex items-center justify-center flex-col relative bg-gradient-to-b from-[#0E0E0E66_80%] to-[#00000096]">
      <img
        src={s5}
        alt="image"
        className="absolute inset-0 z-[-1]  w-full h-full max-sm:hidden"
      />
      <img
        src={s52}
        alt="image"
        className="absolute inset-0 z-[-1] w-full  h-full sm:hidden"
      />
      <h1 className="text-[3.2rem] sm:text-[6.4rem] font-medium text-white  w-[85%] max-w-[85.6rem] text-center">
        Ready to restore harmony in your mind, body and spirit?{" "}
      </h1>
      <button className="mt-[4.8rem] text-[2rem] sm:text-[2.4rem] max-w-[27.4rem] sm:max-w-[30.5rem] font-medium cursor-pointer [font-family:Din] text-white bg-[#3A643B]  py-[1.5rem] px-[2.8rem] rounded-[1rem]">
        Book a consultation
      </button>
    </section>
  );
};

export default Section5;
