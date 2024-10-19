import React from "react";
import generateIcon from "@/assets/send.svg";
import insertIcon from "@/assets/insert.svg";
import regenerateIcon from "@/assets/regenerate.svg";
import Button from "./Button";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  // textField: HTMLElement;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [prompt, setPrompt] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [contentGenerated, setContentGenerated] = useState<boolean>(false);
  const modalRef = useRef(null);

  const handleClick = (e: React.MouseEvent) => {
    if (e.target.id !== "modal") {
      if (modalRef.current && !modalRef.current?.contains(e.target)) {
        // console.log(e.target);
        onClose();
      }
    }
  };

  const onGenerate = () => {
    if (content === "") return;
    setPrompt(content);
    setContent("");
    setContentGenerated((prev) => !prev);
  };

  const onRegenerate = () => {
    // setPrompt("");
    // setContentGenerated((prev) => !prev);
  };

  const onInsert = () => {
    const ele = document.getElementsByClassName("msg-form__contenteditable")[0];
    const contentHolder = ele.querySelector("p");
    // console.log(contentHolder);

    contentHolder.innerText =
      "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.";

    const placeholder = document.getElementsByClassName(
      "msg-form__placeholder"
    )[0];
    // placeholder
    // console.log(placeholder);
    if (placeholder) {
      placeholder.classList.remove("msg-form__placeholder");
    }

    const button = document.getElementsByClassName("msg-form__send-button")[0];
    // console.log(button);

    button.removeAttribute("disabled");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center w-screen h-screen bg-black/45 z-50 "
      onClick={(e) => {
        handleClick(e);
      }}
    >
      <div
        ref={modalRef}
        id="modal"
        className="bg-[#F9FAFB] p-6  shadow-lg w-full max-w-4xl px-6 space-y-6 flex flex-col items-end rounded-2xl "
      >
        {/* message fields */}
        {contentGenerated && (
          <div className="border-b-2 border-gray-400 w-full flex flex-col gap-6 ">
            <p className="w-full max-w-[400px]  p-4 bg-gray-300/75 text-gray-700 text-start self-end rounded-md text-2xl">
              {prompt}
            </p>
            <p className="w-full max-w-[400px] p-4 bg-blue-300/75 text-gray-800 text-start self-start rounded-md text-2xl">
              Thank you for the opportunity! If you have any more questions or
              if there's anything else I can help you with, feel free to ask.
            </p>
          </div>
        )}

        <input
          type="text"
          name=""
          placeholder="Your prompt"
          id=""
          disabled={contentGenerated}
          className="border border-gray-300 rounded-md p-2 w-full active:!bg-white focus-visible:!shadow-none focus:!shadow-none hover:!shadow-none  focus-visible:!outline-none focus:!outline-none ring-[1px] focus:ring-blue-400 focus-visible:ring-blue-400 hover:ring-blue-300"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />

        {!contentGenerated && (
          <Button
            text="Generate"
            variant="primary"
            icon={generateIcon}
            onClick={onGenerate}
          />
        )}

        {contentGenerated && (
          <div className="flex items-center gap-4 ">
            <Button
              text="Insert"
              variant="outline"
              icon={insertIcon}
              onClick={onInsert}
            />
            <Button
              text="Regenerate"
              variant="primary"
              icon={regenerateIcon}
              onClick={onRegenerate}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
