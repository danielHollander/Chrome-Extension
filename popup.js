function connect(event) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const port = chrome.tabs.connect(tabs[0].id);
    port.postMessage({ function: event });
  });
}

function callFilePerButtonInput(fileName) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(null, {file: "tag.js"}, function(){
  			chrome.tabs.executeScript(null, { file: fileName }, () => connect());
	  	});
	});
}


document.getElementById("fiobject").addEventListener("click", function(e) { 
	callFilePerButtonInput("loadAllPlacements.js");
}, false);

document.getElementById("change-color").addEventListener("click", function(e) { 
	callFilePerButtonInput("colorAllPlacements.js");
}, false);

document.getElementById("fi-js").addEventListener("click", function(e) { 
	callFilePerButtonInput("fi.js");
}, false);


