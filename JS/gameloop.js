var buildings = []
var upgrades = []
var linearUpgrades = []
var achievements = []
var linearChallenges = []
var linearEquation = []
var talmideUpgrades = []
let LinearResetunl = false
let lockedlu3reset = false

for(let i = 0; i < 3; i++) {
    let building = {
        amount: new Decimal(0),
        cost: new Decimal(10).pow(i+1),
        eff: new Decimal(1).mul(new Decimal(11).pow(i)),
        automation: false,
    }
    buildings.push(building)
}

for(let i = 0; i < 9; i++) {
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
        amt: new Decimal(1),
    }
    linearUpgrades.push(linearUpgrade)
}

for(let i = 0; i < 30; i++) {
    let achievement = {
        completed: false,
    }
    achievements.push(achievement)
}

for(let i = 0; i < 6; i++) {
    let linearChallenge = {
        completed: false,
        inChal: false,
        goal: new Decimal(3000),
        eff: new Decimal(1),
    }
    linearChallenges.push(linearChallenge)
}

for(let i = 0; i < 5; i++) {
    let leVar = {
        cost: new Decimal(60).pow(i + 1),
        amount: new Decimal(0),
    } 
    linearEquation.push(leVar)
} 

for(let i = 0; i < 6; i++) {
    let talmideUpgrade = {
        bought: false,
        cost: new Decimal(100),
        eff: new Decimal(1),
    }
    talmideUpgrades.push(talmideUpgrade)
}

