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
        saveitems("Camount", player.buildings.Classmate.amount)
        saveitems("Ceff", player.buildings.Classmate.eff)
        saveitems("Ccost", player.buildings.Classmate.cost)
        saveitems("Tamount", player.buildings.Teacher.amount)
        saveitems("Teff", player.buildings.Teacher.eff)
        saveitems("Tcost", player.buildings.Teacher.cost)
        saveitems("Pamount", player.buildings.Professor.amount)
        saveitems("Peff", player.buildings.Professor.eff)
        saveitems("Pcost", player.buildings.Professor.cost)
        saveitems("tbuildings", player.buildings.tbuildings)
        saveitems("up1bought", player.upgrades.up1.bought)
        saveitems("up1eff", player.upgrades.up1.eff)
        saveitems("up2bought", player.upgrades.up2.bought)
        saveitems("up2eff", player.upgrades.up2.eff)
        saveitems("up3bought", player.upgrades.up3.bought)
        saveitems("up4bought", player.upgrades.up4.bought)
        saveitems("up4eff", player.upgrades.up4.eff)
        saveitems("up5bought", player.upgrades.up5.bought)
        saveitems("up5eff", player.upgrades.up5.eff)
        saveitems("up6bought", player.upgrades.up6.bought)
        saveitems("equation1eff", player.equations.equation1.eff)
        saveitems("equation1x", player.equations.equation1.x)
        saveitems("multiplicator1cost", player.equations.multiplicator1.cost)
        saveitems("equation2eff", player.equations.equation2.eff)
        saveitems("equation2x", player.equations.equation2.x)
        saveitems("equation2k", player.equations.equation2.k)
        saveitems("equation2n", player.equations.equation2.n)
        saveitems("equation2y", player.equations.equation2.y)
        saveitems("XbuyerCost", player.equations.xbuyer.cost)
        saveitems("NBuyerCost", player.equations.nbuyer.cost)
        saveitems("NBuyerUnl", player.equations.nbuyer.unlocked)
        saveitems("Lup1bought", player.linear_upgrades.up1.bought)
        saveitems("Lup1eff", player.linear_upgrades.up1.eff)
        saveitems("Lup2bought", player.linear_upgrades.up2.bought)
        saveitems("Lup3bought", player.linear_upgrades.up3.bought)
        saveitems("Lup4bought", player.linear_upgrades.up4.bought)
        saveitems("Lup5bought", player.linear_upgrades.up5.bought)
        saveitems("Lup5eff", player.linear_upgrades.up5.eff)
        saveitems("Lup6bought", player.linear_upgrades.up6.bought)
        saveitems("Lup6eff", player.linear_upgrades.up6.eff)
        saveitems("Lup7bought", player.linear_upgrades.up7.bought)
        saveitems("Lup8bought", player.linear_upgrades.up8.bought)
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
        saveitems("achv1c", player.achievements.achv1.completed) 
        saveitems("achv2c", player.achievements.achv2.completed) 
        saveitems("achv3c", player.achievements.achv3.completed) 
        saveitems("achv4c", player.achievements.achv4.completed) 
        saveitems("achv5c", player.achievements.achv5.completed) 
        saveitems("achv6c", player.achievements.achv6.completed) 
        saveitems("achv7c", player.achievements.achv7.completed) 
        saveitems("achv8c", player.achievements.achv8.completed) 
        saveitems("achv9c", player.achievements.achv9.completed) 
        saveitems("achv10c", player.achievements.achv10.completed) 
        saveitems("achv11c", player.achievements.achv11.completed) 
        saveitems("achv12c", player.achievements.achv12.completed) 
        saveitems("achv13c", player.achievements.achv13.completed) 
        saveitems("achv14c", player.achievements.achv14.completed) 
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
        player.buildings.Classmate.amount = GetItems("Camount", true)
        player.buildings.Classmate.cost = GetItems("Ccost", true)
        player.buildings.Classmate.eff = GetItems("Ceff", true)
        player.buildings.Teacher.amount = GetItems("Tamount", true)
        player.buildings.Teacher.cost = GetItems("Tcost", true)
        player.buildings.Teacher.eff = GetItems("Teff", true)
        player.buildings.Professor.amount = GetItems("Pamount", true)
        player.buildings.Professor.cost = GetItems("Pcost", true)
        player.buildings.Professor.eff = GetItems("Peff", true)
        player.buildings.tbuildings = GetItems("tbuildings", true)
        player.upgrades.up1.bought = GetItems("up1bought", false)
        player.upgrades.up1.eff = GetItems("up1eff", true)
        player.upgrades.up2.bought = GetItems("up2bought", false)
        player.upgrades.up2.eff = GetItems("up2eff", true)
        player.upgrades.up3.bought = GetItems("up3bought", false)
        player.upgrades.up4.bought = GetItems("up4bought", false)
        player.upgrades.up4.eff = GetItems("up4eff", true)
        player.upgrades.up5.bought = GetItems("up5bought", false)
        player.upgrades.up5.eff = GetItems("up5eff", true)
        player.upgrades.up6.bought = GetItems("up6bought", false)
        player.equations.equation1.eff = GetItems("equation1eff", true)
        player.equations.equation1.x = GetItems("equation1x", true)
        player.equations.multiplicator1.cost = GetItems("multiplicator1cost", true)
        player.equations.equation2.eff = GetItems("equation2eff", true)
        player.equations.equation2.x = GetItems("equation2x", true)
        player.equations.equation2.k = GetItems("equation2k", true)
        player.equations.equation2.n = GetItems("equation2n", true)
        player.equations.equation2.y = GetItems("equation2y", true)
        player.equations.xbuyer.cost = GetItems("XbuyerCost", true)
        player.linear_upgrades.up1.bought = GetItems("Lup1bought", false)
        player.linear_upgrades.up1.eff = GetItems("Lup1eff", true)
        player.linear_upgrades.up2.bought = GetItems("Lup2bought", false)
        player.linear_upgrades.up2.eff = GetItems("Lup2eff", true)
        player.linear_upgrades.up3.bought = GetItems("Lup3bought", false)
        player.linear_upgrades.up4.bought = GetItems("Lup4bought", false)
        player.linear_upgrades.up5.bought = GetItems("Lup5bought", false)
        player.linear_upgrades.up5.eff = GetItems("Lup5eff", true)
        player.linear_upgrades.up6.bought = GetItems("Lup6bought", false)
        player.linear_upgrades.up6.eff = GetItems("Lup6eff", true)
        player.linear_upgrades.up7.bought = GetItems("Lup7bought", false)
        player.linear_upgrades.up8.bought = GetItems("Lup8bought", false)
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
        player.achievements.achv1.completed = GetItems("achv1c", false)
        player.achievements.achv2.completed = GetItems("achv2c", false)
        player.achievements.achv3.completed = GetItems("achv3c", false)
        player.achievements.achv4.completed = GetItems("achv4c", false)
        player.achievements.achv5.completed = GetItems("achv5c", false)
        player.achievements.achv6.completed = GetItems("achv6c", false)
        player.achievements.achv7.completed = GetItems("achv7c", false)
        player.achievements.achv8.completed = GetItems("achv8c", false)
        player.achievements.achv9.completed = GetItems("achv9c", false)
        player.achievements.achv10.completed = GetItems("achv10c", false)
        player.achievements.achv11.completed = GetItems("achv11c", false)
        player.achievements.achv12.completed = GetItems("achv12c", false)
        player.achievements.achv13.completed = GetItems("achv13c", false)
        player.achievements.achv14.completed = GetItems("achv14c", false)
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
    location.reload()
}

//setInterval(Save, 15000)