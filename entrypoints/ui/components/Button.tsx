// const button = () => {
//   // Create the button element
//   const button = document.createElement("button");

//   // Apply Tailwind classes to the button
//   button.className =
//     "flex items-center px-4 py-2 bg-blue-500 text-white border-none cursor-pointer mt-2 hover:bg-blue-700 transition-colors";

//   // Create an image element
//   const img = document.createElement("img");
//   img.src = icon;
//   img.alt = "click";
//   img.className = "w-5 h-5 mr-2"; // Tailwind classes for size and margin

//   // Append the image to the button
//   button.append(img);

//   // Add an event listener to the button
//   button.addEventListener("click", () => {
//     console.log("Button clicked!");
//   });

//   return button;
// };

type BtnProps = {
  icon?: string;
  text: string;
  variant: "primary" | "outline";
  onClick: () => void;
};

const Button = ({ icon, text, variant, onClick }: BtnProps) => {
  const btnVariant = {
    primary:
      "bg-blue-500 text-white px-6 py-3  flex items-center rounded-lg text-2xl font-normal gap-3",
    outline:
      "bg-white text-gray-500 px-6 py-3  flex items-center rounded-lg text-2xl font-normal gap-3 ring-[1px] ring-gray-500",
  };

  return (
    // <button className="px-4 py-2 bg-blue-500 text-white border-none cursor-pointer mt-2 hover:bg-blue-700 transition-colors">
    <button
      className={btnVariant[variant]}
      onClick={() => {
        onClick();
      }}
    >
      {icon && <img src={icon} alt={`${text}-icon`} className="w-5 h-5" />}

      {text}
    </button>
  );
};

export default Button;
