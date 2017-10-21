var expect = require("chai").expect;

var PayslipService = require('../payslip-service');
var MonthlyPayslip = require('../monthly-payslip');

describe('PayslipService', () => {
    var payslipService = new PayslipService();

    describe('When there is a gross income between $37,001-$80,000 range', () => {
        beforeEach(() => {
            payslip = payslipService.generate('60050', '9%');
        });

        it('should calculate tax as expected', () => {
            expect(payslip).to.deep.equal(
                new MonthlyPayslip(60050, 11063, 0.09)
            );
        });
    });

    describe('When there is a gross income between $80,001-$180,000 range', () => {
        beforeEach(() => {
            payslip = payslipService.generate('120000', '10%');
        });

        it('should calculate tax as expected', () => {
            expect(payslip).to.deep.equal(
                new MonthlyPayslip(120000, 32347, 0.1)
            );
        });
    });

    describe('When there is a gross income of $18200', () => {
        beforeEach(() => {
            payslip = payslipService.generate('18200', '10%');
        });

        it('should have no tax', () => {
            expect(payslip).to.deep.equal(
                new MonthlyPayslip(18200, 0, 0.1)
            );
        });
    });

    describe('When there is a gross income above $18200', () => {
        beforeEach(() => {
            payslip = payslipService.generate('18300', '10%');
        });

        it('should have tax over the excess ($100 at 19c per 1$)', () => {
            expect(payslip).to.deep.equal(
                new MonthlyPayslip(18300, 19, 0.1)
            );
        });
    });

    describe('When there is a gross income at exact tax range limit $80000', () => {
        beforeEach(() => {
            payslip = payslipService.generate('80000', '10%');
        });

        it('should only have base tax', () => {
            expect(payslip).to.deep.equal(
                new MonthlyPayslip(80000, 17547, 0.1)
            );
        });
    });
});
