var rarwIsOut = false;
var check;
var hum, light, rain, temp;

function displayText() {
    hum = document.getElementById("humText").value;
    document.getElementById("variableStatus").innerHTML = "Humidity : " + hum + "<br>";
    light = document.getElementById("lightText").value;
    document.getElementById("variableStatus").innerHTML += "Light : " + light + "<br>";
    rain = document.getElementById("rainText").value;
    if (rain != 0) {
        toggle();
    }
    document.getElementById("variableStatus").innerHTML += "Rain : " + rain + "<br>";
    temp = document.getElementById("tempText").value;
    document.getElementById("variableStatus").innerHTML += "Temperature : " + temp + "<br>";
}

function toggle() {
    rarwIsOut = !rarwIsOut;
    if (rain != 0) {
        rarwIsOut = false;
        check = "In (cause raining outside)";
    } else {
        check = rarwIsOut ? "Out" : "In";
    }
    document.getElementById("rarwIsOut").innerHTML = "Rarw Tark Pah is now : " + check + "<br>";
}
