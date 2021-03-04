/*  

Client side
window.addEventListener(a, b, data) {
  if (data.extAction) {
    try {
      var res = data.action(FI, fiQuery);
      return res;
    } 
    catch(e) return e;
  }
}
Extension
fucntion extend action colorAllFIPlacements(FI, fiQuery, arg) {
  fiQuery(div.FIOnDemandWrapper).addClass(arg[0]);
}

fucntion extend action getAllPlacementsReturnedToPage(FI, fiQuery, arg) {
  return FI.g_clientManager.placementQueue;
 }

*/
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    chrome.runtime.onInstalled.addListener(function() {
      chrome.storage.sync.set({obj: request}, function() {
        console.log(request);
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {urlContains: ':'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });
  sendResponse({obj: request});
  }
);