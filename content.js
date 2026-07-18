//console.log(chrome.storage);
async function doThing() {
    console.log((await chrome.storage.local.get("token")).token);
    if((await chrome.storage.local.get("token")).token) {
        const { token } = await chrome.storage.local.get("token");

        document.body.style.fontFamily = token;
    }
}
doThing();