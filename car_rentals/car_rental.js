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