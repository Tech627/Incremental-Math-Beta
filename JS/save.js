function saveitems(name, location) { // this basically just removes the localstorage.setitem and json.stringify
    localStorage.setItem(name, JSON.stringify((location)));
}

var upgrades = []

for(let i = 0; i < 6; i++) {
    let upgrade = {
        bought: false,
        cost: new Decimal(20000),
        eff: new Decimal(1),
    }
    upgrades.push(upgrade)
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
        for(let i = 0; i < 3; i++) {
            let b = buildings[i]
            saveitems("amount" + (i + 1), b.amount)
            saveitems("eff" + (i + 1), b.eff)
            saveitems("cost" + (i + 1), b.cost)
        }
        saveitems("tbuildings", player.tbuildings)
        for(let i = 0; i < 6; i++) {
            let u = upgrades[i]
            saveitems("up" + (i + 1) + "bought", u.bought)
            saveitems("up" + (i + 1) + "eff", u.eff)
        }
        for(let i = 0; i < 12; i++) {
            let lu = linearUpgrades[i]
            saveitems("Lup" + (i + 1) + "bought", linearUpgrades[i].bought)
            saveitems("Lup" + (i + 1) + "eff", linearUpgrades[i].eff)
        }
        for(let i = 0; i < 15; i++) {
            let a = achievements[i]
            saveitems("achv" + (i + 1) + "c", achievements[i].completed)
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
        saveitems("LinearEquationeff", player.equations.linear_equations.eff)
        saveitems("LinearEquationeff2", player.equations.linear_equations.eff2)
        saveitems("Aamt", player.equations.linear_equations.a.amount)
        saveitems("Acost", player.equations.linear_equations.a.cost)
        saveitems("Xamt", player.equations.linear_equations.x.amount)
        saveitems("Xcost", player.equations.linear_equations.x.cost)
        saveitems("Bamt", player.equations.linear_equations.b.amount)
        saveitems("Bcost", player.equations.linear_equations.b.cost)
        saveitems("Yamt", player.equations.linear_equations.y.amount)
        saveitems("Ycost", player.equations.linear_equations.y.cost)
        saveitems("Camt", player.equations.linear_equations.c.amount)
        saveitems("Ccost", player.equations.linear_equations.c.cost)
        saveitems("Lchal1c", player.linear_challenges.chal1.completed)
        saveitems("Lchal1in", player.linear_challenges.chal1.inChal)
        saveitems("Lchal1eff", player.linear_challenges.chal1.eff)
        saveitems("Lchal2c", player.linear_challenges.chal2.completed)
        saveitems("Lchal2in", player.linear_challenges.chal2.inChal)
        saveitems("Lchal3c", player.linear_challenges.chal3.completed)
        saveitems("Lchal3in", player.linear_challenges.chal3.inChal)
        saveitems("Lchal4c", player.linear_challenges.chal4.completed)
        saveitems("Lchal4in", player.linear_challenges.chal4.inChal)
        saveitems("squares-amt", player.squares_and_prism.squares.amount)
        saveitems("squares-eff", player.squares_and_prism.squares.eff)
        saveitems("a-square-amt", player.squares_and_prism.squares.abuyer.amount)
        saveitems("a-square-cost", player.squares_and_prism.squares.abuyer.cost)
        saveitems("prism-amt", player.squares_and_prism.square_prism.amount)
        saveitems("prism-eff", player.squares_and_prism.square_prism.eff)
        saveitems("a-prism-amt", player.squares_and_prism.square_prism.abuyer.amount)
        saveitems("a-prism-cost", player.squares_and_prism.square_prism.abuyer.cost)
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
    if (saved) {
        if (newdecimal) { // checks if the value your setting to needs to be in newdecimal or not
            location = new Decimal(JSON.parse(localStorage.getItem(saved)));
        } else {
            location = JSON.parse(localStorage.getItem(saved));
        }
    }
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
    if (!localStorage) {return;}
    if (!isFirstVisit()) {
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
        for(let i = 0; i < 3; i++) {
            let b = buildings[i]
            b.amount = GetItems("amount" + (i + 1), true)
            b.cost = GetItems("cost" + (i + 1), true)
            b.eff = GetItems("eff" + (i + 1), true)
        }
        player.tbuildings = GetItems("tbuildings", true)
        for(let i = 0; i < 6; i++) {
            let u = upgrades[i]
            u.bought = GetItems("up" + (i + 1) + "bought", false)
            u.eff = GetItems("up" + (i + 1) + "eff", true)
        }
        for(let i = 0; i < 12; i++) {
            let lu = linearUpgrades[i]
            lu.bought = GetItems("Lup" + (i + 1) + "bought", false)
            lu.eff = GetItems("Lup" + (i + 1) + "eff", true)
        }
        for(let i = 0; i < 15; i++) {
            let a = achievements[i]
            a.completed = GetItems("achv" + (i + 1) + "c", false)
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
        player.equations.linear_equations.a.amount = GetItems("Aamt", true)
        player.equations.linear_equations.a.cost = GetItems("Acost", true)
        player.equations.linear_equations.x.amount = GetItems("Xamt", true)
        player.equations.linear_equations.x.cost = GetItems("Xcost", true)
        player.equations.linear_equations.b.amount = GetItems("Bamt", true)
        player.equations.linear_equations.b.cost = GetItems("Bcost", true)
        player.equations.linear_equations.y.amount = GetItems("Yamt", true)
        player.equations.linear_equations.y.cost = GetItems("Ycost", true)
        player.equations.linear_equations.c.amount = GetItems("Camt", true)
        player.equations.linear_equations.c.cost = GetItems("Ccost", true)
        player.equations.nbuyer.cost = GetItems("NBuyerCost", true)
        player.equations.nbuyer.amount = GetItems("NBuyerAmt", true)
        player.equations.nbuyer.unlocked = GetItems("NBuyerUnl", false)
        player.linear_challenges.chal1.completed = GetItems("Lchal1c", false)
        player.linear_challenges.chal1.inChal = GetItems("Lchal1in", false)
        player.linear_challenges.chal1.eff = GetItems("Lchal1eff", true)
        player.linear_challenges.chal2.completed = GetItems("Lchal2c", false)
        player.linear_challenges.chal2.inChal = GetItems("Lchal2in", false)
        player.linear_challenges.chal3.completed = GetItems("Lchal3c", false)
        player.linear_challenges.chal3.inChal = GetItems("Lchal3in", false)
        player.linear_challenges.chal4.completed = GetItems("Lchal4c", false)
        player.linear_challenges.chal4.inChal = GetItems("Lchal4in", false)
        player.squares_and_prism.squares.amount = GetItems("squares-amt", true)
        player.squares_and_prism.squares.eff = GetItems("squares-eff", true)
        player.squares_and_prism.squares.abuyer.amount = GetItems("a-square-amt", true)
        player.squares_and_prism.squares.abuyer.cost = GetItems("a-square-cost", true)
        player.squares_and_prism.square_prism.amount = GetItems("prism-amt", true)
        player.squares_and_prism.square_prism.eff = GetItems("prism-eff", true)
        player.squares_and_prism.square_prism.abuyer.amount = GetItems("a-prism-amt", true)
        player.squares_and_prism.square_prism.abuyer.cost = GetItems("a-prism-cost", true)
    } else {
        Save()
    }}

function HardReset() {
    if(confirm("Are you sure you want to hard reset?") === true) {
        localStorage.clear(); // wipe localstorage
        saveitems("firstload", true)
        location.reload(true)
    }
}

function Export() {
    const Exported = btoa(JSON.stringify(player))
    navigator.clipboard.writeText(Exported);
}

function Import() {
    let userResponse = prompt("Enter your exported save")
    const Imported = userResponse
    player = JSON.parse(atob(Imported))
    Save()
    window.location.reload()
}

//setInterval(Save, 15000)