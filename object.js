var car = { 
  name: 'Enterprise Car Rentals',
  carTypes: ['Economy', 'Midsize'],
  economyAvailable: 175,
  midsizeAvailable: 85,
  economyRented: 0,
  midsizeRented: 0,
}  

function update() {
  document.getElementById("demo1").innerHTML=car.name;
  document.getElementById("demo2").innerHTML=car.carTypes;
  document.getElementById("demo3").innerHTML=car.economyAvailable;
  document.getElementById("demo4").innerHTML=car.midsizeAvailable;
  }
function getMid() {
   document.getElementById("demo3").innerHTML=car.economyAvailable--; 
}
function getEco() {
    document.getElementById("demo4").innerHTML= car.midsizeAvailable--;
}
