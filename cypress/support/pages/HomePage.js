export class HomePage {
    
    constructor() {
        this.onlineShopButton= "#onlineshoplink"
    };

    clickOnlineShop() {
        cy.get(this.onlineShopButton).click();
    };
};