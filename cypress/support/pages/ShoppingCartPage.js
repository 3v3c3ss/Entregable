export class ShoppingCartPage {

    constructor() {
        this.showTotalPrice = 'Show total price';
    };
    
    returnProduct(products) {
        return cy.contains(products);
    };

    returnProductPrice(products) {
        return cy.get(`[name="${products}"]`);
    };

    clickShowTotalPrice() {
        cy.contains(this.showTotalPrice).click();
    };

};
