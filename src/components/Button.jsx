const Button = ({ type, children, variant, className }) => {
  let bgColor;
  if (variant === "blue") bgColor = "btn-primary";
  if (variant === "red") bgColor = "btn-accent";
  if (variant === "grey") bgColor = "btn-secondary";

  // Render the Link or button
  if (type === "button")
    return (
      <button className={`btn ${bgColor} ${className}`}>{children}</button>
    );
  if (type === "link")
    return (
      <a href="#" className={`btn ${bgColor} ${className}`}>
        {children}
      </a>
    );
};

export default Button;
