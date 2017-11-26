
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta content="ie=edge" http-equiv="X-UA-Compatible">
  <script src="script3.js" type="text/javascript">
  </script>
  <title>Car Rental</title>
</head>

<body>
  <h1>Business Name</h1>
  <p id="busName"></p>
  <form enctype="text/plain" id="renter" method="post" name="renter">
    Rent a Car <label for="name">Name</label> <input id="name" name="name" placeholder="Your name..." required="" type="text"> <label for="car type">Type of car</label> <select id="carSelection" name="carSelection" onchange="getCars()" required="">
      <option selected value="blank">
        Select Type
      </option>
      <option id="selectEcon" value="economy">
        Economy car
      </option>
      <option id="selectMid" value="midsize">
        Midsize car
      </option>
      <option id="selectLux" value="luxury">
        Luxury car
      </option>
    </select>
  </form>
  <h1>Price:</h1>
  <p id="econ"></p>
  <p id="mid"></p>
  <p id="lux"></p>
  <h1>Available:</h1>
  <p id="econAvail"></p>
  <p id="midAvail"></p>
  <p id="luxAvail"></p><button onclick="addRenter()" type="submit" value="submit">Rent a Car</button>
  <p id="display"></p>
</body>

</html>


<script>
var cars = {
    name: "Enterprise Car Rental",
    types: ['economy', 'midsize'],
    economy: 80,
    midsize: 150,
    luxury: 45,
    priceEcon: '$80',
    priceMid: "$100",
    priceLux: "$120"
};
var rental = {
    economy: [],
    midsize: [],
    luxury: []
};
// var Rental = function(name, selection) {
//     this.name = name,
//         this.car = selection;
// };
// var renter = new Rental(document.getElementById("name"), document.getElementById("carSelection"));

window.onload = function() {
    document.getElementById("busName").innerHTML = cars.name;
};

function getCars() {
    var car = document.getElementById("carSelection").value;
    switch (car) {
        case "economy":
            cars.economy--;
            document.getElementById("econAvail").innerHTML = "Economy:" + cars.economy;
            document.getElementById("econ").innerHTML = "Economy:" + cars.priceEcon;
            break;
        case "midsize":
            cars.midsize--;
            document.getElementById("midAvail").innerHTML = "Midsize:" + cars.midsize;
            document.getElementById("mid").innerHTML = "Midsize:" + cars.priceMid;
            break;
        case "luxury":
            cars.luxury--;
            document.getElementById("luxAvail").innerHTML = "Luxury:" + cars.luxury;
            document.getElementById("lux").innerHTML = "Luxury:" + cars.priceLux;
            break;
    }
}

function addRenter() {
    var selection = document.forms["renter"]["carSelection"].value;
    var renter = document.forms["renter"]["name"].value;
    if (selection == "blank") {
        alert("Please select type");
        console.log(selection);
    }
    else if (renter == "") {
        alert("Please enter name");
        console.log(renter);
    }
    else {
        rental[selection].push({
            name: renter
        });
        document.getElementById("display").innerHTML = "Thank you for your reservation!";
        console.log(rental);
    }
    return false;
}

</script>
