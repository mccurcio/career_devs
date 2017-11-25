var cars = {
    type:[
        {name: "Economy",
         price: "$50.00",
         available: 10
        },
        {name: "Mid-Size",
         price: "$10.00",
         available: 20
        },
        {name: "Luxury",
         price: "$200.00",
         available: 5
        }
    ],
    companyName: "Matt`s Car Rental"
}
// display room as radio options
// on form submission confirm radio was selected and the checkboc is selected.
// console.log(document.getElementById("label").nodeName);

function displayDetails(name) {
    console.log("start car");
    document.getElementById("price").innerHTML = cars.type[name].price;
    document.getElementById("available").innerHTML = cars.type[name].available;
  }

for (var i=0; i < cars.type.length; i++){
  console.log("car loop");
  var carDropDown = document.createElement("INPUT");
  // CHANGE TO DROPDOWN BUTON FROM RADIOBUTTN
  var radioLbl = document.createElement("LABEL");
  radioBtn.setAttribute("type", "dropdown");
  radioBtn.setAttribute("name", "rooms");
  radioBtn.setAttribute("value", i);
  radioBtn.setAttribute("id", "carType" + i);
  radioBtn.setAttribute("onchange", `displayDetails(${i})`)
  //radioBtn.ontoggle = displayDetails(i);
  radioLbl.innerHTML = cars.type[i].name;
  document.getElementById("dropdownSection").appendChild(radioBtn);
  document.getElementById("dropdownSection").appendChild(radioLbl);
  console.log("stop loop");
}

document.getElementById("reservationForm").onsubmit = function(event) {
    event.preventDefault();

    //check if terms are agreed to. ! at beginning of any true/false it will give the opposite, ! = not. 
    if (!document.getElementById("confirmation").checked) {
        alert("Please agree to conditions.");
        return;
    }
    //check to see if a radio button is selected.
    var dropdown = document.getElementsByName("type");
    var carSelection = "";
    for (var i = 0; i < dropdown.length; i++) {
        console.log(dropdown[i]);
        if (dropdown[i].checked) {
            carSelection = dropdown[i].value;
            break;
        }

