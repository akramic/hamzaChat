const input = document.getElementById("input");
const a = document.getElementById("room");

input.addEventListener("keyup", (event) => {

  if (event.target.value.length > 3) {
    let room = event.target.value
    a.classList.remove("invisible")
    a.href = `chat/${room}`;

  } else {
    a.classList.add("invisible");
    a.href = ""
  }

});

