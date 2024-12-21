import phone from "../assets/images/phone.png";
import phone13 from "../assets/images/phone13.png";
import apple from "../assets/images/apple.png";
import googleplay from "../assets/images/googleplay.png";

const Section9 = () => {
  return (
    <section className="bg-light-pink pt-[5.4rem] pb-[10rem] sm:pt-[10rem] flex">
      <div className="flex-col   flex justify-center items-center text-center lg:text-start flex-1 px-4">
        <div className="flex flex-col items-center  lg:items-start justify-center">
          <h1 className="text-[3.2rem] sm:text-[4.8rem] font-bold text-light-green">
            Amrutam home App
          </h1>
          <p className="text-[1.4rem] sm:text-[1.6rem]  text-[#676767] max-w-[26rem] sm:max-w-[57.4rem] pt-8 pb-12">
            The Amrutam Home App is your one-stop app for all things Ayurveda!
            Apart from mimicking the significant characteristics of our website,
            this app offers a wide range of additional features.
          </p>
        </div>

        <div>
          <img src={phone13} alt="phone" className="lg:hidden" />
        </div>

        <div className="flex flex-col  items-center lg:items-start gap-10">
          <h1 className="font-bold capitalize max-w-[27.5rem] sm:max-w-[57.4rem] [font-family:'Din'] text-[2rem] sm:text-[3.2rem]">
            Get a diet & lifestyle consultation with ayurvedic experts across
            the globe{" "}
          </h1>
          <h1 className="font-bold  text-[3.6rem]">Get the App now</h1>
          <img src={apple} alt="apple store" className="cursor-pointer" />
          <img
            src={googleplay}
            alt="google play store"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="max-lg:hidden   content-center flex-1">
        <img src={phone} alt="phone" />
      </div>
    </section>
  );
};

export default Section9;
