import s21 from "../assets/images/s21.png";
import s22 from "../assets/images/s22.png";
import s23 from "../assets/images/s23.png";
import s24 from "../assets/images/s24.png";

type Product = { text: string; img: string };

const Section2 = () => {
  const List: Product[] = [
    {
      text: "convenient online & In-clinic consultations",
      img: s21,
    },
    {
      text: "Safe and effective treatment",
      img: s22,
    },
    {
      text: "Experienced Ayurvedic Practitioners",
      img: s23,
    },
    {
      text: "personalized Treatment Plans & Guidance",
      img: s24,
    },
  ];
  return (
    <section className="bg-light-pink">
      {
        <div className="flex  max-md:flex-col justify-center items-center max-md:items-start ">
          {List.map((e: Product) => (
            <div className="flex items-center justify-center gap-[1.2rem] py-[4rem] max-md:py-[2.6rem] pl-[2.4rem] pr-[1.1rem] max-md:border-b border-slate-300 max-md:w-full max-md:justify-start">
              <img
                src={e.img}
                alt="section2 image"
                className="w-[7rem] h-[7rem]"
              />
              <h2 className="font-bold text-[1.8rem] text-[#3A643B] capitalize">
                {e.text}
              </h2>
            </div>
          ))}
        </div>
      }
    </section>
  );
};

export default Section2;
