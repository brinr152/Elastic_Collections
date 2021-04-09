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

   var mass = document.createElement("p");
   mass.classList.add("mass");
   mass.innerText = point.fields.antarctic_mass;
   singleContainer.append(mass);

   var antarctic_mass = point.fields.antarctic_mass;

 if (antarctic_mass > 0) {
     singleContainer.classList.add("low")
  }

  singleContainer.addEventListener("click", function(){
    let mass_span = document.querySelector("current_mass");
    mass_span.innerText = antarctic_mass;

  });

  });


  
}