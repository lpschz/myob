var expect = require("chai").expect;

var MonthlyPayslip = require('../payslip/monthly-payslip');

describe('Monthly Payslip', () => {
    var payslip;

    describe('When there is gross income, tax income and super rate', () => {
        beforeEach(() => {
            payslip = new MonthlyPayslip(120, 24, 0.5)
        });

        it('should return monthly gross income', () => {
            expect(payslip.getGrossIncome()).to.equal(10);
        });

        it('should return monthly tax income', () => {
            expect(payslip.getIncomeTax()).to.equal(2);
        });

        it('should return monthly net income', () => {
            expect(payslip.getNetIncome()).to.equal(8);
        });

        it('should return monthly super income', () => {
            expect(payslip.getSuper()).to.equal(5);
        });
    });

    describe('When there is no gross income', () => {
        beforeEach(() => {
            payslip = new MonthlyPayslip(0, 24, 0.5)
        });

        it('should return no monthly gross income', () => {
            expect(payslip.getGrossIncome()).to.equal(0);
        });

        it('should return monthly tax income', () => {
            expect(payslip.getIncomeTax()).to.equal(2);
        });

        it('should return no monthly net income', () => {
            expect(payslip.getNetIncome()).to.equal(0);
        });

        it('should return no monthly super income', () => {
            expect(payslip.getSuper()).to.equal(0);
        });
    });

    describe('When there is no tax', () => {
        beforeEach(() => {
            payslip = new MonthlyPayslip(120, 0, 0.5)
        });

        it('should return monthly gross income', () => {
            expect(payslip.getGrossIncome()).to.equal(10);
        });

        it('should return monthly tax income', () => {
            expect(payslip.getIncomeTax()).to.equal(0);
        });

        it('should return monthly net income', () => {
            expect(payslip.getNetIncome()).to.equal(10);
        });

        it('should return monthly super income', () => {
            expect(payslip.getSuper()).to.equal(5);
        });
    });

    describe('When there is no super', () => {
        beforeEach(() => {
            payslip = new MonthlyPayslip(120, 24, 0)
        });

        it('should return monthly gross income', () => {
            expect(payslip.getGrossIncome()).to.equal(10);
        });

        it('should return monthly tax income', () => {
            expect(payslip.getIncomeTax()).to.equal(2);
        });

        it('should return monthly net income', () => {
            expect(payslip.getNetIncome()).to.equal(8);
        });

        it('should return monthly super income', () => {
            expect(payslip.getSuper()).to.equal(0);
        });
    });
});
