var cars = {
  type: [{
      name: "Econo",
      price: "$50.00",
      available: 1
    },
    {
      name: "Mid-Size",
      price: "$100.00",
      available: 2
    },
    {
      name: "Luxury",
      price: "$200.00",
      available: 1
    },
    {
      name: "Truck",
      price: "$99.00",
      available: 5
    }
  ],
  name: "Matt's Cars"
}

var grabSelectorID = document.getElementById("carChoice");
for (var i = 0; i < cars.type.length; i += 1) {
  var car = document.createElement("OPTION");
  var carName = cars.type[i].name;
  car.value = i;
  car.innerHTML = carName; // this could be simplified.
  grabSelectorID.appendChild(car);
  // this makes the child under the selector.

}

function decrementDisplay() {
  var j = [parseInt(document.getElementById("carChoice").value)];
  cars.type[j].available -= 1;
  // if (cars.type[j].available < 1){alert("Choose Another car.")}
  document.getElementById("available").innerHTML = cars.type[j].available;
  document.getElementById("price").innerHTML = cars.type[j].price;
}

function agreeToTerms() {
  // check available
  var rental = [];
  var j = [parseInt(document.getElementById("carChoice").value)];
  var carName = cars.type[j].name;
  var carAvailable = cars.type[j].available;
  var checkName = document.forms["reservationForm"]["name"].value;
  if (carAvailable < 1) { alert("Choice Another Car Type.") }
  // check for selection
  else if (carName == "") {
    alert("Choose A Car Type.");
  }
  // Check for name
  else if (checkName == "") { 
    alert("Enter Your Name.") } 
    else {
      rental.push(checkName);
      rental.push(carName);
      alert("Thank you")
  }
}