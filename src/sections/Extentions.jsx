import Button from "../components/Button";
import { extentionData } from "../constant";

const Extentions = () => {
  return (
    <section className="text-dark_Blue">
      <header className="text-center">
        <h2 className="  font-medium text-2xl lg:text-3xl leading-10 tracking-[-0.08px] lg:tracking-[-0.1px] ">
          Download the extension
        </h2>
        <p className=" opacity-50 text-base lg:text-lg leading-6 leading-7 lg:mt-4 ">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </header>
      <div className="flex flex-col md:flex-row md:justify-around gap-x-8 gap-y-10 mt-10">
        {extentionData.map((data) => (
          <div className="flex flex-col items-center w-full rounded-2xl p-6  shadow-lg bg-white">
            <div className="text-center  border-b  border-dotted pb-8">
              <img className="mx-auto" src={data.icon} alt="" />
              <h3 className=" text-xl mt-8 tracking-[0.25] font-medium">
                {data.heading}
              </h3>
              <p className="text-base opacity-50 leading-7">{data.text}</p>
            </div>
            <Button
              type="link"
              className="w-full mt-6 text-center"
              variant="blue"
            >
              Add & Extension
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Extentions;
