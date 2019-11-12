const {Builder, By, Key, until} = require('selenium-webdriver');
const Utils = require('./utils');

async function Signin(driver)
{
	await driver.findElement(By.id('login_email')).sendKeys('demo');
	await Utils.WaitAsHuman();
	await driver.findElement(By.id('login_password')).sendKeys('0212wisa');
	await Utils.WaitAsHuman();
	await driver.findElement(By.id('submit_login')).click();
	await driver.wait(until.elementLocated(By.xpath("//a[contains(text(),'FINAL')]")), 3000)//a.navbar-brand
	console.log('Signed-in successfully.');
}

async function Signout(driver)
{
	await driver.findElement(By.css('.img-avatar')).click();
	await Utils.WaitAsHuman();
	await driver.findElement(By.id('LogoutButton')).click();
	await Utils.WaitAsHuman();
	await Utils.AcceptJavascriptPrompt(driver);
	await driver.wait(until.titleIs('Final Manager'), 3000);
	console.log('Signed-out successfully.');
}

module.exports = {
    Signin: async function (driver)
    {
        return Signin(driver);
    },
    Signout: async function (driver)
    {
        return Signout(driver);
    }
};