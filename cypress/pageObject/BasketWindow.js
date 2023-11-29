import MicrowaveOvensSubcategoryPage from "./MicrowaveOvensSubcategoryPage";

class BasketWindow {
  getComeBackLink = () => cy.get(".comeback");
  getProductsList = () => cy.get("[data-product-name]");
  getProductsQuantity = () => cy.get(".qty__count .input");
  getProductsPrice = () => cy.get(".price-box__cur");
  getDeleteBtn = () => cy.get('.products_list_item .remove');

  clickComeBackLink() {
    this.getComeBackLink().click();
    return new MicrowaveOvensSubcategoryPage();
  }

  verifyProductsList(busketList, quantity1, quantity2) {
    this.getProductsList()
      .then(($els) => {
        return Cypress.$.makeArray($els).map(($el) => $el.innerText);
      })
      .should("deep.eql", busketList)
      .and('have.length', busketList.length);
    this.getProductsQuantity().eq(0).should("have.value", quantity1);
    this.getProductsQuantity().eq(1).should("have.value", quantity2);
    return this;
  }

  verifyProductsPrice(totalSum) {
    this.getProductsPrice().then(($els) => {
      let arr = Cypress.$.makeArray($els).map(($el) => $el.innerText);
      let sum = arr
        .map((el) => +el.replace(/[^\d]/g, ""))
        .reduce((sum, el) => sum + el, 0);
      expect(sum).to.be.eql(totalSum);
    });
    return this;
  }
}
export default BasketWindow;