function UpdateGUI() {
    if(player.tangent.pi_dimension.inDimension) {
        document.getElementById("Points").textContent = "You have " + format(player.tangent.pi_dimension.papirus) + " Papirus"
        document.getElementById("maintab").textContent = "The Circle"
        document.getElementById("PointsPerSec").textContent = "(+" + format(player.tangent.pi_dimension.papirusPerSec) + " Papirus/sec)" 
    }
    else {
        document.getElementById("Points").textContent = "You have " + format(player.points) + " Points"
        document.getElementById("maintab").textContent = "Main"
        document.getElementById("PointsPerSec").textContent = "(+" + format(player.pointsPerSec) + " Points/sec)" 
    }
    if(player.pointgain.eq(1)) {
        document.getElementById("btn-gain").textContent = "+1 Point"
    }
    else if (player.pointgain.gt(1)) {
        document.getElementById("btn-gain").textContent = "+" + format(player.pointgain) + "Points"
    }
    for(let i = 2; i > -1; i--) {
        let b = buildings[i]
        document.getElementById("building-amount" + (i + 1)).textContent = "[" + formatWhole(b.amount) + "]"
        document.getElementById("building-production" + (i + 1)).textContent = "(+" + format(b.amount.mul(b.eff)) + " Points/sec)"
        if (!linearChallenges[2].inChal) {
            document.getElementById("Building-cost" + (i + 1)).textContent = "Cost: " + format(b.cost) + " Points"
        } else {
            let l = linearChallenges[2].inChal ? 3 : 4;
                document.getElementById("Building-cost" + (i + 1)).textContent = "LOCKED: LE Challenge " + l
        }
        if(b.automation) {
            if(upgrades[6].bought) {
                BuyBuilding(i+1, true)
            }
            else {
                BuyBuilding(i+1, true)
            }
        }
        if(linearUpgrades[4].bought && !linearChallenges[4].inChal) b.eff = b.eff.mul(linearUpgrades[4].eff)
    }
    for(let i = 0; i < 9; i++) {
        let u = upgrades[i]
        upgrades[0].eff = player.points.max(1).log10().mul(2.5).add(1)
        upgrades[1].eff = buildings[2].amount.sqrt(buildings[2].amount).add(1)
        upgrades[3].eff = player.points.max(1).log10().div(2.5).add(1)
        upgrades[4].eff = buildings[2].amount.sqrt(buildings[2].amount).div(2).add(1)
        upgrades[7].eff = player.points.max(1).log10().div(25).add(1)
        upgrades[0].cost = new Decimal(20000)
        upgrades[1].cost = new Decimal(75000)
        upgrades[2].cost = new Decimal(1.5e5)
        upgrades[3].cost = new Decimal(3e5)
        upgrades[4].cost = new Decimal(4.5e6)
        upgrades[5].cost = new Decimal(1e7)
        upgrades[6].cost = new Decimal(1e90)
        upgrades[7].cost = new Decimal(1e100)
        upgrades[8].cost = new Decimal(1e150)
        buildings[0].eff = new Decimal(1)
        if(upgrades[0].bought) buildings[0].eff = upgrades[0].eff
        if(linearUpgrades[1].bought && !linearChallenges[4].inChal) upgrades[0].eff = upgrades[0].eff.mul(5)
        buildings[0].eff = buildings[0].eff.mul(CalculateEquationOfTangent())
        buildings[1].eff = new Decimal(11)
        if(upgrades[1].bought) buildings[1].eff = buildings[1].eff.mul(upgrades[1].eff)
        buildings[1].eff = buildings[1].eff.mul(CalculateEquationOfTangent())
        buildings[2].eff = new Decimal(121)
        if(upgrades[4].bought) buildings[2].eff = buildings[2].eff.mul(upgrades[4].eff)
        if(upgrades[7].bought) buildings[2].eff = buildings[2].eff.mul(upgrades[7].eff)
        buildings[2].eff = buildings[2].eff.mul(CalculateEquationOfTangent())
        if([2,5,6,8].includes(i)) continue
        else document.getElementById("up-eff" + (i + 1)).textContent = "Currently: " + format(u.eff) + "x boost"
        if(upgrades[2].bought) document.getElementById("Equation").classList.add("unlocked")
        else document.getElementById("Equation").classList.remove("unlocked")
        if(upgrades[5].bought) document.getElementById("Equation2").classList.add("unlocked")
        else document.getElementById("Equation2").classList.remove("unlocked")
        
    }
    for(let i = 0; i < 12; i++) {
        let lu = linearUpgrades[i]
        linearUpgrades[0].eff = player.LinearEssence.add(1).mul(4)
        linearUpgrades[4].eff = player.points.add(1).log10().sqrt().add(1)
        linearUpgrades[5].eff = player.LinearEssence.add(1).log10().div(5).add(1)
        linearUpgrades[9].eff = buildings[0].amount.add(1).div(5).add(buildings[1].amount.add(1).div(5)).add(buildings[2].amount.add(1).div(5)).add(1)
        linearUpgrades[10].eff = player.LinearEssence.add(1).sqrt().mul(250)
        linearUpgrades[0].cost = new Decimal(1)
        linearUpgrades[1].cost = new Decimal(1)
        linearUpgrades[2].cost = new Decimal(3)
        linearUpgrades[3].cost = new Decimal(5)
        linearUpgrades[4].cost = new Decimal(5e3)
        linearUpgrades[5].cost = new Decimal(1e4)
        linearUpgrades[6].cost = new Decimal(1.5e4)
        linearUpgrades[7].cost = new Decimal(2.5e4)
        linearUpgrades[8].cost = new Decimal(2.5e4)
        linearUpgrades[9].cost = new Decimal(5e4)
        linearUpgrades[10].cost = new Decimal(7.5e4)
        linearUpgrades[11].cost = new Decimal(1e5)
        linearChallenges[4].eff = lu.amt.div(12).add(1.6)
        if([1, 2, 3, 6, 7, 8, 11].includes(i)) continue
        document.getElementById("lup-eff" + (i + 1)).textContent = "Currently: " + format(lu.eff) + "x boost"
    }
    for(let i = 0; i < 6; i++) {
        linearChallenges[0].goal = new Decimal(3e3)
        linearChallenges[1].goal = new Decimal(5e9)
        linearChallenges[2].goal = new Decimal(300)
        linearChallenges[3].goal = new Decimal(5e3)
        linearChallenges[4].goal = new Decimal(1e55)
        linearChallenges[5].goal = new Decimal(1e101)
        linearChallenges[0].eff = buildings[0].eff.pow(0.2).add(buildings[1].eff.pow(0.2).add(buildings[2].eff.pow(0.2)))
        if(linearChallenges[1].completed) upgrades[0].eff = upgrades[0].eff.mul(4)
        if([1, 2, 3, 5].includes(i)) continue
        else document.getElementById("Chal-reward" + (i + 1)).textContent = "Currently " + format(linearChallenges[i].eff) + "x boost"  
    }
    for(let i = 0; i < 5; i++) {
        let le = linearEquation[i]
        document.getElementById("LEequation-cost" + (i + 1)).textContent = "Cost: " + format(le.cost) + " Linear Power"
        document.getElementById("LEequation-amt" + (i + 1)).innerHTML = "You have " + formatWhole(le.amount)
    }

    for(let i = 0; i < 6; i++) {
        talmideUpgrades[0].cost = new Decimal(100)
        talmideUpgrades[1].cost = new Decimal(300)
        talmideUpgrades[2].cost = new Decimal(1000)
        talmideUpgrades[3].cost = new Decimal(3)
        talmideUpgrades[4].cost = new Decimal(150)
        talmideUpgrades[5].cost = new Decimal(5000)
        talmideUpgrades[0].eff = player.tangent.pi_dimension.Thales.students.add(1)
        talmideUpgrades[1].eff = player.tangent.pi_dimension.Archimedes.students.add(1)
        talmideUpgrades[3].eff = player.tangent.pi_dimension.MathematicalInstruments.add(1)
        talmideUpgrades[4].eff = player.tangent.pi_dimension.Miner.eff
        player.tangent.pi_dimension.Water_worker.eff = new Decimal(1)
        player.tangent.pi_dimension.Papirus_maker.eff = new Decimal(1)
        player.tangent.pi_dimension.Miner.eff = new Decimal(1)
        player.tangent.pi_dimension.CoalPerSec = new Decimal(1)
        if(talmideUpgrades[0].bought) player.tangent.pi_dimension.Water_worker.eff = player.tangent.pi_dimension.Water_worker.eff.mul(talmideUpgrades[0].eff)
        if(talmideUpgrades[1].bought)  player.tangent.pi_dimension.Papirus_maker.eff = player.tangent.pi_dimension.Papirus_maker.eff.mul(talmideUpgrades[1].eff)
        if(talmideUpgrades[3].bought) {
            player.tangent.pi_dimension.CoalPerSec = player.tangent.pi_dimension.CoalPerSec.mul(talmideUpgrades[3].eff)
            player.tangent.pi_dimension.Miner.eff = player.tangent.pi_dimension.Miner.eff.mul(talmideUpgrades[3].eff)
        }
        if(talmideUpgrades[4].bought) player.tangent.pi_dimension.Water_worker.eff = player.tangent.pi_dimension.Water_worker.eff.mul(talmideUpgrades[4].eff)
        if(talmideUpgrades[5].bought) {
            player.tangent.pi_dimension.Water_worker.eff = player.tangent.pi_dimension.Water_worker.eff.mul(InventorEff())
            player.tangent.pi_dimension.Miner.eff = player.tangent.pi_dimension.Miner.eff.mul(InventorEff())
        }
        if([2,5].includes(i)) continue
        else document.getElementById("tmp-eff" + (i + 1)).textContent = "Currently: " + format(talmideUpgrades[i].eff) + "x boost" 
    }
    if(buildings[0].amount.gte(1)) achievements[0].completed = true
    if(buildings[1].amount.gte(1)) achievements[1].completed = true
    if(buildings[2].amount.gte(1)) achievements[2].completed = true
    if(upgrades[2].bought) achievements[3].completed = true
    if(player.points.gte(3e5)) achievements[4].completed = true
    if(player.points.gte(1e7)) achievements[5].completed = true
    if(upgrades[5].bought) achievements[6].completed = true
    if(player.equations.equation2.y.gte(5)) achievements[7].completed = true
    if(player.equations.equation2.x.gte(10)) achievements[8].completed = true
    if(player.LinearUnl) achievements[9].completed = true
    if(linearUpgrades[3].bought) achievements[10].completed = true
    if(CalculateLEegain().gte(10)) achievements[11].completed = true
    if(linearUpgrades[7].bought) achievements[12].completed = true
    if(linearChallenges[0].completed && linearChallenges[1].completed && linearChallenges[2].completed) achievements[13].completed = true
    if(linearUpgrades[11].bought) achievements[14].completed = true
    if(player.polygons.amount.gte(1)) achievements[15].completed = true
    if(player.polygons.dimensions.gte(3)) achievements[16].completed = true
    if(player.polygons.pboost2unl) achievements[17].completed = true
    if(upgrades[6].bought) achievements[18].completed = true
    if(player.polygons.pboost5unl) achievements[19].completed = true
    if(upgrades[8].bought) achievements[20].completed = true
    if(player.tangent.pi_dimension.Papirus_maker.amt.gt(0)) achievements[21].completed = true
    if(talmideUpgrades[0].bought && talmideUpgrades[1].bought && talmideUpgrades[2].bought) achievements[22].completed = true
    if(player.tangent.pi_dimension.MathematicalInstruments.gt(0)) achievements[23].completed = true
    if(talmideUpgrades[5].bought) achievements[24].completed = true
    if(player.tangent.pi_milestones.milestone1.gotten && player.tangent.pi_milestones.milestone2.gotten) achievements[25].completed = true
    if(player.tangent.circle_arcs_amt.gte(100)) achievements[26].completed = true
    if(player.tangent.equation_of_tangent.x_buyer.amount.gte(5)) achievements[27].completed = true
    if(player.tangent.pi_power.gte(10)) achievements[28].completed = true
    if(player.equations.equation1.x.eq(1)) document.getElementById("Equation1").textContent = "1+x=2"
    else document.getElementById("Equation1").textContent = "1+(x/" + format(CalculateEquationGain(), precision = 0) + ")=2"
    document.getElementById("LinearReset").textContent = "Reset for " + format(CalculateLEgain()) + " Linear Essence"
    if(linearUpgrades[2].bought) {
        if(player.TimeinLinear.lt(5)) document.getElementById("LinearReset").textContent = "You can reset in " + formatTime(player.TimeTillReset)
        else document.getElementById("LinearReset").textContent = "Reset for " + format(CalculateLEgain()) + " Linear Essence"
    }
    if(linearUpgrades[2].bought && !lockedlu3reset) player.Linearup3reset = true
    if(player.Linearup3reset) {
        player.equations.equation1.x = new Decimal(1)
        player.equations.equation2.x = new Decimal(0)
        player.equations.equation2.n = new Decimal(1)
        player.equations.equation2.y = new Decimal(1)
        player.equations.multiplicator1.cost = new Decimal(1.25e5)
        player.equations.xbuyer.cost = new Decimal(1e8)
        player.equations.xbuyer.amount = new Decimal(0)
        player.equations.nbuyer.cost = new Decimal(1e12)
        player.equations.nbuyer.amount = new Decimal(0)
        player.equations.equation1.eff = new Decimal(1)
        player.equations.equation2.eff = new Decimal(1)
        player.Linearup3reset = false
        lockedlu3reset = true
    }
    document.getElementById("Equation1-boost").textContent = "x = " + format(CalculateEquationGain(), precision = 0) + " -> " + format(CalculateEquationGain()) + "x to your point production"
    document.getElementById("mult-cost").textContent = "Cost: " + format(player.equations.multiplicator1.cost) + " Points"
    if(player.equations.equation2.y.gt(1)) {
        player.equations.equation2.eff = new Decimal(2).pow(player.equations.equation2.y).mul(2)
        player.equations.equation2.eff = player.equations.equation2.eff.mul(player.equations.linear_equations.eff)
        player.equations.equation2.eff = player.equations.equation2.eff.mul(CalculateEquationOfTangent())
    }
    document.getElementById("Equation2-boost").textContent = format(player.equations.equation2.eff) + "x to your point production" +
    " and dividing your x from 1st equation by " + format(new Decimal(2).pow(player.equations.equation2.y))
    document.getElementById("mult-cost1").textContent = "Cost: " + format(player.equations.kbuyer.cost) + " Points"
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
    player.LEgain = CalculateLEgain()
    document.getElementById("Linear-essence").textContent = "You have " + format(player.LinearEssence) + " linear essence"
    document.getElementById("mult-cost3").textContent = "Cost: " + format(player.equations.nbuyer.cost) + " Points"
    document.getElementById("LP").textContent = format(player.LinearPower)
    if(!linearChallenges[4].completed) {
        document.getElementById("LEequation").textContent = "ax + by + c + 1 = " + format(CalculateLEegain()) 
    }
    else {
        document.getElementById("LEequation").textContent = "(ax + by + c + 1) * " + format(linearChallenges[4].eff) + " boost = " + format(CalculateLEegain()) 
    }
    if(linearChallenges[5].completed) {
        document.getElementById("LEequation").textContent = "(ax + by + c + 1) * " + format(linearChallenges[4].eff) + " * 1.2 = " + format(CalculateLEegain()) 
    }
    document.getElementById("LP-eff").textContent = "Multiplying your points, buildings, y boost by " 
    + format(CalculateLEegain()) + "x, and x from 1st equation gets divided" 
    + " by 4 every time you reach a multiple of 10"
    player.equations.linear_equations.eff2 = CalculateLEegain().div(10)
    player.equations.linear_equations.eff2 = player.equations.linear_equations.eff2.floor()
    document.getElementById("gone-linear").textContent = "You have gone linear " + format(player.GoneLinear) + " times"
    document.getElementById("Time-in-linear").textContent = "You've spent " + format(player.TimeinLinear) + " seconds in linear run"
    document.getElementById("Fastest-linear").textContent = "Your fastest linear was " + format(player.FastestLinear) + " seconds"
    document.getElementById("Length-amt").textContent = "Each side is " + lengthFormat(player.polygons.length) + " long. (length)"
    if(player.points.gte(3e5)) {
        document.getElementById("row2").classList.add("show")
        document.getElementById("note").style.visibility = "collapse"
    }
    if(achievements[4].completed) document.getElementById("achv-row2").classList.add("unlocked")
    if(achievements[14].completed) document.getElementById("achv-row4").classList.add("unlocked")
    if (player.polygons.amount.gte(1)) {
        const canvas = document.getElementById("polygoncanvas")
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height) // clear canvas
        ctx.strokeStyle = 'white'
        ctx.lineWidth = '10'
        ctx.beginPath() 

        if(player.polygons.sides.eq(3)) { // edge case bc the triangle is for some reason higher
            ctx.moveTo(Math.sin(-(Math.PI))*170+200, Math.cos(-(Math.PI))*170+240) 
            for(i = 1; i<player.polygons.sides+1; i++) {
                ctx.lineTo(Math.sin(-(Math.PI)+(Math.PI*2/player.polygons.sides*i))*170+200, Math.cos(-(Math.PI)+(Math.PI*2/player.polygons.sides*i))*170+240)
            }

            ctx.lineTo(Math.sin(-(Math.PI))*170+200, Math.cos(-(Math.PI))*170+240)  
        } else {
            ctx.moveTo(Math.sin(-(Math.PI))*170+200, Math.cos(-(Math.PI))*170+200)  

            for(i = 1; i<player.polygons.sides+1; i++) {
                ctx.lineTo(Math.sin(-(Math.PI)+(Math.PI*2/player.polygons.sides*i))*170+200, Math.cos(-(Math.PI)+(Math.PI*2/player.polygons.sides*i))*170+200)
            }

            ctx.lineTo(Math.sin(-(Math.PI))*170+200, Math.cos(-(Math.PI))*170+200)  
        }

        ctx.stroke() 
    }
    if(player.polygons.dimensions.gte(3)) document.getElementById("Height").classList.add("show")
    if(player.polygons.dimensions.gte(4)) document.getElementById("W-axis").classList.add("show")
    if(player.polygons.dimensions.gte(5)) document.getElementById("V-axis").classList.add("show")
    if(player.polygons.amount.eq(1)) document.getElementById("Polygon-amount").textContent = "Your regular polytope currently has " + player.polygons.sides + " sides."
    if(player.polygons.amount.gt(1)) document.getElementById("Polygon-amount").textContent = "Your regular polytopes currently has " + player.polygons.sides + " sides."
    document.getElementById("polygon-buy").innerHTML = "Buy 1 regular polytope. <br> Cost: " + format(player.polygons.buyable1.cost) + " points"
    document.getElementById("dimension-buy").innerHTML = "Increase the dimensions your regular polytope is in by 1. <br> Cost: " + format(player.polygons.buyable2.cost)
        + " Linear Essence"
    document.getElementById("polygon-latex").textContent = "𝑃⊂ℝ^" + formatWhole(player.polygons.dimensions)
    document.getElementById("Regular-polygons").textContent = "You have " + format(player.polygons.amount) + " regular polytopes."
    player.polygons.eff1 = player.polygons.length
    player.polygons.eff2 = player.polygons.length.div(50).add(0.98)
    player.polygons.eff3 = player.polygons.eff2.div(100).add(0.99)
    player.polygons.eff4 = player.polygons.eff3.div(150).add(0.993)
    player.polygons.eff5 = player.polygons.eff4.div(200).add(0.995)
    document.getElementById("Lenght").textContent = "Your length boosts your points by " + format(player.polygons.eff1) + "x"
    document.getElementById("Length-persec").textContent = "(You are increasing each side by +" + lengthFormat(CalculateLengthGain()) + "/sec)"
    document.getElementById("Width").textContent = "Your width boosts your points by " + format(player.polygons.eff2) + "x"
    document.getElementById("Height").textContent = "Your height boosts your points by " + format(player.polygons.eff3) + "x"
    document.getElementById("W-axis").textContent = "Your w-axis boosts your points by " + format(player.polygons.eff4) + "x"
    document.getElementById("V-axis").textContent = "Your v-axis boosts your points by " + format(player.polygons.eff5) + "x"
    if(player.polygons.length.gte(1e3)) player.polygons.pboost1unl = true
    if(player.polygons.length.gte(5e3)) player.polygons.pboost2unl = true
    if(player.polygons.length.gte(2.5e4)) player.polygons.pboost3unl = true
    if(player.polygons.length.gte(5e4)) player.polygons.pboost4unl = true
    if(player.polygons.length.gte(1e5)) player.polygons.pboost5unl = true
    if(player.polygons.pboost1unl) document.getElementById("p-boost1").textContent = "Unlock 3 new upgrades in upgrades tab." 
    else document.getElementById("p-boost1").textContent = "Unlock polytope boost 1 on 1 femtometer of length."
    if(player.polygons.pboost2unl) document.getElementById("p-boost2").textContent = "Unlock 2 more linear challenges."
    else document.getElementById("p-boost2").textContent = "Unlock polytope boost 2 on 5 femtometer of length."
    if(player.polygons.pboost3unl) document.getElementById("p-boost3").innerHTML = "Points get boosted based on regular polytopes. <br> Currently: "
     + format(new Decimal(2).pow(player.polygons.amount)) + "x boost"
    else document.getElementById("p-boost3").textContent = "Unlock polytope boost 3 on 25 femtometer of length."
    if(player.polygons.pboost4unl) document.getElementById("p-boost4").innerHTML = "Your Linear Essence gets boosted by w-axis. <br> Currently: " 
     + format(player.polygons.eff4.mul(5)) + "x boost"
    else document.getElementById("p-boost4").textContent = "Unlock polytope boost 4 on 50 femtometer of length."
    if(player.polygons.pboost5unl) document.getElementById("p-boost5").innerHTML = "Your Linear power gets boosted by v-axis. <br> Currently: "
     + format(player.polygons.eff5) + "x boost"
    else document.getElementById("p-boost5").textContent = "Unlock polytope boost 5 on 100 femtometer of length."
    if(player.polygons.pboost1unl) document.getElementById("row3").classList.add("show") 
    if(player.polygons.pboost2unl) {
        document.getElementById("Challenge5").classList.add("show")
        document.getElementById("Challenge6").classList.add("show")
    }
    if(upgrades[6].bought) {
        document.getElementById("Bld-1").classList.add("hide")
        document.getElementById("Building1").style.height = "90px"
    }
    if(upgrades[8].bought) player.tangent.unlocked = true
    document.getElementById("Inventor-cost1").textContent = "Cost: " + format(player.tangent.pi_dimension.Thales.cost) + " Papirus"
    document.getElementById("Papirus-maker-cost").textContent = "Cost: " + format(player.tangent.pi_dimension.Papirus_maker.cost) + " Litres of Water"
    document.getElementById("Full-Circle").textContent = "You have " + format(player.tangent.pi_dimension.fullCircles) + " Full Circles. (next number after the comma at " +
     format(player.tangent.pi_ac_req) + ")"
    document.getElementById("Litres-of-Water").textContent = "You have " + format(player.tangent.pi_dimension.LitresOfWater) + " Litres of Water."
    document.getElementById("Inventor-cost2").textContent = "Cost: " + format(player.tangent.pi_dimension.Archimedes.cost) + " Papirus"
    if(player.tangent.pi_dimension.Water_worker.cap.eq(0)) document.getElementById("Water-worker-cost").textContent = "Cost: Free (cap: 1)"
    else document.getElementById("Water-worker-cost").textContent = "Maxed out"
    document.getElementById("student-amount1").textContent = "[" + formatWhole(player.tangent.pi_dimension.Thales.students) + "]"
    document.getElementById("student-amount2").textContent = "[" + formatWhole(player.tangent.pi_dimension.Archimedes.students) + "]"
    document.getElementById("Lines").textContent = format(player.tangent.pi_dimension.Lines)
    document.getElementById("Line-maker-cost").textContent = "Cost: " + format(player.tangent.pi_dimension.Euclids_elements.cost) + " Papirus"
    document.getElementById("Coal").textContent = format(player.tangent.pi_dimension.Coal)
    document.getElementById("Coal-persec").textContent = format(player.tangent.pi_dimension.CoalPerSec)
    if(player.tangent.pi_dimension.Miner.cap.eq(0)) document.getElementById("Miner-cost").textContent = "Cost: Free (cap: 1)"
    else document.getElementById("Miner-cost").textContent = "Maxed out"
    document.getElementById("Mathematical-instruments").textContent = format(player.tangent.pi_dimension.MathematicalInstruments)
    document.getElementById("Metal").textContent = format(player.tangent.pi_dimension.Metal)
    document.getElementById("Shapes").textContent = format(player.tangent.pi_dimension.Shapes)
    document.getElementById("Shape-maker").textContent = "Cost: " + format(player.tangent.pi_dimension.Plato.cost) + " Mathematical instruments and 3 Lines"
    document.getElementById("IE-boost").textContent = "Your Inventor equation boosts all resources in The Circle by " + format(InventorEff()) + "x."
    document.getElementById("IE-equation").textContent = "Ieb = min(log10(Papirus / 5,000 + Litres of Water / 15,000 + Lines / 3 + Coal / 1000 + Shapes / 2 + Mathematical "
    + "instruments / 25 + Metal / 35), 5)"
    if(player.tangent.pi_dimension.fullCircles.gte(player.tangent.pi_ac_req)) {
        player.tangent.pi_ac_req = player.tangent.pi_ac_req.mul(10)
        player.tangent.pi_after_comma = player.tangent.pi_after_comma.add(1)
    }
    if(player.tangent.pi_after_comma.eq(1)) document.getElementById("pi-numbers").textContent = "Your pi has " + formatWhole(player.tangent.pi_after_comma) + " number after the comma"
    else document.getElementById("pi-numbers").textContent = "Your pi has " + formatWhole(player.tangent.pi_after_comma) + " numbers after the comma"
    if(player.tangent.pi_after_comma.gte(3)) player.tangent.pi_milestones.milestone1.gotten = true
    if(player.tangent.pi_after_comma.gte(4)) player.tangent.pi_milestones.milestone2.gotten = true
    document.getElementById("Tangent-length").textContent = "Your Tangent length is " + format(player.tangent.tangent_length) + " centimeters."
    document.getElementById("Tl-persec").textContent = "(+" + format(TangentLength()) + " Tangent length/sec)"
    document.getElementById("angle-amount").textContent = formatWhole(player.tangent.angle)
    document.getElementById("tradius-amount").textContent = formatWhole(player.tangent.radius)
    document.getElementById("Circle-arcs-amt").textContent = "You have " + format(CalculateCircleArcs()) + " Circle arcs"
    document.getElementById("alpha-buyer").innerHTML = "Increase your angle by 1. <br> Cost: " + format(player.tangent.circle_arcs.buyable1.cost) + " Tangent Length centimeters"
    document.getElementById("radius-buyer").innerHTML = "Increase your radius by 1. <br> Cost: " + format(player.tangent.circle_arcs.buyable2.cost) + " Tangent Length centimeters"
    document.getElementById("EoT-c-btn").textContent = "Req: " + format(player.tangent.equation_of_tangent.c_buyer.cost) + " Circle arcs"
    document.getElementById("EoT-x-btn").textContent = "Req: " + format(player.tangent.equation_of_tangent.x_buyer.cost) + " Circle arcs"
    document.getElementById("EoT-y").textContent = "y = " + formatWhole(player.tangent.equation_of_tangent.m_buyer.amount.mul(player.tangent.equation_of_tangent.x_buyer.amount).add(
        player.tangent.equation_of_tangent.c_buyer.amount))
    document.getElementById("EoT-m").textContent = "m = " + formatWhole(player.tangent.equation_of_tangent.m_buyer.amount)
    document.getElementById("EoT-x").textContent = "x = " + formatWhole(player.tangent.equation_of_tangent.x_buyer.amount)
    document.getElementById("EoT-c").textContent = "c = " + formatWhole(player.tangent.equation_of_tangent.c_buyer.amount)
    document.getElementById("EoT-boost").textContent = "Your Equation of Tangent gives a " + format(CalculateEquationOfTangent()) + "x boost to points, buildings, y boost."
    + " For each multiple of 10 your x from 1st equation gets divided by 16."
    document.getElementById("pi-power").textContent = "Your pi in the circle is at " + player.tangent.pi_power.mul(10) + "% power."
    document.getElementById("Tup-cost1").textContent = "Req: " + formatWhole(player.tangent.tangent_upgrades.upgrade1.cost) + " Circle arcs"
    document.getElementById("Tup-level").textContent = player.tangent.tangent_upgrades.upgrade1.level + "/9 Level"
    if(player.tangent.tangent_upgrades.upgrade1.level.eq(9)) {
        player.tangent.tangent_upgrades.upgrade1.bought = true
    }  
}

