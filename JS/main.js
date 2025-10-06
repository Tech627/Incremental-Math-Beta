let player = {
    points: new Decimal(0),
    pointgain: new Decimal(1),
    pointsPerSec: new Decimal(0),
    bpoints: new Decimal(0),
    tpoints: new Decimal(0),
    LinearEssence: new Decimal(0),
    LEgain: new Decimal(0),
    LinearPower: new Decimal(0),
    GoneLinear: new Decimal(0),
    TimeinLinear: new Decimal(0),
    FastestLinear: new Decimal(0),
    LinearUnl: false,
    ChalsUnl: false,
    saved: false,
    tbuildings: new Decimal(0),
    lc5eff: new Decimal(1),
    softcapunl: false,
    TimeTillReset: new Decimal(5),
    Linearup3reset: false,
    equations: {
        equation1: {
            eff: new Decimal(1),
            x: new Decimal(1),
        },
        equation2: {
            eff: new Decimal(1),
            k: new Decimal(1),
            x: new Decimal(0),
            n: new Decimal(1),
            y: new Decimal(1),
        },  
        multiplicator1: {
            cost: new Decimal(1.25e5),
        },
        xbuyer: {
            cost: new Decimal(1e8),
            amount: new Decimal(0),
        },
        nbuyer: {
            cost: new Decimal(1e12),
            amount: new Decimal(0),
            unlocked: false,
        },
        linear_equations: {
            eff: new Decimal(1),
            eff2: new Decimal(0),
        }
    },
    polygons: {
        sides: new Decimal(3),
        amount: new Decimal(0),
        dimensions: new Decimal(2),
        length: new Decimal(1),
        width: new Decimal(0),
        height: new Decimal(0),
        w: new Decimal(0),
        v: new Decimal(0),
        eff1: new Decimal(1),
        eff2: new Decimal(1),
        eff3: new Decimal(1),
        eff4: new Decimal(1),
        eff5: new Decimal(1),
        unlocked: false,
        buyable1: {
            cost: new Decimal(5e55)
        },
        buyable2: {
            cost: new Decimal(1e6)
        },
        pboost1unl: false,
        pboost2unl: false,
        pboost3unl: false,
        pboost4unl: false,
        pboost5unl: false,
    },
    tangent: {
        unlocked: false,
        pi_dimension: {
            inDimension: false,
            papirus: new Decimal(10),
            papirusPerSec: new Decimal(0),
            fullCircles: new Decimal(0),
            LitresOfWater: new Decimal(0),
            Lines: new Decimal(0),
            Coal: new Decimal(0),
            CoalPerSec: new Decimal(0),
            MathematicalInstruments: new Decimal(0),
            Metal: new Decimal(0),
            Shapes: new Decimal(0),
            Thales: {
                students: new Decimal(0),
                eff: new Decimal(0),
                cost: new Decimal(10),
            },
            Papirus_maker: {
                eff: new Decimal(1),
                amt: new Decimal(0),
                cost: new Decimal(10),
            },
            Archimedes: {
                students: new Decimal(0),
                eff: new Decimal(0),
                cost: new Decimal(50),
            },
            Water_worker: {
                cap: new Decimal(0),
                eff: new Decimal(1),
            },
            Euclids_elements: {
                cost: new Decimal(1500),
            },
            Miner: {
                cap: new Decimal(0),
                eff: new Decimal(1),
            },
            Edmund_gunter: {
                cost: new Decimal(2),
            },
            Ancient_ones: {
                cost: new Decimal(5),
            },
            Plato: {
                cost: new Decimal(1),
            }
        }
    }
}

function GetPoints() {
    player.points = player.points.add(1)
    player.tpoints = player.tpoints.add(1)
}

var buildings = []
var upgrades = []
var linearUpgrades = []
var linearChallenges = []
var linearEquation = []
var talmideUpgrades = []
var inventorUpgrades = []

for(let i = 0; i < 3; i++) {
    let building = {
        amount: new Decimal(0),
        cost: new Decimal(10).pow(i+1),
        eff: new Decimal(1),
        automation: false,
    }
    buildings.push(building)
}

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

for(let i = 0; i < 3; i++) {
    let inventorUpgrade = {
        bought: false,
        cost: new Decimal(15000),
        eff: new Decimal(1),
    }
    inventorUpgrades.push(inventorUpgrade)
}

