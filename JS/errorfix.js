var buildings = []
var achievements = []

for(let i = 0; i < 3; i++) {
    let building = {
        amount: new Decimal(0),
        cost: new Decimal(10).pow(i+1),
        eff: new Decimal(1),
        automation: false,
    }
    buildings.push(building)
}

for(let i = 0; i < 20; i++) {
    let achievement = {
        completed: false,
    }
    achievements.push(achievement)
}

function FixError() {
    for(let i = 0; i < 3; i++) {
        let b = buildings[i]
        if(b.automation == "Error") {
            b.automation = false
        }
    }
    if(LinearResetunl == "Error") {
        LinearResetunl = false
    }
    for(let i = 0; i < 20; i++) {
        if(achievements[i].completed == "Error") {
            achievements[i].completed = false
        }
    }
    if(lockedlu3reset == "Error") {
        lockedlu3reset = false
    }
    if(player.tangent.unlocked == "Error" || player.tangent.unlocked == null) {
        player.tangent.unlocked = false
    }
}

setInterval(FixError, 33)