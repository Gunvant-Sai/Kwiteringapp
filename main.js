function adduser()
{
    User=document.getElementById("user_name").value;
    localStorage.setItem("Username", User);
    window.location="kwitter_room.html";
}