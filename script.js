var Airtable = require("airtable");


var base = new Airtable({ apiKey: "keyam67l6qKyeDk5M" }).base(
  "appwfRwTYY0R5VJdv"
);


base("antarctic_mass").select({
  view: "time"
}).eachPage(gotPageOfPoints, gotAllPoints);


const points = [];


function gotPageOfPoints(records, fetchNextPage) {
  console.log("gotPageOfPoints()");
  console.log("There are "+records.length+" items in records");

  points.push(...records);
  fetchNextPage();
}

function gotAllPoints(err) {
  console.log("gotAllPoints()");

  if (err) {
    console.log("error loading points");
    console.error(err);
    return;
  }

  showPoints();
}



function showPoints() {
  console.log("showPoints()");


  const pointsContainer = document.querySelector("#container");

  points.forEach((point) => {

    const singleContainer = document.createElement("div");
    singleContainer.classList.add("single");

    console.log("SHOWING THE POINTS")

   pointsContainer.appendChild(singleContainer);

   var dateYear = document.createElement("h1");
   dateYear.classList.add("titles");
   dateYear.innerText = point.fields.year;
   singleContainer.append(dateYear);



   var dateDay = document.createElement("h1");
   dateDay.classList.add("titles");
   dateDay.innerText = point.fields.day;
   singleContainer.append(dateDay);

   var mass = document.createElement("h1");
   mass.classList.add("mass");
   mass.innerText = point.fields.antarctic_mass;
   singleContainer.append(mass);


   var antarctic_mass = point.fields.antarctic_mass;


 if (antarctic_mass >= 0) {
     singleContainer.classList.add("first")
  }

 if (antarctic_mass < 0 && antarctic_mass >= -100) {
     singleContainer.classList.add("second")
    }

  if (antarctic_mass < -100 && antarctic_mass >= -250) {
     singleContainer.classList.add("third")
    }

  if (antarctic_mass < -250 && antarctic_mass >= -425) {
     singleContainer.classList.add("forth")
    }

  if (antarctic_mass < -425 && antarctic_mass >= -625) {
     singleContainer.classList.add("forth")
    }

  if (antarctic_mass < -625 && antarctic_mass >= -850) {
     singleContainer.classList.add("fifth")
    }

  if (antarctic_mass < -850 && antarctic_mass >= -1100) {
     singleContainer.classList.add("sixth")
    }

  if (antarctic_mass < -1100 && antarctic_mass >= -1375) {
     singleContainer.classList.add("seventh")
    }

  if (antarctic_mass < -1375 && antarctic_mass >= -1650) {
     singleContainer.classList.add("eighth")
    }

  if (antarctic_mass < -1650 && antarctic_mass >= -1950) {
     singleContainer.classList.add("ninth")
    }

  if (antarctic_mass < -1650) {
     singleContainer.classList.add("tenth")
    }

  if (antarctic_mass < -1650){
    dateYear.classList.add("dark")
  }
  if (antarctic_mass < -1650){
    dateDay.classList.add("dark")
  }
  if (antarctic_mass < -1650){
    mass.classList.add("dark")
  }


 singleContainer.addEventListener("click", function(){
    singleContainer.classList.toggle("big")

    //dateYear.push("Year; ")
    document.querySelector(".titles").append("Year")
  }); 

});

  
}