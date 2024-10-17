import icon from "../assets/ai-icon.svg";

export default defineContentScript({
  matches: ["https://*.linkedin.com/*"],
  runAt: "document_end",
  main() {
    console.log("Hello content.");
    let dataField: Element | null = null;

    const getDataField = () => {
      const ele = document.getElementsByClassName("msg-form__contenteditable");
      dataField = ele[0];
      // console.log(ele[0]);

      // created button, TODO: figure out if there is a way to write this style in tailwind(Not find till yet)
      const button = document.createElement("button");
      const img = document.createElement("img");
      img.src = icon;
      img.alt = "click";

      button.style.backgroundColor = "#fff";

      button.style.padding = "0.5rem";
      button.style.borderRadius = "100%";
      button.style.position = "absolute";
      button.style.boxShadow = "black 1px 2px 4px -3px";
      button.style.right = "1rem";
      button.style.bottom = "1rem";

      button.append(img);

      button.addEventListener("click", () => {
        console.log("Button clicked!");
      });

      dataField.appendChild(button);
    };

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      // console.log("Message received from background:", message);

      if (message.type === "MESSAGE_THREAD_DETECTED") {
        console.log("LinkedIn messaging thread detected!");

        getDataField();
        sendResponse({
          status: "Message received and processed in content script",
        });
      } else {
        console.log("there was some error", chrome.runtime.lastError);
      }

      // Return true if you have asynchronous code and want to keep the message channel open
      return true;
    });

    // getEle();
    console.log(dataField);
  },
});

//   const element = await document.getElementsByClassName(
//     "msg-form__contenteditable"
//   );
//   if (element) {
//     ele = element;
//   }
// };

// function getEle() {
//   const example = document.getElementsByClassName(
//     "msg-form__contenteditable"
//   );
//   console.log("asdadasd");

//   console.log(example[0]);
// }

// if (document.readyState !== "loading") {
//   // document.addEventListener("DOMContentLoaded", () => {
//   // });
//   getEle();
// }

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("DOM is ready, now waiting for the element...");
// });

// window.addEventListener("load", () => {
//   // Manipulate the DOM here
//   getEle();
// });

// console.log("Content script running on:", window.location.href);

//

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   console.log("Received message:", message);
//   sendResponse({ status: "Message received" });
// });
// console.log(chrome.runtime);

//   chrome.runtime.onMessage.addListener(function (
//     request,
//     sender,
//     sendResponse
//   ) {
//     console.log("Received message:", request, sender);
//     if (request.type === "MESSAGE_THREAD_DETECTED") {
//       sendResponse({ status: "Message received" });
//     }
//   });
//   // chrome.runtime.

// getEle();
