var arraynum = [];

while (arraynum.lenght < 5) {
  var numrandom = getRandom(1,100);
  if (arraynum.includes(numrandom)  == false) {
    arraynum.push(numrandom);
  }
}

alert("i tuoi numeri sono: "+ arraynum);



setTimout(askNumberUser, 30000);






// function
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // il max è incluso e il min è incluso
  var result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}

function askNumberUser() {
  var numberuser = [];
  while (numberuser.lenght < arraynum.lenght) {
    var number = parseInt(prompt("inserisci un numero"));
    if (!numberuser.includes(number)) {
      numberuser.push(number);
    }
    var numberuseok = [];
    for (var i = 0; i < numberuser.length; i++) {
      if (arraynum.includes(numberuser[i])) {
        numberuseok.push(numberuser[i]);
      }
    }
  }
}
