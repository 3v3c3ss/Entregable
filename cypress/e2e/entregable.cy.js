/// <reference types="cypress" />

import { RegisterPage } from '../support/pages/RegisterPage';
import { LoginPage } from '../support/pages/LoginPages';
import { HomePage } from '../support/pages/HomePage';
import { ProductsPage } from '../support/pages/ProductsPage';
import { ShoppingCartPage } from '../support/pages/ShoppingCartPage';

 describe('Entregable', () => {
  let loginData
  let products
  const registerPage = new RegisterPage();
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const productsPage = new ProductsPage();
  const shoppingCartPage = new ShoppingCartPage();
   

  before('Before', () => {
      cy.fixture('loginData').then(data => {
         loginData = data
       });

       cy.fixture('products').then(data => {
        products = data
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
      cy.get('#price').invoke('text').then(texto => { assert.equal(texto, (products.products.product1.price + products.products.product2.price))
      });

    });
      
});


