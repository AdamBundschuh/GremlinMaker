import {GremlinMaker} from "./gremlin-maker.js";
const gMaker = new GremlinMaker;
gMaker.updateCounts();
gMaker.gizmoPic.addEventListener("click", () => gMaker.recordClick());
gMaker.autoClickBtn.addEventListener("click", () => gMaker.purchaseAutoClicker());
gMaker.multiBtn.addEventListener("click", () => gMaker.purchaseMultiplier());
gMaker.itemThreeBtn.addEventListener("click", () => gMaker.purchaseMoreItems(3));
gMaker.resetBtn.addEventListener("click", () => gMaker.resetGame());

setInterval(function () {
    //Auto Clickers
    gMaker.clickCount += (gMaker.autoClickers * gMaker.multiAmount) / 100;
    gMaker.clickCount += ((gMaker.itemThreeAmt * 2) * gMaker.multiAmount) / 100;
    gMaker.updateCounts();

    //Button Enabler/Disabler
    //Gremlin Eggs - Item One
    (gMaker.autoClickCost > gMaker.clickCount) 
    ? 
    (gMaker.autoClickBtn.setAttribute("disabled",true),
    gMaker.autoClickIcon.setAttribute("disabled", true))
    :
    (gMaker.autoClickBtn.removeAttribute("disabled"),
    gMaker.autoClickIcon.removeAttribute("disabled"));

    //Item Two
    (gMaker.multiCost > gMaker.clickCount) ?
    (gMaker.multiBtn.setAttribute("disabled",true), 
    gMaker.multiIcon.setAttribute("disabled", true))
    : 
    (gMaker.multiBtn.removeAttribute("disabled"),
    gMaker.multiIcon.removeAttribute("disabled"));

    //Item Three
    (gMaker.itemThreeCost > gMaker.clickCount) ?
    (gMaker.itemThreeBtn.setAttribute("disabled",true), 
    gMaker.itemThreeIcon.setAttribute("disabled", true))
    : 
    (gMaker.itemThreeBtn.removeAttribute("disabled"),
    gMaker.itemThreeIcon.removeAttribute("disabled"));
}, 10);