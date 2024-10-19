import renderModal from "@/entrypoints/ui";
import icon from "../assets/ai-icon.svg";
import ReactDOM from "react-dom/client";
import React from "react";

export default defineContentScript({
  matches: ["https://*.linkedin.com/*"],
  runAt: "document_end",
  main() {
    console.log("Hello content.");

    const appendButton = () => {
      const dataField = document.getElementsByClassName(
        "msg-form__msg-content-container--scrollable"
      )[0];

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

      button.addEventListener("click", () => {
        button.style.display = "none";
        renderModal(button);
      });

      dataField.appendChild(button);
    };

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      // console.log("Message received from background:", message);

      if (message.type === "MESSAGE_THREAD_DETECTED") {
        appendButton();
        sendResponse({
          status: "Message received and processed in content script",
        });
      } else {
        console.log("there was some error", chrome.runtime.lastError);
      }

      return true;
    });
  },
});
