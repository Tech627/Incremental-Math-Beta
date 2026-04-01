let constant = {
    unlocked: false,
    brokeConstantInfinity: false,
    req: new Decimal("1.798e308"),
    constantLevel: new Decimal(0),
    constant_points: new Decimal(0),
    constant_points_persec: new Decimal(0),
    constant_milestones: {
        milestone1: {
            gotten: false,
        },
        milestone2: {
            gotten: false,
        }
    },
    passive_const_up_cost: new Decimal(100),
    passive_const_up_amt: new Decimal(0),
    CU_switch_p: new Decimal(1),
    in_trip: false,
    trip: {
        meters: new Decimal(0),
        stamina: new Decimal(10),
        funny_inc: new Decimal(1),
        ice_frags: new Decimal(0),
        aice_frags: new Decimal(0),
        refill_stamina: false,
        ice: new Decimal(0),
        tank_filled: new Decimal(0),
        icc_up1: {
            bought: false,
        },
        icc_up2: {
            bought: false,
        },
        number: new Decimal(0),
    },
    e_chal: false,
    Math_mana: new Decimal(100),
    activate_skill1: false,
    activate_skill2: false,
    activate_skill3: false,
    activate_skill4: false,
    skill4_timer: new Decimal(15),
    math_points: new Decimal(0),
    mp_boost: new Decimal(1),
    le_n: new Decimal(0),
    le_x: new Decimal(0),
    le_up1: {
        bought: false,
    },
    le_up2: {
        bought: false,
    },
    le_up3: {
        bought: false,
    },
    x1: new Decimal(0),
    x2: new Decimal(0),
    y1: new Decimal(0),
    y2: new Decimal(0),
    coordinatePower: new Decimal(0),
    complexTank: new Decimal(0),
}

var buildings = []
var linearUpgrades = []
var linearEquation = []
var linearChallenges = []
var talmideUpgrades = []
var constantUpgrades = []
var infinityConstantUpgrades = []

