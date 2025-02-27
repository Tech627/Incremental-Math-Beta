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
    buildings: {
        Classmate: {
            amount: new Decimal(0),
            eff: new Decimal(1),
            cost: new Decimal(10),
            automation: false,
        },
        Teacher: {
            amount: new Decimal(0),
            eff: new Decimal(20),
            cost: new Decimal(150),
            automation: false,
        },
        Professor: {
            amount: new Decimal(0),
            eff: new Decimal(150),
            cost: new Decimal(2000),
            automation: false,
        },
        tbuildings: new Decimal(0),
    },
    upgrades: {
        up1: {
            bought: false,
            cost: new Decimal(1000),
            eff: new Decimal(1),
        },
        up2: {
            bought: false,
            cost: new Decimal(40000),
            eff: new Decimal(1),
        },
        up3: {
            bought: false,
            cost: new Decimal(3.5e5),
        },
        up4: {
            bought: false,
            cost: new Decimal(3e6),
            eff: new Decimal(1),
        },
        up5: {
            bought: false,
            cost: new Decimal(1.5e7),
            eff: new Decimal(1),
        },
        up6: {
            bought: false,
            cost: new Decimal(3e8),
        }
    },
    linear_upgrades: {
        up1: {
            bought: false,
            cost: new Decimal(1),
            eff: new Decimal(1)
        },
        up2: {
            bought: false,
            cost: new Decimal(1),
        },
        up3: {
            bought: false,
            cost: new Decimal(3),
        },
        up4: {
            bought: false,
            cost: new Decimal(5),
        },
        up5: {
            bought: false,
            cost: new Decimal(1e4),
            eff: new Decimal(1),
        },
        up6: {
            bought: false,
            cost: new Decimal(2e4),
            eff: new Decimal(1),
        },
        up7: {
            bought: false,
            cost: new Decimal(5e4),
        },
        up8: {
            bought: false,
            cost: new Decimal(7.5e4),
        },
        up9: {
            bought: false,
            cost: new Decimal(1e5),
        },
        up10: {
            bought: false,
            eff: new Decimal(1),
            cost: new Decimal(2e5),
        },
        up11: {
            bought: false,
            eff: new Decimal(1),
            cost: new Decimal(5e5),
        },
        up12: {
            bought: false,
            cost: new Decimal(1e6),
        },
    },
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
            cost: new Decimal(5e5),
        },
        xbuyer: {
            cost: new Decimal(1e9),
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
    achievements: {
        achv1: {
            completed: false
        },
        achv2: {
            completed: false
        },
        achv3: {
            completed: false
        },
        achv4: {
            completed: false
        },
        achv5: {
            completed: false
        },
        achv6: {
            completed: false
        },
        achv7: {
            completed: false
        },
        achv8: {
            completed: false
        },
        achv9: {
            completed: false
        },
        achv10: {
            completed: false
        },
        achv11: {
            completed: false
        },
        achv12: {
            completed: false
        },
        achv13: {
            completed: false
        },
        achv14: {
            completed: false
        },
        achv15: {
            completed: false
        },
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

function BuyClassmate() {
    if(player.points.gte(player.buildings.Classmate.cost) && player.linear_challenges.chal3.inChal === false
        && player.linear_challenges.chal4.inChal === false) {
        if(player.linear_upgrades.up9.bought === false) {
            player.points = player.points.sub(player.buildings.Classmate.cost)
        }
        player.buildings.Classmate.amount = player.buildings.Classmate.amount.add(1)
        player.buildings.tbuildings = player.buildings.tbuildings.add(1)
    }
}

function BuyTeacher() {
    if(player.points.gte(player.buildings.Teacher.cost) && player.linear_challenges.chal3.inChal === false
        && player.linear_challenges.chal4.inChal === false) {
        if(player.linear_upgrades.up9.bought === false) {
            player.points = player.points.sub(player.buildings.Teacher.cost)
        }    
        player.buildings.Teacher.amount = player.buildings.Teacher.amount.add(1)
        player.buildings.tbuildings = player.buildings.tbuildings.add(1)
    }
}

function BuyProfessor() {
    if(player.points.gte(player.buildings.Professor.cost) && player.linear_challenges.chal3.inChal === false
        && player.linear_challenges.chal4.inChal === false) {
        if(player.linear_upgrades.up9.bought === false) {
            player.points = player.points.sub(player.buildings.Professor.cost)
        }
        player.buildings.Professor.amount = player.buildings.Professor.amount.add(1)
        player.buildings.tbuildings = player.buildings.tbuildings.add(1)
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
            player.equations.multiplicator1.cost = player.equations.multiplicator1.cost.mul(3.5)
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
            player.equations.xbuyer.cost = player.equations.xbuyer.cost.mul(15)
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

function BuyUp1() {
    if(player.points.gte(player.upgrades.up1.cost) && player.upgrades.up1.bought === false && player.linear_challenges.chal2.inChal === false) {
        player.points = player.points.sub(player.upgrades.up1.cost)
        player.upgrades.up1.bought = true
    }
}

function BuyUp2() {
    if(player.points.gte(player.upgrades.up2.cost) && player.upgrades.up2.bought === false && player.linear_challenges.chal2.inChal === false) {
        player.points = player.points.sub(player.upgrades.up2.cost)
        player.upgrades.up2.bought = true
    }
}

function BuyUp3() {
    if(player.points.gte(player.upgrades.up3.cost) && player.upgrades.up3.bought === false && player.linear_challenges.chal2.inChal === false) {
        player.points = player.points.sub(player.upgrades.up3.cost)
        player.upgrades.up3.bought = true
    }
}

function BuyUp4() {
    if(player.points.gte(player.upgrades.up4.cost) && player.upgrades.up4.bought === false && player.linear_challenges.chal2.inChal === false) {
        player.points = player.points.sub(player.upgrades.up4.cost)
        player.upgrades.up4.bought = true
    }
}

function BuyUp5() {
    if(player.points.gte(player.upgrades.up5.cost) && player.upgrades.up5.bought === false && player.linear_challenges.chal2.inChal === false) {
        player.points = player.points.sub(player.upgrades.up5.cost)
        player.upgrades.up5.bought = true
    }
}

function BuyUp6() {
    if(player.points.gte(player.upgrades.up6.cost) && player.upgrades.up6.bought === false && player.linear_challenges.chal2.inChal === false) {
        player.points = player.points.sub(player.upgrades.up6.cost)
        player.upgrades.up6.bought = true
    }
}

function LinearEssenceReset() {
    if(player.LEgain.gte(1)) {
        player.LinearEssence = player.LinearEssence.add(player.LEgain)
        player.points = new Decimal(0)
        player.pointsPerSec = new Decimal(0)
        player.buildings.Classmate.amount = new Decimal(0)
        player.buildings.Classmate.cost = new Decimal(10)
        player.buildings.Classmate.eff = new Decimal(1)
        player.buildings.Teacher.amount = new Decimal(0)
        player.buildings.Teacher.cost = new Decimal(150)
        player.buildings.Teacher.eff = new Decimal(20)
        player.buildings.Professor.amount = new Decimal(0)
        player.buildings.Professor.cost = new Decimal(2000)
        player.buildings.Professor.eff = new Decimal(150)
        if(player.linear_upgrades.up7.bought == false) {
            player.upgrades.up1.bought = false
            player.upgrades.up1.eff = new Decimal(1)
            player.upgrades.up2.bought = false
            player.upgrades.up2.eff = new Decimal(1)
            player.upgrades.up3.bought = false
            player.upgrades.up4.bought = false
            player.upgrades.up4.eff = new Decimal(1)
            player.upgrades.up5.bought = false
            player.upgrades.up5.eff = new Decimal(1)
            player.upgrades.up6.bought = false
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

function BuyLUp2() {
    if(player.LinearEssence.gte(player.linear_upgrades.up2.cost) && player.linear_upgrades.up2.bought === false) {
        player.LinearEssence = player.LinearEssence.sub(player.linear_upgrades.up2.cost)
        player.linear_upgrades.up2.bought = true
    }
}

function BuyLUp3() {
    if(player.LinearEssence.gte(player.linear_upgrades.up3.cost) && player.linear_upgrades.up3.bought === false) {
        player.LinearEssence = player.LinearEssence.sub(player.linear_upgrades.up3.cost)
        player.linear_upgrades.up3.bought = true
    }
}

function BuyLUp4() {
    if(player.LinearEssence.gte(player.linear_upgrades.up4.cost) && player.linear_upgrades.up4.bought === false) {
        player.LinearEssence = player.LinearEssence.sub(player.linear_upgrades.up4.cost)
        player.linear_upgrades.up4.bought = true
    }
}

function BuyLUp5() {
    if(player.LinearEssence.gte(player.linear_upgrades.up5.cost) && player.linear_upgrades.up5.bought === false) {
        player.LinearEssence = player.LinearEssence.sub(player.linear_upgrades.up5.cost)
        player.linear_upgrades.up5.bought = true
    }
}

function BuyLUp6() {
    if(player.LinearEssence.gte(player.linear_upgrades.up6.cost) && player.linear_upgrades.up6.bought === false) {
        player.LinearEssence = player.LinearEssence.sub(player.linear_upgrades.up6.cost)
        player.linear_upgrades.up6.bought = true
    }
}

function BuyLUp7() {
    if(player.LinearEssence.gte(player.linear_upgrades.up7.cost) && player.linear_upgrades.up7.bought === false) {
        player.LinearEssence = player.LinearEssence.sub(player.linear_upgrades.up7.cost)
        player.linear_upgrades.up7.bought = true
    }
}

function BuyLUp8() {
    if(player.LinearEssence.gte(player.linear_upgrades.up8.cost) && player.linear_upgrades.up8.bought === false) {
        player.LinearEssence = player.LinearEssence.sub(player.linear_upgrades.up8.cost)
        player.linear_upgrades.up8.bought = true
    }
}

function BuyLUp9() {
    if(player.LinearEssence.gte(player.linear_upgrades.up9.cost) && player.linear_upgrades.up9.bought === false) {
        player.LinearEssence = player.LinearEssence.sub(player.linear_upgrades.up9.cost)
        player.linear_upgrades.up9.bought = true
    }
}

function BuyLUp10() {
    if(player.LinearEssence.gte(player.linear_upgrades.up10.cost) && player.linear_upgrades.up10.bought === false) {
        player.LinearEssence = player.LinearEssence.sub(player.linear_upgrades.up10.cost)
        player.linear_upgrades.up10.bought = true
    }
}

function BuyLUp11() {
    if(player.LinearEssence.gte(player.linear_upgrades.up11.cost) && player.linear_upgrades.up11.bought === false) {
        player.LinearEssence = player.LinearEssence.sub(player.linear_upgrades.up11.cost)
        player.linear_upgrades.up11.bought = true
    }
}

function BuyLUp12() {
    if(player.LinearEssence.gte(player.linear_upgrades.up12.cost) && player.linear_upgrades.up12.bought === false) {
        player.LinearEssence = player.LinearEssence.sub(player.linear_upgrades.up12.cost)
        player.linear_upgrades.up12.bought = true
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