function UpdateStyles() {
    for(let i = 0; i < 3; i++) {
        let b = buildings[i]
        if(player.points.gte(b.cost) && !linearChallenges[2].inChal) {
            document.getElementById("Building-cost" + (i + 1)).classList.remove("Building-cost")
            document.getElementById("Building-cost" + (i + 1)).classList.add("Building-buy")
        }
        else {
            document.getElementById("Building-cost" + (i + 1)).classList.add("Building-cost")
            document.getElementById("Building-cost" + (i + 1)).classList.remove("Building-buy")
        }
        if(linearUpgrades[2].bought) document.getElementById("Building-automation" + (i + 1)).classList.add("unlocked")
    }
    let upgradenotification = false
    for(let i = 0; i < 9; i++) {
        let u = upgrades[i]
        if(player.points.lt(u.cost) && !u.bought) {
            document.getElementById("up-cost" + (i + 1)).classList.add("Up-cost")
            document.getElementById("up-cost" + (i + 1)).classList.remove("Up-bought")
        }
        if(player.points.gte(u.cost) && !u.bought) {
            document.getElementById("up-cost" + (i + 1)).classList.remove("Up-cost")
            document.getElementById("up-cost" + (i + 1)).classList.add("Up-bought")
            upgradenotification = true
        }
        if(u.bought) {
            document.getElementById("up-cost" + (i + 1)).classList.remove("Up-cost")
            document.getElementById("up-cost" + (i + 1)).classList.add("Up-buy")
        }
        else {
            document.getElementById("up-cost" + (i + 1)).classList.add("Up-cost")
            document.getElementById("up-cost" + (i + 1)).classList.remove("Up-buy")
        }
        if (linearChallenges[2].inChal) {
            document.getElementById("up-cost" + (i + 1)).classList.add("Up-cost")
            document.getElementById("up-cost" + (i + 1)).classList.remove("Up-buy")
            document.getElementById("up-cost" + (i + 1)).classList.remove("Up-bought")
        }
    }
    if(upgradenotification) {
        document.getElementById("upgradetab").classList.add("available")
        document.getElementById("upgrade-available").classList.add("show")
    }
    else {
        document.getElementById("upgradetab").classList.remove("available")
        document.getElementById("upgrade-available").classList.remove("show")
    }
    let lupgradenotification = false
    for(let i = 0; i < 12; i++) {
        let lu = linearUpgrades[i]
        if(player.LinearEssence.lt(lu.cost) && !lu.bought) {
            document.getElementById("lup-cost" + (i + 1)).classList.add("Lup-cost")
            document.getElementById("lup-cost" + (i + 1)).classList.remove("Lup-bought")
        }
        if(player.LinearEssence.gte(lu.cost) && !lu.bought) {
            document.getElementById("lup-cost" + (i + 1)).classList.remove("Lup-cost")
            document.getElementById("lup-cost" + (i + 1)).classList.add("Lup-bought")
            lupgradenotification = true
        }
        if(lu.bought) {
            document.getElementById("lup-cost" + (i + 1)).classList.remove("Lup-cost")
            document.getElementById("lup-cost" + (i + 1)).classList.add("Lup-buy")
        }
        else if(!lu.bought) {
            document.getElementById("lup-cost" + (i + 1)).classList.add("Lup-cost")
            document.getElementById("lup-cost" + (i + 1)).classList.remove("Lup-buy")
        }
    }
    if(lupgradenotification) {
        document.getElementById("layertab").classList.add("available")
        document.getElementById("lupgrade-available").classList.add("show")
    }
    else {
        document.getElementById("layertab").classList.remove("available")
        document.getElementById("lupgrade-available").classList.remove("show")
    }
    for(let i = 0; i < 6; i++) {
        let lc = linearChallenges[i]
        if(player.points.gte(lc.goal) && lc.inChal) {
            document.getElementById("Challenge" + (i + 1)).classList.add("beatable")
            document.getElementById("Challenge" + (i + 1)).classList.remove("Challenge-running")
        }
        if (lc.completed) {
            document.getElementById("Challenge" + (i + 1)).classList.add("Challenge-completed")
            document.getElementById("Challenge" + (i + 1)).classList.remove("Challenge-running")
            document.getElementById("Challenge" + (i + 1)).classList.remove("beatable")
        }
        if(lc.inChal && player.points.lt(lc.goal)) {
            document.getElementById("Challenge" + (i + 1)).classList.add("Challenge-running")
            document.getElementById("Challenge" + (i + 1)).classList.remove("Challenge-completed")
            document.getElementById("Challenge" + (i + 1)).classList.remove("Challenge")
        }
        else {
            document.getElementById("Challenge" + (i + 1)).classList.add("Challenge")
            document.getElementById("Challenge" + (i + 1)).classList.remove("Challenge-running")
        }
    }
    for(let i = 0; i < 5; i++) {
        let le = linearEquation[i]
        if(player.LinearPower.gte(le.cost)) {
            document.getElementById("LEe-cost" + (i + 1)).classList.remove("LEequation-cost")
            document.getElementById("LEe-cost" + (i + 1)).classList.add("LEequation-bought")
        }
        else {
            document.getElementById("LEe-cost" + (i + 1)).classList.add("LEequation-cost")
            document.getElementById("LEe-cost" + (i + 1)).classList.remove("LEequation-bought")
        }
    }
    for(let i = 0; i < 6; i++) {
        let tmp = talmideUpgrades[i]
        if(i == 0) {
            if(player.tangent.pi_dimension.LitresOfWater.gte(tmp.cost)) {
                document.getElementById("tmp-cost" + (i + 1)).classList.add("buy")
            }
            else {
                document.getElementById("tmp-cost" + (i + 1)).classList.remove("buy")
            }
        } 
        if(i == 1) {
            if(player.tangent.pi_dimension.papirus.gte(tmp.cost)) {
                document.getElementById("tmp-cost" + (i + 1)).classList.add("buy")
            }
            else {
                document.getElementById("tmp-cost" + (i + 1)).classList.remove("buy")
            }
        }
        if(i == 2) {
            if(player.tangent.pi_dimension.papirus.gte(tmp.cost) && player.tangent.pi_dimension.LitresOfWater.gte(tmp.cost)) {
                document.getElementById("tmp-cost" + (i + 1)).classList.add("buy")
            }
            else {
                document.getElementById("tmp-cost" + (i + 1)).classList.remove("buy")
            }
        }
        if(i == 3) {
            if(player.tangent.pi_dimension.MathematicalInstruments.gte(tmp.cost)) {
                document.getElementById("tmp-cost" + (i + 1)).classList.add("buy")
            }
            else {
                document.getElementById("tmp-cost" + (i + 1)).classList.remove("buy")
            }
        }
        if(i == 4) {
            if(player.tangent.pi_dimension.Coal.gte(tmp.cost) && player.tangent.pi_dimension.LitresOfWater.gte(1500)) {
                document.getElementById("tmp-cost" + (i + 1)).classList.add("buy")
            }
            else {
                document.getElementById("tmp-cost" + (i + 1)).classList.remove("buy")
            }
        }
        if(i == 5) {
            if(player.tangent.pi_dimension.papirus.gte(tmp.cost) && player.tangent.pi_dimension.LitresOfWater.gte(3000) && player.tangent.pi_dimension.Coal.gte(500) &&
            player.tangent.pi_dimension.MathematicalInstruments.gte(5) && player.tangent.pi_dimension.Metal.gte(10) && player.tangent.pi_dimension.Shapes.gte(2)) {
                document.getElementById("tmp-cost" + (i + 1)).classList.add("buy")
            }
            else {
                document.getElementById("tmp-cost" + (i + 1)).classList.remove("buy")
            }
        }
        if(tmp.bought) {
            document.getElementById("tmp-cost" + (i + 1)).classList.remove("buy")
            document.getElementById("tmp-cost" + (i + 1)).classList.add("bought")
        }
    }
    for(let i = 0; i < 30; i++) {
        let a = achievements[i]
        if(a.completed) document.getElementById("Achv-" + (i + 1)).classList.add("completed")
        else document.getElementById("Achv-" + (i + 1)).classList.remove("completed")
    }
    
    if(player.LinearUnl) {
        document.getElementById("Linear-statistics").classList.add("unlocked")
        document.getElementById("layertab").classList.add("unlocked")
        document.getElementById("achv-row3").classList.add("unlocked")
        document.getElementById("Linear-essence-guide").classList.add("unlocked")
        document.getElementById("LEs").classList.add("show")
    }
    if(player.points.gte(5e10)) LinearResetunl = true
    if(LinearResetunl) {
        document.getElementById("ResetForLE").classList.add("unlocked")
        document.getElementById("Linear-essence-gain-formula").classList.add("show")
    }
    if(linearUpgrades[7].bought) {
        document.getElementById("Chals-tab").classList.add("unlocked")
        document.getElementById("Linear-chals-guide").classList.add("unlocked")
    }
    if(linearUpgrades[3].bought) {
        document.getElementById("NBuyer").classList.add("unlocked")
        document.getElementById("Lrow2").classList.add("unlocked")
    }
    if(linearChallenges[3].completed) document.getElementById("Lrow3").classList.add("unlocked")
    if(player.points.gte(1e56) && player.LinearEssence.gte(2.5e5)) player.polygons.unlocked = true
    if(linearUpgrades[11].bought) document.getElementById("Polygons-tab").classList.add("show")
    if(player.polygons.unlocked) {
        document.getElementById("polygoncanvas").classList.add("show")
        document.getElementById("Buyables").classList.add("show")
        document.getElementById("Polygon-amount").classList.add("show")
        document.getElementById("polygon-info").classList.add("hide")
        document.getElementById("Polygon-boosts").classList.add("show")
        document.getElementById("Dimensions").classList.add("show")
        document.getElementById("Polygons-guide").classList.add("unlocked")
        document.getElementById("Ps").classList.add("show")
    }
    if(alertcontent) document.getElementById("Alert").style.display = "none"
    if(player.equations.equation1.x.gte(1e20)) player.softcapunl = true
    if(player.softcapunl) document.getElementById("softcap-tab").classList.add("show")
    if(player.polygons.pboost3unl) {
        document.getElementById("Polytop-boost1").classList.add("show")
        document.getElementById("Polytope-boosts").classList.add("show")
    }
    if(player.polygons.pboost4unl) document.getElementById("Polytop-boost2").classList.add("show")
    if(player.polygons.pboost5unl) document.getElementById("Polytop-boost3").classList.add("show")
    if(player.points.gte(player.polygons.buyable1.cost)) document.getElementById("polygon-buy").classList.add("available")
    else document.getElementById("polygon-buy").classList.remove("available")
    if(player.LinearEssence.gte(player.polygons.buyable2.cost)) document.getElementById("dimension-buy").classList.add("available")
    else document.getElementById("dimension-buy").classList.remove("available")
    if(player.tangent.unlocked) {
        document.getElementById("Tangent-tab").classList.add("show")
        document.getElementById("Tangent-guide").classList.add("unlocked")
    }
    if(player.tangent.pi_dimension.inDimension) {
        document.getElementById("Non-pi-dimension-main").classList.add("hide")
        document.getElementById("Non-pi-dimension-upgrades").classList.add("hide")
        document.getElementById("pi-dimension-main").classList.add("show")
        document.getElementById("pi-dimension-upgrades").classList.add("show")
        document.getElementById("pi-challenge-bg").classList.add("show")
    }
    else {
        document.getElementById("Non-pi-dimension-main").classList.remove("hide")
        document.getElementById("Non-pi-dimension-upgrades").classList.remove("hide")
        document.getElementById("pi-dimension-main").classList.remove("show")
        document.getElementById("pi-dimension-upgrades").classList.remove("show")
        document.getElementById("pi-challenge-bg").classList.remove("show")
    }
    if(talmideUpgrades[2].bought) {
        document.getElementById("plato-sub-tab").classList.add("show")
        document.getElementById("tmp-row2").classList.add("show")
    }
    if(talmideUpgrades[5].bought && player.tangent.pi_dimension.inDimension) document.getElementById("inventorequationtab").classList.add("show")
    else if(talmideUpgrades[5].bought && !player.tangent.pi_dimension.inDimension) document.getElementById("inventorequationtab").classList.remove("show")
    if(player.tangent.pi_milestones.milestone1.gotten) {
        document.getElementById("Circle-arcs").classList.add("show")
        document.getElementById("Circle-arcs-formula").classList.add("show")
        document.getElementById("Circle-arcs-tf").classList.add("show")
        document.getElementById("Pi-power-boost").classList.add("show")
        document.getElementById("pip-boost").classList.add("show")
        document.getElementById("pi-milestone1").classList.remove("pi-milestone1")
        document.getElementById("pi-milestone1").classList.add("pi-milestone-gotten")
    }
    if(player.tangent.pi_milestones.milestone2.gotten) {
        document.getElementById("KBuyer").classList.add("unlocked")
        document.getElementById("pi-milestone2").classList.remove("pi-milestone2")
        document.getElementById("pi-milestone2").classList.add("pi-milestone-gotten")
    }
    if(player.tangent.tangent_upgrades.upgrade1.bought) {
        document.getElementById("Tup1").classList.add("bought")
    }
    if(player.tangent.tangent_upgrades.upgrade2.bought) {
        document.getElementById("Tup2").classList.add("bought")
        document.getElementById("EoT-x-buyer").classList.add("show")
    }
    if(achievements[19].completed) document.getElementById("achv-row5").classList.add("unlocked")
    if(achievements[24].completed) document.getElementById("achv-row6").classList.add("unlocked")
}

