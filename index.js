const app = "I don't do much."
var kittens = ['Milo','Otis','Garfield'];
function destructivelyAppendKitten(name) {
  return(kittens.push(name));
}

function destructivelyPrependKitten(name) {
  return(kittens.unshift(name));
}

function destructivelyRemoveLastKitten() {
  return(kittens.pop(name));
}
function destructivelyRemoveFirstKitten() {
  return(kittens.shift(name));
}

function appendKitten(name) {
  var newArray = [...kittens];
  newArray.push(name);
  return newArray;
}
function prependKitten(name) {
  var newArray = new newArray();
  newArray = [...kittens];
  newArray.unshift(name);
  return newArray;
}
