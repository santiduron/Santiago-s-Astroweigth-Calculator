/*function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
} */

var planets = [
  {planet: 'Sun', gravity: 27.9},
  {planet: 'Mercury', gravity: 0.377},
  {planet: 'Venus', gravity: 0.9032},
  {planet: 'Earth', gravity: 1},
  {planet: 'Moon', gravity: 0.1655},
  {planet: 'Mars', gravity: 0.3895},
  {planet: 'Jupiter', gravity: 2.640},
  {planet: 'Saturn', gravity: 1.139},
  {planet: 'Uranus', gravity: 0.917},
  {planet: 'Neptune', gravity: 1.148},
  {planet: 'Pluto', gravity: 0.06}
];

var worlds = document.getElementById("planet");

for(var i = 0; i < planets.length; i++){
    var planetnames = planets[i].planet;
    var opt = document.createElement('option');
    opt.innerHTML = planetnames;
    opt.value = planets[i];
    worlds.appendChild(opt);
}

// Calculate button to find results
  function Calculate() {
    var theWeight = document.getElementById("weight").value;
    var thePlanet = document.getElementById("planet").selectedIndex;
    var theGravity = planets[thePlanet].gravity;
    var planetname = planets[thePlanet].planet;
    var results = theWeight * theGravity;
    /*var roundTotalWeight = Math.round(results);*/
    document.getElementById("result").innerHTML = "If you were on " + planetname + "," + " your weight would be " + results + " lbs!";
}
