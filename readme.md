### MYOB coding exercise

## Getting started
 - Make sure you have got `node` and `npm` installed. Note: version 7 was used for this. You can change the node version easily by installing `nvm` (node virtual machine).
 - `cd` into the folder and run `npm install`
   - *Note:* if you installed `nvm`, then run `nvm install 7`, and then `nvm use 7`

## Running App
 - Run `npm start`

## Running Unit Tests
 - Run `npm test`

## Notes
 - I assumed the main part of the exercise was calculating the payslip, so didn't bother much in the file index.js, where I read a csv file and parse it. I would have used JSON files for simplicity (especially because I'm usin NodeJS), however since the exercise mentioned CSV I sticked to it.
 - Would have added more unit tests covering all the possible ranges for the payslip service.
