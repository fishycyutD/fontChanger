/*
All await functions must be in an async function
async must be called in order to run
(await chrome.storage.local.get("token")).token
*/
let fancy = document.getElementById("fancy");
let basic = document.getElementById("basic");
let casual = document.getElementById("casual");
let futuristic = document.getElementById("futuristic");

let display = document.getElementById("display");
console.log(navigator.cookieEnabled);


//new Date()
//date.getTime() + (31,536,000,000)
function changeDisplay(choice) {
  display.textContent = "Current default font: " + choice;
}
async function changeFont(choice) {
  changeDisplay(choice);
  await chrome.storage.local.set({
    token: choice,
  });
  console.log((await chrome.storage.local.get("token")).token);
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    chrome.scripting.executeScript({
        target : {tabId : tab.id},
        args : [choice],
        func : (choice) => {console.log(choice); document.body.style.fontFamily = choice; document.body.appendChild(
  Object.assign(document.createElement("link"), {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  })
);
document.body.appendChild(
  Object.assign(document.createElement("link"), {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossorigin: true
  })
);
document.body.appendChild(
  Object.assign(document.createElement("link"), {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Tektur:wght@400..900&display=swap",
    crossorigin: true
  })
);}});
}
function getCookie(name) {
  let cookieArray = decodeURIComponent(document.cookie).split("; ");
  let toReturn = null;
  cookieArray.forEach(element => {
    if(element.indexOf(name + "=") === 0) {
      toReturn = element.substring(name.length + 1);
    }
  });
  return(toReturn);
}

fancy.addEventListener("click", () => {
    changeFont("Serif");
});
casual.addEventListener("click", () => {
    changeFont("Comic Sans MS");
});
futuristic.addEventListener("click", () => {
    changeFont("Tektur");
});
basic.addEventListener("click", () => {
    changeFont("Sans-Serif");
});/*"https://www.youtube.com/*"*/

async function doThing () {
  if((await chrome.storage.local.get("token")).token) {
    changeFont((await chrome.storage.local.get("token")).token);
  }
}
doThing();
//console.log((chrome.storage.local.get("token")).token);