function BuyBuilding(i, auto = false) {
    let b = buildings[i - 1]
    if(player.points.gte(b.cost) && !linearChallenges[2].inChal) {
        if (!auto) {
            if(!linearUpgrades[8].bought) player.points = player.points.sub(b.cost)
            b.amount = b.amount.add(1)
            player.tbuildings = player.tbuildings.add(1)
            b.cost = b.cost.mul(1+i*0.15)  
        } else {
            player.tbuildings = player.tbuildings.add(player.points.div(10**i).add(1).log(1+i*0.15).floor().sub(b.amount))
            b.amount = player.points.div(10**i).max(1).log(1+i*0.15).floor().add(1)
            b.cost = new Decimal(1+i*0.15).pow(b.amount).mul(10**i)
            if (!linearUpgrades[8].bought) player.points = player.points.sub(b.cost.div(1+i*0.15))
        }
    }
}

function BuyMultiplication() {
    if(player.points.gte(player.equations.multiplicator1.cost)) {
        if(!linearUpgrades[8].bought) {
            player.points = player.points.sub(player.equations.multiplicator1.cost)
        }
        player.equations.equation1.x = player.equations.equation1.x.mul(2)
        player.equations.equation1.eff = player.equations.equation1.eff.mul(2)
        if(player.equations.equation1.x.lt(1e20)) {
            player.equations.multiplicator1.cost = player.equations.multiplicator1.cost.mul(5)
        }
        else if(player.equations.equation1.x.gt(1e20)) {
            player.equations.multiplicator1.cost = player.equations.multiplicator1.cost.mul(30)
        }
        else if(player.equations.equation1.x.gt(1e70)) {
            player.equations.multiplicator1.cost = player.equations.multiplicator1.cost.mul(150)
        }
    }
}

function BuyXBuyer() {
    if(player.points.gte(player.equations.xbuyer.cost)) {
        if(!linearUpgrades[8].bought) {
            player.points = player.points.sub(player.equations.xbuyer.cost)
        }
        player.equations.equation2.x = player.equations.equation2.x.add(1)
        player.equations.xbuyer.amount = player.equations.xbuyer.amount.add(1)
        if(player.equations.xbuyer.amount.lt(20)) {
            player.equations.xbuyer.cost = player.equations.xbuyer.cost.mul(35)
        }
        else if(player.equations.xbuyer.amount.gte(20)) {
            player.equations.xbuyer.cost = player.equations.xbuyer.cost.mul(500)
        }
        else if(player.equations.xbuyer.amount.gt(100)) {
            player.equations.xbuyer.cost = player.equations.xbuyer.cost.mul(1e4)
        }
    }
}

function BuyNBuyer() {
    if(player.points.gte(player.equations.nbuyer.cost)) {
        if(!linearUpgrades[8].bought) {
            player.points = player.points.sub(player.equations.nbuyer.cost)
        }
        player.equations.equation2.n = player.equations.equation2.n.add(1)
        player.equations.nbuyer.amount = player.equations.nbuyer.amount.add(1)
        if(player.equations.nbuyer.amount.lt(20)) {
            player.equations.nbuyer.cost = player.equations.nbuyer.cost.mul(15)
        }
        else if(player.equations.nbuyer.amount.gte(20)) {
            player.equations.nbuyer.cost = player.equations.nbuyer.cost.mul(1000)
        }
    }
}

function BuyUp(i) {
    let u = upgrades[i - 1]
    if(player.points.gte(u.cost) && !u.bought && !linearChallenges[1].inChal && !linearChallenges[3].inChal) {
        player.points = player.points.sub(u.cost)
        u.bought = true
    }
}

function BuyLup(i) {
    let lu = linearUpgrades[i - 1]
    if(player.LinearEssence.gte(lu.cost) && !lu.bought) {
        player.LinearEssence = player.LinearEssence.sub(lu.cost)
        lu.bought = true
        player.lc5eff = player.lc5eff.mul(2)
        lu.amt = lu.amt.add(1)
    }
}

