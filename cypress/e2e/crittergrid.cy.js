describe("CritterGrid User Flows", () => {
  context("when the API call is successful", () => {
    beforeEach(() => {
      cy.intercept("GET", "https://acnhapi.com/v1a/bugs/", {
        statusCode: 200,
        fixture: "bugs.json",
      }).as("bugs");

      cy.intercept("GET", "https://acnhapi.com/v1a/fish/", {
        statusCode: 200,
        fixture: "fish.json",
      }).as("fish");

      cy.intercept("GET", "https://acnhapi.com/v1a/sea/", {
        statusCode: 200,
        fixture: "sea.json",
      }).as("sea");

      cy.visit("localhost:3000");
      cy.wait(["@bugs", "@fish", "@sea"])
    });

    it("should display critters", () => {
      cy.get(".critter-grid").find(".icon").should("have.length", 30);
    });

    it("should have a form", () => {
      cy.get(".critter-grid").find("Form").should("exist");
    });

    it("should have a default sort value", () => {
      cy.get(".critter-grid")
        .find("Form")
        .get(".form-sort")
        .should("have.value", "Default");
    });

    it("should toggle show missing", () => {
      cy.get(".critter-grid");
      cy.get("#Bugs1");
      cy.get("#Bugs1button").click();
      cy.get("#Bugs1").should("have.class", "fade");

      cy.get(".critter-grid")
        .find("Form")
        .get(".show-missing")
        .click()
        .should("be.checked");

      cy.get(".critter-grid");
      cy.get(".critter-grid").find(".icon").should("have.length", 29);
      cy.get(".critter-grid").find("#Bugs1").should("not.exist");
    });

    it("should toggle off show Bugs", () => {
      cy.get(".critter-grid")
        .find("Form")
        .get(".show-bugs")
        .click()
        .should("be.not.be.checked");

      cy.get(".critter-grid").find('Critters[type="Bugs"]').should("not.exist");
    });

    it("should toggle off show fish", () => {
      cy.get(".critter-grid")
        .find("Form")
        .get(".show-fish")
        .click()
        .should("be.not.be.checked");

      cy.get(".critter-grid").find('Critters[type="Fish"]').should("not.exist");
    });

    it("should toggle off show sea creatures", () => {
      cy.get(".critter-grid")
        .find("Form")
        .get(".show-sea")
        .click()
        .should("be.not.be.checked");

      cy.get(".critter-grid")
        .find('Critters[type="SeaCreatures"]')
        .should("not.exist");
    });
  });

  context("when the API call fails", () => {
    beforeEach(() => {
      cy.intercept("GET", "https://acnhapi.com/v1a/bugs/", {
        statusCode: 500,
      }).as("bugs");

      cy.intercept("GET", "https://acnhapi.com/v1a/fish/", {
        statusCode: 500,
      }).as("fish");

      cy.intercept("GET", "https://acnhapi.com/v1a/sea/", {
        statusCode: 500,
      }).as("sea");
      cy.visit("localhost:3000");
      cy.wait(["@bugs", "@fish", "@sea"]);
    });

    it("should redirect to the error page", () => {
      cy.url().should("include", "/error");
    });
  });
});
