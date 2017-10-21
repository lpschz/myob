var TaxRange = require('./tax-range');
var MonthlyPayslip = require('./monthly-payslip');
var find = require('lodash/find');

/**
 * Represents tax rates for 2012-2013.
 * @type {Array}
 */
var taxRanges = [
    new TaxRange(0, 18200, 0, 0),
    new TaxRange(18201, 37000, 0.19, 0),
    new TaxRange(37001, 80000, 0.325, 3572),
    new TaxRange(80001, 180000, 0.37, 17547),
    new TaxRange(1800001, null, 0.45, 54547),
];

/**
 * PayslipService is responsible for generating a monthly payslip
 * provided annual gross salary and super rate.
 *
 * @type {Class}
 */
class PayslipService {
    /**
     * Generates a monthly payslip object provided annual gross income and super percentage.
     *
     * @param  {String} annualGrossSalary
     * @param  {String} superPercentage
     * @return {Object<MontlyPayslip>}
     */
    generate(annualGrossSalary, superPercentage) {
        annualGrossSalary = parseFloat(annualGrossSalary);
        superPercentage = parseFloat(superPercentage);

        var annualTax = this._getAnnualTax(annualGrossSalary);
        var annualNet = annualGrossSalary - annualTax;
        var annualSuper = (annualGrossSalary * superPercentage)/100;

        return new MonthlyPayslip(annualGrossSalary, annualTax, superPercentage / 100);
    }

    /**
     * @private
     * @param  {Number} grossSalary
     * @return {Object<TaxRange>}
     */
    _getTaxRange(grossSalary) {
        return find(taxRanges, (taxRange) => {
            return taxRange.max === null || grossSalary <= taxRange.max;
        });
    }

    /**
     * @private
     * @param  {Number} grossSalary
     * @return {Number}
     */
    _getAnnualTax(grossSalary) {
        var taxRange = this._getTaxRange(grossSalary);
        var difference = grossSalary - taxRange.min;

        return Math.round(taxRange.base + (difference * taxRange.rate));
    }
}

module.exports = PayslipService
