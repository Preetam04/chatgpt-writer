export default defineBackground(() => {
  console.log("Hello background!", { id: browser.runtime.id });

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    console.log(currentTab);

    if (
      currentTab &&
      currentTab.url?.includes("linkedin.com/messaging/thread/")
    ) {
      console.log("This is the tab");

      chrome.tabs.sendMessage(currentTab.id, { action: "checkElement" });

      // Inject the content script
      // chrome.scripting.executeScript({
      //   target: { tabId: currentTab.id! },
      //   files: ["content.ts"],
      // });
    } else {
      console.log("No active tab found");
    }
  });
});
