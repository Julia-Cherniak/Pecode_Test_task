import BasketWindow from "./BasketWindow";

class MacBookSubcategoryPage {
  getMacBookAir13M1SpaceGreyBuyBtn = () =>
    cy.get('[data-product-id="4999929"] [title="Купити"]');

  clickMacBookAir13M1SpaceGreyBuyBtn() {
    this.getMacBookAir13M1SpaceGreyBuyBtn().click();
    return new BasketWindow();
  }
}
export default MacBookSubcategoryPage;
