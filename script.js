// versio 1
function writeNames() {
  let i = 1;
  let nimet = ""
  while (i < 12) {
    var info = prompt("Syötä nimi")
    nimet += i + ". " + info + "<br>";
    i++
  }
  document.getElementById('palauta').innerHTML = nimet;
};


// versio 2
//lisää nimejä:
let names = [];

function addName() {
  let input = document.getElementById("nameInput");
  let name = input.value.trim();
  name = name.toLowerCase();

  if (name !== "") {
    names.push(name);
    updateList();
    input.value = "";
  } else {
    alert("Kenttä on tyhjä!");
  }
}

// palauttaa nimet näytölle
function updateList() {
  let list = document.getElementById("nameList");
  list.innerHTML = "";

  for (let i = 0; i < names.length; i++) {
    let li = document.createElement("li");
    li.textContent = names[i];
    list.appendChild(li);
  }
}



//poistaa nimejä
function removeName() {
  let input = document.getElementById("nameInput");
  let name = input.value.trim();
  name = name.toLowerCase();


  let index = names.indexOf(name);

  if (index !== -1) {
    names.splice(index, 1);
    updateList();        
    input.value = "";   
  } else {
    alert("Nimi ei löydetty");
  };
};



//järjestää aakkosjärjestyksessä
function sortNames() {
  names.sort();
  updateList();
}
