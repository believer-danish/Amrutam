type Product = {
  heading: string;
  text: string;
};

const Section6 = () => {
  const List: Product[] = [
    {
      heading: "Make Appointment",
      text: "You must make an appointment in advance, to choose the service and date.",
    },
    {
      heading: "Consultations",
      text: "The next stage involves a thorough consultation with an Ayurveda practitioner.",
    },
    {
      heading: "Treatment Planning",
      text: "The Ayurvedic practitioner creates a personalized treatment plan for you",
    },
    {
      heading: "Maintenance",
      text: "These visits allow for assessment of progress, adjustments to the treatment.",
    },
  ];
  return (
    <section className="pt-[9.5rem] pb-[10.6rem]">
      {/* header */}
      <header className="flex flex-col justify-center  gap-[1.6rem] leading[2.1rem] items-center text-center mb-[4.1rem]">
        <h1
          className="text-[#3A643B] text-[3.2rem] w-[80%]  leading-[3.6rem] font-bold  capitalize sm:text-[4.8rem] sm:leading-[5.4rem]
        "
        >
          Our ayurvedic approach
        </h1>
        <p className="text-[#666666] text-[1.6rem] sm:text-[2rem] leading[2.8rem] sm:max-w-[67.1rem] max-w-[29.8rem]">
          At Amrutam we follow a unique and personalized approach to healing.
          Our expert practitioners begin each treatment process by conducting a
          thorough analysis of the patient’s body type, medical history, and
          current health conditions.
        </p>
      </header>
      {/* Content */}
      <div className="overflow-x-scroll [scrollbar-width:none] ">
        <div className="flex gap-[2.4rem] w-max px-10">
          {List.map((item, index) => (
            <div
              className="flex flex-col items-center justify-center text-center  min-h-[29rem]  w-full max-w-[30rem]
             py-[4.8rem] px-[3.2rem] bg-light-pink rounded-[2rem] border-t-[.5rem] border-light-green [box-shadow:0px_4px_9px_#0000001C] cursor-pointer hover:scale-90 transition-all"
            >
              <span className="text-[4.8rem] font-bold bg-[#3A643BA8] h-[9rem] aspect-square content-center border-light-green border rounded-full text-white">
                {index + 1}
              </span>
              <h1 className="text-[2.4rem]  capitalize font-bold leading-[3.9rem] text-light-green sm:leading-[5.1rem] pb-[rem]">
                {item.heading}
              </h1>
              <p className="text-[2rem] text-black leading-[1.9rem] sm:leading-[2.3rem]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* scroll */}
      <div className="xl:hidden flex justify-center gap-6 mt-[4rem]">
        <span className="p-3 rounded-full bg-light-green"></span>
        <span className="p-3 rounded-full bg-slate-300"></span>
        <span className="p-3 rounded-full bg-slate-300"></span>
      </div>
    </section>
  );
};

export default Section6;
