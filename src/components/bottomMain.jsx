import QR_code from "../assets/QR_code.png";
import { FaFacebook, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";

const BottomMain = () => {
  return (
    <div className="relative flex flex-col items-center min-h-fit lg:px-16 py-10 md:pb-10">
      {/* Header Text */}
      <div className="text-center lg:text-left mt-10 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black">
          Sign up for early access and step into the Lyfe adventure.
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-16 xl:space-x-32 mt-16 px-4">
        {/* Join Waitlist Button */}
        <a href="https://forms.fillout.com/t/2HnnrSfJU9us" target="_blank" rel="noopener noreferrer">
          <button className="relative border border-black rounded-full px-6 py-3 text-base md:text-lg lg:text-xl flex items-center justify-between space-x-2 hover:bg-black hover:text-white transition-all duration-300 whitespace-nowrap">
            <span>Get Early Access</span>
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </a>

        {/* Middle Text */}
        <p className="text-center text-lg md:text-xl lg:text-2xl">
          SCAN QR <br /> OR DROP YOUR EMAIL.
        </p>

        {/* QR Code and Label */}
        <div className="flex flex-col items-center text-center space-y-6">
          <img
            src={QR_code}
            alt="QR Code"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
          />
        </div>
      </div>

      {/* Footer - Contact Information and Social Icons */}
      <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start text-sm sm:text-base md:text-lg lg:text-2xl text-gray-800 px-4 sm:px-8 mt-10 space-y-8 lg:space-y-0">
        <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start lg:pb-10">
            <p className="mb-1 font-semibold">PHONE</p>
            <p className="font-medium">(123) 456-7890</p>
          </div>
          <div className="flex items-center justify-center lg:justify-start space-x-2 bg-gray-200 px-4 py-2 rounded-md">
            <FaApple size={24} className="text-black" />
            <a href="https://forms.fillout.com/t/2HnnrSfJU9us" target="_blank" rel="noopener noreferrer">
              <p className="text-sm md:text-base font-medium text-black">
                Join waitlist for <br /> iOS App
              </p>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:pt-9 w-full md:w-auto">
          <p className="mb-1 font-semibold">EMAIL</p>
          <p className="font-medium">hello@reallygreatsite.com</p>
        </div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:pt-20 w-full md:w-auto">
          <p className="mb-1 font-semibold">SOCIALS</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/lyfe.social/profilecard/?igsh=b29tcnJ6ZDA5enNl" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={24} />
            </a>
            <a href="https://x.com/LyfeisSocial" target="_blank" rel="noopener noreferrer">
              <FaXTwitter size={24} />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:pt-28">
          <p className="mb-1 font-semibold">LOCATION</p>
          <p className="font-medium">1234 Street Name<br />City, State, ZIP</p>
        </div>
      </div>
    </div>
  );
};

export default BottomMain;
