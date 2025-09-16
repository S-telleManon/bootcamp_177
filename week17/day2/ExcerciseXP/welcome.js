(function(nameOfUser) {

  const userInfoDiv = document.getElementById("user-info");

  const userSpan = document.createElement("span");
  userSpan.textContent = `Hello, ${nameOfUser}`;
  userInfoDiv.appendChild(userSpan);

  const profilePic = document.createElement("img");
  profilePic.src = "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=2048x2048&w=is&k=20&c=tU5X1sJJ9sIcqthiw5RO388RhKNllo0ZF82LPitfXgU="; 
  profilePic.style.width = "50px";
  profilePic.style.height = "50px";
  userInfoDiv.appendChild(profilePic);

})("John")

