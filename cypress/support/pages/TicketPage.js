export class TicketPage {

    constructor() {
        this.thankYou = 'Thank you',
        this.ticketPurchase = '.css-11eac16'
    };

    returnTicketPurchase() {
        cy.get('div').find('.css-11eac16');
    };
    
    returnNameTicket(name) {
        return cy.get('div').find('.css-11eac16').contains(name);
    };

    returnProductTicket(product) {
        return cy.get('div').find('.css-11eac16').contains(product);
    };

    returnCardTicket(card) {
        return cy.get('div').find('.css-11eac16').contains(card);
    };

    returnTotalPriceTicket(total) {
        return cy.get('#totalPrice').contains(total);
    };

    thankYouButton() {
        cy.contains(this.thankYou).click();
    };
};