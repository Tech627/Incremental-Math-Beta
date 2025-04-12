var buildings = []
var upgrades = []
var linearUpgrades = []
var achievements = []

for(let i = 0; i < 3; i++) {
    let building = {
        amount: new Decimal(0),
        cost: new Decimal(10).pow(i+1),
        eff: new Decimal(1).mul(new Decimal(11).pow(i)),
        automation: false,
    }
    buildings.push(building)
}

for(let i = 0; i < 6; i++) {
    let upgrade = {
        bought: false,
        cost: new Decimal(20000),
        eff: new Decimal(1),
    }
    upgrades.push(upgrade)
}

for(let i = 0; i < 12; i++) {
    let linearUpgrade = {
        bought: false,
        cost: new Decimal(1),
        eff: new Decimal(1),
    }
    linearUpgrades.push(linearUpgrade)
}

for(let i = 0; i < 15; i++) {
    let achievement = {
        completed: false,
    }
    achievements.push(achievement)
}

function UpdateGUI() {
    document.getElementById("Points").textContent = "You have " + format(player.points) + " Points"
    if(player.pointgain.eq(1)) {
        document.getElementById("btn-gain").textContent = "+1 Point"
    }
    else if (player.pointgain.gt(1)) {
        document.getElementById("btn-gain").textContent = "+" + format(player.pointgain) + "Points"
    }
    document.getElementById("PointsPerSec").textContent = "(+" + format(player.pointsPerSec) + " Points/sec)" 
    for(let i = 0; i < 3; i++) {
        let b = buildings[i]
        document.getElementById("building-amount" + (i + 1)).textContent = "[" + formatWhole(b.amount) + "]"
        document.getElementById("building-production" + (i + 1)).textContent = "(+" + format(b.amount.mul(b.eff)) + " Points/sec)"
        document.getElementById("Building-cost" + (i + 1)).textContent = "Cost: " + format(b.cost) + " Points"
        if(b.automation === true) {
            BuyBuilding(i)
        }
        player.linear_challenges.chal1.eff = b.eff.pow(0.2).add(b.eff.pow(0.2).add(b.eff.pow(0.2)))
    }
    for(let i = 0; i < 6; i++) {
        let u = upgrades[i]
        upgrades[0].eff = player.points.add(1).log10().mul(2.5).add(1)
        upgrades[1].eff = buildings[2].amount.sqrt(buildings[2].amount).add(1)
        upgrades[3].eff = player.points.add(1).log10().div(2.5)
        upgrades[4].eff = buildings[2].amount.sqrt(buildings[2].amount).div(2).add(1)
        upgrades[0].cost = new Decimal(20000)
        upgrades[1].cost = new Decimal(75000)
        upgrades[2].cost = new Decimal(1.5e5)
        upgrades[3].cost = new Decimal(3e5)
        upgrades[4].cost = new Decimal(4.5e6)
        upgrades[5].cost = new Decimal(1e7)
        if(upgrades[0].bought === true) {
            buildings[0].eff = upgrades[0].eff
        }
        buildings[1].eff = new Decimal(11)
        if(upgrades[1].bought === true) {
            buildings[1].eff = buildings[1].eff.mul(upgrades[1].eff)
        }
        buildings[2].eff = new Decimal(121)
        if(upgrades[4].bought === true) {
            buildings[2].eff = buildings[2].eff.mul(upgrades[4].eff)
        }
        document.getElementById("up-eff" + (i + 1)).textContent = "Currently: " + format(u.eff) + "x boost"
        if(upgrades[2].bought === true) {
            document.getElementById("Equation").classList.add("unlocked")
        }
        if(upgrades[2].bought != true) {
            document.getElementById("Equation").classList.remove("unlocked")
        }
        if(upgrades[2].bought === true) {
            player.achievements.achv4.completed = true
        }
        if(upgrades[5].bought === true) {
            document.getElementById("Equation2").classList.add("unlocked")
            player.achievements.achv7.completed = true
        }
        if(upgrades[5].bought != true) {
            document.getElementById("Equation2").classList.remove("unlocked")
        }
    }
    for(let i = 0; i < 12; i++) {
        let lu = linearUpgrades[i]
        linearUpgrades[0].eff = player.LinearEssence.add(1).mul(4)
        linearUpgrades[4].eff = player.points.add(1).log10().sqrt().add(1)
        linearUpgrades[5].eff = player.LinearEssence.add(1).log10().div(5).add(1)
        linearUpgrades[10].eff = player.LinearEssence.add(1).log10().mul(3)
        linearUpgrades[0].cost = new Decimal(1)
        linearUpgrades[1].cost = new Decimal(1)
        linearUpgrades[2].cost = new Decimal(3)
        linearUpgrades[3].cost = new Decimal(5)
        linearUpgrades[4].cost = new Decimal(1e4)
        linearUpgrades[5].cost = new Decimal(2e4)
        linearUpgrades[6].cost = new Decimal(5e4)
        linearUpgrades[7].cost = new Decimal(7.5e4)
        linearUpgrades[8].cost = new Decimal(1e5)
        linearUpgrades[9].cost = new Decimal(2e5)
        linearUpgrades[10].cost = new Decimal(5e5)
        linearUpgrades[11].cost = new Decimal(1e6)
        if([1, 2, 3, 6, 7, 8, 11].includes(i)) {
            continue
        }
        document.getElementById("lup-eff" + (i + 1)).textContent = "Currently: " + format(lu.eff) + "x boost"
    }
    for(let i = 0; i < 15; i++) {
        if(buildings[0].amount.gte(1)) {
            achievements[0].completed = true
        }
        if(buildings[1].amount.gte(1)) {
            achievements[1].completed = true
        }
        if(buildings[2].amount.gte(1)) {
            achievements[2].completed = true
        }
        if(player.points.gte(3e5)) {
            achievements[4].completed = true
        }
        if(player.points.gte(1e7)) {
            achievements[5].completed = true
        }
        if(player.equations.equation2.y.gte(5)) {
            achievements[7].completed = true
        }
        if(player.equations.equation2.x.gte(10)) {
            achievements[8].completed = true
        }
        if(player.LinearUnl === true) {
            achievements[9].completed = true
        }
        if(linearUpgrades[3].bought === true) {
            achievements[10].completed = true
        }
        if(player.equations.linear_equations.eff.gte(10)) {
            achievements[11].completed = true
        }
        if(linearUpgrades[7].bought === true) {
            achievements[12].completed = true
        }
        if(player.linear_challenges.chal1.completed === true && player.linear_challenges.chal2.completed === true &&
            player.linear_challenges.chal3.completed === true) {
                achievements[13].completed = true
        }
        if(linearUpgrades[11].bought === true) {
            achievements[14].completed = true
        }
    }
    if(player.equations.equation1.x.eq(1)) {
        document.getElementById("Equation1").textContent = "1+x=2"
    }
    else {
        document.getElementById("Equation1").textContent = "1+(x/" + format(CalculateEquationGain(), precision = 0) + ")=2"
    }
    document.getElementById("Equation1-boost").textContent = format(CalculateEquationGain()) + "x to your point production"
    document.getElementById("mult-cost").textContent = "Cost: " + format(player.equations.multiplicator1.cost) + " Points"
    if(player.equations.equation2.y.gt(1)) {
        player.equations.equation2.eff = new Decimal(2).pow(player.equations.equation2.y).mul(2)
        player.equations.equation2.eff = player.equations.equation2.eff.mul(player.equations.linear_equations.eff)
    }
    document.getElementById("Equation2-boost").textContent = format(player.equations.equation2.eff) + "x to your point production," +
    "and dividing your x from 1st equation by 2 each y"
    document.getElementById("mult-cost2").textContent = "Cost: " + format(player.equations.xbuyer.cost) + " Points"
    player.equations.equation2.y = player.equations.equation2.k.mul(player.equations.equation2.x).add(player.equations.equation2.n)
    document.getElementById("solved-equation").textContent = "y = " + format(player.equations.equation2.y)
    document.getElementById("k-amt").textContent = "k = " + format(player.equations.equation2.k)
    document.getElementById("x-amt").textContent = "x = " + format(player.equations.equation2.x)
    document.getElementById("n-amt").textContent = "n = " + format(player.equations.equation2.n)
    if(player.points.gte(player.bpoints)) {
        player.bpoints = player.points
        document.getElementById("best-p-ever").textContent = "Your Best points ever was " + format(player.bpoints)
    }
    document.getElementById("total-p").textContent = "Your total points is " + format(player.tpoints)
    document.getElementById("total-b-bought").textContent = "You bought a total of " + format(player.tbuildings) + " buildings"
    if(player.linear_challenges.chal2.completed === true) {
        player.upgrades.up1.eff = player.upgrades.up1.eff.mul(4)
    }
    document.getElementById("ResetForLE").textContent = "Reset for " + format(CalculateLEgain()) + " Linear Essence"
    player.LEgain = CalculateLEgain()
    document.getElementById("Linear-essence").textContent = "You have " + format(player.LinearEssence) + " linear essence"
    document.getElementById("mult-cost3").textContent = "Cost: " + format(player.equations.nbuyer.cost) + " Points"
    document.getElementById("LP").textContent = format(player.LinearPower)
    document.getElementById("LEequation-cost1").textContent = "Cost: " + format(player.equations.linear_equations.a.cost) 
    + " Linear Power"
    document.getElementById("LEequation-cost2").textContent = "Cost: " + format(player.equations.linear_equations.x.cost) 
    + " Linear Power"
    document.getElementById("LEequation-cost3").textContent = "Cost: " + format(player.equations.linear_equations.b.cost) 
    + " Linear Power"
    document.getElementById("LEequation-cost4").textContent = "Cost: " + format(player.equations.linear_equations.y.cost) 
    + " Linear Power"
    document.getElementById("LEequation-cost5").textContent = "Cost: " + format(player.equations.linear_equations.c.cost) 
    + " Linear Power"
    document.getElementById("LEequation").textContent = "ax + by + c = " + format(CalculateLEegain())
    document.getElementById("LP-eff").textContent = "Multiplying your points, buildings, y boost by " 
    + format(CalculateLEegain()) + "x, and x from 1st equation gets divided" 
    + " by 4 everytime you reach a factor of 10"
    player.equations.linear_equations.eff2 = CalculateLEegain().div(10)
    player.equations.linear_equations.eff2 = player.equations.linear_equations.eff2.floor()
    document.getElementById("Chal-reward").textContent = "Reward: Points are boosted by buildings. Currently: " +
    format(player.linear_challenges.chal1.eff) + "x boost"
    document.getElementById("gone-linear").textContent = "You have gone linear " + format(player.GoneLinear) + " times"
    document.getElementById("Time-in-linear").textContent = "You've spent " + format(player.TimeinLinear) + " seconds in linear run"
    document.getElementById("Fastest-linear").textContent = "Your fastest linear was " + format(player.FastestLinear) + " seconds"
    player.squares_and_prism.squares.amount = player.squares_and_prism.squares.abuyer.amount.pow(2)
    player.squares_and_prism.square_prism.amount = player.squares_and_prism.square_prism.abuyer.amount.pow(2).mul(6)
    player.squares_and_prism.squares.eff = player.squares_and_prism.squares.amount.mul(1e3).add(1)
    player.squares_and_prism.square_prism.eff = player.squares_and_prism.square_prism.amount.mul(1e9).add(1)
    document.getElementById("squares-amount").textContent = "You have " + format(player.squares_and_prism.squares.amount) + " Squares"
    document.getElementById("squares-boost").textContent = "Your squares boost your points by " + format(
        player.squares_and_prism.squares.eff) + "x"
    document.getElementById("a-square-amt").textContent = "a = " + format(player.squares_and_prism.squares.abuyer.amount)
    document.getElementById("Square-a-cost").textContent = "Cost: " + format(player.squares_and_prism.squares.abuyer.cost) + " Points"
    document.getElementById("prism-amount").textContent = "You have " + format(player.squares_and_prism.square_prism.amount) + 
    " Square Prisms"
    document.getElementById("prism-boost").textContent = "Your Square Prisms boost your points by " + format(
        player.squares_and_prism.square_prism.eff) + "x"
    document.getElementById("a-prism-amt").textContent = "a = " + format(player.squares_and_prism.square_prism.abuyer.amount)
    document.getElementById("prism-a-cost").textContent = "Cost: " + format(player.squares_and_prism.square_prism.abuyer.cost) + " Points"
    if(player.points.gte(3e5)) {
        document.getElementById("row2").classList.add("show")
        document.getElementById("note").style.visibility = "collapse"
    }
    if(achievements[4].completed === true) {
        document.getElementById("achv-row2").classList.add("unlocked")
    }
}

