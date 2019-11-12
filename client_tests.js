const {Builder, By, Key, until} = require('selenium-webdriver');
const Utils = require('./utils');

async function DoTests()
{
    console.log('Client tests Goes here...');
}

module.exports = {
    Run: async function ()
    {
        await DoTests();
    }
};