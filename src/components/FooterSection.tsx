import social from "../assets/images/social.png";

const FooterSection = () => {
  return (
    <footer className="bg-[#3A643B2E]/20 pb-[17rem] pt-[4.3rem] sm:pt-[10rem] px-[3rem] text-[1.8rem]  flex flex-col sm:flex-row justify-center gap-20">
      <div className="flex flex-col gap-[1.5rem] max-w-[28rem]">
        <h1 className="font-bold text-light-green ">Get in touch</h1>
        <span>support@amrutam.co.in</span>
        <span>
          Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar,
          Gwalior - 474001
        </span>
        <span>+91 9713171999</span>
        <img src={social} alt="social" className=" w-full cursor-pointer" />
      </div>
      <div className="flex flex-col gap-[.5rem]">
        <h1 className="font-bold text-light-green mb-4">Information</h1>
        <span>About Us</span>
        <span>Terms and Conditions</span>
        <span>Privacy Policy</span>
        <span>Privacy Policy for Mobile Apps</span>
        <span>Shipping and Returns Policy</span>
        <span>International Delivery</span>
        <span>For Businesses, Hotels and Resorts</span>
      </div>
    </footer>
  );
};

export default FooterSection;
