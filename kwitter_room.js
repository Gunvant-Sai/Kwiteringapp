
var firebaseConfig = {
   apiKey: "AIzaSyBEez1AH3wL9lzC_1LsPRHLYu7rLaJGiog",
   authDomain: "kwitteringprojecthw.firebaseapp.com",
   databaseURL: "https://kwitteringprojecthw-default-rtdb.firebaseio.com",
   projectId: "kwitteringprojecthw",
   storageBucket: "kwitteringprojecthw.appspot.com",
   messagingSenderId: "640589781598",
   appId: "1:640589781598:web:4cdad350bfbfc47fc832cf",
   measurementId: "G-YN57BRV8F2"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

userNAMING = localStorage.getItem("Username");
document.getElementById("user").innerHTML = "Welcome " + userNAMING + "!";

function getData() {
   firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
         childKey = childSnapshot.key;
         Room_names = childKey;
         //Start code
         console.log("Room_names - " + Room_names);
         row = "<div class='room_name' id='" +Room_names+ "' onclick='redirectroomname(this.id)'>" +Room_names+ "</div><hr>";
         document.getElementById("output").innerHTML += row;
         //End code
      });
   });
}
getData();

function addRoom() {
   room_name = document.getElementById("room_name").value;

   firebase.database().ref("/").child(room_name).update({ purpose: "AddingRoomname" })

   localStorage.setItem("Roomname", room_name);

   window.location = "kwitter_page.html";
}

function redirectroomname(name) {
   console.log(name);
   localStorage.setItem("Roomname", name);
   window.location = "kwitter_page.html";
}

function LOGOUT()
{
   localStorage.removeItem("Username");
   localStorage.removeItem("Roomname")
   window.location = "index.html";
}
