// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  
  drivers.push(name);
  
  
}


function destructivelyPrependDriver(name){
  
  drivers.unshift(name);
  
  
}


function destructivelyRemoveLastDriver(){
  drivers.pop(name);
  
}


function destructivelyRemoveFirstDriver(){
  
  
  drivers.shift(name);
}


function appendDriver(name){
  let newdrivers = [name, ...drivers];
 return newdrivers;
}


function prependDriver(name){
  
  
}

 
function removeLastDriver(){
  let newdrivers = drivers.slice(0, drivers.length - 1)
  return newdrivers; 
}


function removeFirstDriver(){
  let newdrivers = drivers.slice(1)
  return newdrivers;
}










