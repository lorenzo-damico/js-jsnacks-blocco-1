var button = document.getElementById("button");

button.addEventListener("click",
  function () {
    document.getElementById("box_red").innerHTML = "";
    document.getElementById("box_green").innerHTML = "";
    var numeroCasuale = Math.floor(Math.random() * 101);

    if (numeroCasuale % 2 == 0) {
      document.getElementById("box_red").innerHTML = numeroCasuale;
    } else {
      document.getElementById("box_green").innerHTML = numeroCasuale;
    }
  }
);
