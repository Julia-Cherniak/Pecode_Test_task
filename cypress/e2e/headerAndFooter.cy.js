/// <reference types="cypress" />
import HeaderAndFooter from "../pageObject/HeaderAndFooter";
import headerAndFooterData from "../fixtures/headerAndFooterData.json";
import HomePage from "../pageObject/HomePage";
import homePageData from "../fixtures/homePageData.json";
import searchResultsData from "../fixtures/searchResultsData.json";

describe("headerAndFooter", () => {
  const homePage = new HomePage();
  const headerAndFooter = new HeaderAndFooter();

  beforeEach(() => {
    cy.visit("/");
  });

  it('TC_003 Search the item "Лялька L.O.L', () => {
    homePage.verifyHomePageUrl(homePageData.url);
    headerAndFooter
      .typeSerchInputField(headerAndFooterData.itemForSearch)
      .getProductCardTitle()
      .each(($el) => {
        cy.wrap($el).should("contain", searchResultsData.keyWord);
      });
  });

  headerAndFooterData.categoriesList.forEach((pageName, ind) => {
    it(`TC_004 Verify user can click on ${pageName} page and be redirected to the page`, function () {
      headerAndFooter
        .clickCatalogueBtn()
        .clickEachCategory(ind)
        .should("contain", headerAndFooterData.endPointUrl[ind]);
    });
  });
});
