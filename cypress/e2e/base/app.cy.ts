/// <reference types="cypress" />

describe("App", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Should render the app", () => {
        cy.get("[data-testid='app']").should("exist");
    });
});
