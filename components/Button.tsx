import React from "react";
import icon from "../assets/ai-icon.svg";

const button = () => {
  // Create the button element
  const button = document.createElement("button");

  // Apply Tailwind classes to the button
  button.className =
    "flex items-center px-4 py-2 bg-blue-500 text-white border-none cursor-pointer mt-2 hover:bg-blue-700 transition-colors";

  // Create an image element
  const img = document.createElement("img");
  img.src = icon;
  img.alt = "click";
  img.className = "w-5 h-5 mr-2"; // Tailwind classes for size and margin

  // Append the image to the button
  button.append(img);

  // Add an event listener to the button
  button.addEventListener("click", () => {
    console.log("Button clicked!");
  });

  return button;
};

export default Button;
