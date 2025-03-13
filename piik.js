  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCLYtnkkN4jfPA7yW9ZCYf_jkuYisQLb8A",
    authDomain: "kopiganteng-3eb15.firebaseapp.com",
    projectId: "kopiganteng-3eb15",
    storageBucket: "kopiganteng-3eb15.firebasestorage.app",
    messagingSenderId: "873615591065",
    appId: "1:873615591065:web:73e94e53a31eb29231da08",
    measurementId: "G-B3JMCBRQ7D"
  };

  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
var database = firebase.database();

var ref = firebase.database().ref('/Users/');
ref.on("value", function (snapshot) {
    const data = snapshot.val();
    console.log(data);
    
}, function (error) {
    console.log("Error: " + error.code);
});
  