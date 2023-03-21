export class LoginPage {
    constructor() {
        this.userInput = '#user';
        this.passInput = '#pass';
        this.loginButton = '#submitForm';
    };

    typeUser(user) {
        cy.get(this.userInput).type(user);
    };

    typePassword(password) {
        cy.get(this.passInput).type(password);
    };

    dblclickLogin() {
        cy.get(this.loginButton).click();
    };

    logIn() {
        this.typeUser;
        this.typePassword;
        this.dblclickLogin;
    };
};