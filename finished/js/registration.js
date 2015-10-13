/*globals async, swMessage*/
(function(){
  "use strict";
  // Service Worker registration (installation/activation).
  if(!("serviceWorker" in navigator)){
    console.error("No serviceWorker support!");
    return;
  }
  var doRegistration = async(function*(){
    console.log("Attempting to register SW");
    var reg = yield navigator.serviceWorker.getRegistration();
    if(!reg){
      console.log("No registration, so register");
      try{
        reg = yield navigator.serviceWorker.register("sw.js");
      } catch (err){
        console.error("SW Registration failed", err);
        return;
      }
    }
    // Registration lets you interact with the SW in different states.
    console.log("SW registration", reg);
    var sw = yield reg.active;
    console.log("Active SW", sw);

    //lets chat with our SW
    if(!sw){
      console.log(`Our SW is ${sw}, because first run...`);
      return;
    }

    // Old school
    navigator.serviceWorker.addEventListener("message", function handler(ev){
      navigator.serviceWorker.removeEventListener("message", handler);
      console.log(ev.data);
    });
    sw.postMessage({name: "ping"});

    // Fancier message using swMessage
    var hasFile = swMessage(sw, "isFileInCache");
    var results = yield Promise.all([
      hasFile({"path": "./"}),
      hasFile({"path": "images/twitter_white.svg"}),
      hasFile({"path": "images/github.svg"}),
      hasFile({"path": "images/w3c_white.svg"}),
      hasFile({"path": "images/not-real-file.svg"}),
    ]);
    console.log("Do we have files?", results);
  });
  window.addEventListener("load", doRegistration);
}());
