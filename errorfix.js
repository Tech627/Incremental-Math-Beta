var buildings = []
var achievements = []
var constantUpgrades = []
var infinityConstantUpgrades = []

for(let i = 0; i < 4; i++) {
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

for(let i = 0; i < 12; i++) {
    let constantUpgrade = {
        bought: false,
        cost: new Decimal(1)
    }
    constantUpgrades.push(constantUpgrade)
}

for(let i = 0; i < 9; i++) {
    let infinityConstantUpgrade = {
        bought: false,
        cost: new Decimal(3),
    }
    infinityConstantUpgrades.push(infinityConstantUpgrade)
}

function FixError() {
    for(let i = 0; i < 4; i++) {
        let b = buildings[i]
        if(b.automation == "Error") b.automation = false
    }
    if(LinearResetunl == "Error") LinearResetunl = false
    for(let i = 0; i < 35; i++) {
        if(achievements[i].completed == "Error") achievements[i].completed = false
    }
    for(let i = 0; i < 12; i++) {
        if(constantUpgrades[i].bought == "Error") constantUpgrades[i].bought = false
    }
    for(let i = 0; i < 9; i++) {
        if(infinityConstantUpgrades[i].bought == "Error") infinityConstantUpgrades[i].bought = false
    }
    if(lockedlu3reset == "Error") lockedlu3reset = false
    if(player.tangent.unlocked == "Error" || player.tangent.unlocked == null) player.tangent.unlocked = false
    if(player.equations.kbuyer.cost == "NaN") player.equations.kbuyer.cost = new Decimal(1e210)
    if(player.equations.kbuyer.amount == "NaN") player.equations.kbuyer.amount = new Decimal(0)
    if(player.tangent.pi_power == "Error" || player.tangent.pi_power == "NaN") player.tangent.pi_power = new Decimal(1)
    if(player.tangent.tangent_upgrades.upgrade1.cost == "NaN") player.tangent.tangent_upgrades.upgrade1.cost = new Decimal(5)
    if(player.tangent.tangent_length == "NaN") player.tangent.tangent_length = new Decimal(0)
    if(player.points == "Infinity") player.points = new Decimal(1.797e308)
    if(constant.unlocked == "Error") constant.unlocked = false
    if(constant.in_trip == "Error") constant.in_trip = false
    if(constant.trip.icc_up2.bought == "Error") constant.trip.icc_up2.bought = false
}

setInterval(FixError, 33)