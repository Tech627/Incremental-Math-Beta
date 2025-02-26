function UpdateGUI() {
    document.getElementById("Points").textContent = "You have " + format(player.points) + " Points"
    if(player.pointgain.eq(1)) {
        document.getElementById("btn-gain").textContent = "+1 Point"
    }
    else if (player.pointgain.gt(1)) {
        document.getElementById("btn-gain").textContent = "+" + format(player.pointgain) + "Points"
    }
    document.getElementById("PointsPerSec").textContent = "(+" + format(player.pointsPerSec) + " Points/sec)" 
    document.getElementById("building-amount").textContent = "Classmate [" + format(player.buildings.Classmate.amount) + "]"
    document.getElementById("building-production").textContent = "(+" + format(player.buildings.Classmate.amount
        .mul(player.buildings.Classmate.eff)) + " Points/sec)"
    document.getElementById("building-prod").textContent = "gives +" + format(CalculateClassmateMult()) + " Points/sec"
    document.getElementById("Building-cost").textContent = "Cost: " + format(player.buildings.Classmate.cost) + " Points"
    document.getElementById("building-amount2").textContent = "Teacher [" + format(player.buildings.Teacher.amount) + "]"
    document.getElementById("building-production2").textContent = "(+" + format(player.buildings.Teacher.amount
        .mul(player.buildings.Teacher.eff)) + " Points/sec)"
    document.getElementById("building-prod2").textContent = "gives +" + format(CalculateTeacherMult()) + " Points/sec"
    document.getElementById("Building-cost2").textContent = "Cost: " + format(player.buildings.Teacher.cost) + " Points"
    document.getElementById("building-amount3").textContent = "Professor [" + format(player.buildings.Professor.amount) + "]"
    document.getElementById("building-production3").textContent = "(+" + format(player.buildings.Professor.amount
        .mul(player.buildings.Professor.eff)) + " Points/sec)"
    document.getElementById("building-prod3").textContent = "gives +" + format(CalculateProfessorMult()) + " Points/sec"
    document.getElementById("Building-cost3").textContent = "Cost: " + format(player.buildings.Professor.cost) + " Points"
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
    document.getElementById("total-b-bought").textContent = "You bought a total of " + format(player.buildings.tbuildings) + " buildings"
    player.upgrades.up1.eff = player.points.add(1).log10().mul(2.5).add(1)
    if(player.linear_challenges.chal2.completed === true) {
        player.upgrades.up1.eff = player.upgrades.up1.eff.mul(4)
    }
    document.getElementById("up-eff1").textContent = "Currently: " + format(player.upgrades.up1.eff) + "x boost"
    player.upgrades.up2.eff = player.buildings.Professor.amount.sqrt(player.buildings.Professor.amount).add(1)
    document.getElementById("up-eff2").textContent = "Currently: " + format(player.upgrades.up2.eff) + "x boost to teachers"
    player.upgrades.up4.eff = player.points.add(1).log10().div(2.5)
    document.getElementById("up-eff4").textContent = "Currently: " + format(player.upgrades.up4.eff) + "x boost"
    player.upgrades.up5.eff = player.buildings.Professor.amount.sqrt(player.buildings.Professor.amount).div(4).add(1)
    document.getElementById("up-eff5").textContent = "Currently: " + format(player.upgrades.up5.eff) + "x boost"
    document.getElementById("ResetForLE").textContent = "Reset for " + format(CalculateLEgain()) + " Linear Essence"
    player.LEgain = CalculateLEgain()
    document.getElementById("Linear-essence").textContent = "You have " + format(player.LinearEssence) + " linear essence"
    player.linear_upgrades.up1.eff = (player.LinearEssence.add(1)).mul(4)
    document.getElementById("lup-eff1").textContent = "Currently: " + format(player.linear_upgrades.up1.eff) + "x boost"
    document.getElementById("mult-cost3").textContent = "Cost: " + format(player.equations.nbuyer.cost) + " Points"
    player.linear_upgrades.up5.eff = player.points.add(1).log10().sqrt().add(1)
    document.getElementById("lup-eff5").textContent = "Currently: " + format(player.linear_upgrades.up5.eff) + "x boost"
    player.linear_upgrades.up6.eff = player.LinearEssence.add(1).log10().div(5).add(1)
    document.getElementById("lup-eff6").textContent = "Currently: " + format(player.linear_upgrades.up6.eff) + "x boost"
    player.linear_upgrades.up10.eff = CalculateClassmateMult().add(1).log10().add(CalculateTeacherMult().add(1).log(10)).add(
        CalculateProfessorMult().add(1).log10())
    document.getElementById("lup-eff10").textContent = "Currently: " + format(player.linear_upgrades.up10.eff) + "x boost"
    player.linear_upgrades.up11.eff = player.LinearEssence.add(1).log10().mul(3)
    document.getElementById("lup-eff11").textContent = "Currently: " + format(player.linear_upgrades.up11.eff) + "x boost"
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
    if(player.buildings.Classmate.automation === true) {
        BuyClassmate()
    }
    if(player.buildings.Teacher.automation === true) {
        BuyTeacher()
    }
    if(player.buildings.Professor.automation === true) {
        BuyProfessor()
    }
    document.getElementById("LP-eff").textContent = "Multiplying your points, buildings, y boost by " 
    + format(CalculateLEegain()) + "x, and x from 1st equation from 1st equation gets divided" 
    + "by 4 everytime you reach a factor of 10"
    player.equations.linear_equations.eff2 = CalculateLEegain().div(10)
    player.equations.linear_equations.eff2 = player.equations.linear_equations.eff2.floor()
    player.linear_challenges.chal1.eff = player.buildings.Classmate.eff.pow(0.2).add(player.buildings.Teacher.eff.pow(0.2).add(
        player.buildings.Professor.eff.pow(0.2)
    ))
    document.getElementById("Chal-reward").textContent = "Reward: Points are boosted by buildings. Currently: " +
    format(player.linear_challenges.chal1.eff) + "x boost"
    document.getElementById("gone-linear").textContent = "You have gone linear " + format(player.GoneLinear) + " times"
    document.getElementById("Time-in-linear").textContent = "You've spent " + format(player.TimeinLinear) + " seconds in linear run"
    document.getElementById("Fastest-linear").textContent = "Your fastest linear was " + format(player.FastestLinear) + " seconds"
    player.squares_and_prism.squares.amount = player.squares_and_prism.squares.abuyer.amount.pow(2)
    player.squares_and_prism.square_prism.amount = player.squares_and_prism.square_prism.abuyer.amount.pow(2)
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
    if(player.upgrades.up3.bought === true) {
        document.getElementById("Equation").classList.add("unlocked")
    }
    if(player.upgrades.up3.bought != true) {
        document.getElementById("Equation").classList.remove("unlocked")
    }
    if(player.buildings.Classmate.amount.gte(1)) {
        player.achievements.achv1.completed = true
    }
    if(player.buildings.Teacher.amount.gte(1)) {
        player.achievements.achv2.completed = true
    }
    if(player.buildings.Professor.amount.gte(1)) {
        player.achievements.achv3.completed = true
    }
    if(player.upgrades.up3.bought === true) {
        player.achievements.achv4.completed = true
    }
    if(player.points.gte(1e6)) {
        document.getElementById("row2").classList.add("show")
        document.getElementById("note").style.visibility = "collapse"
        player.achievements.achv5.completed = true
    }
    if(player.achievements.achv5.completed === true) {
        document.getElementById("achv-row2").classList.add("unlocked")
    }
    if(player.points.gte(1e7)) {
        player.achievements.achv6.completed = true
    }
    if(player.upgrades.up6.bought === true) {
        document.getElementById("Equation2").classList.add("unlocked")
        player.achievements.achv7.completed = true
    }
    if(player.upgrades.up6.bought != true) {
        document.getElementById("Equation2").classList.remove("unlocked")
    }
    if(player.equations.equation2.y.gte(5)) {
        player.achievements.achv8.completed = true
    }
    if(player.equations.equation2.x.gte(10)) {
        player.achievements.achv9.completed = true
    }
    if(player.LinearUnl === true) {
        player.achievements.achv10.completed = true
    }
    if(player.linear_upgrades.up4.bought === true) {
        player.achievements.achv11.completed = true
    }
    if(player.equations.linear_equations.eff.gte(10)) {
        player.achievements.achv12.completed = true
    }
    if(player.linear_upgrades.up8.bought === true) {
        player.achievements.achv13.completed = true
    }
    if(player.linear_challenges.chal1.completed === true && player.linear_challenges.chal2.completed === true &&
        player.linear_challenges.chal3.completed === true
    ) {
        player.achievements.achv14.completed = true
    }
}

