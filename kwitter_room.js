
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBrJc26BJ0Hh4dhJ7wZWfRtypTWOGAyfWI",
      authDomain: "kwitter-ca460.firebaseapp.com",
      databaseURL: "https://kwitter-ca460-default-rtdb.firebaseio.com",
      projectId: "kwitter-ca460",
      storageBucket: "kwitter-ca460.appspot.com",
      messagingSenderId: "826330984347",
      appId: "1:826330984347:web:831dcb02363a6a27d87b3e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
    function addroom() {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                key:"Room_Names"
          });
          localStorage.setItem("room_name" , room_name);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}