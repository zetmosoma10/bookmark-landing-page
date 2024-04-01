import Button from "../components/Button";
import errorIcon from "../Assets/images/icon-error.svg";
import { useState } from "react";

const CallToAction = () => {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(true);
  console.log("email:" + input);

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
    setIsValid(validateEmail(input));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(input)) {
      setIsValid(validateEmail(input));
      return;
    }
    alert("Thank you for Joining Our Newsletter");
    setInput("");
  };

  return (
    <section className="flex flex-col items-center   bg-soft_Blue text-slate-50">
      <div className="text-center max-container max-w-[442px] my-14 md:my-[75px]">
        <p className="text-sm font-medium leading-10 tracking-[4.62px]">
          35,000+ ALREADY JOINED
        </p>
        <h3 className="text-2xl md:text-3xl font-medium leading-7 md:leading-10 tracking-[-0.08px] md:tracking-[-0.1px]">
          Stay up-to-date with what we’re doing
        </h3>
        <form
          onSubmit={handleSubmit}
          className="md:mt-8 md:flex md:items-start md:gap-4"
        >
          <div className="flex-grow  mt-8 md:mt-0  ">
            <div
              style={{
                border: isValid ? "" : "2px solid #FA5959",
              }}
              className=" flex items-center justify-between 
            px-3 py-2  bg-white rounded "
            >
              <input
                name={input}
                value={input}
                onChange={handleChange}
                className=" w-full text-sm leading-7 tracking-[0.25px]
                 text-dark_Blue outline-none placeholder:text-base placeholder:leading-7 placeholder:tracking-[0.15px]"
                type="text"
                placeholder="Enter your email address"
              />
              <img
                style={{ display: isValid ? "none" : "block" }}
                className="hidden"
                src={errorIcon}
                alt=""
              />
            </div>
            {!isValid ? (
              <small className="block text-left bg-soft_Red pl-2 py-2 italic rounded">
                Whoops, make sure it’s an email
              </small>
            ) : null}
          </div>
          <Button
            className="leading-7 md:w-auto  hover:bg-white hover:bg-soft_Red tracking-[0.25px] mt-4 md:mt-0 w-full"
            type="button"
            variant="red"
          >
            Contact Us
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;