var LastUpdate = Date.now()

function CalculatePointGain() {
    let gain = new Decimal(0)
    for(i = 0; i < 3; i++) {
        let b = buildings[i]
        gain = gain.add(b.amount.mul(b.eff))
    }
    if(!linearChallenges[1].inChal) gain = gain.mul(player.equations.equation1.x)
    gain = gain.mul(CalculateLEegain())
    gain = gain.mul(CalculateEquationOfTangent())
    if(linearUpgrades[0].bought && !linearChallenges[4].inChal) gain = gain.mul(linearUpgrades[0].eff)
    if(linearChallenges[0].inChal || linearChallenges[3].inChal) gain = gain.max(1).log10()
    if(linearChallenges[0].completed) gain = gain.mul(linearChallenges[0].eff)
    if(linearUpgrades[9].bought && !linearChallenges[4].inChal) gain = gain.mul(linearUpgrades[9].eff)
    if(upgrades[3].bought) gain = gain.mul(upgrades[3].eff)
    if(linearChallenges[5].inChal) gain = gain.div(buildings[0].amount.add(buildings[1].amount).add(buildings[2].amount).add(1)).add(1)
    if(player.polygons.pboost3unl) gain = gain.mul(new Decimal(2).pow(player.polygons.amount))
    if(player.polygons.pboost1unl) gain = gain.mul(player.polygons.eff1)
    if(player.polygons.pboost2unl) gain = gain.mul(player.polygons.eff2)
    if(player.polygons.pboost3unl) gain = gain.mul(player.polygons.eff3)
    if(player.polygons.pboost4unl) gain = gain.mul(player.polygons.eff4)
    if(player.polygons.pboost5unl) gain = gain.mul(player.polygons.eff5)
    return gain
}

