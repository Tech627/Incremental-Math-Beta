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
            y: new Decimal(1)
        },  
        multiplicator1: {
            cost: new Decimal(2e5),
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
            a: {
                cost: new Decimal(100),
                amount: new Decimal(0)
            },
            x: {
                cost: new Decimal(1e6),
                amount: new Decimal(1)
            },
            b: {
                cost: new Decimal(1000),
                amount: new Decimal(0)
            },
            y: {
                cost: new Decimal(1e5),
                amount: new Decimal(1)
            },
            c: {
                cost: new Decimal(500),
                amount: new Decimal(1)
            },
        }
    },
    linear_challenges: {
        chal1: {
            goal: new Decimal(3000),
            completed: false,
            inChal: false,
            eff: new Decimal(1),
        },
        chal2: {
            goal: new Decimal(1e16),
            completed: false,
            inChal: false,
            eff: new Decimal(1),
        },
        chal3: {
            goal: new Decimal(10000),
            completed: false,
            inChal: false,
            eff: new Decimal(1),
        },
        chal4: {
            goal: new Decimal(5000),
            completed: false,
            inChal: false,
            eff: new Decimal(1),
        },
    },
    squares_and_prism: {
        squares: {
            amount: new Decimal(0),
            eff: new Decimal(1),
            abuyer: {
                amount: new Decimal(0),
                cost: new Decimal(1e50),
            }
        },
        square_prism: {
            amount: new Decimal(0),
            eff: new Decimal(1),
            abuyer: {
                amount: new Decimal(0),
                cost: new Decimal(1e100),
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
    }
    linearUpgrades.push(linearUpgrade)
}

function BuyBuilding(i) {
    let b = buildings[i - 1]
    if(player.points.gte(b.cost) && player.linear_challenges.chal3.inChal != true && player.linear_challenges.chal4.inChal != true) {
        if(player.linear_upgrades.up9.bought === false) {
            player.points = player.points.sub(b.cost)
        }
        if(i == 1) {
            buildings[0].amount = buildings[0].amount.add(1)
            buildings[0].cost = buildings[0].cost.mul(1.15)
        }
        if(i == 2) {
            buildings[1].amount = buildings[1].amount.add(1)
            buildings[1].cost = buildings[1].cost.mul(1.3)
        }
        if(i == 3) {
            buildings[2].amount = buildings[2].amount.add(1)
            buildings[2].cost = buildings[2].cost.mul(1.45)
        }
    }
}

function BuyMultiplication() {
    if(player.points.gte(player.equations.multiplicator1.cost)) {
        if(player.linear_upgrades.up9.bought === false) {
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
        if(player.linear_upgrades.up9.bought === false) {
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
        if(player.linear_upgrades.up9.bought === false) {
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
    if(player.points.gte(u.cost) && u.bought === false && player.linear_challenges.chal2.inChal === false) {
        player.points = player.points.sub(u.cost)
        u.bought = true
    }
}

function BuyLup(i) {
    let lu = linearUpgrades[i - 1]
    if(player.LinearEssence.gte(lu.cost) && lu.bought === false) {
        player.LinearEssence = player.LinearEssence.sub(lu.cost)
        lu.bought = true
    }
}

function LinearEssenceReset() {
    if(player.LEgain.gte(1)) {
        player.LinearEssence = player.LinearEssence.add(player.LEgain)
        player.points = new Decimal(0)
        player.pointsPerSec = new Decimal(0)
        for(let i = 0; i < 3; i++) {
            let b = buildings[i]
            b.amount = new Decimal(0)
            b.cost = new Decimal(10).pow(i + 1)
            b.eff = new Decimal(1)
        }
        if(linearUpgrades[6].bought == false) {
            for(let i = 0; i < 6; i++) {
                let u = upgrades[i]
                u.bought = false
                u.cost = new Decimal(20000)
                u.eff = new Decimal(1)
            }
        }
        player.equations.equation1.eff = new Decimal(1)
        player.equations.equation1.x = new Decimal(1)
        player.equations.equation2.eff = new Decimal(1)
        player.equations.equation2.k = new Decimal(1)
        player.equations.equation2.x = new Decimal(0)
        player.equations.equation2.n = new Decimal(1)
        player.equations.equation2.y = new Decimal(1)
        player.equations.multiplicator1.cost = new Decimal(5e5)
        player.equations.xbuyer.cost = new Decimal(1e9)
        player.equations.xbuyer.amount = new Decimal(0)
        player.equations.nbuyer.cost = new Decimal(1e12)
        player.equations.nbuyer.amount = new Decimal(0)
        player.GoneLinear = player.GoneLinear.add(1)
        if(player.TimeinLinear.gte(player.FastestLinear)) {
            player.FastestLinear = player.TimeinLinear
        }
        player.TimeinLinear = new Decimal(0)
        player.LinearUnl = true
    }
}

function BuyLUp1() {
    if(player.LinearEssence.gte(player.linear_upgrades.up1.cost) && player.linear_upgrades.up1.bought === false) {
        player.LinearEssence = player.LinearEssence.sub(player.linear_upgrades.up1.cost)
        player.linear_upgrades.up1.bought = true
    }
}

function BuyA() {
    if(player.LinearPower.gte(player.equations.linear_equations.a.cost)) {
        player.LinearPower = player.LinearPower.sub(player.equations.linear_equations.a.cost)
        player.equations.linear_equations.a.amount = player.equations.linear_equations.a.amount.add(1)
        player.equations.linear_equations.a.cost = player.equations.linear_equations.a.cost.mul(1.3)
    }
}

function BuyX() {
    if(player.LinearPower.gte(player.equations.linear_equations.x.cost)) {
        player.LinearPower = player.LinearPower.sub(player.equations.linear_equations.x.cost)
        player.equations.linear_equations.x.amount = player.equations.linear_equations.x.amount.add(1)
        player.equations.linear_equations.x.cost = player.equations.linear_equations.x.cost.mul(1.3)
    }
}

function BuyB() {
    if(player.LinearPower.gte(player.equations.linear_equations.b.cost)) {
        player.LinearPower = player.LinearPower.sub(player.equations.linear_equations.b.cost)
        player.equations.linear_equations.b.amount = player.equations.linear_equations.b.amount.add(1)
        player.equations.linear_equations.b.cost = player.equations.linear_equations.b.cost.mul(1.3)
    }
}

function BuyY() {
    if(player.LinearPower.gte(player.equations.linear_equations.y.cost)) {
        player.LinearPower = player.LinearPower.sub(player.equations.linear_equations.y.cost)
        player.equations.linear_equations.y.amount = player.equations.linear_equations.y.amount.add(1)
        player.equations.linear_equations.y.cost = player.equations.linear_equations.y.cost.mul(1.3)
    }
}

function BuyC() {
    if(player.LinearPower.gte(player.equations.linear_equations.c.cost)) {
        player.LinearPower = player.LinearPower.sub(player.equations.linear_equations.c.cost)
        player.equations.linear_equations.c.amount = player.equations.linear_equations.c.amount.add(1)
        player.equations.linear_equations.c.cost = player.equations.linear_equations.c.cost.mul(1.3)
    }
}

function EnterChal1() {
    if(player.linear_challenges.chal1.inChal === false) {
        LinearEssenceReset()
    }
    if(player.points.gte(player.linear_challenges.chal1.goal)) {
        player.linear_challenges.chal1.completed = true
        player.linear_challenges.chal1.inChal = false
    }
    if(player.linear_challenges.chal1.completed == false && player.linear_challenges.chal1.inChal == false) {
        player.linear_challenges.chal1.inChal = true
        player.linear_challenges.chal2.inChal = false
        player.linear_challenges.chal3.inChal = false
        player.linear_challenges.chal4.inChal = false
    }
    else if (player.linear_challenges.chal1.inChal == true) {
        player.linear_challenges.chal1.inChal = false
    }
}

function EnterChal2() {
    if(player.linear_challenges.chal2.inChal === false) {
        LinearEssenceReset()
    }
    if(player.points.gte(player.linear_challenges.chal2.goal)) {
        player.linear_challenges.chal2.completed = true
        player.linear_challenges.chal2.inChal = false
    }
    if(player.linear_challenges.chal2.completed === false && player.linear_challenges.chal2.inChal === false) {
        player.linear_challenges.chal2.inChal = true
        player.linear_challenges.chal1.inChal = false
        player.linear_challenges.chal3.inChal = false
        player.linear_challenges.chal4.inChal = false
    }
    else {
        player.linear_challenges.chal2.inChal = false
    }
}

function EnterChal3() {
    if(player.linear_challenges.chal3.inChal === false) {
        LinearEssenceReset()
    }
    if(player.points.gte(player.linear_challenges.chal3.goal)) {
        player.linear_challenges.chal3.completed = true
        player.linear_challenges.chal3.inChal = false
    }
    if(player.linear_challenges.chal3.completed === false && player.linear_challenges.chal3.inChal === false) {
        player.linear_challenges.chal3.inChal = true
        player.linear_challenges.chal1.inChal = false
        player.linear_challenges.chal2.inChal = false
        player.linear_challenges.chal4.inChal = false
    }
    else if (player.linear_challenges.chal3.inChal === true) {
        player.linear_challenges.chal3.inChal = false
    }
}

function EnterChal4() {
    if(player.linear_challenges.chal4.inChal === false) {
        LinearEssenceReset()
    }
    if(player.points.gte(player.linear_challenges.chal4.goal)) {
        player.linear_challenges.chal4.completed = true
        player.linear_challenges.chal4.inChal = false
    }
    if(player.linear_challenges.chal4.completed === false && player.linear_challenges.chal4.inChal === false) {
        player.linear_challenges.chal4.inChal = true
        player.linear_challenges.chal1.inChal = false
        player.linear_challenges.chal2.inChal = false
        player.linear_challenges.chal3.inChal = false
    }
    else if (player.linear_challenges.chal4.inChal === true) {
        player.linear_challenges.chal4.inChal = false
    }
}

function BuyASquare() {
    if(player.points.gte(player.squares_and_prism.squares.abuyer.cost)) {
        player.points = player.points.sub(player.squares_and_prism.squares.abuyer.cost)
        player.squares_and_prism.squares.abuyer.amount = player.squares_and_prism.squares.abuyer.amount.add(1)
        player.squares_and_prism.squares.abuyer.cost = player.squares_and_prism.squares.abuyer.cost.mul(1e10)
    }
}

function BuyASquarePrism() {
    if(player.points.gte(player.squares_and_prism.square_prism.abuyer.cost)) {
        player.points = player.points.sub(player.squares_and_prism.square_prism.abuyer.cost)
        player.squares_and_prism.square_prism.abuyer.amount = player.squares_and_prism.square_prism.abuyer.amount.add(1)
        player.squares_and_prism.square_prism.abuyer.cost = player.squares_and_prism.square_prism.abuyer.cost.mul(1e50)
    }
}