function UpdateStyles() {
    for(let i = 0; i < 3; i++) {
        let b = buildings[i]
        if(player.points.gte(b.cost)) {
            document.getElementById("Building-cost" + (i + 1)).classList.remove("Building-cost")
            document.getElementById("Building-cost" + (i + 1)).classList.add("Building-buy")
        }
        else {
            document.getElementById("Building-cost" + (i + 1)).classList.add("Building-cost")
            document.getElementById("Building-cost" + (i + 1)).classList.remove("Building-buy")
        }
    }
    for(let i = 0; i < 6; i++) {
        let u = upgrades[i]
        if(player.points.lt(u.cost) && u.bought === false) {
            document.getElementById("up-cost" + (i + 1)).classList.add("Up-cost")
            document.getElementById("up-cost" + (i + 1)).classList.remove("Up-bought")
        }
        if(player.points.gte(u.cost) && u.bought === false) {
            document.getElementById("up-cost" + (i + 1)).classList.remove("Up-cost")
            document.getElementById("up-cost" + (i + 1)).classList.add("Up-bought")
        }
        if(u.bought === true) {
            document.getElementById("up-cost" + (i + 1)).classList.remove("Up-cost")
            document.getElementById("up-cost" + (i + 1)).classList.add("Up-buy")
        }
        else if(u.bought === false) {
            document.getElementById("up-cost" + (i + 1)).classList.add("Up-cost")
            document.getElementById("up-cost" + (i + 1)).classList.remove("Up-buy")
        }
    }
    for(let i = 0; i < 12; i++) {
        let lu = linearUpgrades[i]
        if(player.LinearEssence.lt(lu.cost) && lu.bought === false) {
            document.getElementById("lup-cost" + (i + 1)).classList.add("Lup-cost")
            document.getElementById("lup-cost" + (i + 1)).classList.remove("Lup-bought")
        }
        if(player.LinearEssence.gte(lu.cost) && lu.bought === false) {
            document.getElementById("lup-cost" + (i + 1)).classList.remove("Lup-cost")
            document.getElementById("lup-cost" + (i + 1)).classList.add("Lup-bought")
        }
        if(lu.bought === true) {
            document.getElementById("lup-cost" + (i + 1)).classList.remove("Lup-cost")
            document.getElementById("lup-cost" + (i + 1)).classList.add("Lup-buy")
        }
        else if(lu.bought === false) {
            document.getElementById("lup-cost" + (i + 1)).classList.add("Lup-cost")
            document.getElementById("lup-cost" + (i + 1)).classList.remove("Lup-buy")
        }
    }
    for(let i = 0; i < 15; i++) {
        let a = achievements[i]
        if(a.completed === true) {
            document.getElementById("Achv-" + (i + 1)).classList.add("completed")
        }
    }
    if(player.LinearPower.gte(player.equations.linear_equations.a.cost)) {
        document.getElementById("LEe-cost1").classList.remove("LEequation-cost")
        document.getElementById("LEe-cost1").classList.add("LEequation-bought")
    }
    else {
        document.getElementById("LEe-cost1").classList.add("LEequation-cost")
        document.getElementById("LEe-cost1").classList.remove("LEequation-bought")
    }
    if(player.LinearPower.gte(player.equations.linear_equations.x.cost)) {
        document.getElementById("LEe-cost2").classList.remove("LEequation-cost")
        document.getElementById("LEe-cost2").classList.add("LEequation-bought")
    }
    else {
        document.getElementById("LEe-cost2").classList.add("LEequation-cost")
        document.getElementById("LEe-cost2").classList.remove("LEequation-bought")
    }
    if(player.LinearPower.gte(player.equations.linear_equations.b.cost)) {
        document.getElementById("LEe-cost3").classList.remove("LEequation-cost")
        document.getElementById("LEe-cost3").classList.add("LEequation-bought")
    }
    else {
        document.getElementById("LEe-cost3").classList.add("LEequation-cost")
        document.getElementById("LEe-cost3").classList.remove("LEequation-bought")
    }
    if(player.LinearPower.gte(player.equations.linear_equations.y.cost)) {
        document.getElementById("LEe-cost4").classList.remove("LEequation-cost")
        document.getElementById("LEe-cost4").classList.add("LEequation-bought")
    }
    else {
        document.getElementById("LEe-cost4").classList.add("LEequation-cost")
        document.getElementById("LEe-cost4").classList.remove("LEequation-bought")
    }
    if(player.LinearPower.gte(player.equations.linear_equations.c.cost)) {
        document.getElementById("LEe-cost5").classList.remove("LEequation-cost")
        document.getElementById("LEe-cost5").classList.add("LEequation-bought")
    }
    else {
        document.getElementById("LEe-cost5").classList.add("LEequation-cost")
        document.getElementById("LEe-cost5").classList.remove("LEequation-bought")
    }
    if(player.linear_challenges.chal1.inChal === true) {
        document.getElementById("Challenge1").classList.add("Challenge-running")
        document.getElementById("Challenge1").classList.remove("Challenge")
    }
    else if (player.linear_challenges.chal1.completed === true) {
        document.getElementById("Challenge1").classList.add("Challenge-completed")
        document.getElementById("Challenge1").classList.remove("Challenge-running")
    }
    else if(player.linear_challenges.chal1.inChal === false) {
        document.getElementById("Challenge1").classList.add("Challenge")
        document.getElementById("Challenge1").classList.remove("Challenge-running")
    }
    if(player.linear_challenges.chal2.inChal === true) {
        document.getElementById("Challenge2").classList.add("Challenge-running")
        document.getElementById("Challenge2").classList.remove("Challenge")
    }
    else if (player.linear_challenges.chal2.completed === true) {
        document.getElementById("Challenge2").classList.add("Challenge-completed")
        document.getElementById("Challenge2").classList.remove("Challenge-running")
    }
    else if(player.linear_challenges.chal2.inChal === false) {
        document.getElementById("Challenge2").classList.add("Challenge")
        document.getElementById("Challenge2").classList.remove("Challenge-running")
    }
    if(player.linear_challenges.chal3.inChal === true) {
        document.getElementById("Challenge3").classList.add("Challenge-running")
        document.getElementById("Challenge3").classList.remove("Challenge")
    }
    else if (player.linear_challenges.chal3.completed === true) {
        document.getElementById("Challenge3").classList.add("Challenge-completed")
        document.getElementById("Challenge3").classList.remove("Challenge-running")
    }
    else if(player.linear_challenges.chal3.inChal === false) {
        document.getElementById("Challenge3").classList.add("Challenge")
        document.getElementById("Challenge3").classList.remove("Challenge-running")
    }
    if(player.linear_challenges.chal4.inChal === true) {
        document.getElementById("Challenge4").classList.add("Challenge-running")
        document.getElementById("Challenge4").classList.remove("Challenge")
    }
    else if (player.linear_challenges.chal4.completed === true) {
        document.getElementById("Challenge4").classList.add("Challenge-completed")
        document.getElementById("Challenge4").classList.remove("Challenge-running")
    }
    else if(player.linear_challenges.chal4.inChal === false) {
        document.getElementById("Challenge4").classList.add("Challenge")
        document.getElementById("Challenge4").classList.remove("Challenge-running")
    }
    if(player.LinearUnl === true) {
        document.getElementById("Linear-statistics").classList.add("unlocked")
        document.getElementById("layertab").classList.add("unlocked")
        document.getElementById("achv-row3").classList.add("unlocked")
        document.getElementById("Linear-essence-guide").classList.add("unlocked")
    }
    if(player.points.gte(5e10)) {
        document.getElementById("ResetForLE").classList.add("unlocked")
    }
    if(linearUpgrades[7].bought === true) {
        document.getElementById("Chals-tab").classList.add("unlocked")
        document.getElementById("Linear-chals-guide").classList.add("unlocked")
    }
    if(linearUpgrades[3].bought === true) {
        document.getElementById("NBuyer").classList.add("unlocked")
        document.getElementById("Lrow2").classList.add("unlocked")
    }
    if(linearUpgrades[2].bought === true) {
        document.getElementById("Building-automation").classList.add("unlocked")
        document.getElementById("Building-automation2").classList.add("unlocked")
        document.getElementById("Building-automation3").classList.add("unlocked")
    }
    if(player.points.gte(player.squares_and_prism.squares.abuyer.cost)) {
        document.getElementById("Buy-a-square").classList.add("bought")
    }
    else {
        document.getElementById("Buy-a-square").classList.remove("bought")
    }
    if(player.points.gte(player.squares_and_prism.square_prism.abuyer.cost)) {
        document.getElementById("Buy-a-prism").classList.add("bought")
    }
    else {
        document.getElementById("Buy-a-prism").classList.remove("bought")
    }
    if(linearUpgrades[7].bought === true) {
        document.getElementById("Lrow3").classList.add("unlocked")
    }
    if(linearUpgrades[11].bought === true) {
        document.getElementById("Squares-tab").classList.add("unlocked")
    }
}

