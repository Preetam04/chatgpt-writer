import React from "react";
import Modal from "@/components/Modal";

const App = () => {
  const ele = document.getElementsByClassName("msg-form__contenteditable")[0];
  console.log(ele);

  return (
    <div className="">
      Ui is beign rendered
      <Modal
        isOpen={true} // Or any state variable to control visibility
        onClose={() => {
          console.log("Modal closed");
          // root.render(null); // Clear the modal when closed
        }}
      />
    </div>
  );
};

export default App;
