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

  user_name=localStorage.getItem("Username");
  room_name=localStorage.getItem("Roomname");

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
names = message_data['name1'];
message = message_data['message'];
like = message_data['like'];
namwith = "<h4>"+names+"<img class='user_tick' src='tick.png'> </h4>";
messipro = "<h4 class='message_h4'>"+message+"</h4>";
likcompa = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
spanwith = "<span class='glyphicon glyphicon-thumbs-up'> Like: "+like+"</span> </button> <hr>";

row = namwith+messipro+likcompa+spanwith;
document.getElementById("output").innerHTML += row;

//End code
 } });  }); }
getData();

  
  function send()
  {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name1:user_name,
          message:msg,
         like:0
      });
      document.getElementById("msg").value="";
  }

  function update_like(id)
{
console.log(id);
like = document.getElementById(id).value;
updated = Number(like) +1;
console.log(updated);

firebase.database().ref(room_name).child(id).update
({ like : updated });
}

  function LOGOUT()
{
   localStorage.removeItem("Username");
   localStorage.removeItem("Roomname")
   window.location = "index.html";
}