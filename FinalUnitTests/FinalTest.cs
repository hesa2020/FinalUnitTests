using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium.Support.UI;
using System;
using System.Threading;

namespace FinalSelenium
{
    class FinalTest
    {
        IWebDriver driver;

        [SetUp]
        public void StartBrowser()
        {
            var service = ChromeDriverService.CreateDefaultService();
            service.HideCommandPromptWindow = true;

            var options = new ChromeOptions();
            //options.AddArguments("--headless");

            var commandTimeout = TimeSpan.FromSeconds(120);

            driver = new ChromeDriver(service, options, commandTimeout);
        }

        [Test]
        public void Test()
        {
            driver.Url = "https://finaldev.equipemicrofix.com";
            Signin();
        }

        public void WaitAsHuman()
        {
            Thread.Sleep(500);
        }

        public void Signin()
        {
            Actions action = new Actions(driver);

            IWebElement query = driver.FindElement(By.Id("login_email"));
            action.MoveToElement(query);
            WaitAsHuman();
            query.Click();
            WaitAsHuman();

            query.SendKeys("demo");
            WaitAsHuman();

            query = driver.FindElement(By.Id("login_password"));
            action.MoveToElement(query);
            WaitAsHuman();
            query.Click();
            WaitAsHuman();

            query.SendKeys("0212wisa");
            WaitAsHuman();

            query = driver.FindElement(By.Id("submit_login"));
            action.MoveToElement(query);
            WaitAsHuman();
            query.Click();
            WaitAsHuman();

            var wait = new WebDriverWait(driver, TimeSpan.FromSeconds(30));

            wait.Until(ExpectedConditions.ElementIsVisible(By.XPath("//button[@onclick='SubmitPunchInOut();']")));

            WaitAsHuman();

            query = driver.FindElement(By.XPath("//button[@onclick='SubmitPunchInOut();']"));
            action.MoveToElement(query);
            WaitAsHuman();
        }


        [TearDown]
        public void CloseBrowser()
        {
            driver.Close();
        }
    }
}
