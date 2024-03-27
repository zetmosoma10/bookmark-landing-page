const Button = ({ type, children }) => {
  if (type === "button") return <button>{children}</button>;
  if (type === "link") return <a href="#">{children}</a>;
};

export default Button;
