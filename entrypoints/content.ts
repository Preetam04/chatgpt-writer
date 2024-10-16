export default defineContentScript({
  matches: ["*://*.google.com/*", "*://*.linkedi.com/*"],
  runAt: "document_idle",
  main() {
    console.log("Hello content.");

    function getEle() {
      // const ele = await document.getElementsByClassName(
      //   "presence-entity__image"
      // )[0];

      console.log("hiisdsd");
    }

    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.action === "checkElement") {
        getEle(); // Check for the element when message received
      }
    });

    getEle();

    // document.body.style.backgroundColor = "#ADD8E6";
  },
});
