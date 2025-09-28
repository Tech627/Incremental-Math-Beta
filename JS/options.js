function Light() {
    document.getElementById("body").classList.add("light")   
}

function Dark() {
    document.getElementById("body").classList.remove("light")
}

var building = []

for(let i = 0; i < 3; i++) {
    let building = {
        amount: new Decimal(0),
        cost: new Decimal(10).pow(i+1),
        eff: new Decimal(1).mul(new Decimal(11).pow(i)),
        automation: false,
    }
    buildings.push(building)
}

function TurnBuildingAutomation(i) {
    let b = buildings[i - 1]
    if(b.automation === false) {
        b.automation = true
        document.getElementById("Building-automation" + i).textContent = "On"
    }
    else if (b.automation === true) {
        b.automation = false
        document.getElementById("Building-automation" + i).textContent = "Off"
    }
}

let alertcontent = false

function AlertButton() {
    HardReset()
    alertcontent = true
}