export default defineBackground(() => {
  console.log("Hello background!", { id: browser.runtime.id });

  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];

      if (
        currentTab &&
        currentTab.id &&
        currentTab.url?.includes("linkedin.com/messaging/thread")
      ) {
        // console.log(currentTab.url);

        chrome.tabs.sendMessage(
          currentTab.id,
          { type: "MESSAGE_THREAD_DETECTED" },
          (response) => {
            if (chrome.runtime.lastError) {
              console.error("Error sending message:", chrome.runtime.lastError);
            } else {
              console.log("Message sent to content script:", response);
            }
          }
        );
      } else {
        console.log("Not valid URl");
      }
    });
  });
});

// if (
//   currentTab &&
//   currentTab.id !== undefined &&
//   currentTab.url?.includes("linkedin.com/messaging/thread")
// ) {
//   console.log("This is the tab");
//   console.log(currentTab.id);

//   chrome.tabs.sendMessage(
//     currentTab.id,
//     { type: "MESSAGE_THREAD_DETECTED" },
//     (response) => {
//       if (chrome.runtime.lastError) {
//         console.error("Error sending message:", chrome.runtime.lastError);
//       } else {
//         console.log("Message sent to content script:", response);
//       }
//     }
//   );
// } else {
//   console.log("No active LinkedIn messaging thread tab found.");
// }
