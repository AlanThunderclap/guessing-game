class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.left = min;
        this.right = max;
    }

    guess() {
        this.last = Math.round((this.left + this.right) / 2);
        return this.last;
    }

    lower() {
        this.right = this.last;
    }

    greater() {
        this.left = this.last;
    }
}

module.exports = GuessingGame;
