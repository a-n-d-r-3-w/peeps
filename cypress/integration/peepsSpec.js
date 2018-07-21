it('Add person', function() {
  cy.visit('/');
  cy.get('[data-test-id="add-person"]').click();
});
