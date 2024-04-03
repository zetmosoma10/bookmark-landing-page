import { useState } from "react";
import Button from "../components/Button";
import { featuresData } from "../constant";
import featureBgIcon from "../Assets/images/feature-ractangle.svg";
const Features = () => {
  const [featuresDataArray, setFeaturesDataArray] = useState(featuresData);
  const [featureIndex, setFeatureIndex] = useState(0);
  return (
    <section className="my-10 flex flex-col items-center max-container text-dark_Blue">
      <header className="text-center max-w-[540px]">
        <h2 className="font-medium text-2xl md:text-3xl leading-[52px] tracking-[-0.08px] md:tracking-[-0.1px]  ">
          Features
        </h2>
        <p className="opacity-50 text-base leading-6 md:mt-4">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </header>
      <div
        className="w-full flex flex-col md:flex-row md:justify-center mt-10 md:mt-[72px] divide-y divide-dark_Blue 
        divide-opacity-20 md:divide-none border-b "
      >
        {featuresDataArray.map((feature, index) => (
          <Button
            onClick={() => setFeatureIndex(feature.id)}
            style={{
              borderBottom:
                featuresDataArray[featureIndex].id === index
                  ? "1px solid #FA5959"
                  : null,
              opacity:
                featuresDataArray[featureIndex].id === index ? "1" : "0.5",
            }}
            key={index}
            type="button"
            className="font-normal opacity-75  shadow-none rounded-none active:scale-100
              first:border-t first:md:border-t-0 "
          >
            {feature.button}
          </Button>
        ))}
      </div>
      <div className="grid md:grid-cols-[50%,50%] gap-y-8  md:items-center mt-[72px] justify-items-center md:justify-items-start ">
        <div className="relative md:justify-self-end md:mr-10">
          <img
            className="w-full md:w-auto md:max-w-[536px]"
            src={featuresDataArray[featureIndex].imgUrl}
            alt=""
          />
          <img
            src={featureBgIcon}
            className="absolute -z-10 w-auto bottom-[-4%] md:bottom-[-15%] left-[-30%]"
            alt=""
          />
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-medium text-2xl md:text-3xl leading-[52px] tracking-[-0.08px] md:tracking-[-0.1px]  ">
            {featuresDataArray[featureIndex].title}
          </h3>
          <p className="text-base md:text-lg md:leading-[28px] md:mt-4  opacity-50">
            {featuresData[featureIndex].text}
          </p>
          <Button className="mt-4" type="link" variant="blue">
            {featuresDataArray[featureIndex].link}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
