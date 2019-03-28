const helper = require('../utils/helper');

test('Juros compostos: compoundInterest(46.5, 0.025, 4).toFixed(2) == 12.36', () => {
    expect(Number(helper.compoundInterest(46.5, 0.025, 4).toFixed(2))).toBe(12.36);
});

test('Juros compostos: compoundInterest(10, 0.05, 7).toFixed(2) == 1.73', () => {
    expect(Number(helper.compoundInterest(10, 0.05, 7).toFixed(2))).toBe(1.73);
});