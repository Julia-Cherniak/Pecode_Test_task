/// <reference types="cypress" />
import loginWindowData from "../fixtures/loginWindowData.json";
import HomePage from "../pageObject/HomePage";
import homePageData from "../fixtures/homePageData.json";
import basketWindowData from "../fixtures/basketWindowData.json";

describe("basket", () => {
  const homePage = new HomePage();

  beforeEach(() => {
    cy.visit("/");
    cy.login(loginWindowData.email, loginWindowData.password);
  });

  it("TC_002 Add items 'Мікрохвильова піч Ardesto GO-S724W' and 'Ноутбук Apple MacBook Air 13 M1 (MGN63) Space Grey' to the basket", () => {
    homePage
      .verifyHomePageUrl(homePageData.url)
      .clickHouseholdAppliancesCategoryLink()
      .clickMicrowaveOvensLink()
      .clickArdestoGoS724WBuyBtn()
      .clickComeBackLink()
      .clickInternetShopLink()
      .clickAppleCategoryLink()
      .clickMacSubcategoryLink()
      .clickMacMoreDetailsLink()
      .clickMacBookAir13M1SpaceGreyBuyBtn()
      .verifyProductsList(
        basketWindowData.productsInBasket,
        basketWindowData.productsQuantity[0],
        basketWindowData.productsQuantity[1]
      )
      .verifyProductsPrice(basketWindowData.totalSum)
      .getDeleteBtn()
      .should('not.have.attr', 'disabled');
  });
});
