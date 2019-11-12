const {Builder, By, Key, until} = require('selenium-webdriver');
const Utils = require('./utils');
const client_tests = require('./client_tests');
const Account = require('./account_tests');
var driver;

async function Run()
{
	try
	{
		driver = await new Builder().withCapabilities({
			'browserName': process.platform === 'win32' ? 'chrome' : 'safari',
			'platform': process.platform === 'win32' ? 'win32' : 'osx',
			'version': 'latest',
		}).build();
		
		await driver.get('https://finaldev.equipemicrofix.com');
	
		var title = await driver.getTitle();

		console.assert(title == 'Final Manager');//If this is not the right website or if page is unavailable

		await Utils.WaitAsHuman();
		await Account.Signin(driver);
		await Utils.WaitAsHuman();

		await Utils.CloseModal(driver);
		await Utils.WaitAsHuman();

		await client_tests.Run();

		await Account.Signout(driver);
		await Utils.WaitAsHuman();
		await Utils.WaitAsHuman();

		driver.quit();
	}
	catch(error)
	{
		console.error(error);
		driver.quit();
		process.exit(1);
	}	 
}

Run().then(function()
{
});