describe('Transactions (Cart)', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.login('standard_user', 'secret_sauce');
  });

  it('should add item to cart', () => {
    cy.get('.inventory_item').first().contains('Add to cart').click();
    cy.get('.shopping_cart_badge').should('contain', '1');
  });

  it('should view cart and remove item', () => {
    cy.get('.inventory_item').first().contains('Add to cart').click();
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
    cy.get('.cart_item').should('have.length', 1);
    cy.contains('Remove').click();
    cy.get('.cart_item').should('not.exist');
  });
});