function CalculateEquationGain() {
    let xeff = new Decimal(1)
    xeff = xeff.mul(player.equations.equation1.eff)
    if(player.equations.equation2.y.gt(1)) xeff = xeff.mul(new Decimal(2).pow(player.equations.equation2.y))
    if(player.equations.linear_equations.eff2.gte(1)) xeff = xeff.mul(new Decimal(4).pow(player.equations.linear_equations.eff2))
    if((player.tangent.equation_of_tangent.m_buyer.amount.mul(player.tangent.equation_of_tangent.x_buyer.amount).add(player.tangent.equation_of_tangent.c_buyer.amount)).gte(10)) {
        xeff = xeff.mul(16).pow(((player.tangent.equation_of_tangent.m_buyer.amount.mul(player.tangent.equation_of_tangent.x_buyer.amount).add(
            player.tangent.equation_of_tangent.c_buyer.amount)).div(10)).floor())
    }
    return xeff
}

function CalculateLEgain() {
    let LEgain = new Decimal(0)
    if(player.points.gte(1e10) || linearUpgrades[2].bought) {
        LEgain = new Decimal(new Decimal(1.5).pow((player.equations.equation2.y.div(20).sub(1))).mul(new Decimal(1.3).pow(player.equations.equation1.x.add(1).log10())))
    }
    if(linearUpgrades[5].bought) LEgain = LEgain.mul(linearUpgrades[5].eff)
    if(player.polygons.pboost4unl) LEgain = LEgain.mul(player.polygons.eff4.mul(5))
    LEgain = LEgain.floor()
    return LEgain
}

