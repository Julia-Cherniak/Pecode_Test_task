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
      .each(($price) => {
        cy.wrap($price).invoke('text').then((priceText) => {
          const priceValue = parseInt(priceText.replace(/[^\d]/g, ''));
          cy.wrap(priceValue).should('be.gte', microwaveOvensSubcategoryData.fromPrice);
          cy.wrap(priceValue).should('be.lte', microwaveOvensSubcategoryData.toPrice);
        });
      });
  });
});