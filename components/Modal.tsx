import React from "react";
import generateIcon from "@/assets/send.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [content, setContent] = useState<string>("");

  return (
    <div className="fixed inset-0 flex items-center justify-center w-screen h-screen bg-black/45 z-50 ">
      <div className="bg-[#F9FAFB] p-6  shadow-lg w-full max-w-4xl px-6 space-y-6 flex flex-col items-end rounded-2xl">
        <input
          type="text"
          name=""
          placeholder="Your prompt"
          id=""
          className="border border-gray-300 rounded-md p-2 w-full active:!bg-white focus-visible:!shadow-none focus:!shadow-none hover:!shadow-none  focus-visible:!outline-none focus:!outline-none ring-[1px] focus:ring-blue-400 focus-visible:ring-blue-400 hover:ring-blue-300"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />

        <button
          onClick={onClose}
          className=" bg-blue-500 text-white px-6 py-3  flex items-center rounded-lg text-2xl font-normal gap-3"
        >
          <img src={generateIcon} alt="generate-icon" className="w-5 h-5" />
          Generate
        </button>
      </div>
    </div>
  );
};

export default Modal;
