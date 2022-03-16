/// <reference types="cypress" />
describe("Est-ce que le chrono marche bien ?",() => {
    it("visits the app root url", () => {
        cy.visit("/");
        cy.get('#minute').contains('0');
        cy.get('#seconde').contains('0');
    });

    it("Start the chronos", () => {
        cy.visit("/");
        cy.get('#btn-start').click();
        cy.get('#seconde').should('not.have.value', '0');
    })
})