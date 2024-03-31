import { useState } from "react";
import { FAQList } from "../constant";
import Button from "../components/Button";

const FAQ = () => {
  const [state, setState] = useState(FAQList);

  const handleExpanded = (id) => {
    setState((prevState) => {
      return prevState.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      );
    });
  };

  return (
    <section className="max-container max-w-[540px] text-center flex flex-col items-center text-dark_Blue">
      <h2 className="text-2xl md:text-3xl text-center font-medium leading-7 md:leading-10 tracking-[-0.08px] md:tracking-[-0.1px]">
        Frequently Asked Questions
      </h2>
      <p className="text-center opacity-50 text-base md:text-lg leading-6 md:leading-7 mt-4">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <div className="mt-14 text-left w-[90%]">
        <ul>
          {state.map((item) => (
            <li className="first:border-t first:border-opacity-15 border-b border-dark_Blue border-opacity-15 p-3">
              <div
                onClick={() => handleExpanded(item.id)}
                className="cursor-pointer hover:text-soft_Red  flex items-center justify-between duration-100"
              >
                <h3 className="text-lg leading-8 font-normal">
                  {item.question}
                </h3>
                <svg
                  className={`${item.isOpen ? "rotate-180" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="12"
                >
                  <path
                    fill="none"
                    stroke={`${item.isOpen ? "#FA5959" : "#5267DF"}`}
                    stroke-width="3"
                    d="M1 1l8 8 8-8"
                  />
                </svg>
              </div>

              {item.isOpen && (
                <p className="mt-8 opacity-75 leading-9 tracking-[0.15px] font-normal">
                  {item.answer}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
      <Button className="mt-12" variant="blue" type="link">
        More Info
      </Button>
    </section>
  );
};

export default FAQ;
