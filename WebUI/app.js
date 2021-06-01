var roofIsOut = true;
var rainCheck, lightCheck = false;
var hum, light, rain = 0, temp;
var userCommandOpen = true;

function displayText() {
    //------------------- LIGHT --------------------//
    //light = document.getElementById("lightText").value;
    if (light > 3600 ) { // dark
        lightCheck = false;
        var str = "Enough Light : " + lightCheck;
        var result = str.fontcolor("red");
    } else { // light
        lightCheck = true;
        var str = "Enough Light : " + lightCheck;
        var result = str.fontcolor("green");
        if (userCommandOpen) {
            roofIsOut = true;
        }

    }
    // document.getElementById("variableStatus").innerHTML = "Light : " + light + "<br>";
    document.getElementById("lightIsEnough").innerHTML = result;
    document.getElementById("lightIsEnough").style.textTransform = "uppercase";
    //------------------- RAIN --------------------//
    //rain = document.getElementById("rainText").value;


    // document.getElementById("variableStatus").innerHTML += "Rain : " + rain + "<br>";

}



// function toggle() {
//     // userCommandOpen = !userCommandOpen;
//     update();

//     if (userCommandOpen == true) { //open
//         document.getElementById("userCommand").innerHTML = "Toggle Roof";
//         // document.getElementById("Userwant").innerHTML = "User want to : Open" ;
//     } else {
//         document.getElementById("userCommand").innerHTML = "Toggle Roof";
//         // document.getElementById("Userwant").innerHTML = "User want to : Close";
//     }
// }

function update() {
    if (rain > 1000) { //raining
        roofIsOut = false;
        document.getElementById("roofIsOut").innerHTML = "Roof is now : Close (cause raining outside)<br>";
        var str = document.getElementById("NowRaining").innerHTML = "Raining : TRUE "; 
        var result = str.fontcolor("red");
    } else if (rain <= 1000) { // not raining
        var str = document.getElementById("NowRaining").innerHTML = "Raining : FALSE "; 
        if (userCommandOpen) {
            if (light > 3600) { //dark
                roofIsOut = false;
                document.getElementById("roofIsOut").innerHTML = "Roof is now : Close<br>";
            } else {
                roofIsOut = true;
                document.getElementById("roofIsOut").innerHTML = "Roof is now : Open<br>";
            }
        } else if (!userCommandOpen) {
            roofIsOut = false;
            document.getElementById("roofIsOut").innerHTML = "Roof is now : Close<br>";
        }
        var result = str.fontcolor("green");
    }
    document.getElementById("NowRaining").innerHTML = result;
    document.getElementById("NowRaining").style.textTransform = "uppercase";
    displayText();
}

const input = (a) => {
    var split_msg = a.split("/");
    light = parseInt(split_msg[0]); 
    rain = parseInt(split_msg[1]);
    var lighttmp = document.getElementById("lightValue");
    var raintmp = document.getElementById("rainValue");
    lighttmp.innerHTML = light;
    raintmp.innerHTML = rain;
    update();
}