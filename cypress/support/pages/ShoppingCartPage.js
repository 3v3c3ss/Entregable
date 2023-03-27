export class ShoppingCartPage {

    constructor() {
        this.showTotalPrice = 'Show total price';
    };
    
    returnProduct(products) {
        return cy.contains(products);
    };

    returnProductPrice(productsName) {
//        cy.log("LOGUEA ----" + cy.contains(productsName).siblings('#productPrice'));
        return cy.contains(productsName).siblings('#productPrice');
    };

    clickShowTotalPrice() {
        cy.contains(this.showTotalPrice).click();
    };

};
