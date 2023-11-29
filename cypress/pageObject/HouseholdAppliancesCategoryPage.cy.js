import MicrowaveOvensSubcategoryPage from "./MicrowaveOvensSubcategoryPage";

class BeautyAndHealthCategoryPage {
  getMicrowaveOvensLink = () =>
    cy.get('[href$="mikrovolnovki/"].portal-card__link');

  clickMicrowaveOvensLink() {
    this.getMicrowaveOvensLink().click();
    return new MicrowaveOvensSubcategoryPage();
  }
}
export default BeautyAndHealthCategoryPage;
