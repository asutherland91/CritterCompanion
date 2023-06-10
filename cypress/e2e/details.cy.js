describe("Details User Flows", () => {
  context("when the API call is successful", () => {
    beforeEach(() => {
      cy.intercept("GET", "https://acnhapi.com/v1a/Bugs/1", {
        statusCode: 200,
        fixture: "commonButterfly.json",
      }).as("bugs1");
      cy.visit("localhost:3000/Bugs/1");
      cy.wait("@bugs1");
    });

    it("should navigate to the home page when the logo is clicked", () => {
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

      cy.get(".logo").click();
      cy.wait(["@bugs", "@fish", "@sea"])
      cy.location("pathname").should("eq", "/");
    });

    it("displays critter details when fetched successfully", () => {
      cy.get(".details-wrapper").should("exist");
      cy.get(".detail-name").should("contain.text", "Common Butterfly");
      cy.get(".detail-image").should(
        "have.attr",
        "src",
        "https://acnhapi.com/v1/images/bugs/1"
      );
      cy.get(".location").should("contain.text", "Location: Flying!");
      cy.get(".price").should("contain.text", "Price: 160 Bells!");
      cy.get(".rarity").should("contain.text", "Rarity: Common!");
      cy.get(".month").should(
        "contain.text",
        "Months found: September, October, November, December, January, February, March, April, May, June!"
      );
      cy.get(".time").should("contain.text", "Time found: 4am - 7pm");
      cy.get(".catch-phrase").should(
        "contain.text",
        "I caught a common butterfly! They often flutter by!"
      );
    });
  });

  context("when the API call fails", () => {
    beforeEach(() => {
      cy.intercept("GET", "https://acnhapi.com/v1a/Bugs/1", {
        statusCode: 500,
      }).as("critters");

      cy.visit("localhost:3000/Bugs/1");
      cy.wait("@critters");
    });

    it("should redirect to the error page", () => {
      cy.url().should("include", "/error");
    });
  });
});
