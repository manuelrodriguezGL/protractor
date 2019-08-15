describe('Calculator App',() => {

    it('should perform an addition',() => {
      browser.get('http://juliemr.github.io/protractor-demo');
      var firstField = element(by.model('first'));
      var secondField = element(by.model('second'));
      //var plusButton = element.all(by.options('value for (key, value) in operators'));
      var goButton = element(by.id('gobutton'));
      
      var result = element(by.css('h2.ng-binding'));

      firstField.sendKeys('1');
      secondField.sendKeys('2');
      goButton.click();
      expect(result.getText()).toEqual("3");
  
      expect(browser.getTitle()).toEqual('Super Calculator');
    });

    
  });