var LastUpdate = Date.now()

function CalculatePointGain() {
    let gain = new Decimal(0)
    for(i = 0; i < 3; i++) {
        let b = buildings[i]
        gain = gain.add(b.amount.mul(b.eff))
    }
    gain = gain.mul(player.equations.equation1.x)
    gain = gain.mul(CalculateLEegain())
    gain = gain.mul(player.squares_and_prism.squares.eff)
    gain = gain.mul(player.squares_and_prism.square_prism.eff)
    if(linearUpgrades[0].bought === true) {
        gain = gain.mul(linearUpgrades[0].eff)
    }
    if(player.linear_challenges.chal1.inChal === true || player.linear_challenges.chal4.inChal === true) {
        gain = gain.add(1)
        gain = gain.log10()
    }
    if(player.linear_challenges.chal1.completed === true) {
        gain = gain.mul(player.linear_challenges.chal1.eff)
    }
    if(linearUpgrades[9].bought === true) {
        gain = gain.mul(linearUpgrades[9].eff)
    }
    if(upgrades[3].bought === true) {
        gain = gain.mul(upgrades[3].eff)
    }
    return gain
}

function CalculateEquationGain() {
    let xeff = new Decimal(1)
    xeff = xeff.mul(player.equations.equation1.eff)
    if(player.equations.equation2.y.gt(1)) {
        xeff = xeff.mul(new Decimal(2).pow(player.equations.equation2.y))
    }
    if(player.equations.linear_equations.eff2.gte(1)) {
        xeff = xeff.mul(new Decimal(4).pow(player.equations.linear_equations.eff2))
    }
    return xeff
}

