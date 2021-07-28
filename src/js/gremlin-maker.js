class GremlinMaker {

    //Player Clicks
    gizmoPic = document.querySelector("#overlay-transparent");
    clickDisplay = document.querySelector("#display-clicks");
    combinedGps = document.querySelector("#gremlins-per-second");
    resetBtn = document.querySelector('#reset-btn');

    //Auto-Clickers
    autoClickPrice = document.querySelector("#auto-clicker-price");
    autoClickIcon = document.querySelector("#icon__item-one");
    autoClickNum = document.querySelector("#auto-clickers-owned-banner");
    autoClickBtn = document.querySelector("#auto-clicker-btn");
    autoClickDisplayGps = document.querySelector("#auto-clicker-gps");

    //Multipliers
    multiPrice = document.querySelector("#multiplier-price");
    multiNum = document.querySelector("#multipliers-owned");
    multiBtn = document.querySelector("#multiplier-btn");
    multiAmt = document.querySelector("#current-multi-amount");
    multiIcon = document.querySelector("#icon__item-two");

    //Item Three
    itemThreeBtn = document.querySelector("#item-three-btn");
    itemThreeNum = document.querySelector("#item-three-owned");
    itemThreePrice = document.querySelector("#item-three-price");
    itemThreeDispGps = document.querySelector("#item-three-gps");
    itemThreeIcon = document.querySelector("#icon__item-three");

    constructor() {
        //Global
        this.clickCount = 15000;
        this.totalGps = 0;
        this.playerClick = this.clickCount + Math.pow(1.2, this.multiplier);
        //Auto-Clicker (Item One)
        this.autoClickers = 0;
        this.autoClickCost = 100;
        this.autoClickGps = 0;
        //Multiplier (Item Two)
        this.multiplier = 0;
        this.multiCost = 20;
        this.multiAmount = 0;
        //Item Three (Water Bottle)
        this.itemThreeAmt = 0;
        this.itemThreeCost = 500;
        this.itemThreeGps = 0;
    }

    recordClick = () => {
        this.clickCount = this.clickCount + Math.pow(1.2, this.multiplier);
        this.updateCounts();
    }

    purchaseAutoClicker = () => {
        this.clickCount -= this.autoClickCost;
        this.autoClickers++;
        this.autoClickCost *= 1.15;
        this.updateCounts();
    }

    purchaseMultiplier = () => {
        this.clickCount -= this.multiCost;
        this.multiplier++;
        this.multiCost *= 1.9;
        this.updateCounts();
    }

    purchaseMoreItems = (num) => {
        switch (num) {
            case 2: {
                this.clickCount -= this.itemTwoCost;
                this.itemTwoAmt++;
                this.itemTwoCost *= 1.25;
                break;
            }
            case 3: {
                this.clickCount -= this.itemThreeCost;
                this.itemThreeAmt++;
                this.itemThreeCost *= 1.4;
                break;
            }
        }

        this.updateCounts();
    }

    updateCounts = () => {
        this.multiAmount = Math.pow(1.2, this.multiplier);

        //Calculate individual GPS for use across app
        this.autoClickGps = this.autoClickers * this.multiAmount;
        this.itemTwoGps = (this.itemTwoAmt * 2) * this.multiAmount;
        this.itemThreeGps = (this.itemThreeAmt * 2) *this.multiAmount;

        //Combined GPS from all sources
        this.totalGps = this.autoClickGps + this.itemThreeGps;
        this.clickDisplay.innerHTML = `<span class="soulmaze">Gremlins: ${this.formatNumber(this.clickCount.toFixed(2))}</span>`;
        this.combinedGps.innerHTML = `Currently making ${this.formatNumber(this.totalGps.toFixed(2))} Gremlins per second`;

        //Item Prices
        this.multiPrice.innerHTML = `Cost: ${this.formatNumber(this.multiCost.toFixed(2))} Gremlins`;
        this.autoClickPrice.innerHTML = `Cost: ${this.formatNumber(this.autoClickCost.toFixed(2))} Gremlins`;
        this.itemThreePrice.innerHTML = `Cost: ${this.formatNumber(this.itemThreeCost.toFixed(2))} Gremlins`;

        //Item Amounts
        this.autoClickNum.innerHTML = `${this.autoClickers.toFixed()}`;
        this.multiNum.innerHTML = `${this.multiplier.toFixed()}`;
        this.itemThreeNum.innerHTML = `${this.itemThreeAmt.toFixed()}`;

        //Individual Item GPS/Multi For Display
        this.multiAmt.innerHTML = `Current multiplier x${this.multiAmount.toFixed(1)}`;
        this.autoClickDisplayGps.innerHTML = `Current GPS: ${this.autoClickGps.toFixed(1)}`;
        this.itemThreeDispGps.innerHTML = `Current GPS: ${this.itemThreeGps.toFixed(1)}`;

    }

    resetGame = () => {
        this.clickCount = 0;
        this.totalGps = 0;
        this.autoClickers = 0;
        this.autoClickCost = 100;
        this.multiplier = 0;
        this.multiCost = 20;
        this.multiAmount = 0;
        this.updateCounts;
    }

    formatNumber = (num) => {

        if (num.length > 21) {
            num = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            num = num.substring(0, num.length - 23);
            num += " Qn";
            return num;
        }

        if (num.length > 18) {
            num = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            num = num.substring(0, num.length - 19);
            num += " Qd";
            return num;
        }

        if (num.length > 15) {
            num = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            num = num.substring(0, num.length - 15);
            num += " Tr";
            return num;
        }

        if (num.length > 12) {
            num = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            num = num.substring(0, num.length - 11);
            num += " B";
            return num;
        }

        if (num.length > 9) {
            num = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            num = num.substring(0, num.length - 7);
            num += " M";
            return num;
        }

        if (num.length > 7) {
            num = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            num = num.substring(0, num.length - 3);
            return num;
        }

        if (num.length > 6) {
            num = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            num = num.substring(0, num.length - 3);
            return num;
        }

        return num.substring(0, num.length - 3);
    }

}

export {GremlinMaker};