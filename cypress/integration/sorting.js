const { _ } = Cypress;

describe('Sorting', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5000');
  });

  describe('When selecting the name sort mode', () => {
    it('should sort all results by name', () => {
      cy.get('[data-test="SortMode"]').select('Name');
      cy.get('[data-test="NinjaName"]')
        .then((nameEls) => nameEls.map((nameEl) => nameEl.textContent))
        .then((names) => {
          const sortedNames = names.sort((a, b) => a.localeCompare(b));
          expect(
            names,
            'results are sorted by name in ascending alphabetic order',
          ).to.deep.equal(sortedNames);
        });
    });
  });

  describe('When selecting the office sort mode', () => {
    it('should sort all results by office', () => {
      cy.get('[data-test="SortMode"]').select('Office');
      cy.get('[data-test="NinjaOffice"]')
        .then((officeEls) => officeEls.map((officeEl) => officeEl.textContent))
        .then((offices) => {
          const sortedOffices = offices.sort((a, b) => a.localeCompare(b));
          expect(
            offices,
            'results are sorted by office in ascending alphabetic order',
          ).to.deep.equal(sortedOffices);
        });
    });
  });
});