function UpdateStyles() {
    if(player.points.gte(player.buildings.Classmate.cost)) {
        document.getElementById("Building-cost").classList.remove("Building-cost")
        document.getElementById("Building-cost").classList.add("Building-buy")
    }
    else {
        document.getElementById("Building-cost").classList.add("Building-cost")
        document.getElementById("Building-cost").classList.remove("Building-buy")
    }
    if(player.points.gte(player.buildings.Teacher.cost)) {
        document.getElementById("Building-cost2").classList.remove("Building-cost")
        document.getElementById("Building-cost2").classList.add("Building-buy")
    }
    else {
        document.getElementById("Building-cost2").classList.add("Building-cost")
        document.getElementById("Building-cost2").classList.remove("Building-buy")
    }
    if(player.points.gte(player.buildings.Professor.cost)) {
        document.getElementById("Building-cost3").classList.remove("Building-cost")
        document.getElementById("Building-cost3").classList.add("Building-buy")
    }
    else {
        document.getElementById("Building-cost3").classList.add("Building-cost")
        document.getElementById("Building-cost3").classList.remove("Building-buy")
    }
    if(player.points.gte(player.upgrades.up1.cost) && player.upgrades.up1.bought != true) {
        document.getElementById("up-cost1").classList.remove("Up-cost")
        document.getElementById("up-cost1").classList.add("Up-bought")
    }
    else if (player.upgrades.up1.bought === true) {
        document.getElementById("up-cost1").classList.remove("Up-cost")
        document.getElementById("up-cost1").classList.add("Up-buy")
    }
    else if (player.upgrades.up1.bought != true) {
        document.getElementById("up-cost1").classList.add("Up-cost")
        document.getElementById("up-cost1").classList.remove("Up-buy")
        document.getElementById("up-cost1").classList.remove("Up-bought")
    }
    else if (player.points.lt(player.upgrades.up1.cost) && player.upgrades.up1.bought != true) {
        document.getElementById("up-cost1").classList.add("Up-cost")
        document.getElementById("up-cost1").classList.remove("Up-bought")
    }
    if(player.points.gte(player.upgrades.up2.cost) && player.upgrades.up2.bought != true) {
        document.getElementById("up-cost2").classList.remove("Up-cost")
        document.getElementById("up-cost2").classList.add("Up-bought")
    }
    else if (player.upgrades.up2.bought === true) {
        document.getElementById("up-cost2").classList.remove("Up-cost")
        document.getElementById("up-cost2").classList.add("Up-buy")
    }
    else if (player.upgrades.up2.bought != true) {
        document.getElementById("up-cost2").classList.add("Up-cost")
        document.getElementById("up-cost2").classList.remove("Up-buy")
        document.getElementById("up-cost2").classList.remove("Up-bought")
    }
    else if (player.points.lt(player.upgrades.up2.cost) && player.upgrades.up2.bought != true) {
        document.getElementById("up-cost2").classList.add("Up-cost")
        document.getElementById("up-cost2").classList.remove("Up-bought")
    }
    if(player.points.gte(player.upgrades.up3.cost) && player.upgrades.up3.bought != true) {
        document.getElementById("up-cost3").classList.remove("Up-cost")
        document.getElementById("up-cost3").classList.add("Up-bought")
    }
    else if (player.upgrades.up3.bought === true) {
        document.getElementById("up-cost3").classList.remove("Up-cost")
        document.getElementById("up-cost3").classList.add("Up-buy")
    }
    else if (player.upgrades.up3.bought != true) {
        document.getElementById("up-cost3").classList.add("Up-cost")
        document.getElementById("up-cost3").classList.remove("Up-buy")
        document.getElementById("up-cost3").classList.remove("Up-bought")
    }
    else if (player.points.lt(player.upgrades.up3.cost) && player.upgrades.up3.bought != true) {
        document.getElementById("up-cost3").classList.add("Up-cost")
        document.getElementById("up-cost3").classList.remove("Up-bought")
    }
    if(player.points.gte(player.upgrades.up4.cost) && player.upgrades.up4.bought != true) {
        document.getElementById("up-cost4").classList.remove("Up-cost")
        document.getElementById("up-cost4").classList.add("Up-bought")
    }
    else if (player.upgrades.up4.bought === true) {
        document.getElementById("up-cost4").classList.remove("Up-cost")
        document.getElementById("up-cost4").classList.add("Up-buy")
    }
    else if (player.upgrades.up4.bought != true) {
        document.getElementById("up-cost4").classList.add("Up-cost")
        document.getElementById("up-cost4").classList.remove("Up-buy")
        document.getElementById("up-cost4").classList.remove("Up-bought")
    }
    else if (player.points.lt(player.upgrades.up4.cost) && player.upgrades.up1.bought != true) {
        document.getElementById("up-cost4").classList.add("Up-cost")
        document.getElementById("up-cost4").classList.remove("Up-bought")
    }
    if(player.points.gte(player.upgrades.up5.cost) && player.upgrades.up5.bought != true) {
        document.getElementById("up-cost5").classList.remove("Up-cost")
        document.getElementById("up-cost5").classList.add("Up-bought")
    }
    else if (player.upgrades.up5.bought === true) {
        document.getElementById("up-cost5").classList.remove("Up-cost")
        document.getElementById("up-cost5").classList.add("Up-buy")
    }
    else if (player.upgrades.up5.bought != true) {
        document.getElementById("up-cost5").classList.add("Up-cost")
        document.getElementById("up-cost5").classList.remove("Up-buy")
        document.getElementById("up-cost5").classList.remove("Up-bought")
    }
    else if (player.points.lt(player.upgrades.up5.cost) && player.upgrades.up5.bought != true) {
        document.getElementById("up-cost5").classList.add("Up-cost")
        document.getElementById("up-cost5").classList.remove("Up-bought")
    }
    if(player.points.gte(player.upgrades.up6.cost) && player.upgrades.up6.bought != true) {
        document.getElementById("up-cost6").classList.remove("Up-cost")
        document.getElementById("up-cost6").classList.add("Up-bought")
    }
    else if (player.upgrades.up6.bought === true) {
        document.getElementById("up-cost6").classList.remove("Up-cost")
        document.getElementById("up-cost6").classList.add("Up-buy")
    }
    else if (player.upgrades.up6.bought != true) {
        document.getElementById("up-cost6").classList.add("Up-cost")
        document.getElementById("up-cost6").classList.remove("Up-buy")
        document.getElementById("up-cost6").classList.remove("Up-bought")
    }
    else if (player.points.lt(player.upgrades.up6.cost) && player.upgrades.up6.bought != true) {
        document.getElementById("up-cost6").classList.add("Up-cost")
        document.getElementById("up-cost6").classList.remove("Up-bought")
    }
    if(player.LinearEssence.gte(player.linear_upgrades.up1.cost) && player.linear_upgrades.up1.bought != true) {
        document.getElementById("lup-cost1").classList.remove("Lup-cost")
        document.getElementById("lup-cost1").classList.add("Lup-bought")
    }
    else if (player.linear_upgrades.up1.bought === true) {
        document.getElementById("lup-cost1").classList.remove("Lup-cost")
        document.getElementById("lup-cost1").classList.add("Lup-buy")
    }
    else if (player.LinearEssence.lt(player.linear_upgrades.up1.cost) && player.linear_upgrades.up1.bought != true) {
        document.getElementById("lup-cost2").classList.add("Lup-cost")
        document.getElementById("lup-cost2").classList.remove("Lup-bought")
    }
    if(player.LinearEssence.gte(player.linear_upgrades.up2.cost) && player.linear_upgrades.up2.bought != true) {
        document.getElementById("lup-cost2").classList.remove("Lup-cost")
        document.getElementById("lup-cost2").classList.add("Lup-bought")
    }
    else if (player.linear_upgrades.up2.bought === true) {
        document.getElementById("lup-cost2").classList.remove("Lup-cost")
        document.getElementById("lup-cost2").classList.add("Lup-buy")
    }
    else if (player.LinearEssence.lt(player.linear_upgrades.up2.cost) && player.linear_upgrades.up2.bought != true) {
        document.getElementById("lup-cost2").classList.add("Lup-cost")
        document.getElementById("lup-cost2").classList.remove("Lup-bought")
    }
    if(player.LinearEssence.gte(player.linear_upgrades.up3.cost) && player.linear_upgrades.up3.bought != true) {
        document.getElementById("lup-cost3").classList.remove("Lup-cost")
        document.getElementById("lup-cost3").classList.add("Lup-bought")
    }
    else if (player.linear_upgrades.up3.bought === true) {
        document.getElementById("lup-cost3").classList.remove("Lup-cost")
        document.getElementById("lup-cost3").classList.add("Lup-buy")
    }
    else if (player.LinearEssence.lt(player.linear_upgrades.up3.cost) && player.linear_upgrades.up3.bought != true) {
        document.getElementById("lup-cost3").classList.add("Lup-cost")
        document.getElementById("lup-cost3").classList.remove("Lup-bought")
    }
    if(player.LinearEssence.gte(player.linear_upgrades.up4.cost) && player.linear_upgrades.up4.bought != true) {
        document.getElementById("lup-cost4").classList.remove("Lup-cost")
        document.getElementById("lup-cost4").classList.add("Lup-bought")
    }
    else if (player.linear_upgrades.up4.bought === true) {
        document.getElementById("lup-cost4").classList.remove("Lup-cost")
        document.getElementById("lup-cost4").classList.add("Lup-buy")
    }
    else if (player.LinearEssence.lt(player.linear_upgrades.up4.cost) && player.linear_upgrades.up4.bought != true) {
        document.getElementById("lup-cost4").classList.add("Lup-cost")
        document.getElementById("lup-cost4").classList.remove("Lup-bought")
    }
    if(player.LinearEssence.gte(player.linear_upgrades.up5.cost) && player.linear_upgrades.up5.bought != true) {
        document.getElementById("lup-cost5").classList.remove("Lup-cost")
        document.getElementById("lup-cost5").classList.add("Lup-bought")
    }
    else if (player.linear_upgrades.up5.bought === true) {
        document.getElementById("lup-cost5").classList.remove("Lup-cost")
        document.getElementById("lup-cost5").classList.add("Lup-buy")
    }
    else if (player.LinearEssence.lt(player.linear_upgrades.up5.cost) && player.linear_upgrades.up5.bought != true) {
        document.getElementById("lup-cost5").classList.add("Lup-cost")
        document.getElementById("lup-cost5").classList.remove("Lup-bought")
    }
    if(player.LinearEssence.gte(player.linear_upgrades.up6.cost) && player.linear_upgrades.up6.bought != true) {
        document.getElementById("lup-cost6").classList.remove("Lup-cost")
        document.getElementById("lup-cost6").classList.add("Lup-bought")
    }
    else if (player.linear_upgrades.up6.bought === true) {
        document.getElementById("lup-cost6").classList.remove("Lup-cost")
        document.getElementById("lup-cost6").classList.add("Lup-buy")
    }
    else if (player.LinearEssence.lt(player.linear_upgrades.up6.cost) && player.linear_upgrades.up6.bought != true) {
        document.getElementById("lup-cost6").classList.add("Lup-cost")
        document.getElementById("lup-cost6").classList.remove("Lup-bought")
    }
    if(player.LinearEssence.gte(player.linear_upgrades.up7.cost) && player.linear_upgrades.up7.bought != true) {
        document.getElementById("lup-cost7").classList.remove("Lup-cost")
        document.getElementById("lup-cost7").classList.add("Lup-bought")
    }
    else if (player.linear_upgrades.up7.bought === true) {
        document.getElementById("lup-cost7").classList.remove("Lup-cost")
        document.getElementById("lup-cost7").classList.add("Lup-buy")
    }
    else if (player.LinearEssence.lt(player.linear_upgrades.up7.cost) && player.linear_upgrades.up7.bought != true) {
        document.getElementById("lup-cost7").classList.add("Lup-cost")
        document.getElementById("lup-cost7").classList.remove("Lup-bought")
    }
    if(player.LinearEssence.gte(player.linear_upgrades.up8.cost) && player.linear_upgrades.up8.bought != true) {
        document.getElementById("lup-cost8").classList.remove("Lup-cost")
        document.getElementById("lup-cost8").classList.add("Lup-bought")
    }
    else if (player.linear_upgrades.up8.bought === true) {
        document.getElementById("lup-cost8").classList.remove("Lup-cost")
        document.getElementById("lup-cost8").classList.add("Lup-buy")
    }
    else if (player.LinearEssence.lt(player.linear_upgrades.up8.cost) && player.linear_upgrades.up8.bought != true) {
        document.getElementById("lup-cost8").classList.add("Lup-cost")
        document.getElementById("lup-cost8").classList.remove("Lup-bought")
    }
    if(player.LinearEssence.gte(player.linear_upgrades.up9.cost) && player.linear_upgrades.up9.bought != true) {
        document.getElementById("lup-cost9").classList.remove("Lup-cost")
        document.getElementById("lup-cost9").classList.add("Lup-bought")
    }
    else if (player.linear_upgrades.up9.bought === true) {
        document.getElementById("lup-cost9").classList.remove("Lup-cost")
        document.getElementById("lup-cost9").classList.add("Lup-buy")
    }
    else if (player.LinearEssence.lt(player.linear_upgrades.up9.cost) && player.linear_upgrades.up9.bought != true) {
        document.getElementById("lup-cost9").classList.add("Lup-cost")
        document.getElementById("lup-cost9").classList.remove("Lup-bought")
    }
    if(player.LinearEssence.gte(player.linear_upgrades.up10.cost) && player.linear_upgrades.up10.bought != true) {
        document.getElementById("lup-cost10").classList.remove("Lup-cost")
        document.getElementById("lup-cost10").classList.add("Lup-bought")
    }
    else if (player.linear_upgrades.up10.bought === true) {
        document.getElementById("lup-cost10").classList.remove("Lup-cost")
        document.getElementById("lup-cost10").classList.add("Lup-buy")
    }
    else if (player.LinearEssence.lt(player.linear_upgrades.up10.cost) && player.linear_upgrades.up10.bought != true) {
        document.getElementById("lup-cost10").classList.add("Lup-cost")
        document.getElementById("lup-cost10").classList.remove("Lup-bought")
    }
    if(player.LinearEssence.gte(player.linear_upgrades.up11.cost) && player.linear_upgrades.up11.bought != true) {
        document.getElementById("lup-cost11").classList.remove("Lup-cost")
        document.getElementById("lup-cost11").classList.add("Lup-bought")
    }
    else if (player.linear_upgrades.up11.bought === true) {
        document.getElementById("lup-cost11").classList.remove("Lup-cost")
        document.getElementById("lup-cost11").classList.add("Lup-buy")
    }
    else if (player.LinearEssence.lt(player.linear_upgrades.up11.cost) && player.linear_upgrades.up11.bought != true) {
        document.getElementById("lup-cost11").classList.add("Lup-cost")
        document.getElementById("lup-cost11").classList.remove("Lup-bought")
    }
    if(player.LinearEssence.gte(player.linear_upgrades.up12.cost) && player.linear_upgrades.up12.bought != true) {
        document.getElementById("lup-cost12").classList.remove("Lup-cost")
        document.getElementById("lup-cost12").classList.add("Lup-bought")
    }
    else if (player.linear_upgrades.up12.bought === true) {
        document.getElementById("lup-cost12").classList.remove("Lup-cost")
        document.getElementById("lup-cost12").classList.add("Lup-buy")
    }
    else if (player.LinearEssence.lt(player.linear_upgrades.up12.cost) && player.linear_upgrades.up12.bought != true) {
        document.getElementById("lup-cost12").classList.add("Lup-cost")
        document.getElementById("lup-cost12").classList.remove("Lup-bought")
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
    if(player.points.gte(1e10)) {
        document.getElementById("ResetForLE").classList.add("unlocked")
    }
    if(player.linear_upgrades.up8.bought === true) {
        document.getElementById("Chals-tab").classList.add("unlocked")
        document.getElementById("Linear-chals-guide").classList.add("unlocked")
    }
    if(player.linear_upgrades.up4.bought === true) {
        document.getElementById("NBuyer").classList.add("unlocked")
        document.getElementById("Lrow2").classList.add("unlocked")
    }
    if(player.linear_upgrades.up3.bought === true) {
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
    if(player.linear_upgrades.up8.bought === true) {
        document.getElementById("Lrow3").classList.add("unlocked")
    }
    if(player.linear_upgrades.up12.bought === true) {
        document.getElementById("Squares-tab").classList.add("unlocked")
    }
    if(player.achievements.achv1.completed === true) {
        document.getElementById("Achv-1").classList.add("completed")
    }
    if(player.achievements.achv2.completed === true) {
        document.getElementById("Achv-2").classList.add("completed")
    }
    if(player.achievements.achv3.completed === true) {
        document.getElementById("Achv-3").classList.add("completed")
    }
    if(player.achievements.achv4.completed === true) {
        document.getElementById("Achv-4").classList.add("completed")
    }
    if(player.achievements.achv5.completed === true) {
        document.getElementById("Achv-5").classList.add("completed")
    }
    if(player.achievements.achv6.completed === true) {
        document.getElementById("Achv-6").classList.add("completed")
    }
    if(player.achievements.achv7.completed === true) {
        document.getElementById("Achv-7").classList.add("completed")
    }
    if(player.achievements.achv8.completed === true) {
        document.getElementById("Achv-8").classList.add("completed")
    }
    if(player.achievements.achv9.completed === true) {
        document.getElementById("Achv-9").classList.add("completed")
    }
    if(player.achievements.achv10.completed === true) {
        document.getElementById("Achv-10").classList.add("completed")
    }
    if(player.achievements.achv11.completed === true) {
        document.getElementById("Achv-11").classList.add("completed")
    }
    if(player.achievements.achv12.completed === true) {
        document.getElementById("Achv-12").classList.add("completed")
    }
    if(player.achievements.achv13.completed === true) {
        document.getElementById("Achv-13").classList.add("completed")
    }
    if(player.achievements.achv14.completed === true) {
        document.getElementById("Achv-14").classList.add("completed")
    }
}

var LastUpdate = Date.now()

function CalculatePointGain() {
    let gain = new Decimal(0)
    gain = gain.add(player.buildings.Classmate.amount.mul(player.buildings.Classmate.eff))
    gain = gain.add(player.buildings.Teacher.amount.mul(player.buildings.Teacher.eff))
    gain = gain.add(player.buildings.Professor.amount.mul(player.buildings.Professor.eff))
    gain = gain.mul(player.equations.equation1.x)
    gain = gain.mul(CalculateLEegain())
    gain = gain.mul(player.squares_and_prism.squares.eff)
    gain = gain.mul(player.squares_and_prism.square_prism.eff)
    if(player.upgrades.up4.bought === true) {
        gain = gain.mul(player.upgrades.up4.eff)
    }
    if(player.linear_upgrades.up1.bought === true) {
        gain = gain.mul(player.linear_upgrades.up1.eff)
    }
    if(player.linear_challenges.chal1.inChal === true || player.linear_challenges.chal4.inChal === true) {
        gain = gain.add(1)
        gain = gain.log10()
    }
    if(player.linear_challenges.chal1.completed === true) {
        gain = gain.mul(player.linear_challenges.chal1.eff)
    }
    if(player.linear_upgrades.up10.bought === true) {
        gain = gain.mul(player.linear_upgrades.up10.eff)
    }
    return gain
}

function CalculateClassmateMult() {
    let cmult = new Decimal(1)
    cmult = cmult.mul(CalculateLEegain())
    if(player.upgrades.up1.bought === true) {
        cmult = cmult.mul(player.upgrades.up1.eff)
    }
    if(player.linear_upgrades.up2.bought === true) {
        cmult = cmult.mul(5)
    }
    if(player.linear_upgrades.up5.bought === true) {
        cmult = cmult.mul(player.linear_upgrades.up5.eff)
    }
    if(player.linear_challenges.chal3.completed === true) {
        cmult = cmult.mul(3)
    }
    return cmult
}

function CalculateClassmateCost() {
    let ccost = new Decimal(10)
    if(player.buildings.Classmate.amount.gt(0)) {
        ccost = ccost.mul(new Decimal(1.3).pow(player.buildings.Classmate.amount))
    }
    return ccost
}

function CalculateTeacherCost() {
    let tcost = new Decimal(200)
    if(player.buildings.Teacher.amount.gt(0)) {
        tcost = tcost.mul(new Decimal(1.3).pow(player.buildings.Teacher.amount))
    }
    return tcost
}

function CalculateProfessorCost() {
    let pcost = new Decimal(2000)
    if(player.buildings.Professor.amount.gt(0)) {
        pcost = pcost.mul(new Decimal(1.3).pow(player.buildings.Professor.amount))
    }
    return pcost
}

function CalculateTeacherMult() {
    let tmult = new Decimal(20)
    tmult = tmult.mul(CalculateLEegain())
    if(player.upgrades.up2.bought === true) {
        tmult = tmult.mul(player.upgrades.up2.eff)
    }
    if(player.linear_upgrades.up5.bought === true) {
        tmult = tmult.mul(player.linear_upgrades.up5.eff)
    }
    return tmult
}

function CalculateProfessorMult() {
    let pmult = new Decimal(150)
    pmult = pmult.mul(CalculateLEegain())
    if(player.upgrades.up5.bought === true) {
        pmult = pmult.mul(player.upgrades.up5.eff)
    }
    if(player.linear_upgrades.up5.bought === true) {
        pmult = pmult.mul(player.linear_upgrades.up5.eff)
    }
    return pmult
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
        LEgain = new Decimal(new Decimal(1.1).pow((player.equations.equation2.y.div(20).sub(1))).mul(new Decimal(1.3).pow(player.equations.equation1.x.add(1).log10())))
    }
    if(player.linear_upgrades.up6.bought === true) {
        LEgain = LEgain.mul(player.linear_upgrades.up6.eff)
    }
    LEgain = LEgain.floor()
    return LEgain
}

function CalculateLPgain() {
    let LPgain = new Decimal(0)
    LPgain = LPgain.add(CalculateLEegain())
    if (player.linear_upgrades.up11.bought === true) {
        LPgain = LPgain.mul(player.linear_upgrades.up11.eff)
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
    player.buildings.Classmate.eff = CalculateClassmateMult()
    player.buildings.Teacher.eff = CalculateTeacherMult()
    player.buildings.Professor.eff = CalculateProfessorMult()
    player.buildings.Classmate.cost = CalculateClassmateCost()
    player.buildings.Teacher.cost = CalculateTeacherCost()
    player.buildings.Professor.cost = CalculateProfessorCost()
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