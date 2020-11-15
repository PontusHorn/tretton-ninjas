describe('Filters', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5000');
  });

  describe('When typing into the name filter', () => {
    it('should contain the filter input in each result name', () => {
      cy.get('[data-test="NameFilter"]').type('and');
      cy.get('[data-test="NinjaName"]').each((nameEl) => {
        cy.wrap(nameEl).contains('and', { matchCase: false }).should('exist');
      });
    });
  });

  describe('When selecting an office filter', () => {
    it('should have the selected office in each result', () => {
      cy.get('[data-test="OfficeFilter"]').select('Borlänge');
      cy.get('[data-test="NinjaOffice"]').each((officeEl) => {
        cy.wrap(officeEl).should('contain', 'Office: Borlänge');
      });
    });
  });
});