function BuyTmp(i) {
    let tmp = talmideUpgrades[i - 1]
    if(i == 1) {
        if(player.tangent.pi_dimension.LitresOfWater.gte(tmp.cost)) {
            player.tangent.pi_dimension.LitresOfWater = player.tangent.pi_dimension.LitresOfWater.sub(tmp.cost)
            tmp.bought = true
        }
    }
    if(i == 2) {
        if(player.tangent.pi_dimension.papirus.gte(tmp.cost)) {
            player.tangent.pi_dimension.papirus = player.tangent.pi_dimension.papirus.sub(tmp.cost)
            tmp.bought = true
        }
    }
    if(i == 3) {
        if(player.tangent.pi_dimension.papirus.gte(tmp.cost) && player.tangent.pi_dimension.LitresOfWater.gte(tmp.cost)) {
            player.tangent.pi_dimension.papirus = player.tangent.pi_dimension.papirus.sub(tmp.cost)
            player.tangent.pi_dimension.LitresOfWater = player.tangent.pi_dimension.LitresOfWater.sub(tmp.cost)
            tmp.bought = true
        }
    }
    if(i == 4) {
        if(player.tangent.pi_dimension.MathematicalInstruments.gte(tmp.cost)) {
            player.tangent.pi_dimension.MathematicalInstruments = player.tangent.pi_dimension.MathematicalInstruments.sub(tmp.cost)
            tmp.bought = true
        }
    }
    if(i == 5) {
        if(player.tangent.pi_dimension.Coal.gte(tmp.cost) && player.tangent.pi_dimension.LitresOfWater.gte(1500)) {
            player.tangent.pi_dimension.Coal = player.tangent.pi_dimension.Coal.sub(tmp.cost)
            player.tangent.pi_dimension.LitresOfWater = player.tangent.pi_dimension.LitresOfWater.sub(3000)
            tmp.bought = true
        }
    }
    if(i == 6) {
        if(player.tangent.pi_dimension.papirus.gte(tmp.cost) && player.tangent.pi_dimension.LitresOfWater.gte(3000) && player.tangent.pi_dimension.Coal.gte(500)
        && player.tangent.pi_dimension.MathematicalInstruments.gte(5) && player.tangent.pi_dimension.Metal(10) && player.tangent.pi_dimension.Shapes.gte(2)) {
            player.tangent.pi_dimension.papirus = player.tangent.pi_dimension.papirus.sub(tmp.cost)
            player.tangent.pi_dimension.LitresOfWater = player.tangent.pi_dimension.LitresOfWater.sub(5000)
            player.tangent.pi_dimension.Coal = player.tangent.pi_dimension.Coal.sub(1000)
            player.tangent.pi_dimension.MathematicalInstruments = player.tangent.pi_dimension.MathematicalInstruments.sub(50)
            player.tangent.pi_dimension.Metal = player.tangent.pi_dimension.Metal.sub(100)
            player.tangent.pi_dimension.Shapes = player.tangent.pi_dimension.Shapes.sub(25)
            tmp.bought = true
        }
    }
}

function BuyIup(i) {
    let iup = inventorUpgrades[i - 1]
    if(i == 1) {
        if(player.tangent.pi_dimension.papirus.gte(iup.cost)) {
            player.tangent.pi_dimension.papirus = player.tangent.pi_dimension.papirus.sub(iup.cost)
            iup.bought = true
        }
    }
    if(i == 2) {
        if(player.tangent.pi_dimension.LitresOfWater.gte(iup.cost)) {
            player.tangent.pi_dimension.LitresOfWater = player.tangent.pi_dimension.LitresOfWater.sub(iup.cost)
            iup.bought = true
        }
    }
    if(i == 3) {
        if(player.tangent.pi_dimension.Coal.gte(iup.cost)) {
            player.tangent.pi_dimension.Coal = player.tangent.pi_dimension.Coal.sub(iup.cost)
            iup.bought = true
        }
    }
}

function LinearEssenceReset(chal = false) {
    if(player.LEgain.gte(1) && player.TimeTillReset.lte(0) || chal) {
        player.TimeTillReset = new Decimal(5)
        if(!chal) {
            player.LinearEssence = player.LinearEssence.add(player.LEgain)
        }
        player.points = new Decimal(0)
        player.pointsPerSec = new Decimal(0)
        for(let i = 0; i < 3; i++) {
            let b = buildings[i]
            b.amount = new Decimal(0)
            b.cost = new Decimal(10).pow(i + 1)
            b.eff = new Decimal(1)
            if(upgrades[6].bought) {
                buildings[1].amount = new Decimal(1)
            }
        }
        if(linearUpgrades[6].bought == false || linearChallenges[1].inChal == true) {
            for(let i = 0; i < 9; i++) {
                let u = upgrades[i]
                u.bought = false
                u.cost = new Decimal(20000)
                u.eff = new Decimal(1)
                if(linearUpgrades[2].bought && !linearChallenges[1].inChal && !linearChallenges[3].inChal) {
                    upgrades[2].bought = true
                    upgrades[5].bought = true
                }
            }
        }
        if(!linearUpgrades[2].bought) {
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
        }
        player.equations.equation2.k = new Decimal(1)
        player.GoneLinear = player.GoneLinear.add(1)
        if(player.TimeinLinear.gte(player.FastestLinear)) {
            player.FastestLinear = player.TimeinLinear
        }
        player.TimeinLinear = new Decimal(0)
        player.LinearUnl = true
    }
}

