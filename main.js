var firebaseConfig = {
    apiKey: "AIzaSyAIvW2ntp9zUXKi3OJ_2VAz-0ET2fhHLHs",
    authDomain: "kwitter-web-1d29e.firebaseapp.com",
    databaseURL: "https://kwitter-web-1d29e-default-rtdb.firebaseio.com",
    projectId: "kwitter-web-1d29e",
    storageBucket: "kwitter-web-1d29e.appspot.com",
    messagingSenderId: "16428154226",
    appId: "1:16428154226:web:2fb590de91e782616fb1eb",
    measurementId: "G-ETDYB8HXC8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   function send(){
 x=document.getElementById("1stusn").value;
firebase.database().ref("/").child(x).set({
    Name:"Ayushmaan",
    grade:6
});
y=document.getElementById("2stusn").value;
firebase.database().ref("/").child(x).push({
    message:y
    
});
firebase.database().ref("/").child(x).on("value",function(snapshot){
    console.log(snapshot.val());
});

   }