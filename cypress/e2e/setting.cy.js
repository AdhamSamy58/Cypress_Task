describe('User Settings', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.login('standard_user', 'secret_sauce');
  });

  it('should open and close the menu', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('.bm-menu-wrap').should('be.visible');
    cy.get('.bm-cross-button').click();
    cy.get('#profile-info').should('be.visible');
  });
});
