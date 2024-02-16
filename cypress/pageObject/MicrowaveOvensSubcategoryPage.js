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
    cy.intercept('GET', '/ua/catalog/category/update/?toolbar=%7B%22dir%22:%22desc%22,%22order%22:%22product_top_weight%22,%22mode%22:%22grid%22%7D&filters=%7B%22in_stock%22:%22da%22,%22price%22:%7B%22from%22:5000,%22to%22:%2210000%22%7D,%22brand%22:[%22847%22]%7D&qty=28&category_id=129&isAjax=1&currentLocale=uk_UA').as('confirmFilter');
    this.getConfirmFilterBtn().click();
    cy.wait('@confirmFilter');
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
