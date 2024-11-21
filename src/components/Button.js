import React from "react";

function Button({ text, variant = "default", onClick }) {
  const baseStyles =
    "font-urbanist rounded-full px-6 py-3 flex items-center justify-center text-sm font-medium transition-all duration-300 ease-in-out";

  // Variants for different button styles
  const variants = {
    default:
      "bg-transparent border border-white text-white hover:bg-white hover:text-primary", // Transparent with white text
    outlineOrange:
      "bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-white", // Orange outline
    solidOrange:
      "bg-secondary text-white hover:brightness-90", // Solid orange, remains orange
    contact:
      "bg-white text-primary border border-primary hover:bg-primary hover:text-white", // Dark background with hover white
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} onClick={onClick}>
      {text}
      <span className="ml-2">→</span>
    </button>
  );
}

export default Button;
