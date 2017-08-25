var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('https://script.google.com/a/macros/correounivalle.edu.co/s/AKfycbyKDr4iKcli_Z3X0ypfFlA_UeC7EYuETpzHOh192QM/dev');

driver.findElement(By.id('identifierId')).sendKeys('losmasporras');
driver.findElement(By.className('RveJvd snByac')).click();

driver.findElement(By.id('password')).sendKeys('porras2017');
driver.findElement(By.className('RveJvd snByac')).click();