function CalculateLPgain() {
    let LPgain = new Decimal(0)
    LPgain = LPgain.add(CalculateLEegain())
    if(linearUpgrades[10].bought) LPgain = LPgain.mul(linearUpgrades[10].eff)
    return LPgain
}

function CalculateLEegain() {
    let LEegain = new Decimal(1)
    if(!linearChallenges[4].inChal) LEegain = LEegain.add(linearEquation[1].amount.mul(linearEquation[4].amount).add(linearEquation[2].amount.mul(linearEquation[3].amount)).add(linearEquation[0].amount))
    if(linearChallenges[4].completed) LEegain = LEegain.mul(linearChallenges[4].eff)
    if(linearChallenges[5].completed) LEegain = LEegain.mul(1.2)
    if(player.polygons.pboost5unl) LEegain = LEegain.mul(player.polygons.eff5)
    return LEegain 
}

function CalculateLengthGain() {
    let LengthGain = new Decimal(1)
    LengthGain = LengthGain.add(player.polygons.amount)
    return LengthGain
}

function CalculatePapirusGain() {
    let PapirusGain = new Decimal(0)
    PapirusGain = PapirusGain.add(player.tangent.pi_dimension.Papirus_maker.amt.mul(player.tangent.pi_dimension.Papirus_maker.eff))
    if(talmideUpgrades[5].bought) PapirusGain = PapirusGain.mul(InventorEff())
    return PapirusGain
}

