function saveitems(name, location) { // this basically just removes the localstorage.setitem and json.stringify
    localStorage.setItem(name, JSON.stringify((location)));
}

var upgrades = []
var linearUpgrades = []
var linearChallenges = []
var linearEquation = []
var talmideUpgrades = []
var constantUpgrades = []
var infinityConstantUpgrades = []

for(let i = 0; i < 6; i++) {
    let upgrade = {
        bought: false,
        cost: new Decimal(20000).mul(i + 1),
        eff: new Decimal(1),
    }
    upgrades.push(upgrade)
}

for(let i = 0; i < 12; i++) {
    let linearUpgrade = {
        bought: false,
        cost: new Decimal(1),
        eff: new Decimal(1),
        amt: new Decimal(1)
    }
    linearUpgrades.push(linearUpgrade)
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
        cost: new Decimal(100).mul(i + 1).pow(1.5),
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

for(let i = 0; i < 12; i++) {
    let constantUpgrade = {
        bought: false,
        cost: new Decimal(1),
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

function Save() {
    if (localStorage) {
        saveitems("firstload", false)
        localStorage.setItem("has_visited", "true")
        saveitems("points", player.points)
        saveitems("pointgain", player.pointgain)
        saveitems("pointsPerSec", player.pointsPerSec)
        saveitems("bpoints", player.bpoints)
        saveitems("tpoints", player.tpoints)
        saveitems("LinearEssence", player.LinearEssence)
        saveitems("LEgain", player.LEgain)
        saveitems("LinearPower", player.LinearPower)
        saveitems("GoneLinear", player.GoneLinear)
        saveitems("TimeInLinear", player.TimeinLinear)
        saveitems("FastestLinear", player.FastestLinear)
        saveitems("LinearUnl", player.LinearUnl)
        saveitems("ChalsUnl", player.ChalsUnl)
        for(let i = 0; i < 4; i++) {
            let b = buildings[i]
            saveitems("amount" + (i + 1), b.amount)
            saveitems("eff" + (i + 1), b.eff)
            saveitems("cost" + (i + 1), b.cost)
            saveitems("Building-automation" + (i + 1), b.automation)
        }
        saveitems("tbuildings", player.tbuildings)
        for(let i = 0; i < 9; i++) {
            let u = upgrades[i]
            saveitems("up" + (i + 1) + "bought", u.bought)
            saveitems("up" + (i + 1) + "eff", u.eff)
        }
        for(let i = 0; i < 12; i++) {
            let lu = linearUpgrades[i]
            saveitems("Lup" + (i + 1) + "bought", lu.bought)
            saveitems("Lup" + (i + 1) + "eff", lu.eff)
        }
        for(let i = 0; i < 35; i++) {
            let a = achievements[i]
            saveitems("achv" + (i + 1) + "c", a.completed)
        }
        for(let i = 0; i < 6; i++) {
            let lc = linearChallenges[i]
            saveitems("Lchal" + (i + 1) + "c", lc.completed)
            saveitems("Lchal" + (i + 1) + "in", lc.inChal)
            saveitems("Lchal" + (i + 1) + "eff", lc.eff)
        }
        for(let i = 0; i < 5; i++) {
            let le = linearEquation[i]
            saveitems((i + 1) + "amt", le.amount)
            saveitems((i + 1) + "cost", le.cost)
        }
        for(let i = 0; i < 6; i++) {
            let tmp = talmideUpgrades[i]
            saveitems("tmp-bought" + (i + 1), tmp.bought)
            saveitems("tmp-eff" + (i + 1), tmp.eff)
        }
        for(let i = 0; i < 12; i++) {
            let cup = constantUpgrades[i]
            saveitems("cup-bought" + (i + 1), cup.bought)
        }
        for(let i = 0; i < 9; i++) {
            let icup = infinityConstantUpgrades[i]
            saveitems("icup-bought" + (i + 1), icup.bought)
        }
        saveitems("equation1eff", player.equations.equation1.eff)
        saveitems("equation1x", player.equations.equation1.x)
        saveitems("multiplicator1cost", player.equations.multiplicator1.cost)
        saveitems("equation2eff", player.equations.equation2.eff)
        saveitems("equation2x", player.equations.equation2.x)
        saveitems("equation2k", player.equations.equation2.k)
        saveitems("equation2n", player.equations.equation2.n)
        saveitems("equation2y", player.equations.equation2.y)
        saveitems("XbuyerCost", player.equations.xbuyer.cost)
        saveitems("XBuyerAmt", player.equations.xbuyer.amount)
        saveitems("NBuyerCost", player.equations.nbuyer.cost)
        saveitems("NBuyerAmt", player.equations.nbuyer.amount)
        saveitems("NBuyerUnl", player.equations.nbuyer.unlocked)
        saveitems("KBuyerCost", player.equations.kbuyer.cost)
        saveitems("KBuyerAmt", player.equations.kbuyer.amount)
        saveitems("LinearEquationeff", player.equations.linear_equations.eff)
        saveitems("LinearEquationeff2", player.equations.linear_equations.eff2)
        saveitems("psides", player.polygons.sides)
        saveitems("pamount", player.polygons.amount)
        saveitems("pdimensions", player.polygons.dimensions)
        saveitems("length", player.polygons.length)
        saveitems("width", player.polygons.width)
        saveitems("height", player.polygons.height)
        saveitems("w", player.polygons.w)
        saveitems("v", player.polygons.v)
        saveitems("punlocked", player.polygons.unlocked)
        saveitems("pbuyable1c", player.polygons.buyable1.cost)
        saveitems("pbuyable2c", player.polygons.buyable2.cost)
        saveitems("alertcontent", alertcontent)
        saveitems("LinearResetunl", LinearResetunl)
        saveitems("softcapunl", player.softcapunl)
        saveitems("lu3reset", lockedlu3reset)
        saveitems("tangentunl", player.tangent.unlocked)
        saveitems("inDimension", player.tangent.pi_dimension.inDimension)
        saveitems("papirus", player.tangent.pi_dimension.papirus)
        saveitems("papirusPerSec", player.tangent.pi_dimension.papirusPerSec)
        saveitems("fullCircles", player.tangent.pi_dimension.fullCircles)
        saveitems("LitresOfWater", player.tangent.pi_dimension.LitresOfWater)
        saveitems("Lines", player.tangent.pi_dimension.Lines)
        saveitems("Coal", player.tangent.pi_dimension.Coal)
        saveitems("CoalPerSec", player.tangent.pi_dimension.CoalPerSec)
        saveitems("MathematicalInstruments", player.tangent.pi_dimension.MathematicalInstruments)
        saveitems("Metal", player.tangent.pi_dimension.Metal)
        saveitems("Shapes", player.tangent.pi_dimension.Shapes)
        saveitems("ThalesStudents", player.tangent.pi_dimension.Thales.students)
        saveitems("ThalesEff", player.tangent.pi_dimension.Thales.eff)
        saveitems("ThalesCost", player.tangent.pi_dimension.Thales.cost)
        saveitems("PapirusMakerEff", player.tangent.pi_dimension.Papirus_maker.eff)
        saveitems("PapirusMakerAmt", player.tangent.pi_dimension.Papirus_maker.amt)
        saveitems("PapirusMakerCost", player.tangent.pi_dimension.Papirus_maker.cost)
        saveitems("ArchimedesStudents", player.tangent.pi_dimension.Archimedes.students)
        saveitems("ArchimedesEff", player.tangent.pi_dimension.Archimedes.eff)
        saveitems("ArchimedesCost", player.tangent.pi_dimension.Archimedes.cost)
        saveitems("WaterWorkerCap", player.tangent.pi_dimension.Water_worker.cap)
        saveitems("WaterWorkerEff", player.tangent.pi_dimension.Water_worker.eff)
        saveitems("EuclidsElementsCost", player.tangent.pi_dimension.Euclids_elements.cost)
        saveitems("MinerCap", player.tangent.pi_dimension.Miner.cap)
        saveitems("MinerEff", player.tangent.pi_dimension.Miner.eff)
        saveitems("EdmundGunterCost", player.tangent.pi_dimension.Edmund_gunter.cost)
        saveitems("AncientOnesCost", player.tangent.pi_dimension.Ancient_ones.cost)
        saveitems("PlatoCost", player.tangent.pi_dimension.Plato.cost)
        saveitems("PiPower", player.tangent.pi_power)
        saveitems("TangentLength", player.tangent.tangent_length)
        saveitems("circlearc-angle", player.tangent.angle)
        saveitems("circlearc-radius", player.tangent.radius)
        saveitems("circlearcs-buyable1-cost", player.tangent.circle_arcs.buyable1.cost)
        saveitems("circlearcs-buyable2-cost", player.tangent.circle_arcs.buyable2.cost)
        saveitems("pi-milestone1-gotten", player.tangent.pi_milestones.milestone1.gotten)
        saveitems("pi-milestone2-gotten", player.tangent.pi_milestones.milestone2.gotten)
        saveitems("tangentupgrade1-level", player.tangent.tangent_upgrades.upgrade1.level)
        saveitems("tangentupgrade1-cost", player.tangent.tangent_upgrades.upgrade1.cost)
        saveitems("tangentupgrade1-bought", player.tangent.tangent_upgrades.upgrade1.bought)
        saveitems("tangentupgrade2-bought", player.tangent.tangent_upgrades.upgrade2.bought)
        saveitems("EoT-c", player.tangent.equation_of_tangent.c_buyer.amount)
        saveitems("EoT-x", player.tangent.equation_of_tangent.x_buyer.amount)
        saveitems("EoT-c-cost", player.tangent.equation_of_tangent.c_buyer.cost)
        saveitems("EoT-x-cost", player.tangent.equation_of_tangent.x_buyer.cost)
        saveitems("ConstantUnl", constant.unlocked)
        saveitems("BrokeConstant", constant.brokeConstantInfinity)
        saveitems("ConstantReq", constant.req)
        saveitems("ConstantLvl", constant.constantLevel)
        saveitems("ConstantPoints", constant.constant_points)
        saveitems("ConstantPointsPerSec", constant.constant_points_persec)
        saveitems("ConstantMilestone1g", constant.constant_milestones.milestone1.gotten)
        saveitems("ConstantMilestone2g", constant.constant_milestones.milestone2.gotten)
        saveitems("PassiveConstUp", constant.passive_const_up_cost)
        saveitems("PassiveConstUpAmt",constant.passive_const_up_amt)
        saveitems("CUSwitch", constant.CU_switch_p)
        saveitems("InTrip", constant.in_trip)
        saveitems("TripMeters", constant.trip.meters)
        saveitems("TripStamina", constant.trip.stamina)
        saveitems("FunnyInc", constant.trip.funny_inc)
        saveitems("IceFrags", constant.trip.ice_frags)
        saveitems("AiceFrags", constant.trip.aice_frags)
        saveitems("RefillStamina", constant.trip.refill_stamina)
        saveitems("Ice", constant.trip.ice)
        saveitems("tankfilled", constant.trip.tank_filled)
        saveitems("IceUp1b", constant.trip.icc_up1.bought)
        saveitems("IceUp2b", constant.trip.icc_up2.bought)
        saveitems("echal", constant.e_chal)
        saveitems("MathMana", constant.Math_mana)
        saveitems("ActiveSkill1", constant.activate_skill1)
        saveitems("ActiveSkill2", constant.activate_skill2)
        saveitems("ActiveSkill3", constant.activate_skill3)
        saveitems("ActiveSkill4", constant.activate_skill4)
        saveitems("Skill4Timer", constant.skill4_timer)
        saveitems("MathPoints", constant.math_points)
        saveitems("mpboost", constant.mp_boost)
        saveitems("le_n", constant.le_n)
        saveitems("le_x", constant.le_x)
        saveitems("leUp1", constant.le_up1.bought)
        saveitems("leUp2", constant.le_up2.bought)
        saveitems("leUp3", constant.le_up3.bought)
        saveitems("CoordinatesX1", constant.x1)
        saveitems("CoordinatesX2", constant.x2)
        saveitems("CoordinatesY1", constant.y1)
        saveitems("CoordinatesY2", constant.y2)
        saveitems("CoordinatePower", constant.coordinatePower)
        player.saved = true
        if(player.saved === true) {
            document.getElementById("Save-notification").classList.add("save")
            setInterval(() => {
                player.saved === false
                document.getElementById("Save-notification").classList.remove("save")
            }, 5000)
        }
    }
}

function GetItems(saved, newdecimal) { //removes json.parse and localstorage
    let location = "Error" // placeholder
    if (localStorage.getItem(saved)) {
        if (newdecimal) { // checks if the value your setting to needs to be in newdecimal or not
            location = new Decimal(JSON.parse(localStorage.getItem(saved)));
        } else {
            location = JSON.parse(localStorage.getItem(saved));
        }
    }
    if (location == "Error") console.error(`"` + saved + `" doesn't exist in the localstorage. Check for any mistypos if it's supposed to be.`)
    return location;
}

function isFirstVisit() {
    if (!localStorage.getItem('has_visited')) {
      localStorage.setItem('has_visited', 'true');
      return true; // First visit
    }
    return false; // Returning visitor
}

function Get() {
    if (!localStorage) return;
    if (!isFirstVisit()) {
        for(let i = 0; i < 12; i++) {
            let cup = constantUpgrades[i]
            if(!localStorage.getItem("cup-bought" + (i + 1))) {
                cup.bought = false
            }
        }
        for(let i = 0; i < 9; i++) {
            let icup = infinityConstantUpgrades[i]
            if(!localStorage.getItem("icup-bought" + (i + 1))) {
                icup.bought = false
            }
        }
        player.points = GetItems("points", true)
        player.pointgain = GetItems("pointgain", true)
        player.pointsPerSec = GetItems("pointsPerSec", true)
        player.bpoints = GetItems("bpoints", true)
        player.tpoints = GetItems("tpoints", true)
        player.LinearEssence = GetItems("LinearEssence", true)
        player.LEgain = GetItems("LEgain", true)
        player.LinearPower = GetItems("LinearPower", true)
        player.GoneLinear = GetItems("GoneLinear", true)
        player.TimeinLinear = GetItems("TimeInLinear", true)
        player.FastestLinear = GetItems("FastestLinear", true)
        player.LinearUnl = GetItems("LinearUnl", false)
        player.ChalsUnl = GetItems("ChalsUnl", true)
        for(let i = 0; i < 4; i++) {
            let b = buildings[i]
            b.amount = GetItems("amount" + (i + 1), true)
            b.cost = GetItems("cost" + (i + 1), true)
            b.eff = GetItems("eff" + (i + 1), true)
            b.automation = GetItems("Building-automation" + (i + 1), false)
        }
        player.tbuildings = GetItems("tbuildings", true)
        for(let i = 0; i < 9; i++) {
            let u = upgrades[i]
            u.bought = GetItems("up" + (i + 1) + "bought", false)
            u.eff = GetItems("up" + (i + 1) + "eff", true)
        }
        for(let i = 0; i < 12; i++) {
            let lu = linearUpgrades[i]
            lu.bought = GetItems("Lup" + (i + 1) + "bought", false)
            lu.eff = GetItems("Lup" + (i + 1) + "eff", true)
        }
        for(let i = 0; i < 35; i++) {
            let a = achievements[i]
            a.completed = GetItems("achv" + (i + 1) + "c", false)
        }
        for(let i = 0; i < 6; i++) {
            let lc = linearChallenges[i]
            lc.completed = GetItems("Lchal" + (i + 1) + "c", false)
            lc.inChal = GetItems("Lchal" + (i + 1) + "in", false)
            lc.eff = GetItems("Lchal" + (i + 1) + "eff", true)
        }
        for(let i = 0; i < 5; i++) {
            let le = linearEquation[i]
            le.amount = GetItems((i + 1) + "amt", true)
            le.cost = GetItems((i + 1) + "cost", true)
        }
        for(let i = 0; i < 6; i++) {
            let tmp = talmideUpgrades[i]
            if(!localStorage.getItem("tmp-bought" + (i + 1))) {
                tmp.bought = false
                tmp.eff = new Decimal(1)
            }
            tmp.bought = GetItems("tmp-bought" + (i + 1), false)
            tmp.eff = GetItems("tmp-eff" + (i + 1), true)
        }
        for(let i = 0; i < 12; i++) {
            let cup = constantUpgrades[i]
            cup.bought = GetItems("cup-bought" + (i + 1), false)
        }
        for(let i = 0; i < 9; i++) {
            let icup = infinityConstantUpgrades[i]
            icup.bought = GetItems("icup-bought" + (i + 1), false)
        }
        player.equations.equation1.eff = GetItems("equation1eff", true)
        player.equations.equation1.x = GetItems("equation1x", true)
        player.equations.multiplicator1.cost = GetItems("multiplicator1cost", true)
        player.equations.equation2.eff = GetItems("equation2eff", true)
        player.equations.equation2.x = GetItems("equation2x", true)
        player.equations.equation2.k = GetItems("equation2k", true)
        player.equations.equation2.n = GetItems("equation2n", true)
        player.equations.equation2.y = GetItems("equation2y", true)
        player.equations.xbuyer.cost = GetItems("XbuyerCost", true)
        player.equations.xbuyer.amount = GetItems("XBuyerAmt", true)
        player.equations.linear_equations.eff = GetItems("LinearEquationeff", true)
        player.equations.linear_equations.eff2 = GetItems("LinearEquationeff2", true)
        player.equations.nbuyer.cost = GetItems("NBuyerCost", true)
        player.equations.nbuyer.amount = GetItems("NBuyerAmt", true)
        player.equations.nbuyer.unlocked = GetItems("NBuyerUnl", false)
        player.equations.kbuyer.cost = GetItems("KBuyerCost", true)
        player.equations.kbuyer.amount = GetItems("KBuyerAmt", true)
        player.polygons.amount = GetItems("pamount", true)
        player.polygons.sides = GetItems("psides", true)
        player.polygons.dimensions = GetItems("pdimensions", true)
        player.polygons.length = GetItems("length", true)
        player.polygons.width = GetItems("width", true)
        player.polygons.height = GetItems("height", true)
        player.polygons.w = GetItems("w", true)
        player.polygons.v = GetItems("v", true)
        player.polygons.unlocked = GetItems("punlocked", false)
        player.polygons.buyable1.cost = GetItems("pbuyable1c", true)
        player.polygons.buyable2.cost = GetItems("pbuyable2c", true)
        alertcontent = GetItems("alertcontent", false)
        LinearResetunl = GetItems("LinearResetunl", false)
        player.softcapunl = GetItems("softcapunl", false)
        lockedlu3reset = GetItems("lu3reset", false)
        player.tangent.unlocked = GetItems("tangentunl", false)
        player.tangent.pi_dimension.inDimension = GetItems("inDimension", false)
        player.tangent.pi_dimension.papirus = GetItems("papirus", true)
        player.tangent.pi_dimension.papirusPerSec = GetItems("papirusPerSec", true)
        player.tangent.pi_dimension.fullCircles = GetItems("fullCircles", true)
        player.tangent.pi_dimension.LitresOfWater = GetItems("LitresOfWater", true)
        player.tangent.pi_dimension.Lines = GetItems("Lines", true)
        player.tangent.pi_dimension.Coal = GetItems("Coal", true)
        player.tangent.pi_dimension.CoalPerSec = GetItems("CoalPerSec", true)
        player.tangent.pi_dimension.MathematicalInstruments = GetItems("MathematicalInstruments", true)
        player.tangent.pi_dimension.Metal = GetItems("Metal", true)
        player.tangent.pi_dimension.Shapes = GetItems("Shapes", true)
        player.tangent.pi_dimension.Thales.students = GetItems("ThalesStudents", true)
        player.tangent.pi_dimension.Thales.eff = GetItems("ThalesEff", true)
        player.tangent.pi_dimension.Thales.cost = GetItems("ThalesCost", true)
        player.tangent.pi_dimension.Papirus_maker.amt = GetItems("PapirusMakerAmt", true)
        player.tangent.pi_dimension.Papirus_maker.eff = GetItems("PapirusMakerEff", true)
        player.tangent.pi_dimension.Papirus_maker.cost = GetItems("PapirusMakerCost", true)
        player.tangent.pi_dimension.Archimedes.students = GetItems("ArchimedesStudents", true)
        player.tangent.pi_dimension.Archimedes.eff = GetItems("ArchimedesEff", true)
        player.tangent.pi_dimension.Archimedes.cost = GetItems("ArchimedesCost", true)
        player.tangent.pi_dimension.Water_worker.cap = GetItems("WaterWorkerCap", true)
        player.tangent.pi_dimension.Water_worker.eff  = GetItems("WaterWorkerEff", true)
        player.tangent.pi_dimension.Euclids_elements.cost = GetItems("EuclidsElementsCost", true)
        player.tangent.pi_dimension.Miner.cap = GetItems("MinerCap", true)
        player.tangent.pi_dimension.Miner.eff = GetItems("MinerEff", true)
        player.tangent.pi_dimension.Edmund_gunter.cost = GetItems("EdmundGunterCost", true)
        player.tangent.pi_dimension.Ancient_ones.cost = GetItems("AncientOnesCost", true)
        player.tangent.pi_dimension.Plato.cost = GetItems("PlatoCost", true)
        player.tangent.pi_power = GetItems("PiPower", true)
        player.tangent.tangent_length = GetItems("TangentLength", true)
        player.tangent.angle = GetItems("circlearc-angle", true)
        player.tangent.radius = GetItems("circlearc-radius", true)
        player.tangent.circle_arcs.buyable1.cost = GetItems("circlearcs-buyable1-cost", true)
        player.tangent.circle_arcs.buyable2.cost = GetItems("circlearcs-buyable2-cost", true)
        player.tangent.pi_milestones.milestone1.gotten = GetItems("pi-milestone1-gotten", false)
        player.tangent.pi_milestones.milestone2.gotten = GetItems("pi-milestone2-gotten", false)
        player.tangent.tangent_upgrades.upgrade1.level = GetItems("tangentupgrade1-level", true)
        player.tangent.tangent_upgrades.upgrade1.cost = GetItems("tangentupgrade1-cost", true)
        player.tangent.tangent_upgrades.upgrade1.bought = GetItems("tangentupgrade1-bought", false)
        player.tangent.tangent_upgrades.upgrade2.bought = GetItems("tangentupgrade2-bought", false)
        player.tangent.equation_of_tangent.c_buyer.amount = GetItems("EoT-c", true)
        player.tangent.equation_of_tangent.x_buyer.amount = GetItems("EoT-x", true)
        player.tangent.equation_of_tangent.c_buyer.cost = GetItems("EoT-c-cost", true)
        player.tangent.equation_of_tangent.x_buyer.cost = GetItems("EoT-x-cost", true)
        constant.unlocked = GetItems("ConstantUnl", false)
        constant.brokeConstantInfinity = GetItems("BrokeConstant", false)
        constant.req = GetItems("ConstantReq", true)
        constant.constantLevel = GetItems("ConstantLvl", true)
        constant.constant_points = GetItems("ConstantPoints", true)
        constant.constant_points_persec = GetItems("ConstantPointsPerSec", true)
        constant.constant_milestones.milestone1.gotten = GetItems("ConstantMilestone1g", false)
        constant.constant_milestones.milestone2.gotten = GetItems("ConstantMilestone2g", false)
        constant.passive_const_up_cost = GetItems("PassiveConstUp", true)
        constant.passive_const_up_amt = GetItems("PassiveConstUpAmt", true)
        constant.CU_switch_p = GetItems("CUSwitch", true)
        constant.in_trip = GetItems("InTrip", false)
        constant.trip.meters = GetItems("TripMeters", true)
        constant.trip.stamina = GetItems("TripStamina", true)
        constant.trip.funny_inc = GetItems("FunnyInc", true)
        constant.trip.ice_frags = GetItems("IceFrags", true)
        constant.trip.aice_frags = GetItems("AiceFrags", true)
        constant.trip.refill_stamina = GetItems("RefillStamina", true)
        constant.trip.ice = GetItems("Ice", true)
        constant.trip.tank_filled = GetItems("tankfilled", true)
        constant.trip.icc_up1.bought = GetItems("IceUp1b", false)
        constant.trip.icc_up2.bought = GetItems("IceUp2b", false)
        constant.e_chal = GetItems("echal", false)
        constant.Math_mana = GetItems("MathMana", true)
        constant.activate_skill1 = GetItems("ActiveSkill1", false)
        constant.activate_skill2 = GetItems("ActiveSkill2", false)
        constant.activate_skill3 = GetItems("ActiveSkill3", false)
        constant.activate_skill4 = GetItems("ActiveSkill4", false)
        constant.skill4_timer = GetItems("Skill4Timer", true)
        constant.math_points = GetItems("MathPoints", true)
        constant.mp_boost = GetItems("mpboost", true)
        constant.le_n = GetItems("le_n", true)
        constant.le_x = GetItems("le_x", true)
        constant.le_up1.bought = GetItems("leUp1", false)
        constant.le_up2.bought = GetItems("leUp2", false)
        constant.le_up3.bought = GetItems("leUp3", false)
        constant.x1 = GetItems("CoordinatesX1", true)
        constant.x2 = GetItems("CoordinatesX2", true)
        constant.y1 = GetItems("CoordinatesY1", true)
        constant.y2 = GetItems("CoordinatesY2", true)
        constant.coordinatePower = GetItems("CoordinatePower", true)
    } else {
        Save()
    }}

let isHardResetting = false
function HardReset() {
    if(confirm("Are you sure you want to hard reset?") === true) {
        isHardResetting = true
        localStorage.clear(); // wipe localstorage
        location.reload(true)
    }
}
window.addEventListener("beforeunload", () => {
    if(!isHardResetting) Save()
})

async function Export() {
    try {
        Save()
        const savedData = {};
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          savedData[key] = localStorage.getItem(key);
        }
    
        // Convert to JSON
        const jsonData = JSON.stringify(savedData, null, 2);
    
        // Copy to clipboard
        await navigator.clipboard.writeText(btoa(jsonData));
        alert('Your save has been exported')
      } catch (error) {
        alert('bro something messed up i couldnt paste to clipboard')
      }
}

async function Import() {
    try {
        // Read clipboard text
        clipboardData = prompt("Enter your exported save")
        clipboardData = atob(clipboardData)
        const importedData = JSON.parse(clipboardData);
    
        // Restore to localStorage
        localStorage.clear();
        Object.keys(importedData).forEach(key => {
          localStorage.setItem(key, importedData[key]);
        });
    
        alert('Save got imported')
        isHardResetting = true
        location.reload()
      } catch (error) {
          alert("i fucked up")
          console.error(error)
      }
}

var Save_bank = false

function OpenSaveBank() {
    if(!Save_bank) Save_bank = true
    else Save_bank = false
}

function EQ1SB() {
    upgrades[0].bought = true
    upgrades[1].bought = true
    upgrades[2].bought = true
}

function EQ2SB() {
    upgrades[0].bought = true
    upgrades[1].bought = true
    upgrades[2].bought = true
    upgrades[3].bought = true
    upgrades[4].bought = true
    upgrades[5].bought = true
}

function Layer1SB() {
    player.LinearUnl = true
    player.LinearResetunl = true
    player.points = new Decimal(5e10)
}

function Layer2SB() {
    player.LinearUnl = true
    player.LinearResetunl = true
    player.points = new Decimal("1.798e308")
    constant.unlocked = true
}

setInterval(Save, 15000)