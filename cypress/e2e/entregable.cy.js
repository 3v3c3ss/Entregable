/// <reference types="cypress" />

import { RegisterPage } from '../support/pages/RegisterPage';
import { LoginPage } from '../support/pages/LoginPages';
import { HomePage } from '../support/pages/HomePage';
import { ProductsPage } from '../support/pages/ProductsPage';
import { ShoppingCartPage } from '../support/pages/ShoppingCartPage';
import { CheckoutPage } from '../support/pages/CheckoutPage';
import { TicketPage } from '../support/pages/TicketPage';
const constantes = require('../support/constantes');

 describe('Entregable', () => {
  let loginData
  let products
  let checkoutData
  const registerPage = new RegisterPage();
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const productsPage = new ProductsPage();
  const shoppingCartPage = new ShoppingCartPage();
  const checkoutPage = new CheckoutPage();
  const ticketPage = new TicketPage();

  before('Before', () => {
      cy.fixture('loginData').then(data => {
         loginData = data
       });

       cy.fixture('products').then(data => {
        products = data
      });

      cy.fixture('checkoutData').then(data => {
        checkoutData = data
      });

  });

  beforeEach('Entregable1', () => {
      cy.visit('');
      registerPage.dblclickIniciaSesion();
      loginPage.typeUser(loginData.test1.user);
      loginPage.typePassword(loginData.test1.pass);
      loginPage.dblclickLogin();
      homePage.clickOnlineShop();
  });

  it('Prueba', () => {
      productsPage.selectProduct(products.products.product1.blackTshirt);
      productsPage.selectProduct(products.products.product2.whiteShoes);
      productsPage.clickGoShoppingCar();
      shoppingCartPage.returnProduct(products.products.product1.blackTshirt).should('have.text', products.products.product1.blackTshirt);
      shoppingCartPage.returnProductPrice(products.products.product1.blackTshirt).should('have.text', '$'+products.products.product1.price);
      shoppingCartPage.returnProduct(products.products.product2.whiteShoes).should('have.text', products.products.product2.whiteShoes);
      shoppingCartPage.returnProductPrice(products.products.product2.whiteShoes).should('have.text', '$'+products.products.product2.price);
      shoppingCartPage.clickShowTotalPrice();
      cy.get('#price').invoke('text').then(texto => { assert.equal(texto, (products.products.product1.price + products.products.product2.price))});
      shoppingCartPage.clickGoToCheckout();
      checkoutPage.typeFirstName(checkoutData.cliente.firstName);
      checkoutPage.typeLastName(checkoutData.cliente.lastName);
      checkoutPage.typeCardNumber(checkoutData.cliente.cardNumber);
      checkoutPage.clickPurchase();
      ticketPage.returnTicketPurchase();
      ticketPage.returnNameTicket(checkoutData.cliente.firstName + ' ' + checkoutData.cliente.lastName).should('have.text', checkoutData.cliente.firstName + ' ' + checkoutData.cliente.lastName + ' ' + 'has succesfully purchased the following items');
      ticketPage.returnProductTicket(products.products.product1.blackTshirt).should('have.text', products.products.product1.blackTshirt);
      ticketPage.returnProductTicket(products.products.product2.whiteShoes).should('have.text', products.products.product2.whiteShoes);
      ticketPage.returnCardTicket(checkoutData.cliente.cardNumber).should('have.text', checkoutData.cliente.cardNumber);
      ticketPage.returnTotalPriceTicket(products.products.product1.price + products.products.product2.price).should('have.text', 'You have spent $' +[products.products.product1.price + products.products.product2.price]);
      ticketPage.thankYouButton();
    });
      
});


