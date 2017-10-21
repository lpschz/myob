/**
 * Monthly payslip is a class that is responsible
 * for generating monthly payslip values provided the required anual values.
 *
 * @type {class}
 */
class MonthlyPayslip {
    constructor (annualGrossSalary, annualTax, supRate) {
        this.annualGrossSalary = annualGrossSalary;
        this.annualTax = annualTax;
        this.supRate = supRate;
    }

    getGrossIncome () {
        return Math.round(this.annualGrossSalary / 12);
    }

    getIncomeTax () {
        return Math.round(this.annualTax / 12);
    }

    getNetIncome () {
        return Math.max(0, Math.round(this.getGrossIncome() - this.getIncomeTax()));
    }

    getSuper () {
        return Math.round(this.getGrossIncome() * this.supRate)
    }
}

module.exports = MonthlyPayslip
