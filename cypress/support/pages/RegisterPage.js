export class RegisterPage {
    
    constructor() {
        this.iniciaSesionButton = "#registertoggle"
    };

    dblclickIniciaSesion() {
        cy.get(this.iniciaSesionButton).dblclick();
    };
};