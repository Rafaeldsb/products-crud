var Helper = {
    compoundInterest: (value, rate, quantity) => {
        return value * rate / (1 - Math.pow(1 + rate, -quantity))
    }
};

module.exports = Helper;