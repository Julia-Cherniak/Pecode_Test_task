/// <reference types="cypress" />
import HomePage from "../pageObject/HomePage";
import homePageData from "../fixtures/homePageData.json";
import microwaveOvensSubcategoryData from "../fixtures/microwaveOvensSubcategoryData.json";

describe("householdAppliancesCategory", () => {
  const homePage = new HomePage();

  beforeEach(() => {
    cy.visit("/");
  });

  it('TC_001 Verify if the price filter working correctly for the "Побутова техніка - Для кухні - Мікрохвильові печі" category', () => {
    homePage
      .verifyHomePageUrl(homePageData.url)
      .clickHouseholdAppliancesCategoryLink()
      .clickMicrowaveOvensLink()
      .clickReadyToShipFilter()
      .typePriceFromInputFieldFilter(microwaveOvensSubcategoryData.fromPrice)
      .typePriceToInputFieldFilter(microwaveOvensSubcategoryData.toPrice)
      .clickProducerSumsungFilter()
      .clickConfirmFilterBtn()
      .getMicrowaveOvensPrice()
      .then(($els) => {
        let actualPrice = Cypress.$.makeArray($els)
          .map(($el) => $el.innerText)
          .map((el) => +el.replace(/\s/g, ""));
        let expectedPrice = actualPrice.slice().sort((a, b) => a - b);
        expect(actualPrice).to.deep.equal(expectedPrice);
      });
  });
});