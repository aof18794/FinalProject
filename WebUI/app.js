var rarwIsOut = true;
var rainCheck, lightCheck = false;
var hum, light, rain = 0, temp;

function displayText() {
    //------------------- HUMIDITY --------------------//
    //hum = document.getElementById("humText").value;
    //document.getElementById("variableStatus").innerHTML = "Humidity : " + hum + "<br>";
    //------------------- LIGHT --------------------//
    light = document.getElementById("lightText").value;
    if (light < 5) {
        lightCheck = false;
        var str = "Enough Light : " + lightCheck;
        var result = str.fontcolor("red");
    } else {
        lightCheck = true;
        var str = "Enough Light : " + lightCheck;
        var result = str.fontcolor("green");
        rarwIsOut = true;
        document.getElementById("rarwIsOut").innerHTML = "Roof is now : Open<br>";
    }
    document.getElementById("variableStatus").innerHTML = "Light : " + light + "<br>";
    document.getElementById("lightIsEnough").innerHTML = result;
    document.getElementById("lightIsEnough").style.textTransform = "uppercase";
    //------------------- RAIN --------------------//
    rain = document.getElementById("rainText").value;
    if (rain != 0) {
        toggle();
    }
    document.getElementById("variableStatus").innerHTML += "Rain : " + rain + "<br>";
    //------------------- TEMPERATURE --------------------//
    //temp = document.getElementById("tempText").value;
    //document.getElementById("variableStatus").innerHTML += "Temperature : " + temp + "<br>";
}

function toggle() {
    rarwIsOut = !rarwIsOut;
    if (rain != 0 || rain == "Na") {
        rarwIsOut = false;
        rainCheck = "Close (cause raining outside)";
    } else {
        rainCheck = rarwIsOut ? "Open" : "Close";
    }
    document.getElementById("rarwIsOut").innerHTML = "Roof is now : " + rainCheck + "<br>";
}