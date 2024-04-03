import heroImg from "../Assets/images/illustration-hero.svg";
import Button from "../components/Button";
import herobgImg from "../Assets/images/hero-rectangle.svg";

const Hero = () => {
  return (
    <section
      className="max-w-[1110px] px-4 w-[90%] mx-auto    grid md:grid-cols-[50%,50%]
         justify-items-center md:justify-items-start md:items-center gap-y-24"
    >
      <div className="order-1 md:order-2 relative">
        <img
          className=" w-full md:w-auto md:max-w-[600px]"
          src={heroImg}
          alt="tablet image"
        />
        <img
          src={herobgImg}
          className="absolute bottom-0  md:bottom-[-30%] right-[-25%]  -z-10"
          alt=""
        />
      </div>
      <div className="order-2 md:order-1 text-center md:text-left">
        <h1 className="font-medium text-3xl md:text-5xl leading-10 md:leading-[52px] tracking-[-0.09px] tracking-[-0.15px] ">
          A Simple Bookmark Manager
        </h1>
        <p className="mt-4 md:mt-6 text-base md:text-lg leading-6 md:leading-7 opacity-50">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="mt-8 space-x-[13px]">
          <Button variant="blue" type="link">
            Get on Chrome
          </Button>
          <Button
            type="link"
            className="bg-slate-200 opacity-75 hover:border hover:border-dark_Blue"
          >
            Get on Firefox
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