function BuyLEVar(i) {
    let le = linearEquation[i - 1]
    if(player.LinearPower.gte(le.cost)) {
        player.LinearPower = player.LinearPower.sub(le.cost)
        le.amount = le.amount.add(1)
        if(i == 1) { // c
            if(le.amount.gte(25)) le.cost = le.cost.mul(50)
            else if(le.amount.gte(10)) le.cost = le.cost.mul(2.5)
            else if(le.amount.lt(10)) le.cost = le.cost.mul(1.2)
        } 
        if(i == 2) { // a
            if (le.amount.gte(15)) le.cost = le.cost.mul(100)
            else if(le.amount.gte(5)) le.cost = le.cost.mul(5)
            else if(le.amount.lt(5)) le.cost = le.cost.mul(1.4)
        }
        if(i == 3) { // b
            if(le.amount.gte(15)) le.cost = le.cost.mul(200)
            else if(le.amount.gte(5)) le.cost = le.cost.mul(10)
            else if(le.amount.lt(5)) le.cost = le.cost.mul(1.45)
        }
        if(i == 4) { // y
            if(le.amount.gte(15)) le.cost = le.cost.mul(500)
            else if(le.amount.gte(5)) le.cost = le.cost.mul(20)
            else if(le.amount.lt(5)) le.cost = le.cost.mul(1.7)
        }
        if(i == 5) { // x
            if(le.amount.gte(15)) le.cost = le.cost.mul(1000)
            else if(le.amount.gte(5)) le.cost = le.cost.mul(35)
            else if(le.amount.lt(5)) le.cost = le.cost.mul(1.8)
        }
    }
}

function EnterChal(i) {
    let lc = linearChallenges[i - 1]
    for(let b = 0; b < 6; b++) {
        if (linearChallenges[b].inChal && b != i-1) {
            linearChallenges[b].inChal = false
        }
    }
    if(!lc.inChal) {
        lc.inChal = true
        LinearEssenceReset(true)
        return
    }
    if(player.points.gte(lc.goal)) {
        lc.completed = true
        lc.inChal = false
        LinearEssenceReset(true)
    }
    else if (lc.inChal == true) {
        lc.inChal = false
        LinearEssenceReset(true)
    }
}

function BuyBuyable1() {
    if(player.points.gte(player.polygons.buyable1.cost)) {
        player.points = player.points.sub(player.polygons.buyable1.cost)
        player.polygons.amount = player.polygons.amount.add(1)
        player.polygons.buyable1.cost = player.polygons.buyable1.cost.mul(100)
    }
}

function BuyBuyable2() {
    if(player.LinearEssence.gte(player.polygons.buyable2.cost)) {
        player.LinearEssence = player.LinearEssence.sub(player.polygons.buyable2.cost)
        if(player.polygons.dimensions.eq(2)) {
            player.polygons.buyable2.cost = player.polygons.buyable2.cost.mul(500)
        }
        if(player.polygons.dimensions.eq(3)) {
            player.polygons.buyable2.cost = player.polygons.buyable2.cost.mul(20)
        }
        if(player.polygons.dimensions.eq(4)) {
            player.polygons.buyable2.cost = player.polygons.buyable2.cost.mul(7)
        }
        if(player.polygons.dimensions.gte(5)) {
            player.polygons.buyable2.cost = player.polygons.buyable2.cost.mul(10)
        }
        player.polygons.dimensions = player.polygons.dimensions.add(1)
    }
}

function EnterTheCircle() {
    if(!player.tangent.pi_dimension.inDimension) {
        player.tangent.pi_dimension.inDimension = true
    }
    else {
        player.tangent.pi_dimension.inDimension = false
    }
}

function BuyThalesStudent() {
    if(player.tangent.pi_dimension.papirus.gte(player.tangent.pi_dimension.Thales.cost)) {
        player.tangent.pi_dimension.papirus = player.tangent.pi_dimension.papirus.sub(player.tangent.pi_dimension.Thales.cost)
        player.tangent.pi_dimension.Thales.students = player.tangent.pi_dimension.Thales.students.add(1)
        player.tangent.pi_dimension.Thales.eff = player.tangent.pi_dimension.Thales.eff.add(1)
        player.tangent.pi_dimension.Thales.cost = player.tangent.pi_dimension.Thales.cost.mul(1.5)
    }
}

