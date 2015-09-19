'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('blog', function() {


  it('should automatically redirect to /article when location hash/fragment is empty', function() {
    browser.get('/');
    expect(browser.getLocationAbsUrl()).toMatch("/article");
  });


  describe('viewListArticle', function() {

    beforeEach(function() {
      browser.get('/#/article');
    });


    it('should render viewListArticle when user navigates to /article', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/This is the partial for listArticle./);
    });

  });


  describe('viewContact', function() {

    beforeEach(function() {
      browser.get('/#/contact');
    });


    it('should render viewContact when user navigates to /viewContact', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/This is the partial for viewContact./);
    });

  });
});
