function saveitems(name, location) { // this basically just removes the localstorage.setitem and json.stringify
    localStorage.setItem(name, JSON.stringify((location)));
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
        for(let i = 0; i < 20; i++) {
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
            b.automation = GetItems("Bulding-automation" + (i + 1), false)
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
        for(let i = 0; i < 20; i++) {
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
        fixSave() 
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

function fixSave() {
    defaultData = player

    fixData(defaultData, player)
}

function fixData(defaultData, newData) {
  for (item in defaultData) {
    if (defaultData[item] == null) {
      if (newData[item] === undefined) newData[item] = null;
    } else if (Array.isArray(defaultData[item])) {
      if (newData[item] === undefined) newData[item] = defaultData[item];
      else fixData(defaultData[item], newData[item]);
    } else if (defaultData[item] instanceof Decimal) {
      // Convert to Decimal
      if (newData[item] === undefined) newData[item] = defaultData[item];
      else newData[item] = new Decimal(newData[item]);
    } else if (!!defaultData[item] && typeof defaultData[item] === "object") {
      if (newData[item] === undefined || typeof defaultData[item] !== "object")
        newData[item] = defaultData[item];
      else fixData(defaultData[item], newData[item]);
    } else {
      if (newData[item] === undefined) newData[item] = defaultData[item];
    }
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

setInterval(Save, 15000)