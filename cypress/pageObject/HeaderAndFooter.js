import LoginWindow from "./LoginWindow";
import SearchResultsPage from "./SearchResultsPage";

class HeaderAndFooter {
  getLoginBtn = () => cy.get(".mh-profile");
  getSerchInputField = () => cy.get("#search-form__input");
  getCatalogueBtn = () => cy.get(".ct-button");
  getCategoriesList = () => cy.get(".mm__list .mm__item");

  clickLoginBtn() {
    this.getLoginBtn().click();
    return new LoginWindow();
  }

  typeSerchInputField(item) {
    this.getSerchInputField().clear().type(item).type("{enter}");
    return new SearchResultsPage();
  }

  clickCatalogueBtn() {
    this.getCatalogueBtn().click();
    return this;
  }

  clickEachCategory(ind) {
    this.getCategoriesList().eq(ind).click();
    return cy.url();
  }
}
export default HeaderAndFooter;
