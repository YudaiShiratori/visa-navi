describe("smoke tests", () => {
  it("should navigate to the home page", () => {
    cy.visit("/");
    cy.contains("ビザ情報を調べる");
  });

  it("should navigate to a region page", () => {
    cy.visit("/");
    cy.contains("アジア").click();
    cy.url().should("include", "/map/asia");
  });

  it("should search for a country", () => {
    cy.visit("/");
    cy.get('input[placeholder="国名で検索..."]').type("タイ");
    cy.contains("タイ").click();
    cy.url().should("include", "/map/country/thailand");
  });

  it("should show visa information", () => {
    cy.visit("/map/country/thailand");
    cy.contains("タイ");
    cy.contains("ビザ免除");
    cy.contains("30日間");
  });

  it("should navigate back to region", () => {
    cy.visit("/map/country/thailand");
    cy.contains("地域選択に戻る").click();
    cy.url().should("include", "/map/asia");
  });
});
