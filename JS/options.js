function Light() {
    document.getElementById("body").classList.add("light")   
}

function Dark() {
    document.getElementById("body").classList.remove("light")
}

function TurnBuildingAutomation() {
    if(player.buildings.Classmate.automation === false) {
        player.buildings.Classmate.automation = true
        document.getElementById("Building-automation").textContent = "On"
    }
    else if (player.buildings.Classmate.automation === true) {
        player.buildings.Classmate.automation = false
        document.getElementById("Building-automation").textContent = "Off"
    }
}

function TurnBuildingAutomation2() {
    if(player.buildings.Teacher.automation === false) {
        player.buildings.Teacher.automation = true
        document.getElementById("Building-automation2").textContent = "On"
    }
    else if (player.buildings.Teacher.automation === true) {
        player.buildings.Teacher.automation = false
        document.getElementById("Building-automation2").textContent = "Off"
    }
}

function TurnBuildingAutomation3() {
    if(player.buildings.Professor.automation === false) {
        player.buildings.Professor.automation = true
        document.getElementById("Building-automation3").textContent = "On"
    }
    else if (player.buildings.Professor.automation === true) {
        player.buildings.Professor.automation = false
        document.getElementById("Building-automation3").textContent = "Off"
    }
}