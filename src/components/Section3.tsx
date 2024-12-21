import s30 from "../assets/images/s30.png";
import s31 from "../assets/images/s31.png";
import s32 from "../assets/images/s32.png";
import s33 from "../assets/images/s33.png";
import s34 from "../assets/images/s34.png";
import s35 from "../assets/images/s35.png";
import s36 from "../assets/images/s36.png";

type Product = {
  heading: string;
  text: string;
  img: string;
};

const Section3 = () => {
  const List: Product[] = [
    {
      heading: "Personalized Wellness",
      text: "Get treatments made just for you based on your individual doshas ( body type)",
      img: s31,
    },
    {
      heading: "Focus on prevention",
      text: "Stop problems even before they start.",
      img: s32,
    },
    {
      heading: "Mind-Body Connection",
      text: "Keep your mind and body in sync for a happy life.",
      img: s33,
    },
    {
      heading: "Holistic Healing",
      text: "Fix the root problem for long-lasting health.",
      img: s34,
    },
    {
      heading: "Natural Remedies",
      text: "Using herbs and natural therapies for healing.",
      img: s35,
    },
    {
      heading: "Boosting immunity",
      text: "Stay strong and healthy for life, not just for today.",
      img: s36,
    },
  ];
  return (
    <section className="pt-[7rem] pb-[6.2rem]">
      {/* header */}
      <header className="flex flex-col justify-center  gap-[1.6rem] leading[2.1rem] items-center text-center mb-[4.1rem]">
        <h1 className="text-[#3A643B] text-[3.2rem] leading-[3.6rem] font-bold  capitalize sm:text-[4.8rem] sm:leading-[5.4rem] md:motion-preset-typewriter-[35]  md:motion-duration-[8000ms]">
          Discover Ayurveda’s magic with us{" "}
        </h1>
        <p className="text-[#666666] text-[1.4rem] sm:text-[2rem] leading[2.8rem] sm:max-w-[67.1rem] max-w-[29.8rem]">
          Ayurvedic treatment aims to balance your body and mind, bringing
          harmony and vitality. It's like a journey to better health using
          ancient wisdom, a totally effective approach for a better life.{" "}
        </p>
      </header>

      {/* content */}

      <div className="relative  lg:w-max mx-auto">
        <img
          src={s30}
          alt="yoga image"
          className="w-[20.9rem] sm:w-[49.2rem] mx-auto motion-preset-oscillate motion-duration-[5000ms]"
        />

        <div className="flex   justify-center gap-[2rem] flex-wrap text-center">
          {List.map((e: Product, i: number) => (
            <div
              style={
                {
                  "--dist": i,
                } as React.CSSProperties
              }
              className={`flex flex-col gap-[1rem] border rounded-[1rem] py-[1.7rem] px-[.8rem] items-center max-w-[15.4rem]  lg:max-w-[31.8rem] lg:border-none
                lg:absolute  lg:text-start
                 ${(i == 0 || i == 2) && "lg:-translate-x-[85%]"}
                 ${(i == 3 || i == 5) && "lg:translate-x-[80%]"}
                 ${
                   i < 3
                     ? ` lg:top-0 lg:translate-y-[calc(var(--dist)*200*1px)] lg:left-0 lg:-translate-x-full lg:flex-row-reverse`
                     : `lg:top-0 lg:right-0 lg:translate-x-full lg:translate-y-[calc((var(--dist)-3)*200*1px)]  lg:flex-row `
                 }`}
            >
              <img
                src={e.img}
                alt="section3 image"
                className={` aspect-square  w-[6rem] sm:w-[10rem]`}
              />
              <div className="flex flex-col gap-[.5rem] ">
                {e.heading && (
                  <h1 className="text-[1.5rem] text-black font-bold leading-[2rem]">
                    {e.heading}
                  </h1>
                )}
                {e.text && (
                  <p className="text-[1.3rem] font-medium  text-[#6D6B6B] leading-[1.7rem] ">
                    {e.text}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
