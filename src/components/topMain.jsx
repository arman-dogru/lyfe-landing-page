import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.webp";
import Image3 from "../assets/Image3.webp";
const topMain = () => {
  return (
    <div>
      <div
        className="grid sm:grid-cols-1 md:grid-cols-2  py-40 min-h-min"
      >
        <div className="flex justify-center items-center ">
          <h1 className="w-8/12 text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-cyan-400 ">
            We're solely for the small and independent artist (AI Generated
            Chnage)
          </h1>
        </div>
        <div className="relative block min-h-min">
          <div className="absolute top-0 left-0 z-0 w-72 h-64">
            <img
              src={Image1}
              alt="Image 1"
              className="object-fill w-full h-full"
            />
          </div>

          <div className="absolute top-16 left-60 z-10 w-64 h-96">
            <img
              src={Image2}
              alt="Image 2"
              className="object-fill w-full h-full"
            />
          </div>

          <div className="absolute top-80 left-8 z-20 w-72 h-72">
            <img
              src={Image3}
              alt="Image 3"
              className="object-fill w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default topMain;
