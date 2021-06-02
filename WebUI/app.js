var roofIsOut = true;
var lightInput = 400, light, rain = 1001;
        
function update() {
    //------------------- RAIN <Text/Condition>, LIGHT <Condition>--------------------//
    light = 4200 - lightInput;
    if (rain > 1000) { //raining
        roofIsOut = false;
        document.getElementById("roofIsOut").innerHTML = "Roof Status : Close (raining)";
        var rainText = document.getElementById("NowRaining").innerHTML = "Raining"; 
        var rainValue = rainText.fontcolor("red");
    } else if (rain <= 1000) { // not raining
        if (light < 600) { //dark
            roofIsOut = false;
            document.getElementById("roofIsOut").innerHTML = "Roof Status : Close";
        } else { //light
            roofIsOut = true;
            document.getElementById("roofIsOut").innerHTML = "Roof Status : Open";
        }
        var rainText = document.getElementById("NowRaining").innerHTML = "Not Raining"; 
        var rainValue = rainText.fontcolor("green");
    }
    //------------------- LIGHT <Text>--------------------//
    if (light < 600) { // dark
        var lightText = "Not Enough Light";
        var lightValue = lightText.fontcolor("red");
    } else { // light
        var lightText = "Enough Light";
        var lightValue = lightText.fontcolor("green");
    }
    document.getElementById("NowRaining").innerHTML = rainValue;
    document.getElementById("lightIsEnough").innerHTML = lightValue;
    document.getElementById("lightValue").innerHTML = light;
    document.getElementById("rainValue").innerHTML = rain;
}

const input = (a) => {
    var split_msg = a.split("/");
    lightInput = parseInt(split_msg[0]); 
    rain = parseInt(split_msg[1]);
    update();
}