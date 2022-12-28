var property = new Array();
var unit = new Array();
var factor = new Array();

property[0] = "Length";
unit[0] = new Array(
  "Meter (m)",
  "Angstrom (A')",
  "Centimeter (cm)",
  "Kilometer (km)",
  "Furlong",
  "Fermi (fm)",
  "Foot (ft)",
  "Inch (in)",
  "League (int'l)",
  "League (UK)",
  "Light year (LY)",
  "Micrometer (mu-m)",
  "Mil",
  "Millimeter (mm)",
  "Nanometer (nm)",
  "Mile (int'l nautical)",
  "Mile (UK nautical)",
  "Mile (US nautical)",
  "Mile (US statute)",
  "Yard (yd)"
);
factor[0] = new Array(
  1,
  1e-10,
  0.01,
  1000,
  201.168,
  1e-15,
  0.3048,
  0.0254,
  5556,
  5556,
  9.46055e15,
  0.000001,
  0.0000254,
  0.001,
  1e-9,
  1852,
  1853.184,
  1852,
  1609.344,
  0.9144
);

property[1] = "Area";
unit[1] = new Array(
  "Square meter (m^2)",
  "Acre (acre)",
  "Are",
  "Barn (barn)",
  "Hectare",
  "Square centimeter",
  "Square kilometer",
  "Square foot (ft^2)",
  "Square inch (in^2)",
  "Square mile (mi^2)",
  "Square yard (yd^2)"
);
factor[1] = new Array(
  1,
  4046.856,
  100,
  1e-28,
  10000,
  0.0001,
  1000000,
  9.290304e-2,
  6.4516e-4,
  2589988,
  0.8361274
);

property[2] = "Energy";
unit[2] = new Array(
  "Joule (J)",
  "Calorie (SI) (cal)",
  "Calorie (mean)(cal)",
  "Calorie (thermo)",
  "Electron volt (eV)",
  "Erg (erg)",
  "Kilocalorie (SI)(kcal)",
  "Kilocalorie (mean)(kcal)",
  "Kilowatt-hour (kW hr)",
  "Ton of TNT",
  "Volt-coulomb (V Cb)",
  "Watt-hour (W hr)",
  "Watt-second (W sec)"
);
factor[2] = new Array(
  1,
  4.1868,
  4.19002,
  4.184,
  1.6021e-19,
  0.0000001,
  4186.8,
  4190.02,
  3600000,
  4.2e9,
  1,
  3600,
  1
);

property[3] = "Force";
unit[3] = new Array(
  "Newton (N)",
  "Dyne (dy)",
  "Kilogram force (kgf)",
  "Kilopond force (kpf)",
  "Ounce force (ozf)",
  "Pound force (lbf)",
  "Poundal"
);
factor[3] = new Array(
  1,
  0.00001,
  9.80665,
  9.80665,
  0.2780139,
  0.4535924,
  0.138255
);

property[4] = "Acceleration";
unit[4] = new Array(
  "Meter/sq.sec (m/sec^2)",
  "Foot/sq.sec (ft/sec^2)",
  "G (g)",
  "Galileo (gal)",
  "Inch/sq.sec (in/sec^2)"
);
factor[4] = new Array(1, 0.3048, 9.80665, 0.01, 2.54e-2);

property[5] = "Weight";
unit[5] = new Array(
  "Kilogram (kgr)",
  "Gram (gr)",
  "Milligram (mgr)",
  "Microgram (mu-gr)",
  "Carat (metric)(ct)",
  "Hundredweight (long)",
  "Hundredweight (short)",
  "Pound mass (lbm)",
  "Ton (metric)",
  "Tonne"
);
factor[5] = new Array(
  1,
  0.001,
  1e-6,
  0.000000001,
  0.0002,
  50.80235,
  45.35924,
  0.4535924,
  1000,
  1000
);

property[6] = "Temperature";
unit[6] = new Array(
  "Degrees Celsius ('C)",
  "Degrees Fahrenheit ('F)",
  "Degrees Kelvin ('K)",
  "Degrees Rankine ('R)"
);
factor[6] = new Array(1, 0.555555555555, 1, 0.555555555555);
tempIncrement = new Array(0, -32, -273.15, -491.67);

