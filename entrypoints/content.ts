import renderModal from "@/entrypoints/ui";
import icon from "../assets/ai-icon.svg";
import ReactDOM from "react-dom/client";
import React from "react";

export default defineContentScript({
  matches: ["https://*.linkedin.com/*"],
  runAt: "document_end",
  main() {
    console.log("Hello content.");
    let dataField: Element | null = null;

    // const appendButton = () => {}

    const getDataField = () => {
      const ele = document.getElementsByClassName(
        "msg-form__msg-content-container--scrollable"
      );
      dataField = ele[0];
      // created button, TODO: figure out if there is a way to write this style in tailwind(Not find till yet)
      const button = document.createElement("button");
      const img = document.createElement("img");
      img.src = icon;
      img.alt = "click";

      button.appendChild(img);
      button.style.backgroundColor = "#fff";

      button.style.padding = "0.5rem";
      button.style.borderRadius = "100%";
      button.style.position = "absolute";
      button.style.boxShadow = "black 1px 2px 4px -3px";
      button.style.right = "1rem";
      button.style.bottom = "1rem";

      const modalRoot = document.createElement("div");
      modalRoot.id = "react-modal-root";
      document.body.appendChild(modalRoot);

      // let flag = false;
      // let root = ReactDOM.createRoot(modalRoot);

      button.addEventListener("click", () => {
        console.log("Button clicked!");
        // renderModal(root);
        renderModal(modalRoot);
      });

      dataField.appendChild(button);
    };

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      // console.log("Message received from background:", message);

      if (message.type === "MESSAGE_THREAD_DETECTED") {
        // console.log("LinkedIn messaging thread detected!");

        getDataField();
        sendResponse({
          status: "Message received and processed in content script",
        });
      } else {
        console.log("there was some error", chrome.runtime.lastError);
      }

      return true;
    });

    // getEle();
    // console.log(dataField);
  },
});
