import HouseholdAppliancesCategoryPage from "./HouseholdAppliancesCategoryPage.cy";
import AppleCategoryPage from "./AppleCategoryPage";

class HomePage {
  getHouseholdAppliancesCategoryLink = () =>
    cy.get('#js-menu-wrapper [href$="bytovaya-tehnika/"]');
  getHomePageUrl = () => cy.url();
  getAppleCategoryLink = () => cy.get('#js-menu-wrapper [href$="apple-store/"]');

  clickHouseholdAppliancesCategoryLink() {
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
