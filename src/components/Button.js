import React from "react";

function Button({ text, variant = "default", onClick, className = "", children }) {
  const baseStyles =
    "font-urbanist rounded-full px-6 py-3 flex items-center justify-center transition-all duration-500 ease-in-out";

  // Variants for different button styles
  const variants = {
    default:
      "bg-transparent border border-white text-white hover:bg-white hover:text-primary",
    outlineOrange:
      "bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-white",
    solidOrange:
      "bg-secondary text-white",
    darkdefault:
      "bg-white text-primary border border-primary hover:bg-primary hover:text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {text}
      {children && <span className="ml-2">{children}</span>}
    </button>
  );
}

export default Button;