function CalculateLEgain() {
    let LEgain = new Decimal(0)
    if(player.points.gte(1e10)) {
        LEgain = new Decimal(new Decimal(1.1).pow((player.equations.equation2.y.div(20).sub(1))).mul(new Decimal(1.3).pow(player.equations.equation1.x.add(1).log10().sqrt())))
    }
    if(linearUpgrades[5].bought === true) {
        LEgain = LEgain.mul(linearUpgrades[5].eff)
    }
    LEgain = LEgain.floor()
    return LEgain
}

function CalculateLPgain() {
    let LPgain = new Decimal(0)
    LPgain = LPgain.add(CalculateLEegain())
    if(linearUpgrades[10].bought === true) {
        LPgain = LPgain.mul(linearUpgrades[10].eff)
    }
    return LPgain
}

function CalculateLEegain() {
    let LEegain = new Decimal(0)
    LEegain = LEegain.add(player.equations.linear_equations.a.amount.mul(player.equations.linear_equations.x.amount)
    .add(player.equations.linear_equations.b.amount.mul(player.equations.linear_equations.y.amount)).add(
        player.equations.linear_equations.c.amount))
    return LEegain
}

function productionLoop(diff) {
    player.points = player.points.add(player.pointsPerSec.mul(diff))
    player.pointsPerSec = CalculatePointGain()
    player.tpoints = player.tpoints.add(player.pointsPerSec.mul(diff))
    player.equations.equation1.x = CalculateEquationGain()
    if(player.LinearUnl === true) {
        player.LinearPower = player.LinearPower.add(CalculateLPgain().mul(diff))
        player.TimeinLinear = player.TimeinLinear.add(new Decimal(1).mul(diff))
    }
}

function MainLoop() {
    var diff = (Date.now() - LastUpdate) / 1000

    CalculatePointGain()
    productionLoop(diff)
    UpdateGUI()
    UpdateStyles()

    LastUpdate = Date.now()
}

setInterval(MainLoop, 33)

UpdateGUI()