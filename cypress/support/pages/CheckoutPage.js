export class CheckoutPage {
    constructor() {
        this.firstNameInput = '#FirstName',
        this.lastNameInput = '#lastName',
        this.cardNumberInput = '#cardNumber',
        this.purchaseButton = 'Purchase'
    };

    typeFirstName(firstName) {
        cy.get(this.firstNameInput).type(firstName);
    };

    typeLastName(lastName) {
        cy.get(this.lastNameInput).type(lastName);
    };

    typeCardNumber(cardNumber) {
        cy.get(this.cardNumberInput).type(cardNumber);
    };

    clickPurchase() {
        cy.contains(this.purchaseButton).click();
    };
}