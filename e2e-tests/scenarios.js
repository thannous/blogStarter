'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /viewListArticle when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/viewListArticle");
  });


  describe('viewListArticle', function() {

    beforeEach(function() {
      browser.get('index.html#/viewListArticle');
    });


    it('should render viewListArticle when user navigates to /viewListArticle', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('viewContact', function() {

    beforeEach(function() {
      browser.get('index.html#/viewContact');
    });


    it('should render viewContact when user navigates to /viewContact', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
