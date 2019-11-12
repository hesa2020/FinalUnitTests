const {Builder, By, Key, until} = require('selenium-webdriver');

function sleep(ms)
{
	return new Promise(resolve =>
	{
        setTimeout(resolve,ms)
    });
}

async function WaitAsHuman()
{
	await sleep(500);
}

async function AcceptJavascriptPrompt(driver)
{
	await driver.switchTo().alert().accept();
	await WaitAsHuman();
}

async function CloseModal(driver)
{
	await driver.wait(until.elementLocated(By.xpath("//button[@onclick='CloseModal();']")), 3000)//button CloseModal
	await driver.findElement(By.xpath("//button[@onclick='CloseModal();']")).click();
	await WaitAsHuman();
	console.log('Closed modal.');
}

module.exports = {
    sleep: function (ms)
    {
        return sleep(ms);
    },
    WaitAsHuman: async function()
    {
        return WaitAsHuman();
    },
    AcceptJavascriptPrompt: async function(driver)
    {
        return AcceptJavascriptPrompt(driver);
    },
    CloseModal: async function(driver)
    {
        return CloseModal(driver);
    }
};