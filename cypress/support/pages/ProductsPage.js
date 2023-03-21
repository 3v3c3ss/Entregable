export class ProductsPage {

    constructor() {
        this.closeModal = '#closeModal'
        this.goToShoppingCar = '#goShoppingCart'
    };
    
    selectProduct(products) {
        cy.get(`[value="${products}"]`).click();
        cy.get(this.closeModal).click();
    };

    clickGoShoppingCar() {
        cy.get(this.goToShoppingCar).click();
    };
}; 
