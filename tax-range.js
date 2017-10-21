/**
 * TaxRange holds information about different tax data for different
 * tax ranges.
 *
 * @type {Class}
 */
class TaxRange {
    constructor (min, max, rate, base) {
        this.min = min;
        this.max = max;
        this.base = base;
        this.rate = rate;
    }
}

module.exports = TaxRange
