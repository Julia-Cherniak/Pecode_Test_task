import HomePage from "./HomePage";

class LoginWindow {
  getLoginAndPasswordBtn = () =>
    cy.get('button[type="submit"]').contains("Логін та пароль");
  getEmailField = () => cy.get('input[name="phoneEmail"]');
  getPasswordField = () => cy.get('input[name="password"]');
  getSubmitBtn = () => cy.get('button[type="submit"]').contains("Увійти");

  clickLoginAndPasswordBtn() {
    this.getLoginAndPasswordBtn().click();
    return this;
  }

  typeEmailField(email) {
    this.getEmailField().clear().type(email);
    return this;
  }

  typePasswordField(password) {
    this.getPasswordField().clear().type(password);
    return this;
  }

  clickSubmitBtn() {
    this.getSubmitBtn().click();
    return new HomePage();
  }
}
export default LoginWindow;