function CalculateFullCirclesGain() {
    let FullCirclesGain = new Decimal(0)
    FullCirclesGain = FullCirclesGain.add(player.tangent.pi_dimension.Thales.students.mul(player.tangent.pi_dimension.Thales.eff))
    FullCirclesGain = FullCirclesGain.add(player.tangent.pi_dimension.Archimedes.students.mul(player.tangent.pi_dimension.Archimedes.eff))
    if(talmideUpgrades[5].bought) FullCirclesGain = FullCirclesGain.mul(InventorEff())
    return FullCirclesGain
}

function InventorEff() {
    let InventorEquationEff = new Decimal(1)
    InventorEquationEff = InventorEquationEff.add(player.tangent.pi_dimension.papirus.div(5000).add(player.tangent.pi_dimension.LitresOfWater.div(1.5e4).add(
        player.tangent.pi_dimension.Lines.div(3).add(player.tangent.pi_dimension.Coal.add(1).div(1e3).add(player.tangent.pi_dimension.Shapes.div(2).add(
            player.tangent.pi_dimension.MathematicalInstruments.div(25).add(player.tangent.pi_dimension.Metal.div(35))
        ))))))
    InventorEquationEff = InventorEquationEff.add(1).log10().add(1)
    if(InventorEquationEff.gte(5)) InventorEquationEff = new Decimal(5)
    return InventorEquationEff
}

