describe("ErrorPage", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://acnhapi.com/v1a/bugs/", {
      statusCode: 500,
    });

    cy.intercept("GET", "https://acnhapi.com/v1a/fish/", {
      statusCode: 500,
    });

    cy.intercept("GET", "https://acnhapi.com/v1a/sea/", {
      statusCode: 500,
    });
    cy.visit("localhost:3000");
  });

  it("should display the error message correctly", () => {
    cy.get("h2").should(
      "contain",
      "An error has occured while we were trying to retrive your critters. Please try again, yes."
    );
  });

  it("should navigate to the home page when the 'Try Again' link is clicked", () => {
    cy.intercept("GET", "https://acnhapi.com/v1a/bugs/", {
      statusCode: 200,
      fixture: "bugs.json",
    });
    cy.intercept("GET", "https://acnhapi.com/v1a/fish/", {
      statusCode: 200,
      fixture: "fish.json",
    });
    cy.intercept("GET", "https://acnhapi.com/v1a/sea/", {
      statusCode: 200,
      fixture: "sea.json",
    });

    cy.get(".go-home").click();

    cy.location("pathname").should("eq", "/");
  });
});
