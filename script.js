var convert_weight = document.getElementById("convert_weight")
var convert_temperature = document.getElementById("convert_temperature")
var convert_length = document.getElementById("convert_length")

var weightConverter = document.getElementById("weight")
var temperatureConverter = document.getElementById("temp")
var lengthConverter = document.getElementById("length")



convert_weight.addEventListener('click', function() {
    convert_weight.classList.add('active')
    convert_temperature.classList.remove('active')
    convert_length.classList.remove('active')
    temperatureConverter.style.display = 'none';
    lengthConverter.style.display = 'none';
    weightConverter.style.display = 'block';
});

convert_temperature.addEventListener('click', function() {
    convert_temperature.classList.add('active')
    convert_weight.classList.remove('active')
    convert_length.classList.remove('active')
    weightConverter.style.display = 'none';
    lengthConverter.style.display = 'none';
    temperatureConverter.style.display = 'block';
});

convert_length.addEventListener('click', function() {
    convert_length.classList.add('active')
    convert_temperature.classList.remove('active')
    convert_weight.classList.remove('active')
    weightConverter.style.display = 'none';
    temperatureConverter.style.display = 'none';
    lengthConverter.style.display = 'block';
});


// weight
let kilograms = document.getElementById('kilograms')
let pound = document.getElementById('pounds')
let grams= document.getElementById('grams')
let ounces= document.getElementById('ounces')

const convertFromKG = () =>{
    let kg = kilograms.value;
    pound.value = (kg * 2.205).toFixed(4);
    grams.value = (kg * 1000).toFixed(4);
    ounces.value = (kg * 35.274).toFixed(4);
}
kilograms.addEventListener("input", convertFromKG)

const convertFromPound = () => {
    let lb = pound.value;
    kilograms.value = (lb / 2.2046).toFixed(4);
    grams.value = (lb / 0.0022046).toFixed(4);
    ounces.value = (lb * 16).toFixed(4);
}
pound.addEventListener("input", convertFromPound)

const convertFromGram = () => {
    let g = grams.value;
    kilograms.value = (g/1000).toFixed(4);
    pound.value = (g*0.0022046).toFixed(4);
    ounces.value = (g*0.035274).toFixed(4);
}
grams.addEventListener("input", convertFromGram)

const convertFromOunces = () => {
    let oz = ounces.value;
    kilograms.value = (oz/35.274).toFixed(4);
    pound.value = (oz*0.0625).toFixed(4);
    grams.value = (oz/0.035274).toFixed(4);
}
ounces.addEventListener("input", convertFromOunces)


// Temp

let Celsius= document.getElementById('Celsius')
let Fahrenheit= document.getElementById('Fahrenheit')
let Kelvin= document.getElementById('Kelvin')

const convertFromCelsius = () => {
    let c = Celsius.value;
    Fahrenheit.value = ((c * 1.8) + 32)
    Kelvin.value = Number(c) + Number( 273.15 )
}
Celsius.addEventListener("input", convertFromCelsius)

const convertFromFahrenheit = () => {
    let f = Fahrenheit.value;
    Celsius.value = ((f - 32) / 1.8)
    Kelvin.value = (((f-32)/1.8)+273.15)
}
Fahrenheit.addEventListener("input", convertFromFahrenheit)

const convertFromKelvin = () => {
    let k = Kelvin.value;
    Celsius.value = (k-273.15)
    Fahrenheit.value = (((k-273.15)*1.8)+32)
}
Kelvin.addEventListener("input", convertFromKelvin)


// length
let Feet= document.getElementById('Feet')
let Meters= document.getElementById('Meters')
let Inches= document.getElementById('Inches')
let cm= document.getElementById('cm')
let Yards= document.getElementById('Yards')
let Kilometers= document.getElementById('Kilometers')
let Miles= document.getElementById('Miles')


const convertFromFeet = () => {
    let ft = Feet.value;
    Meters.value = (ft/3.2808)
    Inches.value = (ft*12)
    cm.value = (ft/0.032808)
    Yards.value = (ft*0.33333)
    Kilometers.value = (ft/3280.8)
    Miles.value = (ft*0.00018939)
}
Feet.addEventListener("input", convertFromFeet)

const convertFromMeters = () => {
    let m = Meters.value;
    Feet.value = (m*3.2808)
    Inches.value = (m*39.370)
    cm.value = (m/0.01)
    Yards.value = (m*1.0936)
    Kilometers.value = (m/1000)
    Miles.value = (m*0.00062137)
}
Meters.addEventListener("input", convertFromMeters)

const convertFromInches = () => {
    let inc = Inches.value;
    Feet.value = (inc*0.083333)
    Meters.value = (inc/39.370)
    cm.value = (inc/0.39370)
    Yards.value = (inc*0.027778)
    Kilometers.value = (inc/39370)
    Miles.value = (inc*0.000015783)
}
Inches.addEventListener("input", convertFromInches)

const convertFromCm = () => {
    let cm = cm.value;
    Feet.value = (cm*0.032808)
    Meters.value = (cm/100)
    Inches.value = (cm*0.39370)
    Yards.value = (cm*0.010936)
    Kilometers.value = (cm/100000)
    Miles.value = (cm*0.0000062137)
}
cm.addEventListener("input", convertFromCm)

const convertFromYards = () => {
    let yd = Yards.value;
    Feet.value = (yd*3)
    Meters.value = (yd/1.0936)
    Inches.value = (yd*36)
    cm.value = (yd/0.010936)
    Kilometers.value = (yd/1093.6)
    Miles.value = (yd*0.00056818)
}
Yards.addEventListener("input", convertFromYards)

const convertFromKilometers = () => {
    let km = Kilometers.value;
    Feet.value = (km*3280.8)
    Meters.value = (km*1000)
    Inches.value = (km*39370)
    cm.value = (km*100000)
    Yards.value = (km*1093.6)
    Miles.value = (km*0.62137)
}
Kilometers.addEventListener("input", convertFromKilometers)

const convertFromMiles = () => {
    let mi = Miles.value;
    Feet.value = (mi*5280)
    Meters.value = (mi/0.00062137)
    Inches.value = (mi*63360)
    cm.value = (mi/0.0000062137)
    Yards.value = (mi*1760)
    Kilometers.value = (mi/0.62137)
}
Miles.addEventListener("input", convertFromMiles)