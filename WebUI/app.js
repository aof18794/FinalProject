var roofIsOut = true;
var rainCheck, lightCheck = false;
var hum, light, rain = 0, temp;
var userCommandOpen = true;

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
        if (userCommandOpen) {
            roofIsOut = true;
        }
        // document.getElementById("roofIsOut").innerHTML = "Roof is now : Open<br>";
    }
    document.getElementById("variableStatus").innerHTML = "Light : " + light + "<br>";
    document.getElementById("lightIsEnough").innerHTML = result;
    document.getElementById("lightIsEnough").style.textTransform = "uppercase";
    //------------------- RAIN --------------------//
    rain = document.getElementById("rainText").value;
    
    update();
    // if (rain != 0) {
    //     roofIsOut = false;
    //     document.getElementById("roofIsOut").innerHTML = "Roof is now : Close (cause raining outside)<br>";
    // } else if (rain == 0) {
    //     if (userCommandOpen) {
    //         if (light < 5) {
    //             roofIsOut = false;
    //             document.getElementById("roofIsOut").innerHTML = "Roof is now : Close<br>";
    //         } else {
    //             roofIsOut = true;
    //             document.getElementById("roofIsOut").innerHTML = "Roof is now : Open<br>";
    //         }
    //     } else if (!userCommandOpen) {
    //         roofIsOut = false;
    //         document.getElementById("roofIsOut").innerHTML = "Roof is now : Close<br>";
    //     }
    // }

    document.getElementById("variableStatus").innerHTML += "Rain : " + rain + "<br>";
    //------------------- TEMPERATURE --------------------//
    //temp = document.getElementById("tempText").value;
    //document.getElementById("variableStatus").innerHTML += "Temperature : " + temp + "<br>";
    // if (userCommandOpen == true) {
    //     document.getElementById("userCommand").innerHTML = "Command : Open";
    // } else {
    //     document.getElementById("userCommand").innerHTML = "Command : Close";
    // }
}

// function toggle() {
//     userCommandOpen = !userCommandOpen;
//     roofIsOut = !roofIsOut;
//     if (rain != 0 || rain == "Na") {
//         roofIsOut = false;
//         rainCheck = "Close (cause raining outside)";
//     } else {
//         // userCommandOpen = !userCommandOpen;
//         rainCheck = roofIsOut ? "Open" : "Close";
//     }
//     if (userCommandOpen == true) {
//         roofIsOut = true;
//         document.getElementById("userCommand").innerHTML = "Command : Open";
//     } else {
//         roofIsOut = false;
//         document.getElementById("userCommand").innerHTML = "Command : Close";
//     }
//     document.getElementById("roofIsOut").innerHTML = "Roof is now : " + rainCheck + "<br>";
// }

function toggle() {
    userCommandOpen = !userCommandOpen;
    update();
    // if (userCommandOpen) {
    //     if (rain != 0 || rain == "Na") {
    //         roofIsOut = false;
    //         rainCheck = "Close (cause raining outside)";
    //     } else {
    //         roofIsOut = true;
    //         rainCheck = roofIsOut ? "Open" : "Close";
    //     }
    // } else {
    //     roofIsOut = false;
    //     if (rain != 0) {
    //         rainCheck = "Close (cause raining outside)";
    //     } else {
    //         rainCheck = "Close";
    //     }
    // }
    // document.getElementById("roofIsOut").innerHTML = "Roof is now : " + rainCheck + "<br>";
    if (userCommandOpen == true) {
        document.getElementById("userCommand").innerHTML = "Command : Open";
    } else {
        document.getElementById("userCommand").innerHTML = "Command : Close";
    }
}

function update() {
    if (rain != 0) {
        roofIsOut = false;
        document.getElementById("roofIsOut").innerHTML = "Roof is now : Close (cause raining outside)<br>";
    } else if (rain == 0) {
        if (userCommandOpen) {
            if (light < 5) {
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
    }
}