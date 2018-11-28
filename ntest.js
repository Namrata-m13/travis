var webdriver = require('selenium-webdriver');
var assert=require('assert');

// Input capabilities
var capabilities = {
 'browserName' : 'Chrome',
 'browser_version' : '62.0',
 'os' : 'Windows',
 'os_version' : '10',
 'resolution' : '1024x768',
 'browserstack.user' : process.env.USERNAME,
 'browserstack.key' : process.env.ACCESS_KEY
};

var driver = new webdriver.Builder().
  usingServer('http://hub-cloud.browserstack.com/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('http://bs-local.com:45691/check').then(function(){
  driver.findElement(webdriver.By.tagName('body')).getText().then(function (ans2){
    if(assert.equal("Up and running",ans2)=== undefined){
        console.log("Correct value 2");
        driver.quit();
    }
  });
});