property[7] = "Time";
unit[7] = new Array(
  "Second (sec)",
  "Day (mean solar)",
  "Day (sidereal)",
  "Hour (mean solar)",
  "Hour (sidereal)",
  "Minute (mean solar)",
  "Minute (sidereal)",
  "Month (mean calendar)",
  "Second (sidereal)",
  "Year (calendar)",
);
factor[7] = new Array(
  1,
  8.64e4,
  86164.09,
  3600,
  3590.17,
  60,
  60,
  2628000,
  0.9972696,
  31536000,
);

property[8] = "Speed";
unit[8] = new Array(
  "Meter/second (m/sec)",
  "Foot/minute (ft/min)",
  "Foot/second (ft/sec)",
  "Kilometer/hour (kph)",
  "Knot (int'l)",
  "Mile (US)/hour (mph)",
  "Mile (nautical)/hour",
  "Mile (US)/minute",
  "Mile (US)/second",
  "Speed of light (c)",
  "Mach (STP)(a)"
);
factor[8] = new Array(
  1,
  5.08e-3,
  0.3048,
  0.2777778,
  0.5144444,
  0.44707,
  0.514444,
  26.8224,
  1609.344,
  299792458,
  340.006875
);

property[9] = "Volume";
unit[9] = new Array(
  "Cubic Meter (m^3)",
  "Cubic centimeter",
  "Cubic millimeter",
  "Acre-foot",
  "Barrel (oil)",
  "Gallon (UK)",
  "Gallon (US,dry)",
  "Gallon (US,liq)",
  "Gill (UK)",
  "Gill (US)",
  "Cubic inch (in^3)",
  "Liter (new)",
  "Liter (old)",
  "Ounce (UK,fluid)",
  "Ounce (US,fluid)"

);
factor[9] = new Array(
  1,
  0.000001,
  0.000000001,
  1233.482,
  0.1589873,
  0.004546087,
  0.004404884,
  0.003785412,
  0.0001420652,
  0.0001182941,
  0.00001638706,
  0.001,
  0.001000028,
  0.00002841305,
  0.00002957353
);


function UpdateUnitMenu(propMenu, unitMenu) {
  
  var i;
  i = propMenu.selectedIndex;
  FillMenuWithArray(unitMenu, unit[i]);
}

function FillMenuWithArray(myMenu, myArray) {
  var i;
  myMenu.length = myArray.length;
  for (i = 0; i < myArray.length; i++) {
    myMenu.options[i].text = myArray[i];
  }
}

function CalculateUnit(sourceForm, targetForm) {
  var sourceValue = sourceForm.unit_input.value;

  sourceValue = parseFloat(sourceValue);
  if (!isNaN(sourceValue) || sourceValue == 0) {
    sourceForm.unit_input.value = sourceValue;
    ConvertFromTo(sourceForm, targetForm);
  }
}

function ConvertFromTo(sourceForm, targetForm) {
  var Indexvalues;
  var sourceIndex;
  var sourceFactor;
  var targetIndex;
  var targetFactor;
  var result;

  Indexvalues = document.property_form.the_menu.selectedIndex;
  sourceIndex = sourceForm.unit_menu.selectedIndex;
  sourceFactor = factor[Indexvalues][sourceIndex];

  targetIndex = targetForm.unit_menu.selectedIndex;
  targetFactor = factor[Indexvalues][targetIndex];

  result = sourceForm.unit_input.value;
 
  if (property[Indexvalues] == "Temperature") {
    result = parseFloat(result) + tempIncrement[sourceIndex];
  }
  result = result * sourceFactor;


  result = result / targetFactor;

  if (property[Indexvalues] == "Temperature") {
    result = parseFloat(result) - tempIncrement[targetIndex];
  }

  targetForm.unit_input.value = result;
}


window.onload = function (e) {
  FillMenuWithArray(document.property_form.the_menu, property);
  UpdateUnitMenu(document.property_form.the_menu, document.form_A.unit_menu);
  UpdateUnitMenu(document.property_form.the_menu, document.form_B.unit_menu);
};

document
  .getElementByClass("numbersonly")
  .addEventListener("keydown", function (e) {
    var key = e.keyCode ? e.keyCode : e.which;

    if (
      !(
        (
          [8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
          (key == 65 && (e.ctrlKey || e.metaKey)) || 
          (key == 67 && (e.ctrlKey || e.metaKey)) || 
          (key == 86 && (e.ctrlKey || e.metaKey)) || 
          (key >= 35 && key <= 40) || 
          (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) ||
          (key >= 96 && key <= 105)(
            
            key == 190
          )
        ) 
      )
    )
      e.preventDefault();
  });
