/// <reference types="cypress" />

describe("Sidebar", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should display the sidebar and toggle dark mode", () => {
        cy.get("[data-testid='sidebar']").should("be.visible");

        cy.get(".dark-mode")
            .click()
            .get(".app")
            .should("have.css", "background-color", "rgb(22, 22, 22)"); // Convert HEX to RGB
    });
});
