var PayslipService = require('./payslip/payslip-service');
var csvParse = require('csv-parse');
var payslipService = new PayslipService();
var fs = require('fs');

// Parse input.csv and print results in terminal
fs.readFile('./data/input.csv', 'utf8', (err, data) => {
  if (err) throw err;
  csvParse(data, (err, jsonData) => {
      if (err) throw err;

      jsonData.forEach(row => {
          var payslip = payslipService.generate(row[2], row[3]);

          console.log(row[0], row[1], row[4],
              payslip.getGrossIncome(),
              payslip.getIncomeTax(),
              payslip.getNetIncome(),
              payslip.getSuper()
          );
      });
  });
});
