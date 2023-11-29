import MacBookSubcategoryPage from "./MacBookSubcategoryPage";

class AppleCategoryPage {
  getMacSubcategoryLink = () =>
    cy.get('#menu [href="#mac-section"]');
    getMacMoreDetailsLink = () => cy.get('#mac-section .button-more-detalis');

  clickMacSubcategoryLink() {
    this.getMacSubcategoryLink().click();
    return this;
  }

  clickMacMoreDetailsLink() {
    this.getMacMoreDetailsLink().click();
    return new MacBookSubcategoryPage();
  }
}
export default AppleCategoryPage;
