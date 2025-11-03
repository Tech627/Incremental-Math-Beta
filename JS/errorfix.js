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

for(let i = 0; i < 30; i++) {
    let achievement = {
        completed: false,
    }
    achievements.push(achievement)
}

function FixError() {
    for(let i = 0; i < 3; i++) {
        let b = buildings[i]
        if(b.automation == "Error") b.automation = false
    }
    if(LinearResetunl == "Error") LinearResetunl = false
    for(let i = 0; i < 30; i++) {
        if(achievements[i].completed == "Error") achievements[i].completed = false
    }
    if(lockedlu3reset == "Error") lockedlu3reset = false
    if(player.tangent.unlocked == "Error" || player.tangent.unlocked == null) player.tangent.unlocked = false
    if(player.equations.kbuyer.cost == "NaN") player.equations.kbuyer.cost = new Decimal(1e210)
    if(player.equations.kbuyer.amount == "NaN") player.equations.kbuyer.amount = new Decimal(0)
    if(player.tangent.pi_power == "Error" || player.tangent.pi_power == "NaN") player.tangent.pi_power = new Decimal(1)
    if(player.tangent.tangent_upgrades.upgrade1.cost == "NaN") player.tangent.tangent_upgrades.upgrade1.cost = new Decimal(5)
    if(player.tangent.tangent_length == "NaN") player.tangent.tangent_length = new Decimal(0)
}

setInterval(FixError, 33)