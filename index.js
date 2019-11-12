var webdriver = require('selenium-webdriver'), driver;

async function Run()
{
	driver = await new webdriver.Builder().withCapabilities({
		'browserName': 'safari',
		'platform': 'osx',
		'version': 'latest',
	}).build();
	 
	await driver.get('https://www.google.com');
	 
	driver.getTitle().then(function (title)
	{
		console.log("title is: " + title);
	});
	 
	driver.quit();
}

Run().then(function()
{
	console.log("Completed");
});