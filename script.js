 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
 import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
 // import { getDatabase, ref, set } from "firebase/database";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
     apiKey: "AIzaSyCHhEim0nn9ZJTd_kd-d8q2v1D5HJHqrLg",
     authDomain: "air-monitoring-system-iot.firebaseapp.com",
     databaseURL: "https://air-monitoring-system-iot-default-rtdb.firebaseio.com",
     projectId: "air-monitoring-system-iot",
     storageBucket: "air-monitoring-system-iot.appspot.com",
     messagingSenderId: "634520936203",
     appId: "1:634520936203:web:6cb5c8fefdea213281cc0e",
     measurementId: "G-JZ7JXE4WBG"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const database = getDatabase(app);

 var data = 169;
 var sendBadIntVar;
 var sendGoodIntVar




 let para = document.querySelector('#para');
 let remark = document.querySelector("#remark");

 sendGoodBtn.addEventListener("click", sendGood);
 sendBadBtn.addEventListener("click", sendBad);


 function sendGood() {
     sendGoodIntVar = setInterval(changeGood, 4000);
     clearInterval(sendBadIntVar);

 }
 function sendBad() {
     sendBadIntVar = setInterval(changeBad, 4000);
     clearInterval(sendGoodIntVar);

 }

 function writeUserData(aqi) {
     const db = getDatabase();
     set(ref(db, 'readings/' + aqi), {
         airQuality: aqi,
         
     });
 }

 function changeGood() {
     para.innerText = data;
     document.body.appendChild(para);
     data = Math.floor(Math.random() * (250 - 100 + 1)) + 100;  //Math.floor(Math.random() * (max - min + 1) + min)
     remark.innerText = "Air Quality = GOOD"
     writeUserData(data);
 }
 function changeBad() {
     para.innerText = data;
     document.body.appendChild(para);
     data = Math.floor(Math.random() * (900 - 250 + 1)) + 250;  //Math.floor(Math.random() * (max - min + 1) + min)
     remark.innerText = "Air Quality = BAD"
     writeUserData(data);
 }

 showOutput.addEventListener("click", stopEverything)

 function stopEverything() {
     location.reload();
 }