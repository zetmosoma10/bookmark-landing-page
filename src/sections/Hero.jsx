import heroImg from "../Assets/images/illustration-hero.svg";
import Button from "../components/Button";
import herobgImg from "../Assets/images/hero-rectangle.svg";

const Hero = () => {
  return (
    <section
      className="relative max-container  grid md:grid-cols-[50%,50%]
         justify-items-center md:justify-items-start gap-y-24"
    >
      <img
        className="order-1 md:order-2 w-full md:w-auto md:max-w-[600px]"
        src={heroImg}
        alt="tablet image"
      />
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
