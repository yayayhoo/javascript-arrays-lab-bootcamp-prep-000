const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens = [name].concat(kittens)
  return kittens;
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  return kittens.push(name);
}

function prependKitten(name) {
  var a = [name].concat(kittens);
  return a;
}

function removeLastKitten() {
  var a = kittens.pop();
  return a;
}

function removeFirstKitten() {
  var a = kittens.shift();
  return a;
}