function BuyPapirusMaker() {
    if(player.tangent.pi_dimension.LitresOfWater.gte(player.tangent.pi_dimension.Papirus_maker.cost)) {
        player.tangent.pi_dimension.LitresOfWater = player.tangent.pi_dimension.LitresOfWater.sub(player.tangent.pi_dimension.Papirus_maker.cost)
        player.tangent.pi_dimension.Papirus_maker.cost = player.tangent.pi_dimension.Papirus_maker.cost.mul(1.5)
        player.tangent.pi_dimension.Papirus_maker.amt = player.tangent.pi_dimension.Papirus_maker.amt.add(1)
    }
}

function BuyArchimedesStudent() {
    if(player.tangent.pi_dimension.papirus.gte(player.tangent.pi_dimension.Archimedes.cost)) {
        player.tangent.pi_dimension.papirus = player.tangent.pi_dimension.papirus.sub(player.tangent.pi_dimension.Archimedes.cost)
        player.tangent.pi_dimension.Archimedes.cost = player.tangent.pi_dimension.Archimedes.cost.mul(2.5)
        player.tangent.pi_dimension.Archimedes.eff = player.tangent.pi_dimension.Archimedes.eff.add(10)
        player.tangent.pi_dimension.Archimedes.students = player.tangent.pi_dimension.Archimedes.students.add(1)
    }
}

function BuyWaterWorker() {
    if(player.tangent.pi_dimension.Water_worker.cap.lt(1)) {
        player.tangent.pi_dimension.Water_worker.cap = player.tangent.pi_dimension.Water_worker.cap.add(1)
    }
}

function BuyEuclidsElements() {
    if(player.tangent.pi_dimension.papirus.gte(player.tangent.pi_dimension.Euclids_elements.cost)) {
        player.tangent.pi_dimension.papirus = player.tangent.pi_dimension.papirus.sub(player.tangent.pi_dimension.Euclids_elements.cost)
        player.tangent.pi_dimension.Euclids_elements.cost = player.tangent.pi_dimension.Euclids_elements.cost.mul(1.2)
        player.tangent.pi_dimension.Lines = player.tangent.pi_dimension.Lines.add(1)
    }
}

function BuyMiner() {
    if(player.tangent.pi_dimension.Miner.cap.lt(1)) {
        player.tangent.pi_dimension.Miner.cap = player.tangent.pi_dimension.Miner.cap.add(1)
    }
}

function BuyEdmundGunter() {
    if(player.tangent.pi_dimension.Metal.gte(player.tangent.pi_dimension.Edmund_gunter.cost)) {
        player.tangent.pi_dimension.Metal = player.tangent.pi_dimension.Metal.sub(player.tangent.pi_dimension.Edmund_gunter.cost)
        player.tangent.pi_dimension.Edmund_gunter.cost = player.tangent.pi_dimension.Edmund_gunter.cost.mul(1.3)
        player.tangent.pi_dimension.MathematicalInstruments = player.tangent.pi_dimension.MathematicalInstruments.add(1)
    }
}

function BuyAncientOnes() {
    if(player.tangent.pi_dimension.Coal.gte(player.tangent.pi_dimension.Ancient_ones.cost)) {
        player.tangent.pi_dimension.Coal = player.tangent.pi_dimension.Coal.sub(player.tangent.pi_dimension.Ancient_ones.cost)
        player.tangent.pi_dimension.Ancient_ones.cost = player.tangent.pi_dimension.Ancient_ones.cost.mul(1.1)
        player.tangent.pi_dimension.Metal = player.tangent.pi_dimension.Metal.add(1)
    }
}

function BuyPlato() {
    if(player.tangent.pi_dimension.MathematicalInstruments.gte(player.tangent.pi_dimension.Plato.cost) && player.tangent.pi_dimension.Lines.gte(3)) {
        player.tangent.pi_dimension.MathematicalInstruments = player.tangent.pi_dimension.MathematicalInstruments.sub(player.tangent.pi_dimension.Plato.cost)
        player.tangent.pi_dimension.Lines = player.tangent.pi_dimension.Lines.sub(3)
        player.tangent.pi_dimension.Plato.cost = player.tangent.pi_dimension.Plato.cost.add(1)
    } 
}