var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyD2QMDWISqs9cxqXYoH6YTgbz1kmPNL-SY",
  authDomain: "dosti-yaaari.firebaseapp.com",
  projectId: "dosti-yaaari",
  storageBucket: "dosti-yaaari.appspot.com",
  messagingSenderId: "1009702423025",
  appId: "1:1009702423025:web:b050e9fe5a02fb36bf5c50",
  measurementId: "G-566FP2E8C8"
};

if (!hasInit) {
  firebase.initializeApp(config);
  hasInit = true;
}

(function () {
  // cometchat initialization
  var appID = "20448877d89e3e64";
  var region = "us";
  var appSetting = new CometChat.AppSettingsBuilder()
    .subscribePresenceForAllUsers()
    .setRegion(region)
    .build();
  CometChat.init(appID, appSetting).then(
    () => {
      console.log("Initialization completed successfully");
      // You can now call login function.
    },
    (error) => {
      console.log("Initialization failed with error:", error);
      // Check the reason for error and take appropriate action.
    }
  );
})();

// cometchat widget initialization
window.addEventListener("DOMContentLoaded", (event) => {
  CometChatWidget.init({
    appID: "20448877d89e3e64",
    appRegion: "us",
    authKey: "a306bec7d93dbef9c0616f47c2c1d512f0148b67",
  }).then(
    (response) => {
      console.log("Initialization completed successfully");
    },
    (error) => {
      console.log("Initialization failed with error:", error);
      //Check the reason for error and take appropriate action.
    }
  );
});
