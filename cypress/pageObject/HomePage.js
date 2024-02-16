import HouseholdAppliancesCategoryPage from "./HouseholdAppliancesCategoryPage.cy";
import AppleCategoryPage from "./AppleCategoryPage";

class HomePage {
  getHouseholdAppliancesCategoryLink = () =>
    cy.get('#js-menu-wrapper [href$="bytovaya-tehnika/"]');
  getHomePageUrl = () => cy.url();
  getAppleCategoryLink = () => cy.get('#js-menu-wrapper [href$="apple-store/"]');

  clickHouseholdAppliancesCategoryLink() {
    cy.intercept('POST', 'https://ams.creativecdn.com/tags/v2?type=json').as('pageLoading');
    cy.wait('@pageLoading');
    this.getHouseholdAppliancesCategoryLink().click();
    return new HouseholdAppliancesCategoryPage();
  }

  verifyHomePageUrl(link) {
    this.getHomePageUrl().should("equal", link);
    return this;
  }

  clickAppleCategoryLink() {
    this.getAppleCategoryLink().click();
    return new AppleCategoryPage();
  }
}
export default HomePage;