for(let i = 0; i < 4; i++) {
    let building = {
        amount: new Decimal(0),
        cost: new Decimal(10).pow(i+1),
        eff: new Decimal(1).mul(new Decimal(11).pow(i)),
        automation: false,
    }
    buildings.push(building)
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

function ConstantReset() {
    if(player.points.gte("1.798e308")) {
        constant.unlocked = true
        if(!infinityConstantUpgrades[0].bought) {
            constant.constant_points = constant.constant_points.add(1)
        }
        if(player.points.gte(constant.req) && constant.constantLevel.lt(2)) {
            constant.constantLevel = constant.constantLevel.add(1)
        }
        LinearEssenceReset(false, true)
        player.equations.equation1.x = new Decimal(1)
        player.equations.equation2.x = new Decimal(0)
        player.equations.equation2.k = new Decimal(1)
        player.equations.equation2.n = new Decimal(1)
        player.equations.equation2.y = new Decimal(1)
        player.equations.multiplicator1.cost = new Decimal(1.25e5)
        player.equations.xbuyer.cost = new Decimal(1e8)
        player.equations.xbuyer.amount = new Decimal(0)
        player.equations.kbuyer.cost = new Decimal(1e210)
        player.equations.kbuyer.amount = new Decimal(0)
        player.equations.nbuyer.cost = new Decimal(1e12)
        player.equations.nbuyer.amount = new Decimal(0)
        player.equations.equation1.eff = new Decimal(1)
        player.equations.equation2.eff = new Decimal(1)
        if(!constantUpgrades[9].bought) {
            upgrades[0].bought = false
            upgrades[1].bought = false
            upgrades[2].bought = false
            upgrades[3].bought = false
            upgrades[4].bought = false
            upgrades[5].bought = false
            upgrades[6].bought = false
            upgrades[7].bought = false
            upgrades[8].bought = false
        }
        if(!constantUpgrades[11].bought) buildings[1].amount = new Decimal(0)
        player.LinearPower = new Decimal(0)
        player.polygons.amount = new Decimal(0)
        player.polygons.sides = new Decimal(3)
        player.polygons.dimensions = new Decimal(2)
        player.polygons.length = new Decimal(1)
        player.polygons.width = new Decimal(0)
        player.polygons.height = new Decimal(0)
        player.polygons.v = new Decimal(0)
        player.polygons.w = new Decimal(0)
        player.polygons.eff1 = new Decimal(1)
        player.polygons.eff2 = new Decimal(1)
        player.polygons.eff3 = new Decimal(1)
        player.polygons.eff4 = new Decimal(1)
        player.polygons.eff5 = new Decimal(1)
        player.polygons.unlocked = false
        player.polygons.buyable1.cost = new Decimal(5e55)
        player.polygons.buyable2.cost = new Decimal(1e6)
        player.polygons.pboost1unl = false
        player.polygons.pboost2unl = false
        player.polygons.pboost3unl = false
        player.polygons.pboost4unl = false
        player.polygons.pboost5unl = false
        player.tangent.unlocked = false
        player.tangent.pi_power = new Decimal(1)
        player.tangent.pi_after_comma = new Decimal(1)
        player.tangent.pi_ac_req = new Decimal(1e3)
        player.tangent.pi_milestones.milestone1.gotten = false
        player.tangent.pi_milestones.milestone2.gotten = false
        player.tangent.pi_dimension.inDimension = false
        if(constant.constantLevel.lt(2)) {
            player.tangent.pi_dimension.papirus = new Decimal(10)
            player.tangent.pi_dimension.papirusPerSec = new Decimal(0)
            player.tangent.pi_dimension.fullCircles = new Decimal(0)
            player.tangent.pi_dimension.LitresOfWater = new Decimal(0)
            player.tangent.pi_dimension.Lines = new Decimal(0)
            player.tangent.pi_dimension.Coal = new Decimal(0)
            player.tangent.pi_dimension.CoalPerSec = new Decimal(0)
            player.tangent.pi_dimension.MathematicalInstruments = new Decimal(0)
            player.tangent.pi_dimension.Metal = new Decimal(0)
            player.tangent.pi_dimension.Shapes = new Decimal(0)
            player.tangent.pi_dimension.Thales.cost = new Decimal(10)
            player.tangent.pi_dimension.Thales.students = new Decimal(0)
            player.tangent.pi_dimension.Thales.eff = new Decimal(0)
            player.tangent.pi_dimension.Papirus_maker.eff = new Decimal(1)
            player.tangent.pi_dimension.Papirus_maker.amt = new Decimal(0)
            player.tangent.pi_dimension.Papirus_maker.cost = new Decimal(10)
            player.tangent.pi_dimension.Archimedes.cost = new Decimal(50)
            player.tangent.pi_dimension.Archimedes.students = new Decimal(0)
            player.tangent.pi_dimension.Archimedes.eff = new Decimal(0)
            player.tangent.pi_dimension.Water_worker.cap = new Decimal(0)
            player.tangent.pi_dimension.Water_worker.eff = new Decimal(1)
            player.tangent.pi_dimension.Euclids_elements.cost = new Decimal(1000)
            player.tangent.pi_dimension.Miner.cap = new Decimal(0)
            player.tangent.pi_dimension.Miner.eff = new Decimal(1)
            player.tangent.pi_dimension.Edmund_gunter.cost = new Decimal(3)
            player.tangent.pi_dimension.Ancient_ones.cost = new Decimal(10)
            player.tangent.pi_dimension.Plato.cost = new Decimal(1) 
        }
        player.tangent.tangent_length = new Decimal(0)
        player.tangent.tlPerSec = new Decimal(0)
        player.tangent.angle = new Decimal(1)
        player.tangent.radius = new Decimal(1)
        player.tangent.circle_arcs_amt = new Decimal(0)
        player.tangent.circle_arcs.buyable1.cost = new Decimal(1)
        player.tangent.circle_arcs.buyable2.cost = new Decimal(3)
        player.tangent.equation_of_tangent.m_buyer.amount = new Decimal(1)
        player.tangent.equation_of_tangent.x_buyer.amount = new Decimal(0)
        player.tangent.equation_of_tangent.x_buyer.cost = new Decimal(20)
        player.tangent.equation_of_tangent.c_buyer.amount = new Decimal(1)
        player.tangent.equation_of_tangent.c_buyer.cost = new Decimal(2)
        player.tangent.tangent_upgrades.upgrade1.bought = false
        player.tangent.tangent_upgrades.upgrade1.level = new Decimal(0)
        player.tangent.tangent_upgrades.upgrade1.cost = new Decimal(5)
        player.tangent.tangent_upgrades.upgrade2.bought = false
        player.LinearEssence = new Decimal(0)
        for(let i = 0; i < 4; i++) {
            let b = buildings[i]
            b.automation = false
        }
        if(!constantUpgrades[10].bought) {
            for(let i = 0; i < 12; i++) {
                let lup = linearUpgrades[i]
                lup.bought = false
                lup.cost = new Decimal(1)
                lup.eff = new Decimal(1)
            }
        }
        for(let i = 0; i < 6; i++) {
            let lc = linearChallenges[i]
            lc.completed = false
            lc.inChal = false
            lc.goal = new Decimal(3e3)
            lc.eff = new Decimal(1)
        }
        for(let i = 0; i < 5; i++) {
            let leq = linearEquation[i]
            leq.amount = new Decimal(0)
            leq.cost = new Decimal(100).mul(i + 1).pow(1.5)
        }
        for(let i = 0; i < 6; i++) {
            let tup = talmideUpgrades[i]
            tup.cost = new Decimal(100)
            tup.bought = false
            tup.eff = new Decimal(1)
        }
    }
}

function BuyConstantUpgrade(i) {
    let cup = constantUpgrades[i - 1]
    if(constant.constant_points.gte(cup.cost)) {
        constant.constant_points = constant.constant_points.sub(cup.cost)
        cup.bought = true
    }
}

function BuyInfinityCU(i) {
    let icup = infinityConstantUpgrades[i - 1]
    if(constant.constant_points.gte(icup.cost)) {
        constant.constant_points = constant.constant_points.sub(icup.cost)
        icup.bought = true
    }
}

function BuyBreakConstantUp() {
    if(constantUpgrades[0].bought && constantUpgrades[1].bought && constantUpgrades[2].bought && constantUpgrades[3].bought && constantUpgrades[4].bought &&
        constantUpgrades[5].bought && constantUpgrades[6].bought && constantUpgrades[7].bought && constantUpgrades[8].bought && constantUpgrades[9].bought &&
        constantUpgrades[10].bought && constantUpgrades[11].bought && constant.constant_points.gte(5)
    ) {
        constant.brokeConstantInfinity = true
        constant.constant_points = constant.constant_points.sub(5)
    }
}

function CUSwitchPL() {
    if(!constant.CU_switch_p.eq(1)) {
        constant.CU_switch_p = constant.CU_switch_p.sub(1)
    }
}

function CUSwitchPR() {
    if(!constant.CU_switch_p.eq(2) && constant.constant_milestones.milestone2.gotten) {
        constant.CU_switch_p = constant.CU_switch_p.add(1)
    }
}

function SetAllCUPT() {
    constantUpgrades[0].bought = true
    constantUpgrades[1].bought = true
    constantUpgrades[2].bought = true
    constantUpgrades[3].bought = true
    constantUpgrades[4].bought = true
    constantUpgrades[5].bought = true
    constantUpgrades[6].bought = true
    constantUpgrades[7].bought = true
    constantUpgrades[8].bought = true
    constantUpgrades[9].bought = true
    constantUpgrades[10].bought = true
    constantUpgrades[11].bought = true
}

function EnterTrip() {
    if(!constant.trip) constant.trip = true
    else constant.trip = false
}

function Walk() {
    if(constant.trip.stamina.lt(2)) {
        constant.trip.stamina = new Decimal(0)
    }
    if(constant.trip.stamina.gte(2)) {
        constant.trip.stamina = constant.trip.stamina.sub(2)
        constant.trip.meters = constant.trip.meters.add(1)
    }
}

function ConvertIceFrags() {
    if(constant.trip.ice_frags.gte(1)) {
        constant.trip.tank_filled = constant.trip.tank_filled.add(1)
    }
}

function BuyIccUp1() {
    if(constant.trip.ice_frags.gte(10) && !constant.trip.icc_up1.bought) {
        constant.trip.ice_frags = constant.trip.ice_frags.sub(10)
        constant.trip.icc_up1.bought = true
    }
}

function BuyIccUp2() {
    if(constant.trip.ice.gte(15) && !constant.trip.icc_up2.bought) {
        constant.trip.ice = constant.trip.ice.sub(15)
        constant.trip.icc_up2.bought = true
    }
}

function FunnyIncreaser() {
    constant.trip.number = constant.trip.number.add(1)
}

function PassiveConstantPoints() {
    if(constant.constant_points.gte(constant.passive_const_up_cost)) {
        constant.constant_points = constant.constant_points.sub(constant.passive_const_up_cost)
        constant.passive_const_up_cost = constant.passive_const_up_cost.mul(5)
        constant.passive_const_up_amt = constant.passive_const_up_amt.add(1)
    }
}

function ActivateSkill1() {
    if(constant.activate_skill1 == false && constant.Math_mana.gt(0)) {
        constant.activate_skill1 = true
    }
}

function ActivateSkill2() {
    if(constant.activate_skill2 == false && constant.Math_mana.gt(0)) {
        constant.activate_skill2 = true
    }
}

function ActivateSkill3() {
    if(constant.activate_skill3 == false && constant.Math_mana.gt(0)) {
        constant.activate_skill3 = true
    }
}

function ActivateSkill4() {
    if(constant.activate_skill4 == false && constant.Math_mana.lte(10)) {
        constant.activate_skill4 = true
    }
}

function IncreaseLEN() {
    constant.le_n = constant.le_n.add(1)
}

function BuyLEUP1() {
    if(constant.math_points.gte(1e6) && !constant.le_up1.bought) {
        constant.le_up1.bought = true
    }
}

function BuyLEUP2() {
    if(constant.math_points.gte(1e7) && !constant.le_up2.bought) {
        constant.le_up2.bought = true
    }
}

function BuyLEUP3() {
    if(constant.math_points.gte(2.5e7) && !constant.le_up3.bought) {
        constant.le_up3.bought = true
    }
}

function IncreaseX2() {
    constant.x2 = constant.x2.add(1)
}

function IncreaseY2() {
    constant.y2 = constant.y2.add(1)
}

function EnterEChal() {
    if(!constant.e_chal) constant.in_trip = true
}