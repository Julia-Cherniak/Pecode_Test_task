import BasketWindow from "./BasketWindow";
import HomePage from "./HomePage";

class MicrowaveOvensSubcategoryPage {
  getReadyToShipFilter = () => cy.get('[data-id="in_stock"]');
  getPriceInputFieldsFilter = () => cy.get('[data-range-filter="price"] input');
  getProducerSumsungFilter = () =>
    cy.get('[href$="mikrovolnovki/proizvoditel-samsung/"]');
  getConfirmFilterBtn = () => cy.get(".f-popup");
  getMicrowaveOvensPrice = () => cy.get(".discount .sum");
  getArdestoGoS724WBuyBtn = () => cy.get('[data-product-id="4709948"] [title="Купити"]');
  getInternetShopLink = () => cy.get('#breadcrumbs [href="https://allo.ua/"]');

  clickReadyToShipFilter() {
    this.getReadyToShipFilter().click();
    return this;
  }

  typePriceFromInputFieldFilter(price) {
    this.getPriceInputFieldsFilter().eq(0).clear().type(price);
    return this;
  }

  typePriceToInputFieldFilter(price) {
    this.getPriceInputFieldsFilter().eq(1).clear().type(price);
    return this;
  }

  clickProducerSumsungFilter() {
    this.getProducerSumsungFilter().click();
    return this;
  }

  clickConfirmFilterBtn() {
    this.getConfirmFilterBtn().click();
    cy.wait(4000);
    return this;
  }

  clickArdestoGoS724WBuyBtn() {
    this.getArdestoGoS724WBuyBtn().click();
    return new BasketWindow();
  }

  clickInternetShopLink() {
    this.getInternetShopLink().click();
    return new HomePage();
  }
}
export default MicrowaveOvensSubcategoryPage;