function TangentLength() {
    let TLgain = new Decimal(0)
    TLgain = TLgain.add(player.tangent.pi_dimension.papirus.add(1).div(5e4))
    if(player.tangent.tangent_upgrades.upgrade1.level.lte(2)) {
        TLgain = TLgain.mul(player.tangent.pi_power.pow(2))
    }
    else if(player.tangent.tangent_upgrades.upgrade1.level.lt(4)) {
        TLgain = TLgain.mul(player.tangent.pi_power.pow(2).mul(1.5))
    }
    else if(player.tangent.tangent_upgrades.upgrade1.level.lt(6)) {
        TLgain = TLgain.mul(player.tangent.pi_power.pow(2).mul(2.5))
    }
    else if(player.tangent.tangent_upgrades.upgrade1.level.lt(7)) {
        TLgain = TLgain.mul(player.tangent.pi_power.pow(2.3).mul(1.1))
    }
    else if(player.tangent.tangent_upgrades.upgrade1.level.lt(8)) {
        TLgain = TLgain.mul(player.tangent.pi_power.pow(2.3).mul(1.1))
    }
    else if(player.tangent.tangent_upgrades.upgrade1.level.lte(9)) {
        TLgain = TLgain.mul(player.tangent.pi_power.pow(2.3).mul(1.5))
    }
    return TLgain
}

function CalculateCircleArcs() {
    let CircleArcs = new Decimal(0)
    CircleArcs = CircleArcs.add(player.tangent.angle.mul(3.14).mul(player.tangent.radius)).div(180).add(1)
    return CircleArcs
}

function CalculateEquationOfTangent() {
    let EOTgain = new Decimal(0)
    EOTgain=EOTgain.add(player.tangent.equation_of_tangent.m_buyer.amount.mul(player.tangent.equation_of_tangent.x_buyer.amount).add(
        player.tangent.equation_of_tangent.c_buyer.amount))
    EOTgain = EOTgain.pow(1.5)
    return EOTgain 
}

function productionLoop(diff) {
    player.TimeTillReset = player.TimeTillReset.sub(new Decimal(1).mul(diff))
    player.points = player.points.add(player.pointsPerSec.mul(diff))
    player.pointsPerSec = CalculatePointGain()
    player.tpoints = player.tpoints.add(player.pointsPerSec.mul(diff))
    player.equations.equation1.x = CalculateEquationGain()
    if(player.tangent.pi_dimension.inDimension) {
        player.tangent.pi_dimension.papirus = player.tangent.pi_dimension.papirus.add(player.tangent.pi_dimension.papirusPerSec.mul(diff))
        player.tangent.pi_dimension.papirusPerSec = CalculatePapirusGain()
        if(player.tangent.pi_dimension.Miner.cap.eq(1)) player.tangent.pi_dimension.Coal = player.tangent.pi_dimension.Coal.add(player.tangent.pi_dimension.CoalPerSec.mul(diff))
        if(player.tangent.pi_dimension.Water_worker.cap.eq(1)) player.tangent.pi_dimension.LitresOfWater = player.tangent.pi_dimension.LitresOfWater.add(player.tangent.pi_dimension.Water_worker.eff.mul(diff))
        player.tangent.pi_dimension.fullCircles = player.tangent.pi_dimension.fullCircles.add(CalculateFullCirclesGain().mul(diff))
    }
    else if(!player.tangent.pi_dimension.inDimension && upgrades[8].bought) {
        player.tangent.tangent_length = player.tangent.tangent_length.add(player.tangent.tlPerSec.mul(diff))
        player.tangent.tlPerSec = TangentLength()
    }
    if(player.LinearUnl) {
        player.LinearPower = player.LinearPower.add(CalculateLPgain().mul(diff))
        player.TimeinLinear = player.TimeinLinear.add(new Decimal(1).mul(diff))
    }
    if(player.polygons.amount.gte(1)) player.polygons.length = player.polygons.length.add(CalculateLengthGain().mul(diff))
    if(upgrades[6].bought) buildings[0].amount = buildings[0].amount.add(buildings[1].amount.mul(diff))
    player.tangent.circle_arcs_amt = CalculateCircleArcs()
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